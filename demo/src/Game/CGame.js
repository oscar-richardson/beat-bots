//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	//	Canvas sizes.
	var	BACK_CANVAS_HEIGHT		=	768,
		BACK_CANVAS_WIDTH		=	1136,
		GAME_CANVAS_HEIGHT		=	768,
		GAME_CANVAS_WIDTH		=	1136,
		GUI_CANVAS_HEIGHT		=	768,
		GUI_CANVAS_WIDTH		=	1136;

	// -----------------------------------------------------------------------------------------------
	//	Private static data.
	// -----------------------------------------------------------------------------------------------

	var Game				=	ProjectX.Game;		//	Shortcut to Game module.

    var MobileDevice,
        FirstTap 			= true,

		TheBackground,
        TheRobots,
        TheGUI;



		//-----------------------------------------------------------------------------------------------
	//	Override ProjectX.Game's base functions.

	Game.Init				=	function()
	{
		console.log( "Game::Init::Enter" );


        Game.BackgroundSheet		=	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.BackgroundSS );



		//	Create our game's canvases & stages.

		Game.GameCanvas			=	ProjectX.CreateCanvas( {id:"GameCanvas", zIndex:4, position:"fixed", AddToParent:true });
		Game.GUICanvas			=	ProjectX.CreateCanvas( {id:"GUICanvas", zIndex:10, position:"fixed", AddToParent:true });

		Game.BackgroundStage	=	ProjectX.CreateStage( ProjectX.GetBaseCanvasName(), {width:BACK_CANVAS_WIDTH, height:BACK_CANVAS_HEIGHT, anchor_h:"centre", anchor_v:"centre", clamp:true} );
		Game.GameStage			=	ProjectX.CreateStage( "GameCanvas",	{width:GAME_CANVAS_WIDTH, height:GAME_CANVAS_HEIGHT, anchor_h:"centre", anchor_v:"centre"} );
		Game.GUIStage			=	ProjectX.CreateStage( "GUICanvas",	{width:GUI_CANVAS_WIDTH, height:GUI_CANVAS_HEIGHT, anchor_h:"centre", anchor_v:"centre", clamp:true, touch:true} );

		//	Create the game's components...
		TheBackground			=	new	Game.Background( Game.BackgroundStage );

        TheRobots			=   new	Game.CRobots( Game.GameStage );
        TheGUI				=   new	Game.CGUI( Game.GUIStage );


		//	Set the tick handler going.
		ProjectX.TweenHandler.Enable(true);

		//	Make sure we can click on stuff.
		Game.GUICanvas.EnablePointerEvents( true );
		Game.GUIStage.nextStage		=	Game.GameStage;

        //if(MobileDevice == undefined){

			//TweenMax.delayedCall( 1, function(){ createjs.Sound.play( "Bees", {loop:9999} ); });

        //}


		//	All done.
		console.log( "Game::Init::Exit" );
	};

	//-----------------------------------------------------------------------------------------------
	//	Public.
	//-----------------------------------------------------------------------------------------------


    //-----------------------------------------------------------------------------------------------

    Game.RobotClicked				=	function( number )
    {

        TheRobots.RobotClicked( number );

        console.log("Game.RobotClicked :: " + number );

    };

    //-----------------------------------------------------------------------------------------------

    Game.InitRobots				=	function(  )
    {

        TheRobots.InitRobots(  );

    };


	//-----------------------------------------------------------------------------------------------

}());

//-----------------------------------------------------------------------------------------------

