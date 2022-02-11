//-----------------------------------------------------------------------------------------------

(function() {
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	Const-ish.
    //-----------------------------------------------------------------------------------------------

    var GAME_WIDTH = -1,
        GAME_HEIGHT = -1;

    //-----------------------------------------------------------------------------------------------
    //	Main variables.
    //-----------------------------------------------------------------------------------------------

    // Beablib alias.
    var Game = beablib.Game,
        Renderer = beablib.Renderer;

    //	Game aliases.
    var CCube3D = Game.CCube3D;

    var TheBackground = {},
        TheButton = {},
        TheGlobe = {},
        TheScrabbleDemo1 = {},
        TheScrabbleDemo2 = {},
        TheDiceTest = {},
        TheTwistTest = {},
        TheSpinner = {},
        TheTronAnims = {},
        TheDeepSea = {},
        TheTicket = {},
        TheRobots = {},
        TheGUI = {};

    //-----------------------------------------------------------------------------------------------

    Game.FontDefinitions = [];

    //-----------------------------------------------------------------------------------------------

    Game.Init = function() {
        beablib.log("Game::Init::Enter");

        //	Configure beablib.
        beablib.PauseEnabled = true;
        beablib.ResizeEnabled = true;

        //	Let's create the ticket...
        TheTicket = Game.CTicket.CreateTicket();

        //	...& if it's valid, we can kick off the game.
        if (!TheTicket.CheckTicket()) {
            return;
        }

        //	Create the global sprite sheets.
        Game.BackgroundSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.BackgroundSS);
        Game.BBLogoSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.BB_LogoSS);
        Game.GUISheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.MainGameSS);
        Game.DemoSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.DemoAssetsSS);
        Game.ScrabbleSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.ScrabbleSS);
        Game.ScrabbleSplashSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.ScrabbleSplashSS);
        Game.DiceSplashSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.DiceAssetsSS);
        // Game.BallSheet	    		=	beablib.CreateSpriteSheet( beablib.SpriteSheetPath.BallsSS );
        Game.BallSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.Balls3DSS);
        Game.TwisterSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.TwisterSS);
        Game.DeepSeaSheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.DeepSeaSS);
        Game.DeepSea2Sheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.DeepSea2SS);
        Game.DeepSea3Sheet = beablib.CreateSpriteSheet(beablib.SpriteSheetPath.DeepSea3SS);
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
        
        /*
        [0].forEach(function(i) {
            // var robot1_asleep_ss 		=   ProjectX.SpriteSheets.Robot1_AsleepSS,
                // robot1_asleep	        =	robot1_asleep_ss.spriteSheet.animations;
            let roboti_asleep	        =	beablib.SpriteSheetPath["Robot"+(i+1)+"_AsleepSS"].spriteSheet.animations;
            
            roboti_asleep.loop = [roboti_asleep["Robot"+(i+1)+"_Asleep001"][0], roboti_asleep["Robot"+(i+1)+"_Asleep0051"][0], false, 0.7];

            // this.Robot1AsleepSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot1_AsleepSS );
            // this.Robot1Asleep = new createjs.Sprite(this.Robot1AsleepSpriteSheet, "loop");
            // this.Robot1Asleep.SetPosition( -250, 178 );
            // this.Robot1Asleep.stop();
            RobotAsleepArray.push(Renderer.CreateSprite(beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot"+(i+1)+"_AsleepSS"]), "Robot"+(i+1)+"_Asleep", {alpha:1, scale:1, position: {X:asleepXposArray[i], Y:asleepYposArray[i]}, parent: this.RobotContainer}));
        });
        */

        gsap.registerPlugin(CustomBounce, CustomEase, CustomWiggle, MotionPathPlugin, PixiPlugin, Physics2DPlugin);



        //	Create our game's canvases...
        Game.GameCanvas = beablib.CreateCanvas({ id: "GameCanvas", zIndex: 1, position: "fixed", AddToParent: true });

        //	...& stages.
        Game.BackgroundStage = beablib.CreateStage(beablib.GetBaseCanvasName(), { width: GAME_WIDTH, height: GAME_HEIGHT, anchor_h: "centre", anchor_v: "centre", clamp: true });
        Game.GameStage = Game.BackgroundStage; //beablib.CreateStage( "GameCanvas", {width:GAME_WIDTH, height:GAME_HEIGHT, anchor_h:"centre", anchor_v:"centre", clamp:true, touch:true } );


        //	Create the game's components.
        // TheBackground = new Game.CBackground(Game.BackgroundStage);
        //TheButton			=	new	Game.CButtonDemo( Game.GameStage );
        //TheGlobe			=	new	Game.C3DGlobe( Game.GameStage );
        //TheScrabbleDemo1	=	new	Game.CScrabbleDemo1( Game.GameStage );
        //TheScrabbleDemo2	=	new	Game.CScrabbleDemo2( Game.GameStage );
        //TheDiceTest		=   new Game.CDiceTests( Game.GameStage );
        //TheTwistTest		=	new	Game.CTwistTest( Game.GameStage );
        //TheSpinner		=	new	Game.CSpinner( Game.GameStage );
        //TheTronAnims		=	new	Game.CTronAnims( Game.GameStage );
        //TheDeepSea = new Game.CDeepSea(Game.GameStage);
        TheRobots = new Game.CRobots( Game.GameStage );
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
        Game.GameCanvas.EnablePointerEvents(true);

        beablib.log("Game::Init::Exit");
    };

    //-----------------------------------------------------------------------------------------------

    Game.StartGame = function() {};

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------