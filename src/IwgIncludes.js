var _manifest = [
    //-----------------------------------------------------------------------------------------------
    // 	Third party.
    //-----------------------------------------------------------------------------------------------

    { src: "src/thirdParty/custom-pixi.js", id: "pixijs" },
    { src: "src/thirdParty/gsap.js", id: "gsap" },

    { src: "src/thirdParty/CustomBounce.min.js", id: "CustomBounce" },
    { src: "src/thirdParty/CustomEase.min.js", id: "CustomEase" },
    { src: "src/thirdParty/CustomWiggle.min.js", id: "CustomWiggle" },
    { src: "src/thirdParty/EasePack.min.js", id: "EasePack" },
    { src: "src/thirdParty/MotionPathHelper.min.js", id: "MotionPathHelper" },
    { src: "src/thirdParty/MotionPathPlugin.min.js", id: "MotionPathPlugin" },
    { src: "src/thirdParty/Physics2DPlugin.min.js", id: "Physics2DPlugin" },
    { src: "src/thirdParty/pixi-filters.min.js", id: "pixi-filters" },
    { src: "src/thirdParty/PixiPlugin.min.js", id: "PixiPlugin" },
    { src: "src/thirdParty/shockwave.min.js", id: "shockwavejs" },

    //-----------------------------------------------------------------------------------------------
    //	Graphics.
    //-----------------------------------------------------------------------------------------------

    { src: "src/imports/img/BackgroundSS.png", id: "BackgroundSS" },
    { src: "src/imports/js/BackgroundSS.js", id: "Background" },

    { src: "src/imports/img/BB_LogoSS.png", id: "BB_LogoSS" },
    { src: "src/imports/js/BB_LogoSS.js", id: "BB_Logo" },

    { src: "src/imports/img/Robot1_AsleepSS.png", id: "Robot1_AsleepSS" },
    { src: "src/imports/js/Robot1_AsleepSS.js", id: "Robot1_Asleep" },
    { src: "src/imports/img/Robot1_DanceSS.png", id: "Robot1_DanceSS" },
    { src: "src/imports/js/Robot1_DanceSS.js", id: "Robot1_Dance" },
    { src: "src/imports/img/Robot1_WakeUpSS.png", id: "Robot1_WakeUpSS" },
    { src: "src/imports/js/Robot1_WakeUpSS.js", id: "Robot1_WakeUp" },

    { src: "src/imports/img/Robot2_AsleepSS.png", id: "Robot2_AsleepSS" },
    { src: "src/imports/js/Robot2_AsleepSS.js", id: "Robot2_Asleep" },
    { src: "src/imports/img/Robot2_DanceSS.png", id: "Robot2_DanceSS" },
    { src: "src/imports/js/Robot2_DanceSS.js", id: "Robot2_Dance" },
    { src: "src/imports/img/Robot2_WakeUpSS.png", id: "Robot2_WakeUpSS" },
    { src: "src/imports/js/Robot2_WakeUpSS.js", id: "Robot2_WakeUp" },

    { src: "src/imports/img/Robot3_AsleepSS.png", id: "Robot3_AsleepSS" },
    { src: "src/imports/js/Robot3_AsleepSS.js", id: "Robot3_Asleep" },
    { src: "src/imports/img/Robot3_DanceSS.png", id: "Robot3_DanceSS" },
    { src: "src/imports/js/Robot3_DanceSS.js", id: "Robot3_Dance" },
    { src: "src/imports/img/Robot3_WakeUpSS.png", id: "Robot3_WakeUpSS" },
    { src: "src/imports/js/Robot3_WakeUpSS.js", id: "Robot3_WakeUp" },

    { src: "src/imports/img/Robot4_AsleepSS.png", id: "Robot4_AsleepSS" },
    { src: "src/imports/js/Robot4_AsleepSS.js", id: "Robot4_Asleep" },
    { src: "src/imports/img/Robot4_DanceSS.png", id: "Robot4_DanceSS" },
    { src: "src/imports/js/Robot4_DanceSS.js", id: "Robot4_Dance" },
    { src: "src/imports/img/Robot4_WakeUpSS.png", id: "Robot4_WakeUpSS" },
    { src: "src/imports/js/Robot4_WakeUpSS.js", id: "Robot4_WakeUp" },

    { src: "src/imports/img/Robot5_AsleepSS.png", id: "Robot5_AsleepSS" },
    { src: "src/imports/js/Robot5_AsleepSS.js", id: "Robot5_Asleep" },
    { src: "src/imports/img/Robot5_DanceSS.png", id: "Robot5_DanceSS" },
    { src: "src/imports/js/Robot5_DanceSS.js", id: "Robot5_Dance" },
    { src: "src/imports/img/Robot5_WakeUpSS.png", id: "Robot5_WakeUpSS" },
    { src: "src/imports/js/Robot5_WakeUpSS.js", id: "Robot5_WakeUp" },

    { src: "src/imports/img/Robot6_AsleepSS.png", id: "Robot6_AsleepSS" },
    { src: "src/imports/js/Robot6_AsleepSS.js", id: "Robot6_Asleep" },
    { src: "src/imports/img/Robot6_DanceSS.png", id: "Robot6_DanceSS" },
    { src: "src/imports/js/Robot6_DanceSS.js", id: "Robot6_Dance" },
    { src: "src/imports/img/Robot6_WakeUpSS.png", id: "Robot6_WakeUpSS" },
    { src: "src/imports/js/Robot6_WakeUpSS.js", id: "Robot6_WakeUp" },

    //-----------------------------------------------------------------------------------------------
    //	Sounds
    //-----------------------------------------------------------------------------------------------

    { src: "src/imports/audio/CleanTines_1.wav", id: "Arpeggio" },
    { src: "src/imports/audio/EightiesBass_1.wav", id: "Bass" },
    { src: "src/imports/audio/IndieDisco_1.wav", id: "Disco" },
    { src: "src/imports/audio/SweetElectricPad_1.wav", id: "Tinkle" },
    { src: "src/imports/audio/SynthPopStrings_1.wav", id: "Strings" },
    { src: "src/imports/audio/Techno808_1.wav", id: "Drumbox" },

    { src: "src/imports/audio/wakeUp1.mp3", id: "wakeUp1" },
    { src: "src/imports/audio/wakeUp2.mp3", id: "wakeUp2" },
    { src: "src/imports/audio/wakeUp3.mp3", id: "wakeUp3" },
    { src: "src/imports/audio/wakeUp4.mp3", id: "wakeUp4" },
    { src: "src/imports/audio/wakeUp5.mp3", id: "wakeUp5" },
    { src: "src/imports/audio/wakeUp6.mp3", id: "wakeUp6" },
    { src: "src/imports/audio/wakeUp7.mp3", id: "wakeUp7" },
    { src: "src/imports/audio/wakeUp8.mp3", id: "wakeUp8" },
    { src: "src/imports/audio/wakeUp9.mp3", id: "wakeUp9" },

    { src: "src/imports/audio/thudBounce.mp3", id: "thudBounce" },
    { src: "src/imports/audio/intro.mp3", id: "intro" },

    //-----------------------------------------------------------------------------------------------
    //  BeabLib.
    //-----------------------------------------------------------------------------------------------

    { src: "src/thirdParty/beablib.js", id: "game_baseClass" },

    //-----------------------------------------------------------------------------------------------
    //	Game source.
    //-----------------------------------------------------------------------------------------------

    //	Base classes.
    { src: "src/game/CBackground.js", id: "CBackground" },
    { src: "src/game/CGUI.js", id: "CGUI" },
    { src: "src/game/CRobots.js", id: "CRobots" },

    //	Core game.
    { src: "src/game/CGame.js", id: "CGame" },

    //-----------------------------------------------------------------------------------------------
];

//-----------------------------------------------------------------------------------------------

miwgdefine(function() {
    "use strict";
    //conditional statements can be added here
    //com.camelot.core.IWG.ame('get', 'UA') is loaded and can be used.
    /**
     *   if ({your condition is met}) {
     *   _manifest.unshift({"src": "pathToFile", "id": "fileID"})
     *   }
     */
    return _manifest;
});

//-----------------------------------------------------------------------------------------------