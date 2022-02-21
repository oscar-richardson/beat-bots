//-----------------------------------------------------------------------------------------------

(function()
{
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	Private static data.
    //-----------------------------------------------------------------------------------------------

    var Game			=	ProjectX.Game;		//	Game object shortcut.

    var	TheStage		=	null;

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    var	Background	=	function( stage )
    {
        TheStage	=	stage;

        //	Create the main background image...
        this.Background			=	new	createjs.Sprite( Game.BackgroundSheet, "Background" );

        this.GUIDE              =   new	createjs.Sprite( Game.BackgroundSheet, "ActiveGUIDE" );
        this.GUIDE.alpha = 0;

        //	...& add it to the stage.
        TheStage.addChild( this.Background, this.GUIDE );

        //	Make sure we're repositionable.
        ProjectX.SetRepositionable( this );
    };

    //-----------------------------------------------------------------------------------------------
    //	Public.
    //-----------------------------------------------------------------------------------------------

    Background.prototype.Reposition		=	function()
    {
        var scale	=	ProjectX.MainView.ScaleFactor;

        this.Background.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
        this.Background.SetScale( scale );

        this.GUIDE.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
        this.GUIDE.SetScale( scale );

        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.Background		=	Background;
}());

//-----------------------------------------------------------------------------------------------
