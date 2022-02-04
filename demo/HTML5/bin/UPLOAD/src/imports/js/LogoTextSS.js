/*jslint nomen: true, browser: true, plusplus: true, devel: true, vars:true, eqeq: true*/
/*global com, camelot*/

/*Generated from TexturPacker*/


(function (window) {
"use strict";
//set local paths to external files
var camelot = window.com.camelot,
iwg = camelot.iwg,
images = window.com.camelot.core.iwgLoadQ.images,
LogoTextSS= function () {
};

//add and set "next":false to stop on last frame

LogoTextSS.spriteSheet = {
"images": [images.LogoTextSS],
"frames": [

[548, 67, 244, 85,0, 122, 42.5], 
[300, 154, 283, 65,0, 141.5, 32.5], 
[300, 2, 527, 63,0, 263.5, 31.5], 
[2, 2, 296, 155,0, 148, 77.5], 
[300, 67, 246, 85,0, 123, 42.5]
],
"animations": {

"betterLuckText":[0], 
"congratsText":[1], 
"instructions":[2], 
"logo":[3], 
"thanksText":[4]
}
}
iwg._class("iwg.imports.js.LogoTextSS", LogoTextSS);
}(window));



