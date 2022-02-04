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
			var _manifest =[
		{"src": "src/thirdParty/createJS/easeljs-0.7.1.min.js", "id": "easeljs-0" },
		{"src": "src/thirdParty/greensock/TweenMax.min.js", "id": "TweenMax" },
		{"src": "src/thirdParty/jquery-2.0.3.min.js", "id": "jquery" },
		{"src": "src/imports/img/BackgroundSS.png", "id": "BackgroundSS" },
		{"src": "src/imports/js/BackgroundSS.js", "id": "Background" },
		{"src": "src/imports/img/BeeHiveSS.png", "id": "BeeHiveSS" },
		{"src": "src/imports/js/BeeHiveSS.js", "id": "BeeHive" },
		{"src": "src/imports/img/BtnSS.png", "id": "BtnSS" },
		{"src": "src/imports/js/BtnSS.js", "id": "Btn" },
		{"src": "src/imports/img/LogoTextSS.png", "id": "LogoTextSS" },
		{"src": "src/imports/js/LogoTextSS.js", "id": "LogoText" },
		{"src": "src/imports/img/BeeSS.png", "id": "BeeSS" },
		{"src": "src/imports/js/BeeSS.js", "id": "Bee" },
		{"src": "src/imports/img/BigBeeHoverSS.png", "id": "BigBeeHoverSS" },
		{"src": "src/imports/js/BigBeeHoverSS.js", "id": "BigBeeHover" },
		{"src": "src/imports/img/BigBeeCelebSS.png", "id": "BigBeeCelebSS" },
		{"src": "src/imports/js/BigBeeCelebSS.js", "id": "BigBeeCeleb" },
		{"src": "src/imports/img/BigBeeEndSS.png", "id": "BigBeeEndSS" },
		{"src": "src/imports/js/BigBeeEndSS.js", "id": "BigBeeEnd" },
		{"src": "src/imports/img/DreamHeavy40-Red.png", "id": "DreamHeavy40-RedSpriteSheet" },
		{"src": "src/imports/xml/DreamHeavy40-Red.xml", "id": "DreamHeavy40-Red" },
		{"src": "src/imports/audio/ButtonClick.mp3", "id": "ButtonClick" },
		{"src": "src/imports/audio/Bee_BetterLuck.mp3", "id": "Bee_BetterLuck" },
		{"src": "src/imports/audio/Bee_Loop.mp3", "id": "Bee_Loop" },
		{"src": "src/imports/audio/Bee_Lose.mp3", "id": "Bee_Lose" },
		{"src": "src/imports/audio/Bee_Question.mp3", "id": "Bee_Question" },
		{"src": "src/imports/audio/Bee_QuestionA.mp3", "id": "Bee_QuestionA" },
		{"src": "src/imports/audio/Bee_Win.mp3", "id": "Bee_Win" },
		{"src": "src/imports/audio/Bees.mp3", "id": "Bees" },
		{"src": "src/imports/audio/InstantWin.mp3", "id": "InstantWin" },
		{"src": "src/imports/audio/Loser.mp3", "id": "Loser" },
		{"src": "src/imports/audio/Match3.mp3", "id": "Match3" },
		{"src": "src/imports/audio/OpeningJingle.mp3", "id": "OpeningJingle" },
		{"src": "src/imports/audio/Scratch3.mp3", "id": "Scratch3" },
		{"src": "src/imports/audio/Sparkle1.mp3", "id": "Sparkle1" },
		{"src": "src/imports/audio/Sparkle2.mp3", "id": "Sparkle2" },
		{"src": "src/imports/audio/Unravel.mp3", "id": "Unravel" },
		{"src": "src/imports/audio/Winner.mp3", "id": "Winner" },
		{"src": "src/HTML5_min.js", "id": "HTML5_min" }
		];
			return _manifest;
		});
}(window));
