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
	var	Game		=	beablib.Game,
		Renderer	=	beablib.Renderer;

	//-----------------------------------------------------------------------------------------------
	//	Object definition.
	//-----------------------------------------------------------------------------------------------

	var CBackground	=	function( stage )
	{
		//	Make a note of the stage.
		CBackground.Stage		=	stage;

		//	Create the background sprite...
		this.Background			=	Renderer.CreateSprite( Game.DeepSeaSheet, "BG" );
		this.Background.SrcWidth	=	this.Background.width;
		this.Background.SrcHeight	=	this.Background.height;

		//	...& add it to the stage.
		CBackground.Stage.addChild( this.Background );

		//	Make sure we're repositionable.
		beablib.SetRepositionable( this );
	};

	//-----------------------------------------------------------------------------------------------
	//	Public.
	//-----------------------------------------------------------------------------------------------

	CBackground.prototype.Reposition		=	function( scale )
	{
		//this.Background.SetPosition( CBackground.Stage.View.HalfWidth, CBackground.Stage.View.HalfHeight );
		//this.Background.SetScale( scale );

		var xScale = beablib.MainView.Width / this.Background.SrcWidth;
		var yScale = beablib.MainView.Height / this.Background.SrcHeight;
		this.Background.SetPosition( CBackground.Stage.View.HalfWidth, CBackground.Stage.View.HalfHeight );
		this.Background.SetScale( Math.max(xScale, yScale) );

		CBackground.Stage.SetDirty();
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

