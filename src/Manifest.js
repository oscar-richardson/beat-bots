//-----------------------------------------------------------------------------------------------
//	Inchinn library core - In House Host.
//-----------------------------------------------------------------------------------------------

ProjectX			=	window.ProjectX || {};
ProjectX.Core		=	ProjectX.Core	|| {};

//-----------------------------------------------------------------------------------------------

var	manifest	=	[
	//-----------------------------------------------------------------------------------------------
	// 	Third party.
	//-----------------------------------------------------------------------------------------------

	{"src": "src/thirdParty/TweenMax.min.js",								"id": "TweenMax" },


	//-----------------------------------------------------------------------------------------------
	//	Graphics.
	//-----------------------------------------------------------------------------------------------

	//// NEW DIAMOND GRAPHIX ////
    {"src": "src/imports/img/BackgroundSS.png", 		"id": "BackgroundSS" },
    {"src": "src/imports/js/BackgroundSS.js",  			"id": "Background" },
    {"src": "src/imports/img/Prizes_BtnsSS.png", 		"id": "Prizes_BtnsSS" },
    {"src": "src/imports/js/Prizes_BtnsSS.js",  		"id": "Prizes_Btns" },
    {"src": "src/imports/img/TimerSS.png", 				"id": "TimerSS" },
    {"src": "src/imports/js/TimerSS.js",  				"id": "Timer" },
    {"src": "src/imports/img/DeleteGameSS.png", 		"id": "DeleteGameSS" },
    {"src": "src/imports/js/DeleteGameSS.js",  			"id": "DeleteGame" },
    {"src": "src/imports/img/Panels_TextSS.png", 		"id": "Panels_TextSS" },
    {"src": "src/imports/js/Panels_TextSS.js",  		"id": "Panels_Text" },

    {"src": "src/imports/img/TimerNosSS.png", 			"id": "TimerNosSS" },
    {"src": "src/imports/js/TimerNosSS.js",  			"id": "TimerNos" },

    //// NEW BEATBOT GRAPHIX ////
    {"src": "src/imports/img/BB_LogoSS.png", 				"id": "BB_LogoSS" },
    {"src": "src/imports/js/BB_LogoSS.js",  				"id": "BB_Logo" },


    {"src": "src/imports/img/Robot1_AsleepSS.png", 			"id": "Robot1_AsleepSS" },
    {"src": "src/imports/js/Robot1_AsleepSS.js",  			"id": "Robot1_Asleep" },
    {"src": "src/imports/img/Robot1_DanceSS.png", 			"id": "Robot1_DanceSS" },
    {"src": "src/imports/js/Robot1_DanceSS.js",  			"id": "Robot1_Dance" },
    {"src": "src/imports/img/Robot1_WakeUpSS.png", 			"id": "Robot1_WakeUpSS" },
    {"src": "src/imports/js/Robot1_WakeUpSS.js",  			"id": "Robot1_WakeUp" },

    {"src": "src/imports/img/Robot2_AsleepSS.png", 			"id": "Robot2_AsleepSS" },
    {"src": "src/imports/js/Robot2_AsleepSS.js",  			"id": "Robot2_Asleep" },
    {"src": "src/imports/img/Robot2_DanceSS.png", 			"id": "Robot2_DanceSS" },
    {"src": "src/imports/js/Robot2_DanceSS.js",  			"id": "Robot2_Dance" },
    {"src": "src/imports/img/Robot2_WakeUpSS.png", 			"id": "Robot2_WakeUpSS" },
    {"src": "src/imports/js/Robot2_WakeUpSS.js",  			"id": "Robot2_WakeUp" },

    {"src": "src/imports/img/Robot3_AsleepSS.png", 			"id": "Robot3_AsleepSS" },
    {"src": "src/imports/js/Robot3_AsleepSS.js",  			"id": "Robot3_Asleep" },
    {"src": "src/imports/img/Robot3_DanceSS.png", 			"id": "Robot3_DanceSS" },
    {"src": "src/imports/js/Robot3_DanceSS.js",  			"id": "Robot3_Dance" },
    {"src": "src/imports/img/Robot3_WakeUpSS.png", 			"id": "Robot3_WakeUpSS" },
    {"src": "src/imports/js/Robot3_WakeUpSS.js",  			"id": "Robot3_WakeUp" },

    {"src": "src/imports/img/Robot4_AsleepSS.png", 			"id": "Robot4_AsleepSS" },
    {"src": "src/imports/js/Robot4_AsleepSS.js",  			"id": "Robot4_Asleep" },
    {"src": "src/imports/img/Robot4_DanceSS.png", 			"id": "Robot4_DanceSS" },
    {"src": "src/imports/js/Robot4_DanceSS.js",  			"id": "Robot4_Dance" },
    {"src": "src/imports/img/Robot4_WakeUpSS.png", 			"id": "Robot4_WakeUpSS" },
    {"src": "src/imports/js/Robot4_WakeUpSS.js",  			"id": "Robot4_WakeUp" },

    {"src": "src/imports/img/Robot5_AsleepSS.png", 			"id": "Robot5_AsleepSS" },
    {"src": "src/imports/js/Robot5_AsleepSS.js",  			"id": "Robot5_Asleep" },
    {"src": "src/imports/img/Robot5_DanceSS.png", 			"id": "Robot5_DanceSS" },
    {"src": "src/imports/js/Robot5_DanceSS.js",  			"id": "Robot5_Dance" },
    {"src": "src/imports/img/Robot5_WakeUpSS.png", 			"id": "Robot5_WakeUpSS" },
    {"src": "src/imports/js/Robot5_WakeUpSS.js",  			"id": "Robot5_WakeUp" },

    {"src": "src/imports/img/Robot6_AsleepSS.png", 			"id": "Robot6_AsleepSS" },
    {"src": "src/imports/js/Robot6_AsleepSS.js",  			"id": "Robot6_Asleep" },
    {"src": "src/imports/img/Robot6_DanceSS.png", 			"id": "Robot6_DanceSS" },
    {"src": "src/imports/js/Robot6_DanceSS.js",  			"id": "Robot6_Dance" },
    {"src": "src/imports/img/Robot6_WakeUpSS.png", 			"id": "Robot6_WakeUpSS" },
    {"src": "src/imports/js/Robot6_WakeUpSS.js",  			"id": "Robot6_WakeUp" },



	//-----------------------------------------------------------------------------------------------
	//	Fonts
	//-----------------------------------------------------------------------------------------------



	//-----------------------------------------------------------------------------------------------
	//	Sounds
	//-----------------------------------------------------------------------------------------------


    {"src": "src/imports/audio/CleanTines_1.wav", 					"id": "Arpegio" },
	{"src": "src/imports/audio/EightiesBass_1.wav", 				"id": "Bass" },
	{"src": "src/imports/audio/IndieDisco_1.wav", 				    "id": "Disco" },
	{"src": "src/imports/audio/SweetElectricPad_1.wav", 			"id": "Tinkle" },
	{"src": "src/imports/audio/SynthPopStrings_1.wav", 				"id": "Strings" },
	{"src": "src/imports/audio/Techno808_1.wav", 					"id": "Drumbox" },

	{"src": "src/imports/audio/wakeUp1.mp3", 					    "id": "wakeUp1" },
	{"src": "src/imports/audio/wakeUp2.mp3", 					    "id": "wakeUp2" },
	{"src": "src/imports/audio/wakeUp3.mp3", 					    "id": "wakeUp3" },
	{"src": "src/imports/audio/wakeUp4.mp3", 					    "id": "wakeUp4" },
	{"src": "src/imports/audio/wakeUp5.mp3", 					    "id": "wakeUp5" },
	{"src": "src/imports/audio/wakeUp6.mp3", 					    "id": "wakeUp6" },
	{"src": "src/imports/audio/wakeUp7.mp3", 					    "id": "wakeUp7" },
	{"src": "src/imports/audio/wakeUp8.mp3", 					    "id": "wakeUp8" },
	{"src": "src/imports/audio/wakeUp9.mp3", 					    "id": "wakeUp9" },

	{"src": "src/imports/audio/thudBounce.mp3", 					"id": "thudBounce" },
	{"src": "src/imports/audio/intro.mp3", 					        "id": "intro" },



    //-----------------------------------------------------------------------------------------------
	//	Game source.
	//-----------------------------------------------------------------------------------------------

    //	Buttons.
	{"src": "src/game/SoundToggle.js",					"id": "SoundToggle" },

	//	Game code.
	{"src": "src/game/Background.js", 					"id": "Background" },
	{"src": "src/game/CGUI.js", 						"id": "CGUI" },
	{"src": "src/game/CRobots.js", 					"id": "CRobots" },

	{"src": "src/game/CGame.js", 						"id": "CGame" }


];

//-----------------------------------------------------------------------------------------------

ProjectX.Core.GetManifest	=	function()
{
	//-----------------------------------------------------------------------------------------------

	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Conditional includes

	/**
	 *   if ({your condition is met})
	 *   {
     *   manifest.unshift({"src": "pathToFile", "id": "fileID"})
     *   }
	 */

	return	manifest;
};

//-----------------------------------------------------------------------------------------------
