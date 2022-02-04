//-----------------------------------------------------------------------------------------------

(function() {
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	Const-ish.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Private statics.
    //-----------------------------------------------------------------------------------------------

    //	Beablib object aliases.
    var	Game			=	beablib.Game,
        Renderer		=	beablib.Renderer;

    //	glMatrix aliases.
    var Mat4			=	glMatrix.mat4,
        Quat			=	glMatrix.quat,
        Vec2			=	glMatrix.vec2,
        Vec3			=	glMatrix.vec3;

    //	Game data.
    var TheStage		=	null,
        TheView			=	null;

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    var CBallTest = function (stage, pos, numBalls) {
        TheStage = stage;
        TheView = TheStage.View;
    }

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CBallTest	=	CBallTest;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------

