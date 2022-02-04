/*jslint nomen: true, browser: true, plusplus: true, devel: true, vars:true, eqeq: true*/
/*global getManifest*/

(function (window)
{
	"use strict";
	var iwg			=	window.com.camelot.iwg,
		_class		=	iwg._class,

		/**
		*
		* Include all your IWG scripts in this file.
		*/
		getManifest	=	_class( "core.LoadManifest", function ()
		{
			var _manifest =	[
								//	Third party.
								{"src": "src/thirdParty/createJS/easeljs-0.7.1.min.js", "id": "easeljs-0"},
								{"src": "src/thirdParty/greensock/TweenMax.min.js", "id": "TweenMax" },
								{"src": "src/thirdParty/jquery-2.0.3.min.js", "id": "jquery" },
								{"src": "src/lib/inchLib_CJS_0_0_10.js", "id": "inchlib" },
								{"src": "src/lib/inchLib_Maths.js", "id": "inchlib_Maths" },
								{"src": "src/lib/inchLib_TweenHandler.js", "id": "inchlib_TweenHandler" },
								{"src": "src/lib/easeljs_helpers.js", "id": "easeljs-helpers"},

								//	Graphics.
								{"src": "src/imports/img/BackgroundSS.png", 		"id": "BackgroundSS" },
								{"src": "src/imports/js/BackgroundSS.js",  			"id": "Background" },
								{"src": "src/imports/img/BeeHiveSS.png", 			"id": "BeeHiveSS" },
								{"src": "src/imports/js/BeeHiveSS.js",  			"id": "BeeHive" },
								{"src": "src/imports/img/BtnSS.png", 				"id": "BtnSS" },
								{"src": "src/imports/js/BtnSS.js",  				"id": "Btn" },
								{"src": "src/imports/img/LogoTextSS.png", 			"id": "LogoTextSS" },
								{"src": "src/imports/js/LogoTextSS.js",  			"id": "LogoText" },
								{"src": "src/imports/img/BeeSS.png", 				"id": "BeeSS" },
								{"src": "src/imports/js/BeeSS.js",  				"id": "Bee" },
								{"src": "src/imports/img/BigBeeHoverSS.png", 		"id": "BigBeeHoverSS" },
								{"src": "src/imports/js/BigBeeHoverSS.js",  		"id": "BigBeeHover" },
								{"src": "src/imports/img/BigBeeCelebSS.png", 		"id": "BigBeeCelebSS" },
								{"src": "src/imports/js/BigBeeCelebSS.js",  		"id": "BigBeeCeleb" },

								{"src": "src/imports/img/BigBeeLoopSS.png", 		"id": "BigBeeLoopSS" },
								{"src": "src/imports/js/BigBeeLoopSS.js",  			"id": "BigBeeLoop" },
				
								{"src": "src/imports/img/BigBeeEndSS.png", 			"id": "BigBeeEndSS" },
								{"src": "src/imports/js/BigBeeEndSS.js",  			"id": "BigBeeEnd" },

								{"src": "src/imports/img/EquationsSS.png", 			"id": "EquationsSS" },
								{"src": "src/imports/js/Equations.js",  			"id": "Equations" },

								{"src": "src/imports/img/SumNosSS.png", 			"id": "SumNosSS" },
								{"src": "src/imports/js/SumNosSS.js",  				"id": "SumNosSS" },

								//	Spine.
								//{"src": "src/imports/atlas/Bee.atlas", "id": "Bee_atlas" },
								//{"src": "src/imports/img/BigBeeSS.png", "id": "BigBeeSS" },
								//{"src": "src/imports/json/Bee.json", "id": "Bee_json" },


								//	Fonts.

								{"src": "src/imports/img/DreamHeavy40-Red.png", "id": "DreamHeavy40-RedSpriteSheet" },
								{"src": "src/imports/xml/DreamHeavy40-Red.xml", "id": "DreamHeavy40-Red" },

								//	Sounds.
                                {"src": "src/imports/audio/ButtonClick.mp3", "id": "ButtonClick" },
								{"src": "src/imports/audio/Bees.mp3", "id": "Bees" },
								{"src": "src/imports/audio/InstantWin.mp3", "id": "InstantWin" },
								{"src": "src/imports/audio/Loser.mp3", "id": "Loser" },
								{"src": "src/imports/audio/Match3.mp3", "id": "Match3" },
								{"src": "src/imports/audio/Scratch3.mp3", "id": "Scratch3" },
								{"src": "src/imports/audio/Sparkle1.mp3", "id": "Sparkle1" },
								{"src": "src/imports/audio/Sparkle2.mp3", "id": "Sparkle2" },
								{"src": "src/imports/audio/Unravel.mp3", "id": "Unravel" },
								{"src": "src/imports/audio/Winner.mp3", "id": "Winner" },
								{"src": "src/imports/audio/Pop.mp3", "id": "Pop" },
								{"src": "src/imports/audio/Ding.mp3", "id": "Ding" },

								{"src": "src/imports/audio/BeeBuzz1.mp3",    "id": "BeeBuzz1" },
								{"src": "src/imports/audio/BeePrompt.mp3",   "id": "BeePrompt" },
								{"src": "src/imports/audio/BeeLoser1.mp3",   "id": "BeeLoser1" },
								{"src": "src/imports/audio/BeeLoser2.mp3",   "id": "BeeLoser2" },
								{"src": "src/imports/audio/BeeLoser3.mp3",   "id": "BeeLoser3" },
								{"src": "src/imports/audio/BeeCorrect1.mp3", "id": "BeeCorrect1" },
								{"src": "src/imports/audio/BeeCorrect2.mp3", "id": "BeeCorrect2" },
								{"src": "src/imports/audio/BeeCorrect3.mp3", "id": "BeeCorrect3" },
								{"src": "src/imports/audio/BeeCorrect4.mp3", "id": "BeeCorrect4" },
								{"src": "src/imports/audio/BeeCorrect5.mp3", "id": "BeeCorrect5" },

                                // Source Files
                                {"src": "src/Game/GameClass.js", "id": "GameClass" },
								{"src": "src/Game/ScratchSprite.js", "id": "ScratchSprite" },
								{"src": "src/Game/Background.js", "id": "Background" },
								{"src": "src/Game/PollenLayer.js", "id": "PollenLayer" },
								{"src": "src/Game/LogoAndControls.js", "id": "LogoAndControls" },
								{"src": "src/Game/BeeHive.js", "id": "BeeHive" },
								{"src": "src/Game/BigBeeSeq.js", "id": "BigBeeSeq" },
								{"src": "src/Game/SmallBees.js", "id": "SmallBees" },
								{"src": "src/Game/EndScreen.js", "id": "EndScreen" },
								{"src": "src/Game/SoundToggle.js", "id": "SoundToggle" },
								{"src": "src/Game/Glow.js", "id": "Glow" },
								{"src": "src/Game/Font.js", "id": "Font" },
								{"src": "src/Game/Prompt.js", "id": "Prompt" },
								{"src": "src/Game/PromptGlow.js", "id": "PromptGlow" },
								{"src": "src/Game/Ticket.js", "id": "Ticket" },
                                {"src": "src/template_baseClass.js", "id": "template_baseClass"}
							];
			return _manifest;
		});
}(window));
