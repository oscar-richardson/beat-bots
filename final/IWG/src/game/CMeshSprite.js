//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	var DEGS_TO_RADS 	=	0.017453;

	//-----------------------------------------------------------------------------------------------
	//	Private statics.
	//-----------------------------------------------------------------------------------------------

	//	Beablib object aliases.
	var	Game		=	beablib.Game,
		Renderer	=	beablib.Renderer;

	//-----------------------------------------------------------------------------------------------
	//	Object definition.
	//-----------------------------------------------------------------------------------------------

	var CMeshSprite	=	function(sprite_sheet, sprite_ref, verts, uvs, indices, parms)
	{
		// Make a note of the sprite frame...
		var	animation	=	sprite_sheet.getAnimation( sprite_ref );
		var	the_frame	=	sprite_sheet._frames[ animation.frames[ 0 ] ];

		// ...and map the UVs into "the_frame" space.
		var	mapped_uvs	 = new Float32Array( uvs ),
			l = the_frame._uvs.x0,
			t = the_frame._uvs.y0,
			r = the_frame._uvs.x2,
			b = the_frame._uvs.y2,
			max_u = r-l,
			max_v = b-t;

		for(var c0 = 0; c0 < mapped_uvs.length/2; c0++)
		{
			var x_index = (c0*2)+0,
				y_index = (c0*2)+1;

			mapped_uvs[x_index] = l + (mapped_uvs[x_index]*max_u);
			mapped_uvs[y_index] = t + (mapped_uvs[y_index]*max_v);
		}

		// Create the mesh sprite.
		this.MeshSprite	= new PIXI.mesh.Mesh( the_frame, new Float32Array( verts ), mapped_uvs, new Uint16Array( indices ) );
		this.MeshSprite.pluginName = "mesh3D";

		// Patch in additional 3D transform functionality.
		var transform	=	this.MeshSprite.transform;

		transform.Patch3D			=	{
											scratchTrans:		new Matrix4(),
											rotXMat:			new Matrix4(),
											rotYMat:			new Matrix4(),
											rotZMat:			new Matrix4(),
											rotMat:				new Matrix4(),
											rotation:			glMatrix.quat.create(),
											scaleMat:			new Matrix4(),
											transMat:			new Matrix4(),
											localTransform3D:	new Matrix4(),
											worldTransform3D:	new Matrix4(),
											updateRotation:		false,
											updateTransform:	transform.updateTransform
										};
		transform.SetRotationXYZ	=	function( x,y,z )
		{
			var patch = this.Patch3D;

			glMatrix.quat.fromEuler(patch.rotation, x, y, z );
			patch.updateRotation = true;
		};
		transform.SetRotation	=	function( quat )
		{
			var patch = this.Patch3D;

			glMatrix.quat.copy(patch.rotation, quat );
			patch.updateRotation = true;
		};
		transform.updateTransform = function(parentTransform)
		{
			var patch = this.Patch3D;
			var update_rotation = patch.updateRotation;

			if(update_rotation)
			{
				glMatrix.mat4.fromQuat(patch.rotMat.Mat4, patch.rotation);
				patch.updateRotation = false;
			}

			var update_matrix = (transform._localID !== transform._currentLocalID) || (transform._parentID !== parentTransform._worldID);
			this.Patch3D.updateTransform.call( this, parentTransform );

			if(update_matrix||update_rotation)
			{
				var rot = patch.rotMat,
					scale = patch.scaleMat,
					trans = patch.transMat;

				Matrix4.Scaling( transform.scale.x, transform.scale.y, 1, scale );
				Matrix4.Translation( transform.position.x, transform.position.y, 0, trans );
				Matrix4.Multiply( scale, rot, patch.localTransform3D );
				Matrix4.Multiply( trans, patch.localTransform3D, patch.localTransform3D );

				var scratch = patch.scratchTrans;

//				scratch.Set( parentTransform.scale.x, 0, 0, 0, 0, parentTransform.scale.y, 0, 0, 0, 0, 1, 0, parentTransform.worldTransform.tx, parentTransform.worldTransform.ty, 0, 1 );
				scratch.Set( parentTransform.worldTransform.a, parentTransform.worldTransform.b, 0, 0, parentTransform.worldTransform.c, parentTransform.worldTransform.d, 0, 0, 0, 0, 1, 0, parentTransform.worldTransform.tx, parentTransform.worldTransform.ty, 0, 1 );

				Matrix4.Multiply( scratch, patch.localTransform3D, patch.worldTransform3D );
			}
		};

		Object.defineProperty(this.MeshSprite, "worldTransform3D", { get: function(){ return this.transform.Patch3D.worldTransform3D.Mat4; } } );

		if(parms!==undefined)
		{
			this.MeshSprite.SetProps(parms);
		}

		return	this.MeshSprite;
	};

	//-----------------------------------------------------------------------------------------------
	//	Public.
	//-----------------------------------------------------------------------------------------------

	//-----------------------------------------------------------------------------------------------
	//	Statics.
	//-----------------------------------------------------------------------------------------------

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	Game.CMeshSprite	=	CMeshSprite;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------

