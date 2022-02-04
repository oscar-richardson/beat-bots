//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	var BS_NORMAL			=	0,
		BS_PICK				=	1,
		BS_PICKED			=	2;


	var DEGS_TO_RADS 		=	0.017453;
	var BALL_RADIUS			=	24;			//	Half the width of the ball sprite.
	var BALL_CIRCUMFERENCE	=	2*Math.PI*BALL_RADIUS;

	//-----------------------------------------------------------------------------------------------
	//	Private statics.
	//-----------------------------------------------------------------------------------------------

	//	Inchlib object aliases.
	var	Game		=	inchlib.Game,
		Renderer	=	inchlib.Renderer;

	//	glMatrix aliases.
	var Mat4		=	glMatrix.mat4,
		Quat		=	glMatrix.quat,
		Vec2		=	glMatrix.vec2,
		Vec3		=	glMatrix.vec3;

	//	Game object aliases.
	var CBallSpinner	=	Game.CBallSpinner,
		CMeshSprite		=	Game.CMeshSprite;

	//	Game data.
	var TheStage	=	null;
	var	Vec2Scratch =	Vec2.create();
	var	Vec3Scratch =	Vec3.create();

	//-----------------------------------------------------------------------------------------------
	//	Object definition.
	//-----------------------------------------------------------------------------------------------

	var CBall	=	function( parent, pos, spinnerRadius, ballID )
	{
		CBallSpinner	=	Game.CBallSpinner;

		this.Parent = parent;
		this.Container = Renderer.CreateContainer( {position:pos,parent:parent} );

		this.BallID = ballID;
		this.BallDistToTarget = 20;
		this.BallDestSlot = -1;
		this.BallPickStage = 0;
		this.BallSlotNormal = Vec2.create();
		this.BallSlotTarget = Vec2.create();
		this.BallState = BS_NORMAL;
		this.BallTarget = Vec2.create();
		this.ContactNormal = Vec2.create();
		this.DirectionNormal = Vec2.create();
		this.Position = Vec2.fromValues(pos.X, pos.Y);
		this.Force = Vec2.fromValues(0, 0);
		this.Torque = Vec2.fromValues(0, 0);
		this.AngularVelocity = Vec2.fromValues(0, 0);
		this.Velocity = Vec2.fromValues(0, 0);
		this.SpinnerRadius = spinnerRadius;
		this.SpinnerRadiusSqr = this.SpinnerRadius*this.SpinnerRadius;

		Object.defineProperty( this.Position, "X", { get: function() {return this[0];}, set: function(v){this[0]=v;}} );
		Object.defineProperty( this.Position, "Y", { get: function() {return this[1];}, set: function(v){this[1]=v;}} );

		var faceIndices = [1,2,0,3,4,4,0,5,6,6,0,1,1,1];

		var indices	=	[],
			verts	=	[],
			uvs		=	[];

		var faceCount = 0,
			add_vert	=	function(vec)	{verts.push(vec[0], vec[1], vec[2]);},
			add_uv		=	function(u, v)	{uvs.push(u, v);},
			add_face	=	function(x,y,z)
			{
				var rotAxis = glMatrix.vec4.fromValues(x, y, z, 1);
				var ori = Mat4.create();
				var rot = Quat.create();

				Quat.fromEuler(rot,x,y,z);

				Mat4.fromQuat(ori,rot);


				var numPts	=	6;
				var	angleXRads = 45*DEGS_TO_RADS;
				var	angleStepZ = 360/numPts;
				var startVec = Vec3.fromValues(0, -Math.sin(angleXRads), Math.cos(angleXRads));
				var zRot = Mat4.create();

				Vec3.set(Vec3Scratch, 0, 0, 1, 0);
				Vec3.transformMat4(Vec3Scratch, Vec3Scratch, ori);

				add_vert(Vec3Scratch);
				add_uv(0.5, 0.5);

				for(var c0=0; c0<numPts; c0++)
				{
					var angleRadsZ = c0 * angleStepZ * DEGS_TO_RADS;
					var s = Math.sin(angleRadsZ);
					var c = Math.cos(angleRadsZ);

					Mat4.fromZRotation(zRot,angleRadsZ);
					Vec3.transformMat4(Vec3Scratch, startVec, zRot);
					Vec3.transformMat4(Vec3Scratch, Vec3Scratch, ori);

					add_vert(Vec3Scratch);
					add_uv(0.5+(s*0.7), 0.5+(-c*0.7));
				}

				var indexBaseID = faceCount*7;

				//	Copy the indices.
				for(var c0 = 0; c0<faceIndices.length; c0++ )
				{
					indices.push( faceIndices[c0]+indexBaseID );
				}
				faceCount++;
			};

		//	Add the 8 faces.
		add_face(0,0,0);
		add_face(0,90,0);
		add_face(0,180,0);
		add_face(0,270,0);
		add_face(90,0,0);
		add_face(270,0,0);

//		this.MeshSprite	= new CMeshSprite( Game.BallSheet, "Star", verts, uvs, indices, {scale:24} );
		this.MeshSprite	= new CMeshSprite( Game.BallSheet, "n"+ballID, verts, uvs, indices, {scale:25} );
		this.BallSprite = Renderer.CreateSprite( Game.BallSheet, CBall.GetBallColour(ballID) );

		this.Container.addChild(this.BallSprite,this.MeshSprite);

		this.Rotation =	Quat.create(); //{X:0, Y:0, Z:0};
		this.RotAmt =	Quat.create();
		this.RotScratch = Quat.create();
		Quat.fromEuler(this.RotAmt,180,0,0);

		this.RotAxis = Vec3.create();
		this.SpinAxis = Vec3.create();
		this.RotSpeed = 0;

		var transform = this.MeshSprite.transform;
		var patch = transform.IL_Patch;

		Quat.random(patch.rotation);
		patch.updateRotation = true;
	};

	//-----------------------------------------------------------------------------------------------
	//	Public.
	//-----------------------------------------------------------------------------------------------

	CBall.prototype.ConstrainToCircle	=	function(center, radius)
	{
		//	Relative to center.
		Vec2.subtract(Vec2Scratch, this.Position, center );

		if(Vec2.squaredLength(Vec2Scratch) > (radius*radius))
		{
			var speed = Vec2.length(this.Velocity);

			//	Yep, so work out the contact normal...
//			Vec2.normalize(this.ContactNormal, this.Position);
			Vec2.normalize(this.ContactNormal, Vec2Scratch);

			//	...constrain the position...
			Vec2.scale(this.Position, this.ContactNormal, radius);
			Vec2.add(this.Position, this.Position, center);

			//	...and bounce the ball.
			var dot = Vec2.dot(this.ContactNormal, this.Velocity);
			Vec2.scale(this.ContactNormal, this.ContactNormal, dot*-2 );
			Vec2.add(this.Velocity, this.Velocity, this.ContactNormal);

			//	Set the rotation axis...
			Vec2.cross(this.SpinAxis, this.ContactNormal, this.Velocity);
			Vec3.normalize(this.SpinAxis, this.SpinAxis);

			//	...a random rotation to emphasise the impact...
			// Quat.random(patch.rotation);

			//	...and the rotation speed.
			this.RotSpeed	+=	100 * 100 * (speed/BALL_CIRCUMFERENCE);
		}
	};

	//-----------------------------------------------------------------------------------------------

	CBall.prototype.ConstrainToSlot = function()
	{

	};

	//-----------------------------------------------------------------------------------------------

	CBall.prototype.Process		=	function(dt, forceFunc)
	{
		var transform = this.MeshSprite.transform;
		var patch = transform.IL_Patch;
		var rotation = patch.rotation;

		//	Spin.
		Quat.setAxisAngle(this.RotScratch, this.SpinAxis, this.RotSpeed*DEGS_TO_RADS*dt );
		Quat.mul(rotation, this.RotScratch, rotation);

		//	Roll.
		var speed = Vec2.length(this.Velocity)/BALL_RADIUS;

		if(speed!==0)
		{
			Vec3.cross(this.SpinAxis, [0,0,1], [this.Velocity[0], this.Velocity[1], 0]);
			Vec3.normalize(this.SpinAxis, this.SpinAxis);

			Quat.setAxisAngle(this.RotScratch, this.SpinAxis, speed );
			Quat.mul(rotation, this.RotScratch, rotation);
		}

		patch.updateRotation = true;

		//	Apply velocity to position.
		Vec2.add(this.Position, this.Position, this.Velocity);
		Vec2.scale(this.Velocity, this.Velocity, 0.994);
		this.RotSpeed *= 0.99;

		switch(this.BallState)
		{
			case	BS_NORMAL:
			{
				//	Make sure the ball stays inside the drum.
				this.ConstrainToCircle(this.BallTarget, this.SpinnerRadius);

				//	Update the force...
				forceFunc(this.Position, this.Force, dt, this.BallID);

				//	...and add it to the velocity.
				Vec2.add(this.Velocity, this.Velocity, this.Force);
				break;
			}
		}

		//	Set the new position.
		this.Container.SetPosition(this.Position[0], this.Position[1]);
	};

	//-----------------------------------------------------------------------------------------------

	CBall.prototype.PickBall	=	function(target, slot)
	{
		var ballDone = function()
		{
			this.BallState = BS_PICKED;
			Game.BallInSlot( this, this.BallDestSlot );
		}.bind(this);

		Vec2.copy(this.BallTarget, target);
		Vec2.copy(this.BallSlotNormal, target);
		Vec2.normalize(this.BallSlotNormal, this.BallSlotNormal);

		Vec2.copy(Vec2Scratch, this.BallSlotNormal);
		Vec2.scale(Vec2Scratch, Vec2Scratch, -200 );
		Vec2.copy(this.Position, this.BallTarget);
		Vec2.add(this.Position, this.Position, Vec2Scratch);

		Vec2.copy(this.Velocity, this.BallSlotNormal);
		Vec2.scale(this.Velocity, this.Velocity, 1 );

		Vec2.set(this.Velocity, 0, 0 );
		TweenMax.to([this.Position], 0.8, {ease: Bounce.easeOut, X:this.BallTarget[0],Y:this.BallTarget[1], onComplete:ballDone});

		this.BallPickStage = 0;
		this.BallDestSlot = slot;
		this.BallState = BS_PICK;
	};

	//-----------------------------------------------------------------------------------------------
	//	Statics.
	//-----------------------------------------------------------------------------------------------

	CBall.GetBallColour		=	function( ball_number )
	{
		var	ball_colour	=	"ball_purple";

		if( ball_number <= 9 )			{	ball_colour = "ball_white";		}
		else if( ball_number <= 19 )	{	ball_colour = "ball_blue";		}
		else if( ball_number <= 29 )	{	ball_colour = "ball_pink";		}
		else if( ball_number <= 39 )	{	ball_colour = "ball_green";		}
		else if( ball_number <= 49 )	{	ball_colour = "ball_yellow";	}

		return	ball_colour;
	};

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	Game.CBall	=	CBall;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------

