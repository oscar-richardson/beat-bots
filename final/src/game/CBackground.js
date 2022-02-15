//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	//-----------------------------------------------------------------------------------------------
	//	Private statics.
	//-----------------------------------------------------------------------------------------------

	//	Beablib object aliases.
	// var Game		=	ProjectX.Game;
	var	Game		=	beablib.Game,
		Renderer	=	beablib.Renderer;

	var	TheStage		=	null;

	//-----------------------------------------------------------------------------------------------
	//	Object definition.
	//-----------------------------------------------------------------------------------------------

	var CBackground	=	function( stage )
	{
		//	Make a note of the stage.
		TheStage	=	stage;

		//	Create the background sprite...
		// this.Background			=	new	createjs.Sprite( Game.BackgroundSheet, "Background" );
		this.Background			=	Renderer.CreateSprite( Game.BackgroundSheet, "Background" );
		// this.GUIDE              =   new	createjs.Sprite( Game.BackgroundSheet, "ActiveGUIDE" );
		this.GUIDE			=	Renderer.CreateSprite( Game.BackgroundSheet, "ActiveGUIDE" );
		this.GUIDE.alpha = 0;

		//this.Background.SrcWidth	=	this.Background.width;
		//this.Background.SrcHeight	=	this.Background.height;

		//	...& add it to the stage.
		// TheStage.addChild( this.Background, this.GUIDE );
		TheStage.addChild( this.Background );
        TheStage.addChild( this.GUIDE );

		//	Make sure we're repositionable.
		// ProjectX.SetRepositionable( this );
		beablib.SetRepositionable( this );
	};

	//-----------------------------------------------------------------------------------------------
	//	Public.
	//-----------------------------------------------------------------------------------------------

	CBackground.prototype.Reposition		=	function( scale )
	{
		// var scale	=	ProjectX.MainView.ScaleFactor;

        this.Background.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
        this.Background.SetScale( scale );

        this.GUIDE.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
        this.GUIDE.SetScale( scale );

        TheStage.SetDirty();
	};

	//-----------------------------------------------------------------------------------------------
	//	Statics.
	//-----------------------------------------------------------------------------------------------

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	Game.CBackground	=	CBackground;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------

