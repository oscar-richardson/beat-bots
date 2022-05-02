/*jslint nomen: true, browser: true, plusplus: true, devel: true, vars:true, eqeq: true*/
/*global com, camelot*/

/*Generated from TexturePacker*/
/* Trimmed */

(function (window) {
  "use strict";
  //set local paths to external files
  var camelot = window.com.camelot,
    iwg = camelot.iwg,
    images = window.com.camelot.core.iwgLoadQ.images,
    BackgroundSS = function () {};

  //add and set "next":false to stop on last frame

  BackgroundSS.spriteSheet = {
    images: [images.BackgroundSS],
    frames: [
      [1, 771, 961, 641, 0, 480.5, 320.5],
      [1, 1, 1136, 768, 0, 568, 384],
      [964, 771, 320, 320, 0, 160, 160],
      [964, 1093, 213, 213, 0, 106.5, 106.5],
    ],
    animations: {
      ActiveGUIDE: [0],
      Background: [1],
      RobotBtn: [2],
      ShadowMC: [3],
    },
  };
  iwg._class("iwg.imports.js.BackgroundSS", BackgroundSS);
})(window);
