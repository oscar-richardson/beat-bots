//-----------------------------------------------------------------------------------------------

(function()
{
    "use strict";

    //	Beablib aliases.
    var	Game				=	beablib.Game;

    //-----------------------------------------------------------------------------------------------
    //	Public static members.
    //-----------------------------------------------------------------------------------------------

    var PatchStage3D = function(stage, cullFace, frontFace)
    {
        // Does the stage support WebGL?
        if(stage.type !== 1){
            // Nope, so bail negatively.
            return false;
        }

        //	Add 3D ortho projection matrix stuff.
        if(stage.rootRenderTarget != undefined)
        {
            stage.rootRenderTarget.projectionMatrix3D = new Matrix4();
        }

        stage.SetProjMatrix3D	=	function(render_target, shader)
        {
            if(render_target.projectionMatrix3D && shader.uniforms.projectionMatrix3D)
            {
                shader.uniforms.projectionMatrix3D = render_target.projectionMatrix3D.Mat4;
            }
        };

        //	Monkey patch in some 3D projection bits.
        stage.Patch3D	=	{
                                bindRenderTarget:	stage.bindRenderTarget,
                                bindShader:			stage.bindShader
                            };

        stage.bindRenderTarget	=	function bindRenderTarget(renderTarget)
        {
            var update_projection = (this._activeRenderTarget !== renderTarget);

            //	Call the original function...
            this.Patch3D.bindRenderTarget.call( this, renderTarget );

            //	...now do our local stuff.
            if (update_projection && this._activeShader) { this.SetProjMatrix3D(this._activeRenderTarget,this._activeShader); }

            return this;
        };

        stage.bindShader		=	function(shader, autoProject)
        {
            var update_projection = (this._activeShader !== shader && autoProject !== false);

            //	Call the original function...
            this.Patch3D.bindShader.call( this, shader, autoProject );

            //	...now do our local stuff.
            if (update_projection) { this.SetProjMatrix3D(this._activeRenderTarget,this._activeShader); }

            return this;
        };

        stage.ResizeCallback    =   function(width, height)
        {
            //	Maybe update the 3D projection matrix stuff.
            if(stage.rootRenderTarget)
            {
                stage.rootRenderTarget.projectionMatrix3D.SetOrthoProjection(width, height, 1000);
                if(stage._activeRenderTarget === stage.rootRenderTarget && stage._activeShader)
                {
                    stage.SetProjMatrix3D(stage._activeRenderTarget, stage._activeShader);
                }
            }
        }

        // Set the front face and culling.
        stage.state.setCullFace(cullFace);
        stage.state.setFrontFace(frontFace);

        // Return positively.
        return true;
    };

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.PatchStage3D =   PatchStage3D;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
