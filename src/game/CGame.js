(function() {
    "use strict";

    var BACK_CANVAS_HEIGHT = 768,
        BACK_CANVAS_WIDTH = 1136,
        GAME_CANVAS_HEIGHT = 768,
        GAME_CANVAS_WIDTH = 1136,
        GUI_CANVAS_HEIGHT = 768,
        GUI_CANVAS_WIDTH = 1136;

    var Game = beablib.Game,
        Renderer = beablib.Renderer;

    var TheBackground = {},
        TheRobots = {},
        TheGUI = {};

    Game.FontDefinitions = [];

    //-----------------------------------------------------------------------------------------------

    Game.Init = function() {
        beablib.PauseEnabled = true;
        beablib.ResizeEnabled = true;

        Game.BackgroundSheet = beablib.CreateSpriteSheet(
            beablib.SpriteSheetPath.BackgroundSS
        );

        gsap.registerPlugin(
            CustomBounce,
            CustomEase,
            CustomWiggle,
            MotionPathPlugin,
            PixiPlugin,
            Physics2DPlugin
        );

        Game.GameCanvas = beablib.CreateCanvas({
            id: "GameCanvas",
            zIndex: 4,
            position: "fixed",
            AddToParent: true,
        });
        Game.GUICanvas = beablib.CreateCanvas({
            id: "GUICanvas",
            zIndex: 10,
            position: "fixed",
            AddToParent: true,
        });

        Game.BackgroundStage = beablib.CreateStage(beablib.GetBaseCanvasName(), {
            width: BACK_CANVAS_WIDTH,
            height: BACK_CANVAS_HEIGHT,
            anchor_h: "centre",
            anchor_v: "centre",
            clamp: true,
        });
        Game.GameStage = beablib.CreateStage("GameCanvas", {
            width: GAME_CANVAS_WIDTH,
            height: GAME_CANVAS_HEIGHT,
            anchor_h: "centre",
            anchor_v: "centre",
        });
        Game.GUIStage = beablib.CreateStage("GUICanvas", {
            width: GUI_CANVAS_WIDTH,
            height: GUI_CANVAS_HEIGHT,
            anchor_h: "centre",
            anchor_v: "centre",
            clamp: true,
            touch: true,
        });

        TheBackground = new Game.CBackground(Game.BackgroundStage);
        TheRobots = new Game.CRobots(Game.GameStage);
        TheGUI = new Game.CGUI(Game.GUIStage);

        beablib.TweenHandler.Enable(true);
        Game.GameCanvas.EnablePointerEvents(true);
        Game.GUICanvas.EnablePointerEvents(true);
    };

    //-----------------------------------------------------------------------------------------------

    Game.StartGame = function() {};

    //-----------------------------------------------------------------------------------------------

    Game.RobotClicked = function(number) {
        TheRobots.RobotClicked(number);
    };

    //-----------------------------------------------------------------------------------------------

    Game.Revert = function(number) {
        TheRobots.Revert(number);
    };

    //-----------------------------------------------------------------------------------------------

    Game.Record = function(number) {
        TheRobots.Record(number);
    };

    //-----------------------------------------------------------------------------------------------

    Game.RobotShowWaveform = function(number) {
        TheRobots.RobotShowWaveform(number);
    };

    //-----------------------------------------------------------------------------------------------

    Game.ReActivateRecord = function(number) {
        TheGUI.ReActivateRecord();
    };

    //-----------------------------------------------------------------------------------------------

    Game.InitRobots = function() {
        TheRobots.InitRobots();
    };
})();