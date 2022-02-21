ProjectX	=	window.ProjectX || {};
(function (window)
{
	"use strict";
	var BackgroundSS = function(){};

	BackgroundSS.spriteSheet	=	{
		"images":	["BackgroundSS"],
		"frames":	[

			[1, 771, 961, 641,0, 480.5, 320.5],
			[1, 1, 1136, 768,0, 568, 384],
			[964, 771, 320, 320,0, 160, 160],
			[964, 1093, 213, 213,0, 106.5, 106.5]
		],
		"animations":	{

			"ActiveGUIDE":[0],
			"Background":[1],
			"RobotBtn":[2],
			"ShadowMC":[3]
		}
	};
	ProjectX.SpriteSheets	=	ProjectX.SpriteSheets || {};
	ProjectX.SpriteSheets.BackgroundSS	=	BackgroundSS;
}(window));
