//-----------------------------------------------------------------------------------------------

(function()
{
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	Const-ish.
    //-----------------------------------------------------------------------------------------------

    var DEGS_TO_RADS 		    =	0.017453;

    //-----------------------------------------------------------------------------------------------
    //	Private static data.
    //-----------------------------------------------------------------------------------------------

    // Beablib object aliases.
    var Game			=	beablib.Game;

    //	glMatrix aliases.
    var Mat4    		=	glMatrix.mat4,
        Quat    		=	glMatrix.quat,
        Vec2    		=	glMatrix.vec2,
        Vec3    		=	glMatrix.vec3;

    //	Game object aliases.
    var CMeshSprite		=	Game.CMeshSprite;

    //	Game data.
    var	QuatIdentity =	Quat.create();
    var	Vec2Scratch =	Vec2.create();
    var	Vec3Scratch =	Vec3.create();

    //-----------------------------------------------------------------------------------------------
    //	Private static members.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    var CCube3D			=	function(sprite, offset, x_scale)
    {
        // Create the mesh geometry.
        var faceIndices = [0,1,2,1,3,2];
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

                for(var c0 = 0; c0 < 4; c0++){
                    var vx = c0 & 1 ? 1.0 : -1.0;
                    var vy = c0 & 2 ? 1.0 : -1.0;
                    var u = c0 & 1 ? 1.0 : 0;
                    var v = c0 & 2 ? 1.0 : 0;

                    Vec3.set(Vec3Scratch, vx * x_scale, vy, 1, 0);

                    Vec3.transformMat4(Vec3Scratch, Vec3Scratch, ori);

                    add_vert(Vec3Scratch);
                    add_uv(u, v);
                }

                var indexBaseID = faceCount*4;

                //	Copy the indices.
                for(var c0 = 0; c0<faceIndices.length; c0++ )
                {
                    indices.push( faceIndices[c0]+indexBaseID );
                }
                faceCount++;
            };

        //	Add the 6 faces.
        add_face(0,0,0);
        add_face(90,0,0);
        add_face(180,0,0);
        add_face(270,0,0);
        // add_face(0,90,0);
        // add_face(0,180,0);

        // Create the cube mesh sprite...
//        this.CubeSprite	= new CMeshSprite( Game.BallSheet, "n"+ball_id, verts, uvs, indices, {scale:25} );
        this.CubeSprite	= new CMeshSprite( Game.TwisterSheet, sprite, verts, uvs, indices, {position:offset, scale:233} );

        // ...and tell it to draw as triangles, not triangle strips.
        this.CubeSprite.drawMode = PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES;

//		this.FaceSprite	= new CMeshSprite( Game.BallSheet, "n"+ball_id, verts, uvs, indices, {scale:25} );
//		this.FaceSprite	= new CMeshSprite( Game.TwisterSheet, "Panel_Centre", verts, uvs, indices, {scale:25} );

        // Rotation info.
        this.RotScratch = Quat.create();

        this.SpinAxis = Vec3.create();
        Vec3.set(this.SpinAxis, 1, 0, 0);
        this.RotSpeed = -60;

        this.RotAngle = 0;
    };

    //-----------------------------------------------------------------------------------------------
    //	Public.
    //-----------------------------------------------------------------------------------------------

    CCube3D.prototype.DoRotation = function(delta) {
        var transform = this.CubeSprite.transform;
        var patch = transform.Patch3D;
        var rotation = patch.rotation;

        //	Spin.
        Quat.setAxisAngle(this.RotScratch, this.SpinAxis, this.RotSpeed * DEGS_TO_RADS * delta);
        Quat.mul(rotation, this.RotScratch, rotation);

        patch.updateRotation = true;
    };

    //-----------------------------------------------------------------------------------------------

    CCube3D.prototype.SetRotation = function(delta) {
        var transform = this.CubeSprite.transform;
        var patch = transform.Patch3D;
        var rotation = patch.rotation;

        //	Spin.
        Quat.setAxisAngle(this.RotScratch, this.SpinAxis, -this.RotAngle * DEGS_TO_RADS);
        Quat.mul(rotation, this.RotScratch, QuatIdentity);

        patch.updateRotation = true;
    };

    //-----------------------------------------------------------------------------------------------
    //	Statics.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CCube3D	=	CCube3D;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------

