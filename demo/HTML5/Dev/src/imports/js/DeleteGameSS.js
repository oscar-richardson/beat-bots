ProjectX	=	window.ProjectX || {};
(function (window)
{
	"use strict";
	var DeleteGameSS = function(){};

	DeleteGameSS.spriteSheet	=	{
		"images":	["DeleteGameSS"],
		"frames":	[
			
			[179, 1, 62, 62,0, 31, 31], 
			[179, 65, 62, 62,0, 31, 31], 
			[179, 129, 62, 62,0, 31, 31], 
			[179, 193, 62, 62,0, 31, 31], 
			[1, 395, 112, 112,0, 56, 56], 
			[115, 395, 112, 112,0, 56, 56], 
			[1, 509, 112, 112,0, 56, 56], 
			[115, 509, 112, 112,0, 56, 56], 
			[1, 1, 176, 198,0, 88, 99], 
			[1, 201, 171, 192,0, 85.5, 96]
		],
		"animations":	{
			
			"Sq_g":[0], 
			"Sq_p":[1], 
			"Sq_w":[2], 
			"Sq_y":[3], 
			"SqDemo_g":[4], 
			"SqDemo_p":[5], 
			"SqDemo_w":[6], 
			"SqDemo_y":[7], 
			"Timer":[8], 
			"TimerBlank":[9]
		}
	};
	ProjectX.SpriteSheets	=	ProjectX.SpriteSheets || {};
	ProjectX.SpriteSheets.DeleteGameSS	=	DeleteGameSS;
}(window));
