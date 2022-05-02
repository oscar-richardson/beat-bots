//-----------------------------------------------------------------------------------------------

(function () {
  "use strict";

  //-----------------------------------------------------------------------------------------------
  //	Const-ish.
  //-----------------------------------------------------------------------------------------------

  //	Canvas sizes.
  var BACK_CANVAS_HEIGHT = 768,
    BACK_CANVAS_WIDTH = 1136,
    GAME_CANVAS_HEIGHT = 768,
    GAME_CANVAS_WIDTH = 1136,
    GUI_CANVAS_HEIGHT = 768,
    GUI_CANVAS_WIDTH = 1136;

  //-----------------------------------------------------------------------------------------------
  //	Main variables.
  //-----------------------------------------------------------------------------------------------

  // Beablib alias.
  var Game = beablib.Game,
    Renderer = beablib.Renderer;

  //	Game aliases.
  var TheBackground = {},
    TheRobots = {},
    TheGUI = {};

  //-----------------------------------------------------------------------------------------------

  Game.FontDefinitions = [];

  //-----------------------------------------------------------------------------------------------

  Game.Init = function () {
    beablib.log("Game::Init::Enter");

    //	Configure beablib.
    beablib.PauseEnabled = true;
    beablib.ResizeEnabled = true;

    //	Create the global sprite sheets.
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

    //	Create our game's canvases...
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

    //	...& stages.
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

    //	Create the game's components.
    TheBackground = new Game.CBackground(Game.BackgroundStage);
    TheRobots = new Game.CRobots(Game.GameStage);
    TheGUI = new Game.CGUI(Game.GUIStage);

    //	Set the tick handler going.
    beablib.TweenHandler.Enable(true);
    Game.GameCanvas.EnablePointerEvents(true);
    Game.GUICanvas.EnablePointerEvents(true);
    // Game.GUIStage.nextStage		=	Game.GameStage;

    beablib.log("Game::Init::Exit");
  };

  //-----------------------------------------------------------------------------------------------

  Game.StartGame = function () {};

  //-----------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------
  //	Public.
  //-----------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------

  Game.RobotClicked = function (number) {
    TheRobots.RobotClicked(number);

    console.log("Game.RobotClicked :: " + number);
  };

  //-----------------------------------------------------------------------------------------------

  Game.Revert = function (number) {
    TheRobots.Revert(number);
  };

  //-----------------------------------------------------------------------------------------------

  Game.Record = function (number) {
    TheRobots.Record(number);

    console.log("Game.Record :: " + number);
  };

  //-----------------------------------------------------------------------------------------------

  Game.ReActivateRecord = function (number) {
    TheGUI.ReActivateRecord();
  };

  //-----------------------------------------------------------------------------------------------

  Game.InitRobots = function () {
    TheRobots.InitRobots();
  };

  //-----------------------------------------------------------------------------------------------
})();

//-----------------------------------------------------------------------------------------------
