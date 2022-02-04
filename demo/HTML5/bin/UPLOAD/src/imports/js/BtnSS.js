/*jslint nomen: true, browser: true, plusplus: true, devel: true, vars:true, eqeq: true*/
/*global com, camelot*/

/*Generated from TexturPacker*/


(function (window) {
"use strict";
//set local paths to external files
var camelot = window.com.camelot,
iwg = camelot.iwg,
images = window.com.camelot.core.iwgLoadQ.images,
BtnSS= function () {
};

//add and set "next":false to stop on last frame

BtnSS.spriteSheet = {
"images": [images.BtnSS],
"frames": [

[94, 2, 149, 43,0, 74.5, 21.5], 
[2, 2, 44, 44,0, 22, 22], 
[48, 2, 44, 44,0, 22, 22]
],
"animations": {

"FinishBtn":[0], 
"audioBtn0001":[1], 
"audioBtn0002":[2]
}
}
iwg._class("iwg.imports.js.BtnSS", BtnSS);
}(window));



