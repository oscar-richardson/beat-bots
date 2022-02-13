//-----------------------------------------------------------------------------------------------

(function() {
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

    //-----------------------------------------------------------------------------------------------
    //	Main variables.
    //-----------------------------------------------------------------------------------------------

    // Beablib alias.
    // var Game				=	ProjectX.Game;
    var Game = beablib.Game,
        Renderer = beablib.Renderer;

    //	Game aliases.
    var CCube3D = Game.CCube3D;

    var MobileDevice,
        FirstTap 			= true;

    var TheBackground,
        // TheButton = {},
        // TheGlobe = {},
        // TheScrabbleDemo1 = {},
        // TheScrabbleDemo2 = {},
        // TheDiceTest = {},
        // TheTwistTest = {},
        // TheSpinner = {},
        // TheTronAnims = {},
        // TheDeepSea = {},
        // TheTicket = {},
        TheRobots,
        TheGUI;

    //-----------------------------------------------------------------------------------------------

    Game.FontDefinitions = [];

    //-----------------------------------------------------------------------------------------------

    Game.Init = function() {
        beablib.log("Game::Init::Enter");

        //	Configure beablib.
        beablib.PauseEnabled = true;
        beablib.ResizeEnabled = true;

        //	Let's create the ticket...
        /* TheTicket = Game.CTicket.CreateTicket();

        //	...& if it's valid, we can kick off the game.
        if (!TheTicket.CheckTicket()) {
            return;
        } */

        //	Create the global sprite sheets.
        // Game.BackgroundSheet		=	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.BackgroundSS );
        Game.BackgroundSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.BackgroundSS);
        Game.BBLogoSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.BB_LogoSS);
        Game.GUISheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.MainGameSS);
        // Game.DemoSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.DemoAssetsSS);
        // Game.ScrabbleSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.ScrabbleSS);
        // Game.ScrabbleSplashSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.ScrabbleSplashSS);
        // Game.DiceSplashSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.DiceAssetsSS);
        // Game.BallSheet	    		=	beablib.CreateSpriteSheet( beablib.SpriteSheetPath.BallsSS );
        // Game.BallSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Balls3DSS);
        // Game.TwisterSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.TwisterSS);
        // Game.DeepSeaSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.DeepSeaSS);
        // Game.DeepSea2Sheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.DeepSea2SS);
        // Game.DeepSea3Sheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.DeepSea3SS);
        Game.Robot1AsleepSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot1_AsleepSS);
        Game.Robot1DanceSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot1_DanceSS);
        Game.Robot1WakeUpSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot1_WakeUpSS);
        Game.Robot2AsleepSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot2_AsleepSS);
        Game.Robot2DanceSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot2_DanceSS);
        Game.Robot2WakeUpSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot2_WakeUpSS);
        Game.Robot3AsleepSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot3_AsleepSS);
        Game.Robot3DanceSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot3_DanceSS);
        Game.Robot3WakeUpSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot3_WakeUpSS);
        Game.Robot4AsleepSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot4_AsleepSS);
        Game.Robot4DanceSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot4_DanceSS);
        Game.Robot4WakeUpSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot4_WakeUpSS);
        Game.Robot5AsleepSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot5_AsleepSS);
        Game.Robot5DanceSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot5_DanceSS);
        Game.Robot5WakeUpSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot5_WakeUpSS);
        Game.Robot6AsleepSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot6_AsleepSS);
        Game.Robot6DanceSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot6_DanceSS);
        Game.Robot6WakeUpSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Robot6_WakeUpSS);
        

        gsap.registerPlugin(CustomBounce, CustomEase, CustomWiggle, MotionPathPlugin, PixiPlugin, Physics2DPlugin);



        //	Create our game's canvases...
        // Game.GameCanvas			=	ProjectX.CreateCanvas( {id:"GameCanvas", zIndex:4, position:"fixed", AddToParent:true });
        Game.GameCanvas = beablib.CreateCanvas({ id: "GameCanvas", zIndex: 4, position: "fixed", AddToParent: true });
        // Game.GUICanvas			=	ProjectX.CreateCanvas( {id:"GUICanvas", zIndex:10, position:"fixed", AddToParent:true });
        Game.GUICanvas = beablib.CreateCanvas( {id:"GUICanvas", zIndex:10, position:"fixed", AddToParent:true });

        //	...& stages.
        // Game.BackgroundStage	=	ProjectX.CreateStage( ProjectX.GetBaseCanvasName(), {width:BACK_CANVAS_WIDTH, height:BACK_CANVAS_HEIGHT, anchor_h:"centre", anchor_v:"centre", clamp:true} );
        Game.BackgroundStage = beablib.CreateStage(beablib.GetBaseCanvasName(), {width:BACK_CANVAS_WIDTH, height:BACK_CANVAS_HEIGHT, anchor_h:"centre", anchor_v:"centre", clamp:true});
        // Game.GameStage			=	ProjectX.CreateStage( "GameCanvas",	{width:GAME_CANVAS_WIDTH, height:GAME_CANVAS_HEIGHT, anchor_h:"centre", anchor_v:"centre"} );
        Game.GameStage = beablib.CreateStage( "GameCanvas",	{width:GAME_CANVAS_WIDTH, height:GAME_CANVAS_HEIGHT, anchor_h:"centre", anchor_v:"centre"} );
        // Game.GUIStage			=	ProjectX.CreateStage( "GUICanvas",	{width:GUI_CANVAS_WIDTH, height:GUI_CANVAS_HEIGHT, anchor_h:"centre", anchor_v:"centre", clamp:true, touch:true} );
        Game.GUIStage = beablib.CreateStage( "GUICanvas",	{width:GUI_CANVAS_WIDTH, height:GUI_CANVAS_HEIGHT, anchor_h:"centre", anchor_v:"centre", clamp:true, touch:true} );

        //	Create the game's components.
        // TheBackground			=	new	Game.Background( Game.BackgroundStage );
        TheBackground = new Game.CBackground(Game.BackgroundStage);
        //TheButton			=	new	Game.CButtonDemo( Game.GameStage );
        //TheGlobe			=	new	Game.C3DGlobe( Game.GameStage );
        //TheScrabbleDemo1	=	new	Game.CScrabbleDemo1( Game.GameStage );
        //TheScrabbleDemo2	=	new	Game.CScrabbleDemo2( Game.GameStage );
        //TheDiceTest		=   new Game.CDiceTests( Game.GameStage );
        //TheTwistTest		=	new	Game.CTwistTest( Game.GameStage );
        //TheSpinner		=	new	Game.CSpinner( Game.GameStage );
        //TheTronAnims		=	new	Game.CTronAnims( Game.GameStage );
        //TheDeepSea = new Game.CDeepSea(Game.GameStage);
        // TheRobots			=   new	Game.CRobots( Game.GameStage );
        TheRobots = new Game.CRobots( Game.GameStage );
        // TheGUI				=   new	Game.CGUI( Game.GUIStage );
        TheGUI = new Game.CGUI( Game.GUIStage );

        /*
        //	Attempt to patch in 3D.  The function will return whether or not it's WebGL compatible.
        if(Game.PatchStage3D(Game.BackgroundStage, true, true))
        {
        	console.log("3D Patched");
        }
        else
        {
        	console.log("No 3D");
        }

        var cube_holder = Renderer.CreateContainer();
        var left_cube = new CCube3D("Panel_Left", {X:-343, Y:-8}, 0.58);
        var mid_cube = new CCube3D("Panel_Centre", {X:0, Y:-8}, 0.88);
        var right_cube = new CCube3D("Panel_Right", {X:343, Y:-8}, 0.58);

        cube_holder.addChild(mid_cube.CubeSprite, left_cube.CubeSprite, right_cube.CubeSprite);

        Game.BackgroundStage.addChild(cube_holder);

        var tl = gsap.timeline({paused:true, repeat: -1, repeatDelay: 1});
        tl.to(left_cube, {RotAngle:90, delay:0.5, duration:1, ease:"bounce.out"});
        tl.to(mid_cube, {RotAngle:90, delay:0.5, duration:1.5, ease:"elastic.out(0.25, 0.1)"});
        tl.to(right_cube, {RotAngle:90, delay:0.5, duration:1.5, ease:"back.inOut(1.4)"});
        tl.play();

        var process_object = {
        	Process: function(delta){
        		left_cube.SetRotation(delta);
        		mid_cube.SetRotation(delta);
        		right_cube.SetRotation(delta);
        	},
        	Render: function(){
        		Game.BackgroundStage.SetDirty(true);
        	},
        	Reposition: function(scale){
        		cube_holder.SetPosition(Game.BackgroundStage.View.HalfWidth, Game.BackgroundStage.View.HalfHeight);
        		cube_holder.SetScale(scale);

        		Game.BackgroundStage.SetDirty(true);
        	}
        };


        beablib.AddProcessable(process_object);
        beablib.AddRepositionable(process_object);
        */

        //	Set the tick handler going.
        beablib.TweenHandler.Enable(true);
        // Game.GameCanvas.EnablePointerEvents(true);
        Game.GUICanvas.EnablePointerEvents( true );
        Game.GUIStage.nextStage		=	Game.GameStage;

        beablib.log("Game::Init::Exit");
    };

    //-----------------------------------------------------------------------------------------------

    Game.StartGame = function() {};

    //-----------------------------------------------------------------------------------------------

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