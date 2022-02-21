/* beablib_Camelot 2020_07_13__7-21-41 version: v20200713*/
var BL_timestamp="beablib_Camelot 2020_07_13__7-21-41";
/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10)}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,k=a||"BESbswy",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(""+n+"ms timeout exceeded")):document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},b)}e()}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(""+n+"ms timeout exceeded"))},n)});Promise.race([N,M]).then(function(){clearTimeout(r);a(c)},
b)}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(""+
n+"ms timeout exceeded"));else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50)}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement("div");d.dir="ltr";u(e,L(c,"sans-serif"));u(p,L(c,"serif"));u(q,L(c,"monospace"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v()});u(e,
L(c,'"'+c.family+'",sans-serif'));A(p,function(a){g=a;v()});u(p,L(c,'"'+c.family+'",serif'));A(q,function(a){h=a;v()});u(q,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=B:(window.FontFaceObserver=B,window.FontFaceObserver.prototype.load=B.prototype.load);}());

/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.3.0

Copyright (c) 2015-2020, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).glMatrix={})}(this,(function(t){"use strict";var n="undefined"!=typeof Float32Array?Float32Array:Array,a=Math.random;var r=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var e=Object.freeze({__proto__:null,EPSILON:1e-6,get ARRAY_TYPE(){return n},RANDOM:a,setMatrixArrayType:function(t){n=t},toRadian:function(t){return t*r},equals:function(t,n){return Math.abs(t-n)<=1e-6*Math.max(1,Math.abs(t),Math.abs(n))}});function u(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*i+u*h,t[1]=e*i+o*h,t[2]=r*c+u*s,t[3]=e*c+o*s,t}function o(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}var i=u,h=o,c=Object.freeze({__proto__:null,create:function(){var t=new n(4);return n!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},clone:function(t){var a=new n(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},fromValues:function(t,a,r,e){var u=new n(4);return u[0]=t,u[1]=a,u[2]=r,u[3]=e,u},set:function(t,n,a,r,e){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t},transpose:function(t,n){if(t===n){var a=n[1];t[1]=n[2],t[2]=a}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t},invert:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=a*u-e*r;return o?(o=1/o,t[0]=u*o,t[1]=-r*o,t[2]=-e*o,t[3]=a*o,t):null},adjoint:function(t,n){var a=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=a,t},determinant:function(t){return t[0]*t[3]-t[2]*t[1]},multiply:u,rotate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+u*i,t[1]=e*h+o*i,t[2]=r*-i+u*h,t[3]=e*-i+o*h,t},scale:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=a[0],h=a[1];return t[0]=r*i,t[1]=e*i,t[2]=u*h,t[3]=o*h,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t},str:function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3])},LDU:function(t,n,a,r){return t[2]=r[2]/r[0],a[0]=r[0],a[1]=r[1],a[3]=r[3]-t[2]*a[1],[t,n,a]},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t},subtract:o,exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=1e-6*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=1e-6*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(e-h)<=1e-6*Math.max(1,Math.abs(e),Math.abs(h))&&Math.abs(u-c)<=1e-6*Math.max(1,Math.abs(u),Math.abs(c))},multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t},mul:i,sub:h});function s(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1],M=a[2],f=a[3],l=a[4],v=a[5];return t[0]=r*c+u*s,t[1]=e*c+o*s,t[2]=r*M+u*f,t[3]=e*M+o*f,t[4]=r*l+u*v+i,t[5]=e*l+o*v+h,t}function M(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t}var f=s,l=M,v=Object.freeze({__proto__:null,create:function(){var t=new n(6);return n!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t},clone:function(t){var a=new n(6);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},fromValues:function(t,a,r,e,u,o){var i=new n(6);return i[0]=t,i[1]=a,i[2]=r,i[3]=e,i[4]=u,i[5]=o,i},set:function(t,n,a,r,e,u,o){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t[4]=u,t[5]=o,t},invert:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=a*u-r*e;return h?(h=1/h,t[0]=u*h,t[1]=-r*h,t[2]=-e*h,t[3]=a*h,t[4]=(e*i-u*o)*h,t[5]=(r*o-a*i)*h,t):null},determinant:function(t){return t[0]*t[3]-t[1]*t[2]},multiply:s,rotate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=Math.sin(a),s=Math.cos(a);return t[0]=r*s+u*c,t[1]=e*s+o*c,t[2]=r*-c+u*s,t[3]=e*-c+o*s,t[4]=i,t[5]=h,t},scale:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r*c,t[1]=e*c,t[2]=u*s,t[3]=o*s,t[4]=i,t[5]=h,t},translate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r,t[1]=e,t[2]=u,t[3]=o,t[4]=r*c+u*s+i,t[5]=e*c+o*s+h,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t[4]=0,t[5]=0,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t},str:function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],1)},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t},subtract:M,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=t[4],i=t[5],h=n[0],c=n[1],s=n[2],M=n[3],f=n[4],l=n[5];return Math.abs(a-h)<=1e-6*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(r-c)<=1e-6*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(e-s)<=1e-6*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(u-M)<=1e-6*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(o-f)<=1e-6*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(i-l)<=1e-6*Math.max(1,Math.abs(i),Math.abs(l))},mul:f,sub:l});function b(){var t=new n(9);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function m(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1],v=a[2],b=a[3],m=a[4],d=a[5],p=a[6],x=a[7],y=a[8];return t[0]=f*r+l*o+v*c,t[1]=f*e+l*i+v*s,t[2]=f*u+l*h+v*M,t[3]=b*r+m*o+d*c,t[4]=b*e+m*i+d*s,t[5]=b*u+m*h+d*M,t[6]=p*r+x*o+y*c,t[7]=p*e+x*i+y*s,t[8]=p*u+x*h+y*M,t}function d(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}var p=m,x=d,y=Object.freeze({__proto__:null,create:b,fromMat4:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t},clone:function(t){var a=new n(9);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},fromValues:function(t,a,r,e,u,o,i,h,c){var s=new n(9);return s[0]=t,s[1]=a,s[2]=r,s[3]=e,s[4]=u,s[5]=o,s[6]=i,s[7]=h,s[8]=c,s},set:function(t,n,a,r,e,u,o,i,h,c){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},transpose:function(t,n){if(t===n){var a=n[1],r=n[2],e=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=e}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t},invert:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=s*o-i*c,f=-s*u+i*h,l=c*u-o*h,v=a*M+r*f+e*l;return v?(v=1/v,t[0]=M*v,t[1]=(-s*r+e*c)*v,t[2]=(i*r-e*o)*v,t[3]=f*v,t[4]=(s*a-e*h)*v,t[5]=(-i*a+e*u)*v,t[6]=l*v,t[7]=(-c*a+r*h)*v,t[8]=(o*a-r*u)*v,t):null},adjoint:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8];return t[0]=o*s-i*c,t[1]=e*c-r*s,t[2]=r*i-e*o,t[3]=i*h-u*s,t[4]=a*s-e*h,t[5]=e*u-a*i,t[6]=u*c-o*h,t[7]=r*h-a*c,t[8]=a*o-r*u,t},determinant:function(t){var n=t[0],a=t[1],r=t[2],e=t[3],u=t[4],o=t[5],i=t[6],h=t[7],c=t[8];return n*(c*u-o*h)+a*(-c*e+o*i)+r*(h*e-u*i)},multiply:m,translate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1];return t[0]=r,t[1]=e,t[2]=u,t[3]=o,t[4]=i,t[5]=h,t[6]=f*r+l*o+c,t[7]=f*e+l*i+s,t[8]=f*u+l*h+M,t},rotate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=Math.sin(a),l=Math.cos(a);return t[0]=l*r+f*o,t[1]=l*e+f*i,t[2]=l*u+f*h,t[3]=l*o-f*r,t[4]=l*i-f*e,t[5]=l*h-f*u,t[6]=c,t[7]=s,t[8]=M,t},scale:function(t,n,a){var r=a[0],e=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=e*n[3],t[4]=e*n[4],t[5]=e*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromMat2d:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t},fromQuat:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=a+a,i=r+r,h=e+e,c=a*o,s=r*o,M=r*i,f=e*o,l=e*i,v=e*h,b=u*o,m=u*i,d=u*h;return t[0]=1-M-v,t[3]=s-d,t[6]=f+m,t[1]=s+d,t[4]=1-c-v,t[7]=l-b,t[2]=f-m,t[5]=l+b,t[8]=1-c-M,t},normalFromMat4:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],p=a*i-r*o,x=a*h-e*o,y=a*c-u*o,q=r*h-e*i,g=r*c-u*i,_=e*c-u*h,A=s*b-M*v,w=s*m-f*v,R=s*d-l*v,z=M*m-f*b,j=M*d-l*b,P=f*d-l*m,S=p*P-x*j+y*z+q*R-g*w+_*A;return S?(S=1/S,t[0]=(i*P-h*j+c*z)*S,t[1]=(h*R-o*P-c*w)*S,t[2]=(o*j-i*R+c*A)*S,t[3]=(e*j-r*P-u*z)*S,t[4]=(a*P-e*R+u*w)*S,t[5]=(r*R-a*j-u*A)*S,t[6]=(b*_-m*g+d*q)*S,t[7]=(m*y-v*_-d*x)*S,t[8]=(v*g-b*y+d*p)*S,t):null},projection:function(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},str:function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t},subtract:d,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],M=n[0],f=n[1],l=n[2],v=n[3],b=n[4],m=n[5],d=n[6],p=n[7],x=n[8];return Math.abs(a-M)<=1e-6*Math.max(1,Math.abs(a),Math.abs(M))&&Math.abs(r-f)<=1e-6*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(e-l)<=1e-6*Math.max(1,Math.abs(e),Math.abs(l))&&Math.abs(u-v)<=1e-6*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(o-b)<=1e-6*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(i-m)<=1e-6*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(h-d)<=1e-6*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(c-p)<=1e-6*Math.max(1,Math.abs(c),Math.abs(p))&&Math.abs(s-x)<=1e-6*Math.max(1,Math.abs(s),Math.abs(x))},mul:p,sub:x});function q(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function g(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],b=n[12],m=n[13],d=n[14],p=n[15],x=a[0],y=a[1],q=a[2],g=a[3];return t[0]=x*r+y*i+q*M+g*b,t[1]=x*e+y*h+q*f+g*m,t[2]=x*u+y*c+q*l+g*d,t[3]=x*o+y*s+q*v+g*p,x=a[4],y=a[5],q=a[6],g=a[7],t[4]=x*r+y*i+q*M+g*b,t[5]=x*e+y*h+q*f+g*m,t[6]=x*u+y*c+q*l+g*d,t[7]=x*o+y*s+q*v+g*p,x=a[8],y=a[9],q=a[10],g=a[11],t[8]=x*r+y*i+q*M+g*b,t[9]=x*e+y*h+q*f+g*m,t[10]=x*u+y*c+q*l+g*d,t[11]=x*o+y*s+q*v+g*p,x=a[12],y=a[13],q=a[14],g=a[15],t[12]=x*r+y*i+q*M+g*b,t[13]=x*e+y*h+q*f+g*m,t[14]=x*u+y*c+q*l+g*d,t[15]=x*o+y*s+q*v+g*p,t}function _(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=r+r,h=e+e,c=u+u,s=r*i,M=r*h,f=r*c,l=e*h,v=e*c,b=u*c,m=o*i,d=o*h,p=o*c;return t[0]=1-(l+b),t[1]=M+p,t[2]=f-d,t[3]=0,t[4]=M-p,t[5]=1-(s+b),t[6]=v+m,t[7]=0,t[8]=f+d,t[9]=v-m,t[10]=1-(s+l),t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function A(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function w(t,n){var a=n[0],r=n[1],e=n[2],u=n[4],o=n[5],i=n[6],h=n[8],c=n[9],s=n[10];return t[0]=Math.hypot(a,r,e),t[1]=Math.hypot(u,o,i),t[2]=Math.hypot(h,c,s),t}function R(t,a){var r=new n(3);w(r,a);var e=1/r[0],u=1/r[1],o=1/r[2],i=a[0]*e,h=a[1]*u,c=a[2]*o,s=a[4]*e,M=a[5]*u,f=a[6]*o,l=a[8]*e,v=a[9]*u,b=a[10]*o,m=i+M+b,d=0;return m>0?(d=2*Math.sqrt(m+1),t[3]=.25*d,t[0]=(f-v)/d,t[1]=(l-c)/d,t[2]=(h-s)/d):i>M&&i>b?(d=2*Math.sqrt(1+i-M-b),t[3]=(f-v)/d,t[0]=.25*d,t[1]=(h+s)/d,t[2]=(l+c)/d):M>b?(d=2*Math.sqrt(1+M-i-b),t[3]=(l-c)/d,t[0]=(h+s)/d,t[1]=.25*d,t[2]=(f+v)/d):(d=2*Math.sqrt(1+b-i-M),t[3]=(h-s)/d,t[0]=(l+c)/d,t[1]=(f+v)/d,t[2]=.25*d),t}function z(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t[9]=n[9]-a[9],t[10]=n[10]-a[10],t[11]=n[11]-a[11],t[12]=n[12]-a[12],t[13]=n[13]-a[13],t[14]=n[14]-a[14],t[15]=n[15]-a[15],t}var j=g,P=z,S=Object.freeze({__proto__:null,create:function(){var t=new n(16);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},clone:function(t){var a=new n(16);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},fromValues:function(t,a,r,e,u,o,i,h,c,s,M,f,l,v,b,m){var d=new n(16);return d[0]=t,d[1]=a,d[2]=r,d[3]=e,d[4]=u,d[5]=o,d[6]=i,d[7]=h,d[8]=c,d[9]=s,d[10]=M,d[11]=f,d[12]=l,d[13]=v,d[14]=b,d[15]=m,d},set:function(t,n,a,r,e,u,o,i,h,c,s,M,f,l,v,b,m){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t[9]=s,t[10]=M,t[11]=f,t[12]=l,t[13]=v,t[14]=b,t[15]=m,t},identity:q,transpose:function(t,n){if(t===n){var a=n[1],r=n[2],e=n[3],u=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=a,t[6]=n[9],t[7]=n[13],t[8]=r,t[9]=u,t[11]=n[14],t[12]=e,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t},invert:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],p=a*i-r*o,x=a*h-e*o,y=a*c-u*o,q=r*h-e*i,g=r*c-u*i,_=e*c-u*h,A=s*b-M*v,w=s*m-f*v,R=s*d-l*v,z=M*m-f*b,j=M*d-l*b,P=f*d-l*m,S=p*P-x*j+y*z+q*R-g*w+_*A;return S?(S=1/S,t[0]=(i*P-h*j+c*z)*S,t[1]=(e*j-r*P-u*z)*S,t[2]=(b*_-m*g+d*q)*S,t[3]=(f*g-M*_-l*q)*S,t[4]=(h*R-o*P-c*w)*S,t[5]=(a*P-e*R+u*w)*S,t[6]=(m*y-v*_-d*x)*S,t[7]=(s*_-f*y+l*x)*S,t[8]=(o*j-i*R+c*A)*S,t[9]=(r*R-a*j-u*A)*S,t[10]=(v*g-b*y+d*p)*S,t[11]=(M*y-s*g-l*p)*S,t[12]=(i*w-o*z-h*A)*S,t[13]=(a*z-r*w+e*A)*S,t[14]=(b*x-v*q-m*p)*S,t[15]=(s*q-M*x+f*p)*S,t):null},adjoint:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15];return t[0]=i*(f*d-l*m)-M*(h*d-c*m)+b*(h*l-c*f),t[1]=-(r*(f*d-l*m)-M*(e*d-u*m)+b*(e*l-u*f)),t[2]=r*(h*d-c*m)-i*(e*d-u*m)+b*(e*c-u*h),t[3]=-(r*(h*l-c*f)-i*(e*l-u*f)+M*(e*c-u*h)),t[4]=-(o*(f*d-l*m)-s*(h*d-c*m)+v*(h*l-c*f)),t[5]=a*(f*d-l*m)-s*(e*d-u*m)+v*(e*l-u*f),t[6]=-(a*(h*d-c*m)-o*(e*d-u*m)+v*(e*c-u*h)),t[7]=a*(h*l-c*f)-o*(e*l-u*f)+s*(e*c-u*h),t[8]=o*(M*d-l*b)-s*(i*d-c*b)+v*(i*l-c*M),t[9]=-(a*(M*d-l*b)-s*(r*d-u*b)+v*(r*l-u*M)),t[10]=a*(i*d-c*b)-o*(r*d-u*b)+v*(r*c-u*i),t[11]=-(a*(i*l-c*M)-o*(r*l-u*M)+s*(r*c-u*i)),t[12]=-(o*(M*m-f*b)-s*(i*m-h*b)+v*(i*f-h*M)),t[13]=a*(M*m-f*b)-s*(r*m-e*b)+v*(r*f-e*M),t[14]=-(a*(i*m-h*b)-o*(r*m-e*b)+v*(r*h-e*i)),t[15]=a*(i*f-h*M)-o*(r*f-e*M)+s*(r*h-e*i),t},determinant:function(t){var n=t[0],a=t[1],r=t[2],e=t[3],u=t[4],o=t[5],i=t[6],h=t[7],c=t[8],s=t[9],M=t[10],f=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return(n*o-a*u)*(M*m-f*b)-(n*i-r*u)*(s*m-f*v)+(n*h-e*u)*(s*b-M*v)+(a*i-r*o)*(c*m-f*l)-(a*h-e*o)*(c*b-M*l)+(r*h-e*i)*(c*v-s*l)},multiply:g,translate:function(t,n,a){var r,e,u,o,i,h,c,s,M,f,l,v,b=a[0],m=a[1],d=a[2];return n===t?(t[12]=n[0]*b+n[4]*m+n[8]*d+n[12],t[13]=n[1]*b+n[5]*m+n[9]*d+n[13],t[14]=n[2]*b+n[6]*m+n[10]*d+n[14],t[15]=n[3]*b+n[7]*m+n[11]*d+n[15]):(r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],t[0]=r,t[1]=e,t[2]=u,t[3]=o,t[4]=i,t[5]=h,t[6]=c,t[7]=s,t[8]=M,t[9]=f,t[10]=l,t[11]=v,t[12]=r*b+i*m+M*d+n[12],t[13]=e*b+h*m+f*d+n[13],t[14]=u*b+c*m+l*d+n[14],t[15]=o*b+s*m+v*d+n[15]),t},scale:function(t,n,a){var r=a[0],e=a[1],u=a[2];return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*e,t[5]=n[5]*e,t[6]=n[6]*e,t[7]=n[7]*e,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=n[11]*u,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},rotate:function(t,n,a,r){var e,u,o,i,h,c,s,M,f,l,v,b,m,d,p,x,y,q,g,_,A,w,R,z,j=r[0],P=r[1],S=r[2],E=Math.hypot(j,P,S);return E<1e-6?null:(j*=E=1/E,P*=E,S*=E,e=Math.sin(a),o=1-(u=Math.cos(a)),i=n[0],h=n[1],c=n[2],s=n[3],M=n[4],f=n[5],l=n[6],v=n[7],b=n[8],m=n[9],d=n[10],p=n[11],x=j*j*o+u,y=P*j*o+S*e,q=S*j*o-P*e,g=j*P*o-S*e,_=P*P*o+u,A=S*P*o+j*e,w=j*S*o+P*e,R=P*S*o-j*e,z=S*S*o+u,t[0]=i*x+M*y+b*q,t[1]=h*x+f*y+m*q,t[2]=c*x+l*y+d*q,t[3]=s*x+v*y+p*q,t[4]=i*g+M*_+b*A,t[5]=h*g+f*_+m*A,t[6]=c*g+l*_+d*A,t[7]=s*g+v*_+p*A,t[8]=i*w+M*R+b*z,t[9]=h*w+f*R+m*z,t[10]=c*w+l*R+d*z,t[11]=s*w+v*R+p*z,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)},rotateX:function(t,n,a){var r=Math.sin(a),e=Math.cos(a),u=n[4],o=n[5],i=n[6],h=n[7],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=u*e+c*r,t[5]=o*e+s*r,t[6]=i*e+M*r,t[7]=h*e+f*r,t[8]=c*e-u*r,t[9]=s*e-o*r,t[10]=M*e-i*r,t[11]=f*e-h*r,t},rotateY:function(t,n,a){var r=Math.sin(a),e=Math.cos(a),u=n[0],o=n[1],i=n[2],h=n[3],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*e-c*r,t[1]=o*e-s*r,t[2]=i*e-M*r,t[3]=h*e-f*r,t[8]=u*r+c*e,t[9]=o*r+s*e,t[10]=i*r+M*e,t[11]=h*r+f*e,t},rotateZ:function(t,n,a){var r=Math.sin(a),e=Math.cos(a),u=n[0],o=n[1],i=n[2],h=n[3],c=n[4],s=n[5],M=n[6],f=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*e+c*r,t[1]=o*e+s*r,t[2]=i*e+M*r,t[3]=h*e+f*r,t[4]=c*e-u*r,t[5]=s*e-o*r,t[6]=M*e-i*r,t[7]=f*e-h*r,t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotation:function(t,n,a){var r,e,u,o=a[0],i=a[1],h=a[2],c=Math.hypot(o,i,h);return c<1e-6?null:(o*=c=1/c,i*=c,h*=c,r=Math.sin(n),u=1-(e=Math.cos(n)),t[0]=o*o*u+e,t[1]=i*o*u+h*r,t[2]=h*o*u-i*r,t[3]=0,t[4]=o*i*u-h*r,t[5]=i*i*u+e,t[6]=h*i*u+o*r,t[7]=0,t[8]=o*h*u+i*r,t[9]=i*h*u-o*r,t[10]=h*h*u+e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},fromXRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=a,t[7]=0,t[8]=0,t[9]=-a,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromYRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=0,t[2]=-a,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=a,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=0,t[4]=-a,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotationTranslation:_,fromQuat2:function(t,a){var r=new n(3),e=-a[0],u=-a[1],o=-a[2],i=a[3],h=a[4],c=a[5],s=a[6],M=a[7],f=e*e+u*u+o*o+i*i;return f>0?(r[0]=2*(h*i+M*e+c*o-s*u)/f,r[1]=2*(c*i+M*u+s*e-h*o)/f,r[2]=2*(s*i+M*o+h*u-c*e)/f):(r[0]=2*(h*i+M*e+c*o-s*u),r[1]=2*(c*i+M*u+s*e-h*o),r[2]=2*(s*i+M*o+h*u-c*e)),_(t,a,r),t},getTranslation:A,getScaling:w,getRotation:R,fromRotationTranslationScale:function(t,n,a,r){var e=n[0],u=n[1],o=n[2],i=n[3],h=e+e,c=u+u,s=o+o,M=e*h,f=e*c,l=e*s,v=u*c,b=u*s,m=o*s,d=i*h,p=i*c,x=i*s,y=r[0],q=r[1],g=r[2];return t[0]=(1-(v+m))*y,t[1]=(f+x)*y,t[2]=(l-p)*y,t[3]=0,t[4]=(f-x)*q,t[5]=(1-(M+m))*q,t[6]=(b+d)*q,t[7]=0,t[8]=(l+p)*g,t[9]=(b-d)*g,t[10]=(1-(M+v))*g,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t},fromRotationTranslationScaleOrigin:function(t,n,a,r,e){var u=n[0],o=n[1],i=n[2],h=n[3],c=u+u,s=o+o,M=i+i,f=u*c,l=u*s,v=u*M,b=o*s,m=o*M,d=i*M,p=h*c,x=h*s,y=h*M,q=r[0],g=r[1],_=r[2],A=e[0],w=e[1],R=e[2],z=(1-(b+d))*q,j=(l+y)*q,P=(v-x)*q,S=(l-y)*g,E=(1-(f+d))*g,O=(m+p)*g,T=(v+x)*_,D=(m-p)*_,F=(1-(f+b))*_;return t[0]=z,t[1]=j,t[2]=P,t[3]=0,t[4]=S,t[5]=E,t[6]=O,t[7]=0,t[8]=T,t[9]=D,t[10]=F,t[11]=0,t[12]=a[0]+A-(z*A+S*w+T*R),t[13]=a[1]+w-(j*A+E*w+D*R),t[14]=a[2]+R-(P*A+O*w+F*R),t[15]=1,t},fromQuat:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=a+a,i=r+r,h=e+e,c=a*o,s=r*o,M=r*i,f=e*o,l=e*i,v=e*h,b=u*o,m=u*i,d=u*h;return t[0]=1-M-v,t[1]=s+d,t[2]=f-m,t[3]=0,t[4]=s-d,t[5]=1-c-v,t[6]=l+b,t[7]=0,t[8]=f+m,t[9]=l-b,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},frustum:function(t,n,a,r,e,u,o){var i=1/(a-n),h=1/(e-r),c=1/(u-o);return t[0]=2*u*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*u*h,t[6]=0,t[7]=0,t[8]=(a+n)*i,t[9]=(e+r)*h,t[10]=(o+u)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*u*2*c,t[15]=0,t},perspective:function(t,n,a,r,e){var u,o=1/Math.tan(n/2);return t[0]=o/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=e&&e!==1/0?(u=1/(r-e),t[10]=(e+r)*u,t[14]=2*e*r*u):(t[10]=-1,t[14]=-2*r),t},perspectiveFromFieldOfView:function(t,n,a,r){var e=Math.tan(n.upDegrees*Math.PI/180),u=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),h=2/(o+i),c=2/(e+u);return t[0]=h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*h*.5,t[9]=(e-u)*c*.5,t[10]=r/(a-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*a/(a-r),t[15]=0,t},ortho:function(t,n,a,r,e,u,o){var i=1/(n-a),h=1/(r-e),c=1/(u-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+a)*i,t[13]=(e+r)*h,t[14]=(o+u)*c,t[15]=1,t},lookAt:function(t,n,a,r){var e,u,o,i,h,c,s,M,f,l,v=n[0],b=n[1],m=n[2],d=r[0],p=r[1],x=r[2],y=a[0],g=a[1],_=a[2];return Math.abs(v-y)<1e-6&&Math.abs(b-g)<1e-6&&Math.abs(m-_)<1e-6?q(t):(s=v-y,M=b-g,f=m-_,e=p*(f*=l=1/Math.hypot(s,M,f))-x*(M*=l),u=x*(s*=l)-d*f,o=d*M-p*s,(l=Math.hypot(e,u,o))?(e*=l=1/l,u*=l,o*=l):(e=0,u=0,o=0),i=M*o-f*u,h=f*e-s*o,c=s*u-M*e,(l=Math.hypot(i,h,c))?(i*=l=1/l,h*=l,c*=l):(i=0,h=0,c=0),t[0]=e,t[1]=i,t[2]=s,t[3]=0,t[4]=u,t[5]=h,t[6]=M,t[7]=0,t[8]=o,t[9]=c,t[10]=f,t[11]=0,t[12]=-(e*v+u*b+o*m),t[13]=-(i*v+h*b+c*m),t[14]=-(s*v+M*b+f*m),t[15]=1,t)},targetTo:function(t,n,a,r){var e=n[0],u=n[1],o=n[2],i=r[0],h=r[1],c=r[2],s=e-a[0],M=u-a[1],f=o-a[2],l=s*s+M*M+f*f;l>0&&(s*=l=1/Math.sqrt(l),M*=l,f*=l);var v=h*f-c*M,b=c*s-i*f,m=i*M-h*s;return(l=v*v+b*b+m*m)>0&&(v*=l=1/Math.sqrt(l),b*=l,m*=l),t[0]=v,t[1]=b,t[2]=m,t[3]=0,t[4]=M*m-f*b,t[5]=f*v-s*m,t[6]=s*b-M*v,t[7]=0,t[8]=s,t[9]=M,t[10]=f,t[11]=0,t[12]=e,t[13]=u,t[14]=o,t[15]=1,t},str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t[9]=n[9]+a[9],t[10]=n[10]+a[10],t[11]=n[11]+a[11],t[12]=n[12]+a[12],t[13]=n[13]+a[13],t[14]=n[14]+a[14],t[15]=n[15]+a[15],t},subtract:z,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12]*a,t[13]=n[13]*a,t[14]=n[14]*a,t[15]=n[15]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t[9]=n[9]+a[9]*r,t[10]=n[10]+a[10]*r,t[11]=n[11]+a[11]*r,t[12]=n[12]+a[12]*r,t[13]=n[13]+a[13]*r,t[14]=n[14]+a[14]*r,t[15]=n[15]+a[15]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],M=t[9],f=t[10],l=t[11],v=t[12],b=t[13],m=t[14],d=t[15],p=n[0],x=n[1],y=n[2],q=n[3],g=n[4],_=n[5],A=n[6],w=n[7],R=n[8],z=n[9],j=n[10],P=n[11],S=n[12],E=n[13],O=n[14],T=n[15];return Math.abs(a-p)<=1e-6*Math.max(1,Math.abs(a),Math.abs(p))&&Math.abs(r-x)<=1e-6*Math.max(1,Math.abs(r),Math.abs(x))&&Math.abs(e-y)<=1e-6*Math.max(1,Math.abs(e),Math.abs(y))&&Math.abs(u-q)<=1e-6*Math.max(1,Math.abs(u),Math.abs(q))&&Math.abs(o-g)<=1e-6*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(i-_)<=1e-6*Math.max(1,Math.abs(i),Math.abs(_))&&Math.abs(h-A)<=1e-6*Math.max(1,Math.abs(h),Math.abs(A))&&Math.abs(c-w)<=1e-6*Math.max(1,Math.abs(c),Math.abs(w))&&Math.abs(s-R)<=1e-6*Math.max(1,Math.abs(s),Math.abs(R))&&Math.abs(M-z)<=1e-6*Math.max(1,Math.abs(M),Math.abs(z))&&Math.abs(f-j)<=1e-6*Math.max(1,Math.abs(f),Math.abs(j))&&Math.abs(l-P)<=1e-6*Math.max(1,Math.abs(l),Math.abs(P))&&Math.abs(v-S)<=1e-6*Math.max(1,Math.abs(v),Math.abs(S))&&Math.abs(b-E)<=1e-6*Math.max(1,Math.abs(b),Math.abs(E))&&Math.abs(m-O)<=1e-6*Math.max(1,Math.abs(m),Math.abs(O))&&Math.abs(d-T)<=1e-6*Math.max(1,Math.abs(d),Math.abs(T))},mul:j,sub:P});function E(){var t=new n(3);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function O(t){var n=t[0],a=t[1],r=t[2];return Math.hypot(n,a,r)}function T(t,a,r){var e=new n(3);return e[0]=t,e[1]=a,e[2]=r,e}function D(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function F(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function I(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function L(t,n){var a=n[0]-t[0],r=n[1]-t[1],e=n[2]-t[2];return Math.hypot(a,r,e)}function V(t,n){var a=n[0]-t[0],r=n[1]-t[1],e=n[2]-t[2];return a*a+r*r+e*e}function Q(t){var n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function Y(t,n){var a=n[0],r=n[1],e=n[2],u=a*a+r*r+e*e;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t[2]=n[2]*u,t}function X(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Z(t,n,a){var r=n[0],e=n[1],u=n[2],o=a[0],i=a[1],h=a[2];return t[0]=e*h-u*i,t[1]=u*o-r*h,t[2]=r*i-e*o,t}var B,N=D,k=F,U=I,W=L,C=V,G=O,H=Q,J=(B=E(),function(t,n,a,r,e,u){var o,i;for(n||(n=3),a||(a=0),i=r?Math.min(r*n+a,t.length):t.length,o=a;o<i;o+=n)B[0]=t[o],B[1]=t[o+1],B[2]=t[o+2],e(B,B,u),t[o]=B[0],t[o+1]=B[1],t[o+2]=B[2];return t}),K=Object.freeze({__proto__:null,create:E,clone:function(t){var a=new n(3);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a},length:O,fromValues:T,copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},set:function(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t},subtract:D,multiply:F,divide:I,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t},scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t},distance:L,squaredDistance:V,squaredLength:Q,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},normalize:Y,dot:X,cross:Z,lerp:function(t,n,a,r){var e=n[0],u=n[1],o=n[2];return t[0]=e+r*(a[0]-e),t[1]=u+r*(a[1]-u),t[2]=o+r*(a[2]-o),t},hermite:function(t,n,a,r,e,u){var o=u*u,i=o*(2*u-3)+1,h=o*(u-2)+u,c=o*(u-1),s=o*(3-2*u);return t[0]=n[0]*i+a[0]*h+r[0]*c+e[0]*s,t[1]=n[1]*i+a[1]*h+r[1]*c+e[1]*s,t[2]=n[2]*i+a[2]*h+r[2]*c+e[2]*s,t},bezier:function(t,n,a,r,e,u){var o=1-u,i=o*o,h=u*u,c=i*o,s=3*u*i,M=3*h*o,f=h*u;return t[0]=n[0]*c+a[0]*s+r[0]*M+e[0]*f,t[1]=n[1]*c+a[1]*s+r[1]*M+e[1]*f,t[2]=n[2]*c+a[2]*s+r[2]*M+e[2]*f,t},random:function(t,n){n=n||1;var r=2*a()*Math.PI,e=2*a()-1,u=Math.sqrt(1-e*e)*n;return t[0]=Math.cos(r)*u,t[1]=Math.sin(r)*u,t[2]=e*n,t},transformMat4:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=a[3]*r+a[7]*e+a[11]*u+a[15];return o=o||1,t[0]=(a[0]*r+a[4]*e+a[8]*u+a[12])/o,t[1]=(a[1]*r+a[5]*e+a[9]*u+a[13])/o,t[2]=(a[2]*r+a[6]*e+a[10]*u+a[14])/o,t},transformMat3:function(t,n,a){var r=n[0],e=n[1],u=n[2];return t[0]=r*a[0]+e*a[3]+u*a[6],t[1]=r*a[1]+e*a[4]+u*a[7],t[2]=r*a[2]+e*a[5]+u*a[8],t},transformQuat:function(t,n,a){var r=a[0],e=a[1],u=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=e*c-u*h,M=u*i-r*c,f=r*h-e*i,l=e*f-u*M,v=u*s-r*f,b=r*M-e*s,m=2*o;return s*=m,M*=m,f*=m,l*=2,v*=2,b*=2,t[0]=i+s+l,t[1]=h+M+v,t[2]=c+f+b,t},rotateX:function(t,n,a,r){var e=[],u=[];return e[0]=n[0]-a[0],e[1]=n[1]-a[1],e[2]=n[2]-a[2],u[0]=e[0],u[1]=e[1]*Math.cos(r)-e[2]*Math.sin(r),u[2]=e[1]*Math.sin(r)+e[2]*Math.cos(r),t[0]=u[0]+a[0],t[1]=u[1]+a[1],t[2]=u[2]+a[2],t},rotateY:function(t,n,a,r){var e=[],u=[];return e[0]=n[0]-a[0],e[1]=n[1]-a[1],e[2]=n[2]-a[2],u[0]=e[2]*Math.sin(r)+e[0]*Math.cos(r),u[1]=e[1],u[2]=e[2]*Math.cos(r)-e[0]*Math.sin(r),t[0]=u[0]+a[0],t[1]=u[1]+a[1],t[2]=u[2]+a[2],t},rotateZ:function(t,n,a,r){var e=[],u=[];return e[0]=n[0]-a[0],e[1]=n[1]-a[1],e[2]=n[2]-a[2],u[0]=e[0]*Math.cos(r)-e[1]*Math.sin(r),u[1]=e[0]*Math.sin(r)+e[1]*Math.cos(r),u[2]=e[2],t[0]=u[0]+a[0],t[1]=u[1]+a[1],t[2]=u[2]+a[2],t},angle:function(t,n){var a=t[0],r=t[1],e=t[2],u=n[0],o=n[1],i=n[2],h=Math.sqrt(a*a+r*r+e*e)*Math.sqrt(u*u+o*o+i*i),c=h&&X(t,n)/h;return Math.acos(Math.min(Math.max(c,-1),1))},zero:function(t){return t[0]=0,t[1]=0,t[2]=0,t},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=n[0],o=n[1],i=n[2];return Math.abs(a-u)<=1e-6*Math.max(1,Math.abs(a),Math.abs(u))&&Math.abs(r-o)<=1e-6*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(e-i)<=1e-6*Math.max(1,Math.abs(e),Math.abs(i))},sub:N,mul:k,div:U,dist:W,sqrDist:C,len:G,sqrLen:H,forEach:J});function $(){var t=new n(4);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function tt(t){var a=new n(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a}function nt(t,a,r,e){var u=new n(4);return u[0]=t,u[1]=a,u[2]=r,u[3]=e,u}function at(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function rt(t,n,a,r,e){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t}function et(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function ut(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function ot(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function it(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function ht(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function ct(t,n){var a=n[0]-t[0],r=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return Math.hypot(a,r,e,u)}function st(t,n){var a=n[0]-t[0],r=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return a*a+r*r+e*e+u*u}function Mt(t){var n=t[0],a=t[1],r=t[2],e=t[3];return Math.hypot(n,a,r,e)}function ft(t){var n=t[0],a=t[1],r=t[2],e=t[3];return n*n+a*a+r*r+e*e}function lt(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=a*a+r*r+e*e+u*u;return o>0&&(o=1/Math.sqrt(o)),t[0]=a*o,t[1]=r*o,t[2]=e*o,t[3]=u*o,t}function vt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function bt(t,n,a,r){var e=n[0],u=n[1],o=n[2],i=n[3];return t[0]=e+r*(a[0]-e),t[1]=u+r*(a[1]-u),t[2]=o+r*(a[2]-o),t[3]=i+r*(a[3]-i),t}function mt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function dt(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=1e-6*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=1e-6*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(e-h)<=1e-6*Math.max(1,Math.abs(e),Math.abs(h))&&Math.abs(u-c)<=1e-6*Math.max(1,Math.abs(u),Math.abs(c))}var pt=ut,xt=ot,yt=it,qt=ct,gt=st,_t=Mt,At=ft,wt=function(){var t=$();return function(n,a,r,e,u,o){var i,h;for(a||(a=4),r||(r=0),h=e?Math.min(e*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],u(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}(),Rt=Object.freeze({__proto__:null,create:$,clone:tt,fromValues:nt,copy:at,set:rt,add:et,subtract:ut,multiply:ot,divide:it,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:ht,scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t},distance:ct,squaredDistance:st,length:Mt,squaredLength:ft,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},normalize:lt,dot:vt,cross:function(t,n,a,r){var e=a[0]*r[1]-a[1]*r[0],u=a[0]*r[2]-a[2]*r[0],o=a[0]*r[3]-a[3]*r[0],i=a[1]*r[2]-a[2]*r[1],h=a[1]*r[3]-a[3]*r[1],c=a[2]*r[3]-a[3]*r[2],s=n[0],M=n[1],f=n[2],l=n[3];return t[0]=M*c-f*h+l*i,t[1]=-s*c+f*o-l*u,t[2]=s*h-M*o+l*e,t[3]=-s*i+M*u-f*e,t},lerp:bt,random:function(t,n){var r,e,u,o,i,h;n=n||1;do{i=(r=2*a()-1)*r+(e=2*a()-1)*e}while(i>=1);do{h=(u=2*a()-1)*u+(o=2*a()-1)*o}while(h>=1);var c=Math.sqrt((1-i)/h);return t[0]=n*r,t[1]=n*e,t[2]=n*u*c,t[3]=n*o*c,t},transformMat4:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3];return t[0]=a[0]*r+a[4]*e+a[8]*u+a[12]*o,t[1]=a[1]*r+a[5]*e+a[9]*u+a[13]*o,t[2]=a[2]*r+a[6]*e+a[10]*u+a[14]*o,t[3]=a[3]*r+a[7]*e+a[11]*u+a[15]*o,t},transformQuat:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=a[0],i=a[1],h=a[2],c=a[3],s=c*r+i*u-h*e,M=c*e+h*r-o*u,f=c*u+o*e-i*r,l=-o*r-i*e-h*u;return t[0]=s*c+l*-o+M*-h-f*-i,t[1]=M*c+l*-i+f*-o-s*-h,t[2]=f*c+l*-h+s*-i-M*-o,t[3]=n[3],t},zero:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:mt,equals:dt,sub:pt,mul:xt,div:yt,dist:qt,sqrDist:gt,len:_t,sqrLen:At,forEach:wt});function zt(){var t=new n(4);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function jt(t,n,a){a*=.5;var r=Math.sin(a);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(a),t}function Pt(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+e*c-u*h,t[1]=e*s+o*h+u*i-r*c,t[2]=u*s+o*c+r*h-e*i,t[3]=o*s-r*i-e*h-u*c,t}function St(t,n,a){a*=.5;var r=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+o*i,t[1]=e*h+u*i,t[2]=u*h-e*i,t[3]=o*h-r*i,t}function Et(t,n,a){a*=.5;var r=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h-u*i,t[1]=e*h+o*i,t[2]=u*h+r*i,t[3]=o*h-e*i,t}function Ot(t,n,a){a*=.5;var r=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+e*i,t[1]=e*h-r*i,t[2]=u*h+o*i,t[3]=o*h-u*i,t}function Tt(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=Math.sqrt(a*a+r*r+e*e),i=Math.exp(u),h=o>0?i*Math.sin(o)/o:0;return t[0]=a*h,t[1]=r*h,t[2]=e*h,t[3]=i*Math.cos(o),t}function Dt(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=Math.sqrt(a*a+r*r+e*e),i=o>0?Math.atan2(o,u)/o:0;return t[0]=a*i,t[1]=r*i,t[2]=e*i,t[3]=.5*Math.log(a*a+r*r+e*e+u*u),t}function Ft(t,n,a,r){var e,u,o,i,h,c=n[0],s=n[1],M=n[2],f=n[3],l=a[0],v=a[1],b=a[2],m=a[3];return(u=c*l+s*v+M*b+f*m)<0&&(u=-u,l=-l,v=-v,b=-b,m=-m),1-u>1e-6?(e=Math.acos(u),o=Math.sin(e),i=Math.sin((1-r)*e)/o,h=Math.sin(r*e)/o):(i=1-r,h=r),t[0]=i*c+h*l,t[1]=i*s+h*v,t[2]=i*M+h*b,t[3]=i*f+h*m,t}function It(t,n){var a,r=n[0]+n[4]+n[8];if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);var u=(e+1)%3,o=(e+2)%3;a=Math.sqrt(n[3*e+e]-n[3*u+u]-n[3*o+o]+1),t[e]=.5*a,a=.5/a,t[3]=(n[3*u+o]-n[3*o+u])*a,t[u]=(n[3*u+e]+n[3*e+u])*a,t[o]=(n[3*o+e]+n[3*e+o])*a}return t}var Lt,Vt,Qt,Yt,Xt,Zt,Bt=tt,Nt=nt,kt=at,Ut=rt,Wt=et,Ct=Pt,Gt=ht,Ht=vt,Jt=bt,Kt=Mt,$t=Kt,tn=ft,nn=tn,an=lt,rn=mt,en=dt,un=(Lt=E(),Vt=T(1,0,0),Qt=T(0,1,0),function(t,n,a){var r=X(n,a);return r<-.999999?(Z(Lt,Vt,n),G(Lt)<1e-6&&Z(Lt,Qt,n),Y(Lt,Lt),jt(t,Lt,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Z(Lt,n,a),t[0]=Lt[0],t[1]=Lt[1],t[2]=Lt[2],t[3]=1+r,an(t,t))}),on=(Yt=zt(),Xt=zt(),function(t,n,a,r,e,u){return Ft(Yt,n,e,u),Ft(Xt,a,r,u),Ft(t,Yt,Xt,2*u*(1-u)),t}),hn=(Zt=b(),function(t,n,a,r){return Zt[0]=a[0],Zt[3]=a[1],Zt[6]=a[2],Zt[1]=r[0],Zt[4]=r[1],Zt[7]=r[2],Zt[2]=-n[0],Zt[5]=-n[1],Zt[8]=-n[2],an(t,It(t,Zt))}),cn=Object.freeze({__proto__:null,create:zt,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:jt,getAxisAngle:function(t,n){var a=2*Math.acos(n[3]),r=Math.sin(a/2);return r>1e-6?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),a},getAngle:function(t,n){var a=Ht(t,n);return Math.acos(2*a*a-1)},multiply:Pt,rotateX:St,rotateY:Et,rotateZ:Ot,calculateW:function(t,n){var a=n[0],r=n[1],e=n[2];return t[0]=a,t[1]=r,t[2]=e,t[3]=Math.sqrt(Math.abs(1-a*a-r*r-e*e)),t},exp:Tt,ln:Dt,pow:function(t,n,a){return Dt(t,n),Gt(t,t,a),Tt(t,t),t},slerp:Ft,random:function(t){var n=a(),r=a(),e=a(),u=Math.sqrt(1-n),o=Math.sqrt(n);return t[0]=u*Math.sin(2*Math.PI*r),t[1]=u*Math.cos(2*Math.PI*r),t[2]=o*Math.sin(2*Math.PI*e),t[3]=o*Math.cos(2*Math.PI*e),t},invert:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=a*a+r*r+e*e+u*u,i=o?1/o:0;return t[0]=-a*i,t[1]=-r*i,t[2]=-e*i,t[3]=u*i,t},conjugate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t},fromMat3:It,fromEuler:function(t,n,a,r){var e=.5*Math.PI/180;n*=e,a*=e,r*=e;var u=Math.sin(n),o=Math.cos(n),i=Math.sin(a),h=Math.cos(a),c=Math.sin(r),s=Math.cos(r);return t[0]=u*h*s-o*i*c,t[1]=o*i*s+u*h*c,t[2]=o*h*c-u*i*s,t[3]=o*h*s+u*i*c,t},str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},clone:Bt,fromValues:Nt,copy:kt,set:Ut,add:Wt,mul:Ct,scale:Gt,dot:Ht,lerp:Jt,length:Kt,len:$t,squaredLength:tn,sqrLen:nn,normalize:an,exactEquals:rn,equals:en,rotationTo:un,sqlerp:on,setAxes:hn});function sn(t,n,a){var r=.5*a[0],e=.5*a[1],u=.5*a[2],o=n[0],i=n[1],h=n[2],c=n[3];return t[0]=o,t[1]=i,t[2]=h,t[3]=c,t[4]=r*c+e*h-u*i,t[5]=e*c+u*o-r*h,t[6]=u*c+r*i-e*o,t[7]=-r*o-e*i-u*h,t}function Mn(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}var fn=kt;var ln=kt;function vn(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=a[4],h=a[5],c=a[6],s=a[7],M=n[4],f=n[5],l=n[6],v=n[7],b=a[0],m=a[1],d=a[2],p=a[3];return t[0]=r*p+o*b+e*d-u*m,t[1]=e*p+o*m+u*b-r*d,t[2]=u*p+o*d+r*m-e*b,t[3]=o*p-r*b-e*m-u*d,t[4]=r*s+o*i+e*c-u*h+M*p+v*b+f*d-l*m,t[5]=e*s+o*h+u*i-r*c+f*p+v*m+l*b-M*d,t[6]=u*s+o*c+r*h-e*i+l*p+v*d+M*m-f*b,t[7]=o*s-r*i-e*h-u*c+v*p-M*b-f*m-l*d,t}var bn=vn;var mn=Ht;var dn=Kt,pn=dn,xn=tn,yn=xn;var qn=Object.freeze({__proto__:null,create:function(){var t=new n(8);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t},clone:function(t){var a=new n(8);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a},fromValues:function(t,a,r,e,u,o,i,h){var c=new n(8);return c[0]=t,c[1]=a,c[2]=r,c[3]=e,c[4]=u,c[5]=o,c[6]=i,c[7]=h,c},fromRotationTranslationValues:function(t,a,r,e,u,o,i){var h=new n(8);h[0]=t,h[1]=a,h[2]=r,h[3]=e;var c=.5*u,s=.5*o,M=.5*i;return h[4]=c*e+s*r-M*a,h[5]=s*e+M*t-c*r,h[6]=M*e+c*a-s*t,h[7]=-c*t-s*a-M*r,h},fromRotationTranslation:sn,fromTranslation:function(t,n){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*n[0],t[5]=.5*n[1],t[6]=.5*n[2],t[7]=0,t},fromRotation:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},fromMat4:function(t,a){var r=zt();R(r,a);var e=new n(3);return A(e,a),sn(t,r,e),t},copy:Mn,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},set:function(t,n,a,r,e,u,o,i,h){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=h,t},getReal:fn,getDual:function(t,n){return t[0]=n[4],t[1]=n[5],t[2]=n[6],t[3]=n[7],t},setReal:ln,setDual:function(t,n){return t[4]=n[0],t[5]=n[1],t[6]=n[2],t[7]=n[3],t},getTranslation:function(t,n){var a=n[4],r=n[5],e=n[6],u=n[7],o=-n[0],i=-n[1],h=-n[2],c=n[3];return t[0]=2*(a*c+u*o+r*h-e*i),t[1]=2*(r*c+u*i+e*o-a*h),t[2]=2*(e*c+u*h+a*i-r*o),t},translate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=.5*a[0],h=.5*a[1],c=.5*a[2],s=n[4],M=n[5],f=n[6],l=n[7];return t[0]=r,t[1]=e,t[2]=u,t[3]=o,t[4]=o*i+e*c-u*h+s,t[5]=o*h+u*i-r*c+M,t[6]=o*c+r*h-e*i+f,t[7]=-r*i-e*h-u*c+l,t},rotateX:function(t,n,a){var r=-n[0],e=-n[1],u=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*u-c*e,f=h*o+s*e+c*r-i*u,l=c*o+s*u+i*e-h*r,v=s*o-i*r-h*e-c*u;return St(t,n,a),r=t[0],e=t[1],u=t[2],o=t[3],t[4]=M*o+v*r+f*u-l*e,t[5]=f*o+v*e+l*r-M*u,t[6]=l*o+v*u+M*e-f*r,t[7]=v*o-M*r-f*e-l*u,t},rotateY:function(t,n,a){var r=-n[0],e=-n[1],u=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*u-c*e,f=h*o+s*e+c*r-i*u,l=c*o+s*u+i*e-h*r,v=s*o-i*r-h*e-c*u;return Et(t,n,a),r=t[0],e=t[1],u=t[2],o=t[3],t[4]=M*o+v*r+f*u-l*e,t[5]=f*o+v*e+l*r-M*u,t[6]=l*o+v*u+M*e-f*r,t[7]=v*o-M*r-f*e-l*u,t},rotateZ:function(t,n,a){var r=-n[0],e=-n[1],u=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*u-c*e,f=h*o+s*e+c*r-i*u,l=c*o+s*u+i*e-h*r,v=s*o-i*r-h*e-c*u;return Ot(t,n,a),r=t[0],e=t[1],u=t[2],o=t[3],t[4]=M*o+v*r+f*u-l*e,t[5]=f*o+v*e+l*r-M*u,t[6]=l*o+v*u+M*e-f*r,t[7]=v*o-M*r-f*e-l*u,t},rotateByQuatAppend:function(t,n,a){var r=a[0],e=a[1],u=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=n[3];return t[0]=i*o+s*r+h*u-c*e,t[1]=h*o+s*e+c*r-i*u,t[2]=c*o+s*u+i*e-h*r,t[3]=s*o-i*r-h*e-c*u,i=n[4],h=n[5],c=n[6],s=n[7],t[4]=i*o+s*r+h*u-c*e,t[5]=h*o+s*e+c*r-i*u,t[6]=c*o+s*u+i*e-h*r,t[7]=s*o-i*r-h*e-c*u,t},rotateByQuatPrepend:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+e*c-u*h,t[1]=e*s+o*h+u*i-r*c,t[2]=u*s+o*c+r*h-e*i,t[3]=o*s-r*i-e*h-u*c,i=a[4],h=a[5],c=a[6],s=a[7],t[4]=r*s+o*i+e*c-u*h,t[5]=e*s+o*h+u*i-r*c,t[6]=u*s+o*c+r*h-e*i,t[7]=o*s-r*i-e*h-u*c,t},rotateAroundAxis:function(t,n,a,r){if(Math.abs(r)<1e-6)return Mn(t,n);var e=Math.hypot(a[0],a[1],a[2]);r*=.5;var u=Math.sin(r),o=u*a[0]/e,i=u*a[1]/e,h=u*a[2]/e,c=Math.cos(r),s=n[0],M=n[1],f=n[2],l=n[3];t[0]=s*c+l*o+M*h-f*i,t[1]=M*c+l*i+f*o-s*h,t[2]=f*c+l*h+s*i-M*o,t[3]=l*c-s*o-M*i-f*h;var v=n[4],b=n[5],m=n[6],d=n[7];return t[4]=v*c+d*o+b*h-m*i,t[5]=b*c+d*i+m*o-v*h,t[6]=m*c+d*h+v*i-b*o,t[7]=d*c-v*o-b*i-m*h,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t},multiply:vn,mul:bn,scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t},dot:mn,lerp:function(t,n,a,r){var e=1-r;return mn(n,a)<0&&(r=-r),t[0]=n[0]*e+a[0]*r,t[1]=n[1]*e+a[1]*r,t[2]=n[2]*e+a[2]*r,t[3]=n[3]*e+a[3]*r,t[4]=n[4]*e+a[4]*r,t[5]=n[5]*e+a[5]*r,t[6]=n[6]*e+a[6]*r,t[7]=n[7]*e+a[7]*r,t},invert:function(t,n){var a=xn(n);return t[0]=-n[0]/a,t[1]=-n[1]/a,t[2]=-n[2]/a,t[3]=n[3]/a,t[4]=-n[4]/a,t[5]=-n[5]/a,t[6]=-n[6]/a,t[7]=n[7]/a,t},conjugate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t[4]=-n[4],t[5]=-n[5],t[6]=-n[6],t[7]=n[7],t},length:dn,len:pn,squaredLength:xn,sqrLen:yn,normalize:function(t,n){var a=xn(n);if(a>0){a=Math.sqrt(a);var r=n[0]/a,e=n[1]/a,u=n[2]/a,o=n[3]/a,i=n[4],h=n[5],c=n[6],s=n[7],M=r*i+e*h+u*c+o*s;t[0]=r,t[1]=e,t[2]=u,t[3]=o,t[4]=(i-r*M)/a,t[5]=(h-e*M)/a,t[6]=(c-u*M)/a,t[7]=(s-o*M)/a}return t},str:function(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=n[0],M=n[1],f=n[2],l=n[3],v=n[4],b=n[5],m=n[6],d=n[7];return Math.abs(a-s)<=1e-6*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(r-M)<=1e-6*Math.max(1,Math.abs(r),Math.abs(M))&&Math.abs(e-f)<=1e-6*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(u-l)<=1e-6*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(o-v)<=1e-6*Math.max(1,Math.abs(o),Math.abs(v))&&Math.abs(i-b)<=1e-6*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(h-m)<=1e-6*Math.max(1,Math.abs(h),Math.abs(m))&&Math.abs(c-d)<=1e-6*Math.max(1,Math.abs(c),Math.abs(d))}});function gn(){var t=new n(2);return n!=Float32Array&&(t[0]=0,t[1]=0),t}function _n(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t}function An(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t}function wn(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t}function Rn(t,n){var a=n[0]-t[0],r=n[1]-t[1];return Math.hypot(a,r)}function zn(t,n){var a=n[0]-t[0],r=n[1]-t[1];return a*a+r*r}function jn(t){var n=t[0],a=t[1];return Math.hypot(n,a)}function Pn(t){var n=t[0],a=t[1];return n*n+a*a}var Sn=jn,En=_n,On=An,Tn=wn,Dn=Rn,Fn=zn,In=Pn,Ln=function(){var t=gn();return function(n,a,r,e,u,o){var i,h;for(a||(a=2),r||(r=0),h=e?Math.min(e*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],u(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}(),Vn=Object.freeze({__proto__:null,create:gn,clone:function(t){var a=new n(2);return a[0]=t[0],a[1]=t[1],a},fromValues:function(t,a){var r=new n(2);return r[0]=t,r[1]=a,r},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t},set:function(t,n,a){return t[0]=n,t[1]=a,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t},subtract:_n,multiply:An,divide:wn,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t},scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t},scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t},distance:Rn,squaredDistance:zn,length:jn,squaredLength:Pn,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},normalize:function(t,n){var a=n[0],r=n[1],e=a*a+r*r;return e>0&&(e=1/Math.sqrt(e)),t[0]=n[0]*e,t[1]=n[1]*e,t},dot:function(t,n){return t[0]*n[0]+t[1]*n[1]},cross:function(t,n,a){var r=n[0]*a[1]-n[1]*a[0];return t[0]=t[1]=0,t[2]=r,t},lerp:function(t,n,a,r){var e=n[0],u=n[1];return t[0]=e+r*(a[0]-e),t[1]=u+r*(a[1]-u),t},random:function(t,n){n=n||1;var r=2*a()*Math.PI;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t},transformMat2:function(t,n,a){var r=n[0],e=n[1];return t[0]=a[0]*r+a[2]*e,t[1]=a[1]*r+a[3]*e,t},transformMat2d:function(t,n,a){var r=n[0],e=n[1];return t[0]=a[0]*r+a[2]*e+a[4],t[1]=a[1]*r+a[3]*e+a[5],t},transformMat3:function(t,n,a){var r=n[0],e=n[1];return t[0]=a[0]*r+a[3]*e+a[6],t[1]=a[1]*r+a[4]*e+a[7],t},transformMat4:function(t,n,a){var r=n[0],e=n[1];return t[0]=a[0]*r+a[4]*e+a[12],t[1]=a[1]*r+a[5]*e+a[13],t},rotate:function(t,n,a,r){var e=n[0]-a[0],u=n[1]-a[1],o=Math.sin(r),i=Math.cos(r);return t[0]=e*i-u*o+a[0],t[1]=e*o+u*i+a[1],t},angle:function(t,n){var a=t[0],r=t[1],e=n[0],u=n[1],o=Math.sqrt(a*a+r*r)*Math.sqrt(e*e+u*u),i=o&&(a*e+r*u)/o;return Math.acos(Math.min(Math.max(i,-1),1))},zero:function(t){return t[0]=0,t[1]=0,t},str:function(t){return"vec2("+t[0]+", "+t[1]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]},equals:function(t,n){var a=t[0],r=t[1],e=n[0],u=n[1];return Math.abs(a-e)<=1e-6*Math.max(1,Math.abs(a),Math.abs(e))&&Math.abs(r-u)<=1e-6*Math.max(1,Math.abs(r),Math.abs(u))},len:Sn,sub:En,mul:On,div:Tn,dist:Dn,sqrDist:Fn,sqrLen:In,forEach:Ln});t.glMatrix=e,t.mat2=c,t.mat2d=v,t.mat3=y,t.mat4=S,t.quat=cn,t.quat2=qn,t.vec2=Vn,t.vec3=K,t.vec4=Rt,Object.defineProperty(t,"__esModule",{value:!0})}));

/*!
 * UAParser.js v0.7.21
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.21",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str){return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/(opios)[\/\s]+([\w\.]+)/i],[[NAME,"Opera Mini"],VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[NAME,VERSION],[/(konqueror)\/([\w\.]+)/i],[[NAME,"Konqueror"],VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[NAME,"Edge"],VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(Avast)\/([\w\.]+)/i],[[NAME,"Avast Secure Browser"],VERSION],[/(AVG)\/([\w\.]+)/i],[[NAME,"AVG Secure Browser"],VERSION],[/(puffin)\/([\w\.]+)/i],[[NAME,"Puffin"],VERSION],[/(focus)\/([\w\.]+)/i],[[NAME,"Firefox Focus"],VERSION],[/(opt)\/([\w\.]+)/i],[[NAME,"Opera Touch"],VERSION],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[NAME,"UCBrowser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(windowswechat qbcore)\/([\w\.]+)/i],[[NAME,"WeChat(Win) Desktop"],VERSION],[/(micromessenger)\/([\w\.]+)/i],[[NAME,"WeChat"],VERSION],[/(brave)\/([\w\.]+)/i],[[NAME,"Brave"],VERSION],[/(qqbrowserlite)\/([\w\.]+)/i],[NAME,VERSION],[/(QQ)\/([\d\.]+)/i],[NAME,VERSION],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i],[NAME],[/(LBBROWSER)/i],[NAME],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[NAME,VERSION],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 WebView"],VERSION],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[NAME,/(.+(?:g|us))(.+)/,"$1 $2"],VERSION],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[VERSION,[NAME,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[NAME,"Sailfish Browser"],VERSION],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[NAME,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/(coast)\/([\w\.]+)/i],[[NAME,"Opera Coast"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[NAME,"GSA"],VERSION],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"],[TYPE,SMARTTV]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/android.+aft([bms])\sbuild/i],[MODEL,[VENDOR,"Amazon"],[TYPE,SMARTTV]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[34portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/android.+(bah2?-a?[lw]\d{2})/i],[MODEL,[VENDOR,"Huawei"],[TYPE,TABLET]],[/(microsoft);\s(lumia[\s\w]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV],MODEL],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android.+([vl]k\-?\d{3})\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(lenovo)[_\s-]?([\w-]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"],[TYPE,SMARTTV]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+;\s(pixel c)[\s)]/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/(mz)-([\w-]{2,})/i],[[VENDOR,"Meizu"],MODEL,[TYPE,MOBILE]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[VENDOR,"Barnes & Noble"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/android.+;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/android.+;\s(PH-1)\s/i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/android.+(KS(.+))\s+build/i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize],VENDOR,MODEL],[/[\s\/\(](smart-?tv)[;\)]/i],[[TYPE,SMARTTV]],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9}).+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[NAME,VERSION],[/(haiku)\s(\w+)/i],[NAME,VERSION],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(typeof uastring==="object"){extensions=uastring;uastring=undefined}if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser={name:undefined,version:undefined};mapper.rgx.call(browser,ua,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){var cpu={architecture:undefined};mapper.rgx.call(cpu,ua,rgxmap.cpu);return cpu};this.getDevice=function(){var device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(device,ua,rgxmap.device);return device};this.getEngine=function(){var engine={name:undefined,version:undefined};mapper.rgx.call(engine,ua,rgxmap.engine);return engine};this.getOS=function(){var os={name:undefined,version:undefined};mapper.rgx.call(os,ua,rgxmap.os);return os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(typeof define==="function"&&define.amd){define(function(){return UAParser})}else if(window){window.UAParser=UAParser}}var $=window&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);
//-----------------------------------------------------------------------------------------------
//	WeBeable library core - Audio.
//-----------------------------------------------------------------------------------------------

beablib					=	window.beablib 			|| {};
beablib.Audio			=	beablib.Audio			|| {};
beablib.Core			=	beablib.Core			|| {};
beablib.Game			=	beablib.Game			|| {};

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	var STORAGE_MUSIC_MUTE		=	"BeablibAudioMusicMute:",
		STORAGE_SFX_MUTE		=	"BeablibAudioSFXMute:";

	//-----------------------------------------------------------------------------------------------
	//	Shortcut.

	var	Audio				=	beablib.Audio,
		Core				=	beablib.Core,
		Game				=	beablib.Game;

	//-----------------------------------------------------------------------------------------------
	//	Global variables.

	var MusicMuteState		=	false,
		SFXMuteState		=	false;

	//-----------------------------------------------------------------------------------------------
	//	Initialise the audio system.

	var	Init				=	function( load_q )
	{
		console.log( "beablib::Initialising Audio" );

		load_q.installPlugin( createjs.Sound );
		createjs.Sound.alternateExtensions = ["ogg"];

		//	Tweak the const-ishes.
		STORAGE_MUSIC_MUTE	+=	document.title;
		STORAGE_SFX_MUTE	+=	document.title;

		//	Set the default stored mute state.
		try
		{
			SetMute( localStorage.getItem( STORAGE_SFX_MUTE ) );
		}
		catch(e)
		{
			console.log( "localStorage PermissionDenied" );
			SetMute( false );
		}
	};

	//-----------------------------------------------------------------------------------------------
	//	Audio sprite handling.

	var	AudioSpriteDefs		=	[];

	var	ParseAudioSprites	=	function( sample_file, audio_sprite_file )
	{
		var	audio_sprites	=	beablib.GetJSONObjectByID( audio_sprite_file );

		if( audio_sprites && audio_sprites.spritemap!==undefined )
		{
			for( var key in audio_sprites.spritemap )
			{
				var value			=	audio_sprites.spritemap[ key ],
					val_type		=	value.type ? value.type : "sfx",
					val_start		=	Math.ceil(value.start*1000),
					val_length		=	Math.ceil((value.end-value.start)*1000),
					val_alternate	=	"audio/"+key;

				AudioSpriteDefs[key]	=
				{
					sample:	sample_file,
					type: val_type,
					start: val_start,
					length: val_length,
					level: 100,
					alternate: val_alternate
				};
			}
		}
	};

	//-----------------------------------------------------------------------------------------------

	var	Play				=	function( sample, parms )
	{
		//	Start with an empty sample parameters object.
		var sample_parms	=	{};

		//	Did we pass any parameters?
		if( parms!==undefined )
		{
			//	Maybe we want to loop?
			if( parms.Loop !== undefined && parms.Loop )	{ sample_parms.loop = -1; }
		}

		//	Attempt to find an audio sprite definition for this sample.
		var	audio_sprite_def	=	AudioSpriteDefs[ sample ];

		//	Does it exist?
		if( audio_sprite_def !== undefined )
		{
			//	It does, so we'll want to play it...
			sample	=	audio_sprite_def.sample;

			//	...& pad out the sample parameters with the start & length.
			sample_parms.startTime	=	audio_sprite_def.start;
			sample_parms.duration	=	audio_sprite_def.length;
		}

		//	Quick check to make sure the audio plugin context isn't suspended.
		if( createjs.WebAudioPlugin.context && createjs.WebAudioPlugin.context.state === "suspended" )
		{
			createjs.WebAudioPlugin.context.resume();
		}
		//	Play whatever we ended up with.
		return	createjs.Sound.play( sample, sample_parms );
	};

	//-----------------------------------------------------------------------------------------------

	var	SetMute				=	function( mute_state, record_state )
	{
		//	Is the mute state null?
		if( mute_state===null )
		{
			//	Yep, so let's assume it's down to storage not existing & set to the default (no mute).
			mute_state	=	false;
		}

		//	Is the mute state a string?
		if( typeof mute_state === 'string' )
		{
			//	It appears to be, so change to a boolean.
			mute_state	=	(mute_state==='true');
		}

		//	Mute soundjs accordingly...
		createjs.Sound.muted	=	mute_state;

		//	...let the game know the audio state's changed...
		beablib.EventHandler.dispatchEvent( beablib.Game.Events.UpdateAudio );

		//	...& maybe record the state.
		if( record_state===undefined || record_state===true )
		{
			try
			{
				localStorage.setItem( STORAGE_SFX_MUTE, mute_state );
			}
			catch(e)
			{
				console.log( "localStorage PermissionDenied" );
			}
		}
	};

	//-----------------------------------------------------------------------------------------------

	var GetMute				=	function()	{	return	createjs.Sound.muted;	};

	//-----------------------------------------------------------------------------------------------

	var	music_loop			=	null,
		music_playing		=	false;

	Audio.PlayRetain			=	function( sample, loops )
	{
		return createjs.Sound.play( sample, {loop:loops} );
	};

	Audio.PlayMusic			=	function( sample )
	{
		//	Stop any music that may already be playing.
		Audio.StopMusic();

		//	Start the music.
		music_loop	=	Play( sample, {Loop:true} );
	};

	Audio.StopMusic			=	function()
	{
		if( music_loop )
		{
			music_loop.stop();
			music_loop	=	null;
		}
	};

	//-----------------------------------------------------------------------------------------------
	//	Expose functions to the outside world.

	Audio.Play				=	Play;
	Audio.SetMute			=	SetMute;
	Audio.GetMute			=	GetMute;
	Audio.ParseAudioSprites	=	ParseAudioSprites;

	//-----------------------------------------------------------------------------------------------
	//	Initialisation is a special case, as we want it to happen inside the library.

	Core.InitAudio			=	Init;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------
//	WeBeable library core - Manifest handling.
//-----------------------------------------------------------------------------------------------

beablib					=	window.beablib 			|| {};
beablib.Core			=	beablib.Core			|| {};
beablib.FontsLoader		=	beablib.FontsLoader		|| {};

beablib.Game			=	beablib.Game			|| {};

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	//-----------------------------------------------------------------------------------------------
	//	Object aliases.
	//-----------------------------------------------------------------------------------------------

	var	Core				=	beablib.Core,
		FontsLoader			=	beablib.FontsLoader,
		Game				=	beablib.Game;

	//-----------------------------------------------------------------------------------------------
	//	Private static.
	//-----------------------------------------------------------------------------------------------

	var	Completed			=	false,
		CompletionDelay		=	0,
		LoadQueue			=	null;

	//-----------------------------------------------------------------------------------------------

	var	Complete			=	function()
	{
		var	complete_it	=	function()
		{
			Completed	=	true;
			beablib.DispatchEvent( beablib.Events.FontsLoaded );
		};

		gsap.delayedCall( CompletionDelay, complete_it );
	};

	//-----------------------------------------------------------------------------------------------

	/**
	 * Loads font assets defined in Game.FontDefinitions.
	 *
	 * (show what FontDefinitions look like here)
	 *
	 * @method Load
	 * @param {Array} font_assets The array of font assets.
	 * @param {Number} [delay].
	 * @param {Function} [callback].
	 **/

	var	Load				=	function( font_assets, delay, callback )
	{
		if( font_assets!==undefined && font_assets.length>0 )
		{
			if (Game.FontLoader === "observer")
			{
				LoadWithFontObserver( font_assets, delay, callback );
			}
			else
			{
				//	We'll need to create a new font assets array that's compatible with FontObserver...
				var	new_font_assets	=	[];

				//	...& now build the style elements from the font_assets array.
				for( var c0=0; c0<font_assets.length; c0++ )
				{
					//	Extract the font name & font url...
					var	font_name	=	font_assets[c0].FontName,
						font_url	=	(font_assets[c0].FontURL!==undefined) ? font_assets[c0].FontURL : beablib.GetFontPath( font_assets[c0].FontFile );

					//	...build the @font-face style element...
					var new_style	=	document.createElement('style');
					new_style.appendChild( document.createTextNode(" @font-face {font-family: " + font_name + "; src: url('" + font_url + "') format('truetype'); } "));

					//	...inject it into the document head...
					document.head.appendChild( new_style );

					//	...& add the font name to the new font asset array.
					new_font_assets.push( {FontName:font_name} );
				}

	//			LoadWithFontObserver( new_font_assets, delay, callback );
				LoadWithFontObserver( font_assets, delay, callback );
			}
		}
		else
		{
			//	No useful font assets supplied, so simply call the callback.
			callback();
		}
	};

	var	LoadWithFontObserver		=	function( font_assets, delay, callback )
	{
		var maybe_callback	=	function()
		{
			if( typeof callback==='function' )	{	callback();	}
		};
		var font_count = font_assets.length;
		var error = false;
		var font_loaded = function(success)
		{
			error |= !success;
			font_count--;
			if (font_count === 0)
			{
				if( error )	{	console.log( "beablib::FontsLoader::Warning - Not all fonts loaded." );	}
				else		{	console.log( "beablib::FontsLoader::Success - All fonts loaded." );	}
				maybe_callback();
			}
		};

		//	Load the fonts
		for( var c0=0; c0<font_assets.length; c0++ )
		{
			var font_observer	=	new FontFaceObserver( font_assets[c0].FontName );
			font_observer.load().then(function()
			{
				font_loaded(true);
			}, function()
			{
				font_loaded(false);
			});
		}
	};

	var	LoadWithPreloader		=	function( font_assets, delay, callback )
	{
		//	Make a note of the completion delay.
		CompletionDelay	=	delay?delay:0;

		var	font_manifest	=	{ src:[], type:"font" },
			maybe_callback	=	function()
			{
				if( typeof callback==='function' )	{	callback();	}
			},
			load_manifest	=	function()
			{
				//	Is there anything to load?
				if( font_manifest.src.length )
				{
					//	Yep, so get loading.
					LoadQueue	=	new createjs.LoadQueue();

					LoadQueue.on	(
										"complete",
										function()
										{
											//	Fonts have loaded...
											Complete();

											//	...& maybe callback.
											maybe_callback();
										}
									);

					LoadQueue.loadManifest( font_manifest );
				}
				else
				{
					//	Nope, so maybe callback.
					maybe_callback();
				}
			};

		//	Create a manifest from the font assets...
		for( var c0=0; c0<font_assets.length; c0++ )
		{
			var	font_name	=	font_assets[c0].FontName,
				font_url	=	(font_assets[c0].FontURL!==undefined) ? font_assets[c0].FontURL : Core.ImportsRoot+"fonts/"+font_assets[c0].FontFile;

			//	Ignore the name for now.
			/*
			 if( font_name )
			 {
			 //						load_config.src.push( { src: font_url, family:font_name } );
			 load_config.src.push( { src:font_url, family:font_name } );
			 }
			 else */
			{
				font_manifest.src.push( font_url );
			}
		}

		//	...& attempt to load.
		load_manifest();
	};

	//-----------------------------------------------------------------------------------------------
	//	Public static.
	//-----------------------------------------------------------------------------------------------

	FontsLoader.Load				=	Load;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------
//	WeBeable library core - Browser detection.
//-----------------------------------------------------------------------------------------------

beablib					=	window.beablib 			|| {};
beablib.Core			=	beablib.Core			|| {};

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Private static data.
	//-----------------------------------------------------------------------------------------------

	var	Core		=	beablib.Core;

	//-----------------------------------------------------------------------------------------------
	//	Private static functions.
	//-----------------------------------------------------------------------------------------------

	var	ParseBrowser		=	function()
	{
		//	Create the platform parser.
		var parser				= new UAParser();

		//	Establish the browser.
		var browser				=	parser.getBrowser();

		Core.BrowserType		=	browser.name;
		Core.BrowserVersion	=	browser.version;

		//	Establish the platform.
		var device		=	parser.getDevice();

		//	Is it a device?
		if( device.type===undefined )
		{
			//	Nope, so we'll assumed it's desktop.
			Core.IsDesktop	=	true;
		}
		else if( device.type==="mobile" )
		{
			//	It's a mobile device, so make a note.
			Core.IsMobile	=	true;
			Core.IsTouch		=	true;
		}
		else if( device.type==="tablet" )
		{
			//	It's a tablet device, so make a note.
			Core.IsTablet	=	true;
			Core.IsTouch		=	true;
		}

		//	For backwards compatibility.
		beablib.IsMobile	=	Core.IsMobile;
	};

	//-----------------------------------------------------------------------------------------------
	//	Public static data.
	//-----------------------------------------------------------------------------------------------

	Core.BrowserType		=	"unknown";
	Core.BrowserVersion		=	"unknown";
	Core.Engine				=	"unknown";
	Core.EngineVersion		=	"unknown";
	Core.OS					=	"unknown";
	Core.OSVersion			=	"unknown";
	Core.IsDesktop			=	false;
	Core.IsMobile			=	false;
	Core.IsTablet			=	false;
	Core.IsTouch			=	false;

	//-----------------------------------------------------------------------------------------------
	//	Public static functions.
	//-----------------------------------------------------------------------------------------------

	Core.ParseBrowser	=	ParseBrowser;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------
//	WeBeable library core - common.
//-----------------------------------------------------------------------------------------------

beablib				=	window.beablib 	|| {};
beablib.Core		=	beablib.Core	|| {};

//-----------------------------------------------------------------------------------------------
//	View class.

(function()
{
	//-----------------------------------------------------------------------------------------------

	"use strict";

	//-----------------------------------------------------------------------------------------------

	var	View	=	function( width, height )
		{
			var	set_tl	=	function( t, l )
			{
				this.Top			=	t;
				this.Left			=	l;
			}.bind(this),
			set_view	=	function( width, height )
			{
				this.Width			=	width;
				this.Height			=	height;
				this.HalfWidth		=	this.Width*0.5;
				this.HalfHeight		=	this.Height*0.5;
				this.ScaleX			=	this.Width/beablib.DeviceSize.Width;
				this.ScaleY			=	this.Height/beablib.DeviceSize.Height;
				this.ScaleFactor	=	Math.min( this.ScaleX, this.ScaleY )/2;
			}.bind(this);

			//	Set the new view.
			set_tl( 0, 0 );
			set_view( width, height );

			//	Reset the view.
			this.Set		=	function( width, height )
			{
				set_view( width, height );
			};
			this.SetTopLeft	=	function( t, l )
			{
				set_tl( t, l );
			};
		};

	//-----------------------------------------------------------------------------------------------
	//	The default view.

	beablib.DeviceSize			=	{
										Width: 480,		//	We assume an optimal device size of 480x320
										Height:320
									};
	beablib.PageSize			=	{
										Width: 1136,	//	This is the maximum page size we ever draw to.
										Height:768
									};
	beablib.DevicePixelRatio	=	1;
	beablib.Orientation			=	"L";
	beablib.MainView			=	new	View( beablib.DeviceSize.Width, beablib.DeviceSize.Height );	//	Default view size.

	//-----------------------------------------------------------------------------------------------
	//	Static functions.

	View.SetPortrait			=	function()
	{
		//	Adjust the default sizes...
		beablib.DeviceSize.Height	=	480;
		beablib.DeviceSize.Width	=	320;
		beablib.PageSize.Height		=	1136;
		beablib.PageSize.Width		=	768;

		//	...the orientation...
		beablib.Orientation			=	"P";

		//	...& create a new main view.
		beablib.MainView			=	new	View( beablib.DeviceSize.Width, beablib.DeviceSize.Height );	//	Default view size.
	};
	View.SetLandscape			=	function()
	{
		//	Adjust the default sizes...
		beablib.DeviceSize.Height	=	320;
		beablib.DeviceSize.Width	=	480;
		beablib.PageSize.Height		=	768;
		beablib.PageSize.Width		=	1136;

		//	...the orientation...
		beablib.Orientation			=	"L";

		//	...& create a new main view.
		beablib.MainView			=	new	View( beablib.DeviceSize.Width, beablib.DeviceSize.Height );	//	Default view size.
	};

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	beablib.View	=	View;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
//	EventHandler class.

(function()
{
	//-----------------------------------------------------------------------------------------------

	"use strict";

	//-----------------------------------------------------------------------------------------------

	var	EventHandler	=	function()
	{
		//	We only ever want one of these, so make a singleton cache.
		if( typeof EventHandler.instance === "object" )	{	return EventHandler.instance;	}

		//	Create the singleton instance.
		EventHandler.instance		=	this;

		//	Make sure we can handle events.
		createjs.EventDispatcher.initialize( EventHandler.prototype );
	};

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	beablib.EventHandler		=	new	EventHandler();
	beablib.DispatchEvent		=	function( type, props )
	{
		//	Create a new event...
		var	new_event	=	new createjs.Event( type );

		//	...maybe attach some properties to it...
		if( props!==undefined )	{	new_event.ILProps=props;	}

		//	...& dispatch.
		beablib.EventHandler.dispatchEvent( new_event );
	};
	beablib.ClearEvents			=	function( type )	{ beablib.EventHandler.clear };

	beablib.Events				=	{
										Error:				"beablib:Error",

										EnableGUI:			"beablib:EnableGUI",
										DisableGUI:			"beablib:DisableGUI",

										FontsLoaded: 		"beablib:FontsLoaded",
										OrientationChanged:	"beablib:OrientationChanged"
									};

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------

(function()
{
	//-----------------------------------------------------------------------------------------------

	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Common stuff.

	//	Pseudo seed.
	beablib.PseudoSeed			=	0;
	beablib.CalcPseudoSeed		=	beablib.CalcPseudoSeed || function( data ){ beablib.PseudoSeed=0; };

	//	Settings.
	beablib.ShowSettingsMenu	=	beablib.ShowSettingsMenu ||	function(){};

	//-----------------------------------------------------------------------------------------------
	//	Canvas stuff.

	beablib.ParentCanvasID		=	beablib.ParentCanvasID || "";
	beablib.CreateCanvas		=	function( canvas_info )
	{
		//	Start with a null canvas element - we're going to end up with a canvas eventually, one way or another.
		var canvas		=	null;

		//	Did we get any info passed in?
		if( canvas_info !== undefined )
		{
			//	Yep, so let's deal with the canvas first.
			if( canvas_info.canvas !== undefined )
			{
				//	A canvas was passed in, so we'll use that instead.
				canvas	=	canvas_info.canvas;
			}
			else
			{
				//	No passed canvas, so create a new one.
				canvas	=	document.createElement( 'canvas');
			}

			//	Tweak canvas elements that we want to set outside of their defaults.
			if( canvas_info.id !== undefined )			{	canvas.id				=	canvas_info.id;							}
			if( canvas_info.zIndex !== undefined )		{	canvas.style.zIndex		=	canvas_info.zIndex;						}
			if( canvas_info.position !== undefined )	{	canvas.style.position	=	canvas_info.position;					}
			if( canvas_info.visible !== undefined )		{	canvas.style.visibility	=	canvas_info.visible?"visible":"hidden";	}

			//	Finally, do we want to add it to a parent element?  Default true.
			var	add_to_parent	=	(canvas_info.AddToParent!==undefined) ? canvas_info.AddToParent : true;

			if( add_to_parent )
			{
				//	We do, so let's add it to default canvas, or a user supplied one.
				var	parent_id	=	(canvas_info.parentID!==undefined) ? canvas_info.parentID : beablib.ParentCanvasID,
					parent_ele	=	document.getElementById( parent_id );

				if( parent_ele )	{	parent_ele.appendChild( canvas );	}
			}
		}
		else
		{
			//	No canvas info, so just create a new canvas.
			canvas	=	document.createElement( 'canvas');
		}

		//	Sort out some required style elements.
		canvas.style.display		=	"block";
		canvas.style.left			=	0;
		canvas.style.top			=	0;
		canvas.style.pointerEvents	=	"none";


		//	A couple of handy functions.
		canvas.EnablePointerEvents	=	function( state )
		{
			canvas.style.pointerEvents	=	state?"auto":"none";
		};
		canvas.Show					=	function( state )
		{
			canvas.style.visibility		=	state?"visible":"hidden";
		};
		canvas.IsOverlayCanvas		=	false;

		//	Return the canvas.
		return	canvas;
	};

	//-----------------------------------------------------------------------------------------------
	//	Reposition stuff.

	var	repositionables				=	[];

	beablib.AddRepositionable		=	function( object )	{	repositionables.push(object);													};
	beablib.SetRepositionable		=	function( object )	{	repositionables.push(object); object.Reposition(beablib.MainView.ScaleFactor);	};
	beablib.RepositionAll			=	function()
	{
		var	object_ref	=	null,
			scale		=	beablib.MainView.ScaleFactor;

		//	Go through & do early repositions first e.g. We want stages repositioned before anything that relies on them.
		for( var c0=0; c0<repositionables.length; c0++ )
		{
			object_ref	=	repositionables[c0];

			if( typeof object_ref.RepositionEarly==="function" )
			{
				object_ref.RepositionEarly( scale );
			}
		}

		//	Reposition the normal repositionables e.g. An object that positions itself inside a stage.
		for( c0=0; c0<repositionables.length; c0++ )
		{
			object_ref	=	repositionables[c0];

			if( typeof object_ref.Reposition==="function" )
			{
				object_ref.Reposition( scale );
			}
		}

		//	Now go through & reposition the late repositionables e.g. An object which relies on the correct position of a reference object.
		for( c0=0; c0<repositionables.length; c0++ )
		{
			object_ref	=	repositionables[c0];

			if( typeof object_ref.RepositionLate==="function" )
			{
				object_ref.RepositionLate( scale );
			}
		}
	};

	//-----------------------------------------------------------------------------------------------
	//	Array helpers.

	Array.prototype.RandomShuffle	=	function()
	{
		//	Randomly shuffle the members of this array.
		for( var c0=0; c0<this.length; c0++ )
		{
			var	index	=	 c0+Math.floor( Math.random()*(this.length-c0) ),
				temp	=	this[c0];

			this[c0]	=	this[index];
			this[index]	=	temp;
		}
	};

	Array.prototype.PseudoShuffle	=	function( seed )
	{
		for( var c0=0; c0<this.length; c0++ )
		{
			seed	=	beablib.Maths.PseudoRandom( seed );

			var	index	=	 c0+Math.floor( seed*(this.length-c0) ),
				temp	=	this[c0];

			this[c0]	=	this[index];
			this[index]	=	temp;
		}

	};

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------
//	WeBeable Maths helpers.
//-----------------------------------------------------------------------------------------------

beablib				=	window.beablib || {};
beablib.Maths		=	beablib.Maths || {};

//-----------------------------------------------------------------------------------------------

(function(window)
{
	//-----------------------------------------------------------------------------------------------

	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	const-ish.
	//-----------------------------------------------------------------------------------------------

	var	gjsMATHS_QUAKEx32 = 0x5f3759df,
		gjsMATHS_x32      = 0x5f375a86,
		gjsMATHS_x64      = 0x5fe6eb50c7aa19f9;

	//-----------------------------------------------------------------------------------------------

	var	Maths	=	beablib.Maths;

	//-----------------------------------------------------------------------------------------------
	//
	//	Vector2
	//
	//-----------------------------------------------------------------------------------------------

	//	Define the base function for our Vector2...
	Maths.Vector2	=	function( x, y )
	{
		if( x instanceof Maths.Vector2 )	{ this.X=x.X;	this.Y=x.Y;		}
		else if ( y===undefined	)			{ this.X=x.X;	this.Y=x.Y;		}
		else								{ this.X=x||0;	this.Y=y||0;	}
	};

	//	...& let's have a local reference to save on typing.
	var	Vector2	=	Maths.Vector2;

	Vector2.prototype	=
	{
		Set:			function( x, y )
		{
			if( x instanceof Vector2 )	{ this.X=x.X;	this.Y=x.Y;		}
			else if ( y===undefined	)	{ this.X=x.X;	this.Y=x.Y;		}
			else						{ this.X=x;		this.Y=y;		}
		},

		Add:			function( v )
		{
			if( v instanceof Vector2 )	{ this.X+=v.X;	this.Y+=v.Y;	}
			else						{ this.X+=v;	this.Y+=v;		}
		},

		Subtract:		function( v )
		{
			if( v instanceof Vector2 )	{ this.X-=v.X;	this.Y-=v.Y;	}
			else						{ this.X-=v;	this.Y-=v;		}
		},

		Multiply:		function( v )
		{
			if( v instanceof Vector2 )	{ this.X*=v.X;	this.Y*=v.Y;	}
			else						{ this.X*=v;	this.Y*=v;		}
		},

		Divide:			function( v )
		{
			if( v instanceof Vector2 )	{ this.X/=v.X;	this.Y/=v.Y;	}
			else
			{
				var	recip	=	1.0/v;

				this.X	*=	recip;
				this.Y	*=	recip;
			}
		},

		GetLengthSq:	function()
		{
			//	Return the length squared.
			return	(this.X*this.X)+(this.Y*this.Y);
		},

		GetLength:		function()
		{
			//	Return the square root of the length.
			return	Math.sqrt( (this.X*this.X)+(this.Y*this.Y) );
		},

		GetInvLength:	function()
		{
			//	Return the inverse square root of the length.
			return	Maths.fisqrt( (this.X*this.X)+(this.Y*this.Y) );
		},

		toString:		function()
		{
			return	"Vector2[ X:" + this.X.toString() + ", Y:" + this.Y.toString() + " ]";
		}
	};

	Vector2.Zero		=	function()			{	return	new	Vector2( 0, 0);	};
	Vector2.One			=	function()			{	return	new	Vector2( 1, 1);	};
	Vector2.Up			=	function()			{	return	new	Vector2( 0,-1);	};
	Vector2.Down		=	function()			{	return	new	Vector2( 0, 1);	};
	Vector2.Left		=	function()			{	return	new	Vector2(-1, 0);	};
	Vector2.Right		=	function()			{	return	new	Vector2( 1, 0);	};
	Vector2.Dot			=	function( a, b )	{	return	a.X*b.X + a.Y*b.Y;	};
	Vector2.Add			=	function( a, b )
	{
		if( b instanceof Vector2 )	{	return	new	Vector2( a.X+b.X, a.Y+b.Y );	}
		else						{	return	new	Vector2( a.X+b,   a.Y+b	  );	}
	};
	Vector2.Subtract	=	function( a, b )
	{
		if( b instanceof Vector2 )	{	return	new	Vector2( a.X-b.X, a.Y-b.Y );	}
		else						{	return	new	Vector2( a.X-b,   a.Y-b	  );	}
	};
	Vector2.Multiply	=	function( a, b )
	{
		if( b instanceof Vector2 )	{	return	new	Vector2( a.X*b.X, a.Y*b.Y );	}
		else						{	return	new	Vector2( a.X*b,   a.Y*b	  );	}
	};
	Vector2.Divide		=	function( a, b )
	{
		if( b instanceof Vector2 )	{	return	new	Vector2( a.X/b.X, a.Y/b.Y );	}
		else
		{
			var	recip	=	1.0/b;
			return	new	Vector2( a.X*recip,   a.Y*recip	  );
		}
	};
	Vector2.Normalised	=	function( v )
	{
		var	inv_length	=	1.0/v.GetLength();

		return	new	Vector2( v.X*inv_length, v.Y*inv_length );
	};

	//-----------------------------------------------------------------------------------------------
	//
	//	Vector3
	//
	//-----------------------------------------------------------------------------------------------

	//	Define the base function for our Vector3...
	Maths.Vector3	=	function( x, y, z )
	{
		if( x instanceof Maths.Vector3 )	{ this.X=x.X; this.Y=x.Y; this.Z=x.z;	}
		else
		{
			this.X			=	x || 0;
			this.Y			=	y || 0;
			this.Z			=	z || 0;
		}
	};

	//	...& let's have a local reference to save on typing.
	var	Vector3	=	Maths.Vector3;

	Vector3.prototype	=
	{
		toString:		function()
		{
			return	"Vector3[ X:" + this.X.toString() + ", Y:" + this.Y.toString() + ", Z:" + this.Z.toString() + " ]";
		}
	};

	Vector3.Zero		=	function()			{	return	new	Vector2( 0, 0, 0 );	};
	Vector3.One			=	function()			{	return	new	Vector2( 1, 1, 1 );	};
	Vector3.Up			=	function()			{	return	new	Vector2( 0,-1, 0 );	};
	Vector3.Down		=	function()			{	return	new	Vector2( 0, 1, 0 );	};
	Vector3.Left		=	function()			{	return	new	Vector2(-1, 0, 0 );	};
	Vector3.Right		=	function()			{	return	new	Vector2( 1, 0, 0 );	};
	Vector3.Forward		=	function()			{	return	new	Vector2( 0, 0, 1 );	};
	Vector3.Backward	=	function()			{	return	new	Vector2( 0, 0,-1 );	};

	//-----------------------------------------------------------------------------------------------
	//
	//	Fast Inverse Square Root.
	//
	//-----------------------------------------------------------------------------------------------

	/**
	 * References:
	 * [1] ftp://ftp.idsoftware.com/idstuff/source/quake3-1.32b-source.zip
	 * [2] http://www.lomont.org/Math/Papers/2003/InvSqrt.pdf
	 * [3] http://en.wikipedia.org/wiki/Newton%27s_method
	 * [4] https://developer.mozilla.org/en/JavaScript_typed_arrays
	 * [5] http://en.wikipedia.org/wiki/Fast_inverse_square_root
	 */

	//	Private properties.
	var	fisqrt_buf	=	new ArrayBuffer( Float32Array.BYTES_PER_ELEMENT ),
		fisqrt_f	=	new Float32Array( fisqrt_buf ),
		fisqrt_l	=	new Uint32Array( fisqrt_buf ),
		fisqrt_1p5	=	1.5;

	/**
	 * Appearing in the Quake III Arena source code[1],
	 * this strange algorithm uses integer operations
	 * along with a 'magic number' to calculate floating point
	 * approximation values of inverse square roots[5].
	 *
	 * @param  {Number} n     Number
	 * @param  {Number} p = 1 Number of iterations for performing Newton's method[3]
	 * @return {Number}       Result
	 */

		//	Public method.
	Maths.fisqrt	=	function( x, i )
	{
		var	half_x	=	x * 0.5;

		i			=	i || 1;
		fisqrt_f[0]	=	x;
		fisqrt_l[0]	=	gjsMATHS_QUAKEx32 - ( fisqrt_l[0] >> 1 );

		var	y	=	fisqrt_f[0];

		while( i-- )
		{
			y	=	y * ( fisqrt_1p5 - ( half_x * y * y ) );
		}

		return y;
	};

	//-----------------------------------------------------------------------------------------------

	Maths.PseudoRandom	=	function( seed )
	{
		seed	=	Math.sin(seed.toFixed(4)) * 10000;
		return seed - Math.floor(seed);
	};

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------


	//-----------------------------------------------------------------------------------------------
}(window));

//-----------------------------------------------------------------------------------------------

//	A few bits of test code.

/*
 var	test	=	new	gjs.Maths.Vector2( 111, 123 );

 test.Set( 414, 567 );

 var	vec1	=	new	gjs.Maths.Vector2( test ),
 vec2	=	new	gjs.Maths.Vector2( 3, 4 );

 vec1.Add( vec2 );

 console.log( test.toString() );
 console.log( vec1.toString() );
 console.log( vec2.toString() );

 console.log( 1.0/vec2.GetInvLength() );

 console.log( gjs.Maths.Vector2.Up().toString() );
 */

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//	WeBeable Maths helpers.
//-----------------------------------------------------------------------------------------------

beablib				=	window.beablib || {};
beablib.Maths		=	beablib.Maths || {};

//-----------------------------------------------------------------------------------------------

(function(window)
{
	//-----------------------------------------------------------------------------------------------

	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	//-----------------------------------------------------------------------------------------------
	//	Private statics.
	//-----------------------------------------------------------------------------------------------

	//	Beablib object aliases.
	var	Maths	=	beablib.Maths;

	//	glMatrix object aliases.
	var mat4 = glMatrix.mat4;
	var vec3 = glMatrix.vec3;

	//	Scratch data.
	var vec3Scratch = vec3.create();

	//-----------------------------------------------------------------------------------------------
	//	Matrix3
	//-----------------------------------------------------------------------------------------------

	var Matrix3	=	function()
	{
		this.array	=	[
			1.0,0.0,0.0,
			0.0,1.0,0.0,
			0.0,0.0,1.0
		];
	};

	Matrix3.prototype	=
	{
		Set:			function( n11, n12, n13, n21, n22, n23, n31, n32, n33 )
		{
			var ea = this.array;
			ea[0]=n11;ea[1]=n12;ea[2]=n13;
			ea[3]=n21;ea[4]=n22;ea[5]=n23;
			ea[6]=n31;ea[7]=n32;ea[8]=n33;
		},
		SetIdentity:	function()
		{
			var ea = this.array;
			ea[0]=1.0;ea[1]=0.0;ea[2]=0.0;
			ea[3]=0.0;ea[4]=1.0;ea[5]=0.0;
			ea[6]=0.0;ea[7]=0.0;ea[8]=1.0;
		}
	};

	//-----------------------------------------------------------------------------------------------
	//	Matrix4
	//-----------------------------------------------------------------------------------------------

	var Matrix4	=	function()
	{
		this.Mat4 = glMatrix.mat4.create();
	};

	Matrix4.prototype	=
	{
		Set:				function( m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 )
		{
			return mat4.set(this.Mat4, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 );
		},
		SetIdentity:		function()
		{
			return mat4.identity(this.Mat4);
		},
		SetOrthoProjection:	function(width,height,depth)
		{
			var halfDepth = depth*0.5;
			return mat4.ortho(this.Mat4,0,width,height,0,halfDepth,-halfDepth);
		},
		Translate:			function(tx,ty,tz)
		{
			return mat4.translate(this.Mat4,this.Mat4,vec3.set(vec3Scratch,tx,ty,tz));
		}
	};

	Matrix4.Multiply	=	function(a, b, out) 		{ return mat4.multiply(out.Mat4,a.Mat4,b.Mat4); };
	Matrix4.RotationX	=	function(angleRads, out)	{ return mat4.fromXRotation(out.Mat4,angleRads); };
	Matrix4.RotationY	=	function(angleRads, out)	{ return mat4.fromYRotation(out.Mat4,angleRads); };
	Matrix4.RotationZ	=	function(angleRads, out)	{ return mat4.fromZRotation(out.Mat4,angleRads); };
	Matrix4.Scaling		=	function(sx,sy,sz, out)		{ return mat4.fromScaling(out.Mat4,vec3.set(vec3Scratch,sx,sy,sz)); };
	Matrix4.Translation	=	function(tx,ty,tz, out)		{ return mat4.fromTranslation(out.Mat4,vec3.set(vec3Scratch,tx,ty,tz)); };

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	Maths.Matrix3	=	Matrix3;
	Maths.Matrix4	=	Matrix4;

	//-----------------------------------------------------------------------------------------------
}(window));

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//	WeBeable library tween handler.
//-----------------------------------------------------------------------------------------------

beablib				=	window.beablib 	|| {};
beablib.Game		=	beablib.Game	|| {};

//-----------------------------------------------------------------------------------------------

(function()
{
	//-----------------------------------------------------------------------------------------------

	"use strict";

	//-----------------------------------------------------------------------------------------------

	//	Delta time stuff.
	var	current_time	=	0,
		delta_time		=	0,
		frame_time		=	0,
		last_time		=	0,
		init_timer		=	function()
		{
			current_time	=	gsap.ticker.time;
			delta_time		=	0;
		},
		update_timer	=	function()
		{
			last_time		=	current_time;
			current_time	=	gsap.ticker.time;
			frame_time		=	current_time-last_time;
			delta_time		=	(delta_time + frame_time) * 0.5;		//	Averaged delta time.
//			delta_time		=	current_time-last_time;		//	Averaged delta time.
		};

	//	Ticker stuff.
	var	has_listener	=	false,
		paused			=	false,
		temp_timeline	=	null,
		tick_functions	=	[],
		tick_handler	=	function()
		{
			//	Calculate our delta time...
			update_timer();

			//	...& process the tick functions.
			for( var c0=0; c0<tick_functions.length; c0++ )
			{
				tick_functions[c0]();
			}
		};

	beablib.TweenHandler	=	{
									AddTickFunction:	function( fn )
									{
										tick_functions.push( fn );
									},
									RemoveTickFunction:	function( fn )
									{
										var	fn_index	=	tick_functions.indexOf( fn );

										if( fn_index >= 0 )
										{
											tick_functions.splice( fn_index, 1 );
										}
									},
									DoTick:				function()	{	tick_handler();	},
									Enable:				function( state )
									{
										//	Are we in the correct state?
										if( has_listener!==state )
										{
											//	Nope, add/remove the listener...
											if( state )
											{
												console.log( "Adding tick handler" );
												gsap.ticker.add( tick_handler );

												//	Make sure the timer stuff is initialised.
												init_timer();
											}
											else
											{
												console.log( "Removing tick handler" );
												gsap.ticker.remove( tick_handler );
											}

											//	...& make a note of the state.
											has_listener	=	state;
										}
									},
									Pause:				function( pause )
									{
										//	Pause/Unpause the current tweens...
										if( pause )
										{
											if( temp_timeline===null )
											{
												console.log( "Pausing Tweens" );
												temp_timeline	=	gsap.exportRoot( {}, true );
												temp_timeline.pause( null, false );
											}
											else
											{
												console.log( "Tweens already paused" );
											}
										}
										else
										{
											if( temp_timeline!==null )
											{
												console.log( "Resuming Tweens" );
												temp_timeline.resume();
												temp_timeline	=	null;

												//	Reset delta time stuff.
												init_timer();
											}
											else
											{
												console.log( "No tweens to unpause" );
											}
										}

										//	Make a note of the state.
										paused	=	pause;
										//	...& enable/disable the listener.
										//		EnableListener( !pause );
									},
									CurrentTime:		function()		{	return current_time;			},
									DeltaTime:			function()		{	return delta_time;				},
									FrameTime:			function()		{	return frame_time;				},
									SetFPS:				function( fps )	{	gsap.ticker.setFPS( fps );		},
									IsPaused:			function()		{	return paused;					}
								};

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//	WeBeable - ProcessObject definition.
//-----------------------------------------------------------------------------------------------

beablib				=	window.beablib 	|| {};

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Private static data.
	//-----------------------------------------------------------------------------------------------

	var	added_tick					=	false,
		time_accumulator			=	0.0,
		time_delta					=	0.01,
		processables				=	[];

	//-----------------------------------------------------------------------------------------------
	//	Private static functions.
	//-----------------------------------------------------------------------------------------------

	var ProcessAll					=	function()
	{
		//	Are we paused?
		if( beablib.TweenHandler.IsPaused() )	{	return;	}	//	Yep, so bail for now.

		//	Update the time...
		time_accumulator	+=	beablib.TweenHandler.FrameTime();

		//	...& do as much processing as we can.
		while( time_accumulator >= time_delta )
		{
			//	Process everything.
			for( var c0=0; c0<processables.length; c0++ )
			{
				processables[c0].Process( time_delta );
			}

			//	Adjust the accumulator.
			time_accumulator	-=	time_delta;
		}

		//	Render all the things.
		for( c0=0; c0<processables.length; c0++ )
		{
			processables[c0].Render();
		}
	};

	//-----------------------------------------------------------------------------------------------
	//	Public static functions.
	//-----------------------------------------------------------------------------------------------

	beablib.AddProcessable			=	function( object )
	{
		//	Firstly, have we added the ProcessAll function?
		if( !added_tick )
		{
			//	We've not, so let's add one...
			beablib.TweenHandler.AddTickFunction( ProcessAll );

			//	...& make note.
			added_tick	=	true;
		}

		//	Does object have any form of Process function?
		if	(
				(object.Process===undefined || typeof object.Process!=="function")	&&
				(object.prototype.Process===undefined || typeof object.prototype.Process!=="function")
			)
		{
			//	Nope.
			console.log( "beablib::Object has no Process function. Object not added." );
			return;
		}

		//	Does object have any form of Render function?
		if	(
				(object.Render===undefined || typeof object.Render!=="function")	&&
				(object.prototype.Render===undefined || typeof object.prototype.Render!=="function")
			)
		{
			//	Nope.
			console.log( "beablib::Object has no Render function. Object not added." );
			return;
		}

		//	All's well, so add the object.
		processables.push(object);
	};
	//-----------------------------------------------------------------------------------------------

	beablib.RemoveProcessable		=	function( object )
	{
		//	Find the object's index...
		var	idx	=	processables.indexOf(object);

		//	...is it valid?
		if(idx>=0)
		{
			//	Yep, so remove it.
			processables.splice(idx,1);
		}
	};

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------
//	WeBeable - PixiJS Renderer.
//-----------------------------------------------------------------------------------------------

beablib				=	window.beablib 		||	{};
beablib.Renderer	=	beablib.Renderer	||	{};

//-----------------------------------------------------------------------------------------------

var	Vector2		=	beablib.Maths.Vector2;
var	Matrix4		=	beablib.Maths.Matrix4;

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Private static data.
	//-----------------------------------------------------------------------------------------------

	var	createjs		=	window.createjs || {},
		Renderer		=	beablib.Renderer;

	//-----------------------------------------------------------------------------------------------
	//	Public functions.
	//-----------------------------------------------------------------------------------------------

	var AddedTick				=	false,
		StageArray				=	[];

	Renderer.UpdateStages		=	function()
	{
		for( var c0=0; c0<StageArray.length; c0++ )
		{
			StageArray[c0].UpdateDirty();
		}
	};

	Renderer.UpdateStagesImmediate	=	function()
	{
		for( var c0=0; c0<StageArray.length; c0++ )
		{
			StageArray[c0].UpdateImmediate();
		}
	};

	Renderer.CreateStage			=	function( canvas, params )
	{
		var actual_stage	=	new PIXI.Container(),
			parameters		=	params!==undefined ? params : {},
			stage			=	null;

		//	Is the canvas reference valid?
		if( canvas !==undefined && canvas!==null && canvas !=="" )
		{
			//	Yep, so find the canvas element...
			var	canvas_ele	=	document.getElementById( canvas );

			//	...create the PIXI renderer...
			var	height		=	(!parameters.height || parameters.height < 0) ? beablib.MainView.Height : parameters.height;
			var	width		=	(!parameters.width || parameters.width < 0) ? beablib.MainView.Width : parameters.width;
			var transparent	=	(!parameters.transparent) ? true : parameters.transparent;

			stage	=	new	PIXI.autoDetectRenderer( width,height,{view:canvas_ele,transparent:transparent,resolution:beablib.DevicePixelRatio,roundPixels:true} );

			//	...add the PIXI stage to it...
			//			stage.addChild( actual_stage );

			//	...& add a view to it.
			stage.View		=	new	beablib.View( 0, 0 );
			stage.PIXIStage	=	function()	{ 	return	actual_stage;	};

			//			stage.transparent	=	true;
			//			stage.autoResize	=	true;


			stage.update	=	function()
			{
				stage.render( actual_stage );
			};

			//	Let's keep track of the style element...
			var	style	=	stage.view.style;

			//	...& create a few handy access functions.
			stage.SetZIndex				=	function( z_index )	{	style.zIndex=z_index;						};
			stage.EnablePointerEvents	=	function( state )	{	style.pointerEvents=state?"auto":"none";	};

			//-----------------------------------------------------------------------------------------------
			//	Size & repositioning helpers.

			stage.Anchor			=	{H:"centre", V:"centre"};
			stage.PreferredSize		=	{W:-1, H:-1};
			stage.Flags				=	{Clamp:false};

			stage.SetSize			=	function( parms, update )
			{
				if( parms )
				{
					//	Update the dimensions.
					if( parms.height!==undefined )		{	this.PreferredSize.H=parms.height;	}
					if( parms.width!==undefined )		{	this.PreferredSize.W=parms.width;	}
					if( parms.clamp!=undefined )		{	this.Flags.Clamp=parms.clamp;		}

					//	...& maybe update the stage.
					//					if( update )
					{
						this.RepositionEarly( beablib.MainView.ScaleFactor );
						this.SetDirty();
					}
				}
			};

			stage.SetAnchors		=	function( parms, update )
			{
				if( parms )
				{
					//	Update the anchors...
					if( parms.anchor_h!==undefined )	{	this.Anchor.H=parms.anchor_h;		}
					if( parms.anchor_v!==undefined )	{	this.Anchor.V=parms.anchor_v;		}

					//	...& update the stage.
					//					if( update )
					{
						this.RepositionEarly( beablib.MainView.ScaleFactor );
					}
				}
			};

			//-----------------------------------------------------------------------------------------------

			var	pivot_mappers	=	{ "left":0, "top":0, "centre":0.5, "right":1, "bottom":1 };

			stage.RepositionEarly	=	function( scale )
			{
				//	Set the size...
				var	height	=	(this.PreferredSize.H<0) ? beablib.MainView.Height : this.PreferredSize.H * scale,
					width	=	(this.PreferredSize.W<0) ? beablib.MainView.Width : this.PreferredSize.W * scale;

				//	...maybe clamp it...
				if( this.Flags.Clamp )
				{
					height	=	Math.min( height, beablib.MainView.Height );
					width	=	Math.min( width, beablib.MainView.Width );
				}
				beablib.SetStageSize( this,	width, height );

				//	...& the position.
				var	mapper		=	0,
					pos_h		=	0,
					pos_v		=	0;

				//	Is the H anchor a value?
				if( typeof this.Anchor.H==='number' )
				{
					//	Yep, so let's treat it as a centre relative value.
					pos_h	=	beablib.MainView.HalfWidth + (this.Anchor.H*scale);
				}
				else
				{
					mapper	=	pivot_mappers[this.Anchor.H];
					pos_h	=	(mapper!==undefined) ? (beablib.MainView.Width*mapper)-(width*mapper) : 0;
				}

				//	Is the V anchor a value?
				if( typeof this.Anchor.V==='number' )
				{
					//	Yep, so let's treat it as a centre relative value.
					pos_v	=	beablib.MainView.HalfHeight + (this.Anchor.V*scale);
				}
				else
				{
					var	window_height	=	Math.min( (beablib.PageSize.Height*scale), beablib.MainView.Height );

					mapper	=	pivot_mappers[this.Anchor.V];
					pos_v	=	(mapper!==undefined) ? (beablib.MainView.HalfHeight-(window_height*0.5))+((window_height*mapper)-(height*mapper)) : 0;
				}

				beablib.SetStagePosition( this, {X:pos_h, Y:pos_v} );

				//	Let's make sure the stage gets redrawn.
				this.SetDirty();
			};

			//-----------------------------------------------------------------------------------------------

			stage.addChild			=	function( args )	{	actual_stage.addChild.apply( actual_stage, arguments );					};
			stage.addChildAt		=	function( args )	{	actual_stage.addChildAt.apply( actual_stage, arguments );				};
			stage.removeChild		=	function( args )	{	actual_stage.removeChild.apply( actual_stage, arguments );				};
			stage.setChildIndex		=	function( args )	{	actual_stage.setChildIndex.apply( actual_stage, arguments );			};
			stage.getChildIndex		=	function( args )	{	return	actual_stage.getChildIndex.apply( actual_stage, arguments );	};
			stage.getNumChildren	=	function()			{	return	actual_stage.children.length;									};

			stage.DirtyFlag			=	false;
			stage.SetDirty			=	function()	{	this.DirtyFlag=true;	};
			stage.ClearDirty		=	function()	{	this.DirtyFlag=false;	};
			stage.UpdateDirty		=	function()
			{
				if( this.DirtyFlag )
				{
					this.update();
					this.DirtyFlag=false;
				}
			};
			stage.UpdateImmediate	=	function()	{	this.update(); this.DirtyFlag=false;						};

			//-----------------------------------------------------------------------------------------------

			//	Any parameters?
			if( parameters )
			{
				//	We may want touch enabled.
				if( parameters.touch!==undefined )
				{
					actual_stage.interactive	=	(parameters.touch===true);
				}

				//	We may want to set autoclear.
				if( parameters.autoclear!==undefined )	{	stage.autoClear=parameters.autoclear;	}
			}

			//	Let's keep track of it.
			StageArray.push( stage );

			//	Finally check to see if we've added a main update function.
			if( !AddedTick )
			{
				//	We've not, so let's add one...
				beablib.TweenHandler.AddTickFunction( beablib.UpdateStages );

				//	...& make note.
				AddedTick	=	true;
			}
		}

		//	Give this stage the default cursor.
		//		stage.cursor	=	"default";

		//	Make sure we're repositionable by default...
		beablib.AddRepositionable( stage );

		//	...& perform an initial reposition...
		stage.RepositionEarly( beablib.MainView.ScaleFactor );

		//	...& we may have dimensions to set.
		stage.SetSize( parameters );
		stage.SetAnchors( parameters );

		//	Return whatever we came up with.
		return	stage;
	};

	//-----------------------------------------------------------------------------------------------

	Renderer.DestroyStage		=	function( stage )
	{
		/*
		 var stage_index	=	StageArray.indexOf( stage );

		 //	Is the stage actually in the array?
		 if( stage_index>=0 )
		 {
		 //	Yep, so remove it.
		 StageArray.splice( stage_index, 1 );
		 }
		 */
	};

	//-----------------------------------------------------------------------------------------------

	Renderer.SetStageSize		=	function( stage, width, height )
	{
		var	int_width	=	width | 0, //Math.floor( width ),
			int_height	=	height| 0; //Math.floor( height );

		//	Does it need to change?
		if( stage.View.Width !== int_width || stage.View.Height !== int_height )
		{
			//	Looks like it, so set the view size...
			stage.View.Set( int_width, int_height );

			//	...& update canvas size.
			stage.view.width		=	stage.View.Width;
			stage.view.height		=	stage.View.Height;

			stage.view.style.width	=	stage.View.Width + "px";
			stage.view.style.height	=	stage.View.Height + "px";

			stage.resize( stage.View.Width, stage.View.Height );

			if(stage.ResizeCallback && typeof stage.ResizeCallback==='function'){
				stage.ResizeCallback(width, height);
			}
		}
	};

	//-----------------------------------------------------------------------------------------------

	Renderer.SetStagePosition	=	function( stage, pos )
	{
		var	int_left	=	pos.X | 0, //Math.floor( pos.X ),
			int_top		=	pos.Y | 0; //Math.floor( pos.Y );

		//	Does it need to change?
		if( stage.View.Left !== int_left || stage.View.Top !== int_top )
		{
			//	Looks like it, so set the top left position...
			stage.View.SetTopLeft( int_top, int_left );

			//	...& update the canvas position.
			stage.view.style.marginLeft	=	int_left+"px";
			stage.view.style.marginTop	=	int_top+"px";
		}
	};

	//-----------------------------------------------------------------------------------------------

	Renderer.EnableStageTouch	=	function( stage, state )
	{
		/*
		 if( state )	{	createjs.Touch.enable( stage );		}
		 else 		{	createjs.Touch.disable( stage );	}
		 */
	};

	//-----------------------------------------------------------------------------------------------

	Renderer.CreateSpriteSheet	=	function( sprite_sheet )
	{
		//	Does the sprite sheet have an "images" field?
		if( sprite_sheet.images===undefined )
		{
			//	Nope, but does it have a "spriteSheet" field?
			if( sprite_sheet.spriteSheet!==undefined )
			{
				//	It does, so let's drop down into the hierarchy by one level.
				sprite_sheet	=	sprite_sheet.spriteSheet;
			}
			else
			{
				//	It doesn't, so we don't really know what's been passed in.
				return	null;
			}
		}

		//	Prepare a PIXI base texture.
		var	base_texture	=	null;

		//	Does the image field contain a PIXI texture?
		if( sprite_sheet.images[0] instanceof PIXI.Texture )
		{
			//	Yep, so we'll use its base texture for this sprite sheet.
			base_texture	=	sprite_sheet.images[0].baseTexture;
		}
		else
		{
			//	Nope, but is it an HTML image element?
			if( !(sprite_sheet.images[0] instanceof HTMLImageElement) )
			{
				//	Nope, so it's probably the ID of an image object, which we'll get hold of now.
				sprite_sheet.images[0]	=	beablib.GetImageObjectByID( sprite_sheet.images[0] );
			}

			//	Create the base texture.
			base_texture	=	new	PIXI.BaseTexture( sprite_sheet.images[0] ); //, PIXI.settings.SCALE_MODE, beablib.DevicePixelRatio);
		}

		//	Did we end up with a base texture?
		if( base_texture === null )
		{
			//	Nope, so bail.
			return	null;
		}

		//	Let's create a sprite sheet that's vaguely similar to the easeljs one for all sorts of legacy code reasons, but also, why not?.
		var	animations			=	sprite_sheet.animations,
			frames				=	sprite_sheet.frames,
			new_sprite_sheet	=	{_animations:[],_data:{},_frames:[],_images:[]};

		//	Create a PIXI texture for each frame...
		for( var c0=0; c0<frames.length; c0++ )
		{
			var	frame	=	frames[ c0 ];

			new_sprite_sheet._frames[ c0 ]			=	new	PIXI.Texture(
																			base_texture,
																			new	PIXI.Rectangle( frame[0],frame[1],frame[2],frame[3] )
																		);
			new_sprite_sheet._frames[ c0 ].pivot	=	{ x:frame[5]/frame[2], y:frame[6]/frame[3] };
		}

		//	...now create the animation data.
		for( var sprite_name in animations )
		{
			var	anim_data	=	{ frames:[], name:sprite_name, next:sprite_name, speed:1 },
				frame_array	=	animations[ sprite_name ];

			//	Is there a lot of data for the frame?
			if( frame_array.length > 1 )
			{
				for( c0=frame_array[0]; c0<=frame_array[1]; c0++ )
				{
					anim_data.frames.push( c0 );
				}
				anim_data.next	=	(frame_array[2]===false) ? null : frame_array[2];
				anim_data.speed	=	frame_array[3];
			}
			else
			{
				//	Nope, so it's just a single frame.
				anim_data.frames[0]	=	frame_array[0];
			}

			//	Store the anim data object.
			new_sprite_sheet._animations.push( sprite_name );
			new_sprite_sheet._data[ sprite_name ]	=	anim_data;
		}

		//	Set a default frame rate for the sheet.
		if( new_sprite_sheet )	{	new_sprite_sheet.framerate = 60;	}

		//	Some access function.
		new_sprite_sheet.getAnimation = function(name)	{	return this._data[name];	};

		//	Return the new sheet.
		return	new_sprite_sheet;
	};

	//-----------------------------------------------------------------------------------------------

	Renderer.CreateSprite			=	function( sprite_sheet, sprite_ref, parms )
	{
		//	Create a blank sprite.
		var	new_sprite	=	new	PIXI.Sprite();

		//	Let's try to flesh it out with handy functional goodness.
		if( new_sprite )
		{
			//	Sprite sheet handling.
			new_sprite.SetSpriteSheet	=	function( sheet )	{	this.SpriteSheet=sheet;	};

			//	Animation data.
			new_sprite.Paused		=	true;
			new_sprite.AnimState	=	{
											Data:			null,
											Duration:		1,
											CurrentAnim:	null,
											CurrentFrame:	-1,
											EndCallback:	function(){},
											PlayType:		0,
											Stage:			null
										};

			//	Animation functions.  This sets the base animation, which may actually be a static sprite i.e. a one frame anim).
			new_sprite.SetAnimation	=	function( anim, play_type )
			{
				var	anim_data		=	this.SpriteSheet.getAnimation( anim );

				if( anim_data )
				{
					this.AnimState.Data			=	anim_data;
					this.AnimState.CurrentAnim	=	anim;
					this.AnimState.CurrentFrame	=	0;
				}

				this.AnimState.PlayType	=	play_type ? play_type : 0;

				//	Update the frame.
				this.SetFrame();
			};

			//	This sets the animation frame.
			new_sprite.SetFrame		=	function( delta )
			{
				//	Set the delta.
				delta	=	delta	||	0;

				var	anim_state	=	this.AnimState,
					animation	=	this.AnimState.Data;

				if( animation )
				{
					var	anim_finished	=	false,
						frame			=	anim_state.CurrentFrame,
						next_frame		=	frame + (delta*animation.speed),
						num_frames		=	animation.frames.length;

					if( next_frame >= num_frames )
					{
						//	We've gone beyond the last frame, so clamp it...
						frame	=	num_frames-1;

						//	...& flag this as the end.
						anim_finished	=	true;
					}
					else
					{
						//	Still happily playing.
						frame	=	next_frame;
					}

					//	Reference the sprite frame...
					var	the_frame	=	this.SpriteSheet._frames[ animation.frames[ frame | 0 ] ];

					//	...update the texture & pivot...
					this.texture		=	the_frame;
					this.anchor.x		=	the_frame.pivot.x;
					this.anchor.y		=	the_frame.pivot.y;

					//	...record the frame number...
					anim_state.CurrentFrame	=	frame;

					//	...& maybe dirty the stage.
					if( anim_state.Stage )	{	anim_state.Stage.SetDirty();	}

					//	Time to end?
					if( anim_finished )
					{
						//	Yep, so is there a follow on animation?
						if( animation.next )
						{
							//	Yep, so set it.
							this.SetAnimation( animation.next );
						}
						else
						{
							//	Nope, so we're done.
							this.Paused	=	true;
						}

						//	Trigger the anim end callback here.
						anim_state.EndCallback();
					}
				}
			};

			//	Parse any passed parameters.
			new_sprite.ParseAnimParams	=	function( parms )
			{
				var	anim_state	=	this.AnimState;

				anim_state.EndCallback	=	parms.callback ? parms.callback : function(){};			//	Legacy.
				anim_state.EndCallback	=	parms.onComplete ? parms.onComplete : function(){};
				anim_state.Duration		=	parms.duration ? parms.duration : 1;
				anim_state.Stage		=	parms.stage ? parms.stage : null;
			};

			//	We need to handle adding and removing sprites for processing reasons, so create a handy function...
			var	add_sprite		=	function()
				{
					anims_array.push( this );
				},
				remove_sprite	=	function()
				{
					//	Instantly hide it...
					//	this.visible	=	false;

					//	...and add it to the cleanup array for later removal.
					anims_cleanup_array.push( this );
				};

			//	...and listen for events.
			new_sprite.once( "added", add_sprite, new_sprite );
			new_sprite.once( "removed", remove_sprite, new_sprite );

			//	Did a sprite sheet get passed?
			if( sprite_sheet )
			{
				//	Yep, so let's set it.
				new_sprite.SetSpriteSheet( sprite_sheet );
			}

			//	Did a sprite reference get passed?
			if( sprite_ref )
			{
				//	Yep, so set it.
				new_sprite.SetAnimation( sprite_ref );
			}

			//	Were any parameters passed in?
			if( parms!==undefined )
			{
				//	Yep, so attempt to extract and set properties.
				new_sprite.SetProps( parms );
			}
		}
		//
		// //	Is the sprite sheet valid?
		// if( sprite_sheet )
		// {
		// 	//	Yep, so let's see if the sprite ref is valid.
		// 	if( sprite_sheet._animations.indexOf( sprite_ref )!=-1 )
		// 	{
		// 		//	It is, so get the frame ref...
		// 		var	frame_id	=	sprite_sheet._data[sprite_ref].frames[0];
		//
		// 		//	...& if that's valid, we can create the sprite.
		// 		if( frame_id!==undefined )
		// 		{
		// 			var	the_frame	=	sprite_sheet._frames[ frame_id ];
		//
		// 			//	Looks good, so new sprite please...
		// 			new_sprite	=	 new	PIXI.Sprite( the_frame );
		//
		// 			//	...give it some useful data...
		// 			new_sprite.SpriteSheet	=	sprite_sheet;
		//
		// 			//	...& let's set its anchor point.
		// 			new_sprite.anchor.x		=	the_frame.pivot.x;
		// 			new_sprite.anchor.y		=	the_frame.pivot.y;
		//
		// 			//	Add some handy animation bits.
		// 			new_sprite.Paused		=	true;
		// 			new_sprite.AnimState	=	{
		// 											Data:			null,
		// 											Duration:		1,
		// 											CurrentAnim:	null,
		// 											CurrentFrame:	-1,
		// 											EndCallback:	function(){},
		// 											PlayType:		0,
		// 											Stage:			null
		// 										};
		// 			new_sprite.SetAnimation	=	function( anim, play_type )
		// 			{
		// 				var	anim_data		=	this.SpriteSheet.getAnimation( anim );
		//
		// 				if( anim_data )
		// 				{
		// 					this.AnimState.Data			=	anim_data;
		// 					this.AnimState.CurrentAnim	=	anim;
		// 					this.AnimState.CurrentFrame	=	0;
		// 				}
		//
		// 				this.AnimState.PlayType	=	play_type ? play_type : 0;
		//
		// 				//	Update the frame.
		// 				this.SetFrame();
		// 			};
		// 			new_sprite.SetFrame		=	function( delta )
		// 			{
		// 				//	Set the delta.
		// 				delta	=	delta	||	0;
		//
		// 				var	anim_state	=	this.AnimState,
		// 					animation	=	this.AnimState.Data;
		//
		// 				if( animation )
		// 				{
		// 					var	anim_finished	=	false,
		// 						frame			=	anim_state.CurrentFrame,
		// 						next_frame		=	frame + (delta*animation.speed),
		// 						num_frames		=	animation.frames.length;
		//
		// 					if( next_frame >= num_frames )
		// 					{
		// 						//	We've gone beyond the last frame, so clamp it...
		// 						frame	=	num_frames-1;
		//
		// 						//	...& flag this as the end.
		// 						anim_finished	=	true;
		// 					}
		// 					else
		// 					{
		// 						//	Still happily playing.
		// 						frame	=	next_frame;
		// 					}
		//
		// 					//	Reference the sprite frame...
		// 					var	the_frame	=	this.SpriteSheet._frames[ animation.frames[ frame | 0 ] ];
		//
		// 					//	...update the texture & pivot...
		// 					this.texture		=	the_frame;
		// 					this.anchor.x		=	the_frame.pivot.x;
		// 					this.anchor.y		=	the_frame.pivot.y;
		//
		// 					//	...record the frame number...
		// 					anim_state.CurrentFrame	=	frame;
		//
		// 					//	...& maybe dirty the stage.
		// 					if( anim_state.Stage )	{	anim_state.Stage.SetDirty();	}
		//
		// 					//	Time to end?
		// 					if( anim_finished )
		// 					{
		// 						//	Yep, so is there a follow on animation?
		// 						if( animation.next )
		// 						{
		// 							//	Yep, so set it.
		// 							this.SetAnimation( animation.next );
		// 						}
		// 						else
		// 						{
		// 							//	Nope, so we're done.
		// 							this.Paused	=	true;
		// 						}
		//
		// 						//	Trigger the anim end callback here.
		// 						anim_state.EndCallback();
		// 					}
		// 				}
		// 				else
		// 				{
		// 				}
		// 			};
		// 			new_sprite.ParseAnimParams	=	function( parms )
		// 			{
		// 				var	anim_state	=	this.AnimState;
		//
		// 				anim_state.EndCallback	=	parms.callback ? parms.callback : function(){};			//	Legacy.
		// 				anim_state.EndCallback	=	parms.onComplete ? parms.onComplete : function(){};
		// 				anim_state.Duration		=	parms.duration ? parms.duration : 1;
		// 				anim_state.Stage		=	parms.stage ? parms.stage : null;
		// 			};
		//
		// 			//	We need to handle adding and removing sprites for processing reasons, so create a handy function...
		// 			var	add_sprite		=	function()
		// 				{
		// 					anims_array.push( this );
		// 				},
		// 				remove_sprite	=	function()
		// 				{
		// 					//	Instantly hide it...
		// 					this.visible	=	false;
		//
		// 					//	...and add it to the cleanup array for later removal.
		// 					anims_cleanup_array.push( this );
		// 				};
		//
		// 			//	...and listen for events.
		// 			new_sprite.once( "added", add_sprite, new_sprite );
		// 			new_sprite.once( "removed", remove_sprite, new_sprite );
		//
		// 			//	Were any parameters passed in?
		// 			if( parms!==undefined )
		// 			{
		// 				//	Yep, so attempt to extract and set properties.
		// 				new_sprite.SetProps( parms );
		// 			}
		// 		}
		// 	}
		// }

		//	Return whatever we came up with.
		return	new_sprite;
	};

	//-----------------------------------------------------------------------------------------------

	Renderer.CreateContainer		=	function( parms )
	{
		var new_container =	new	PIXI.Container();

		//	Were any parameters passed in?
		if( parms!==undefined )
		{
			//	Yep, so attempt to extract and set properties.
			new_container.SetProps( parms );

			//	Also specific container properties.
			if( parms.children!==undefined )
			{
				for( var c0=0; c0<parms.children.length; c0++ )
				{
					new_container.addChild( parms.children[c0] );
				}
			}
		}

		return	new_container;
	};

	//-----------------------------------------------------------------------------------------------

	Renderer.CreateText				=	function( text, parms )
	{
		var anchor_x	=	0,
			anchor_y	=	0,
			max_width	=	-1,
			padding		=	0,
			pixi_style	=	undefined;

		if( parms!==undefined )
		{
			if( parms.pixiStyle!==undefined )	{ pixi_style=parms.pixiStyle; }
			else
			{
				pixi_style	=	new PIXI.TextStyle();

				if( typeof parms==='string' )
				{
					//	Legacy text info.

				}
				else
				{
					if( parms.colour )			{	pixi_style.fill=parms.colour;					}
					if( parms.fontFamily )		{	pixi_style.fontFamily=parms.fontFamily;			}
					if( parms.size )			{	pixi_style.fontSize=parms.size;					}
					if( parms.letterSpacing )	{	pixi_style.letterSpacing=parms.letterSpacing;	}
					if( parms.lineHeight )		{	pixi_style.lineHeight=parms.lineHeight; 		}
					if( parms.lineWidth )		{	pixi_style.width=parms.lineWidth; 				}
					if( parms.maxWidth )		{	max_width=parms.maxWidth; 						}
					if( parms.strokeColour )	{	pixi_style.stroke=parms.strokeColour;			}
					if( parms.strokeWidth )		{	pixi_style.strokeThickness=parms.strokeWidth;	}
					if( parms.textAlign )
					{
						switch( parms.textAlign )
						{
							case	'center':	anchor_x	=	0.5;	break;
							case	'right':	anchor_x	=	1;		break;
						}
						pixi_style.align=parms.textAlign;
					}

					//	Set the baseline - PIXI's wrong here, so fudge the anchor to try & compensate.
					var	baseline	=	parms.textBaseline!==undefined ? parms.textBaseline : pixi_style.textBaseline;

					switch( baseline )
					{
						case	'alphabetic':	anchor_y=0.8;	break;
						case	'top':
						case	'hanging':		anchor_y=0;		break;
						case	'middle':		anchor_y=0.5;	break;
						case	'ideographic':
						case	'bottom':		anchor_y=1;		break;
					}
					pixi_style.textBaseline	=	'alphabetic';
				}
			}
		}

		var	new_text	=	new PIXI.Text( text, pixi_style );

		//	Post bits.
		new_text.anchor.x	=	anchor_x;
		new_text.anchor.y	=	anchor_y;
		new_text.updateText();

		//	Were any parameters passed in?
		if( parms!==undefined )
		{
			//	Yep, so attempt to extract and set properties.
			new_text.SetProps( parms );
		}

		//	Additional useful data.
		new_text.IL_MaxWidth	=	max_width;
		if( new_text.IL_MaxWidth>=0 && new_text.width>new_text.IL_MaxWidth )	{	new_text.width=new_text.IL_MaxWidth;	}

		//	Change text via a method, so we can tweak the width.
		new_text.SetTextString	=	function( string )
		{
			this.text	=	string;
			if( this.IL_MaxWidth>=0 && this.width>this.IL_MaxWidth )	{	this.width=this.IL_MaxWidth;	}
			this.updateText();
		}.bind( new_text );

		return	new_text;
	};

	//-----------------------------------------------------------------------------------------------

	Renderer.Container				=	function( parms )							{	return	Renderer.CreateContainer( parms );							};
	Renderer.Sprite					=	function( sprite_sheet, sprite_ref, parms )	{	return	Renderer.CreateSprite( sprite_sheet, sprite_ref, parms );	};
	Renderer.Text					=	function( text, parms )						{	return	Renderer.CreateText( text, parms );							};

	//-----------------------------------------------------------------------------------------------
	//	Sprite animation process.

	var	added_process		=	false,
		anims_array			=	[],
		anims_cleanup_array	=	[],
		anim_process		=	function()
		{
			var	delta	=	beablib.TweenHandler.DeltaTime() * 1000,
				paused	=	beablib.TweenHandler.IsPaused();

			//	Don't process animation if the game's paused.
			if( paused )	return;

			//	Process the animations.
			for( var c0=0; c0<anims_array.length; c0++ )
			{
				var	sprite_ref	=	anims_array[c0];

				if( !sprite_ref.Paused )
				{
					var	anim_state	=	sprite_ref.AnimState;

					sprite_ref.SetFrame( 1 );
//					sprite_ref.SetFrame( sprite_ref.SpriteSheet.framerate/delta );
				}
			}

			//	Any animations in the cleanup array get removed once we've processed everything.
			for( c0=0; c0<anims_cleanup_array.length; c0++ )
			{
				//	Find the anim object...
				var	idx	=	anims_array.indexOf( anims_cleanup_array[c0] );

				//	...& attempt to remove it.
				if(idx>=0)	{	anims_array.splice( idx,1 );	}
			}
			anims_cleanup_array.length	=	0;
		};

	beablib.TweenHandler.AddTickFunction( anim_process );

	//-----------------------------------------------------------------------------------------------
	//	Beablib extensions to the display object.

	//	Thought this was super necessary, but it appears it's not :-/
/*
	if( PIXI.DisplayObject.prototype.dispatchEvent===undefined )
	{
		//	Let's give the PIXI display object base createjs's event dispatch functionality.
		createjs.EventDispatcher.initialize( PIXI.DisplayObject.prototype );
		createjs.EventDispatcher.initialize( PIXI.Container.prototype );
		createjs.EventDispatcher.initialize( PIXI.Sprite.prototype );
		createjs.EventDispatcher.initialize( PIXI.Text.prototype );
	}
*/

	if( PIXI.DisplayObject.prototype.SetPosition===undefined )
	{
		PIXI.DisplayObject.prototype.SetPosition	=	function( position_x, position_y )
		{
			if( position_x instanceof Vector2 )	{ this.x=position_x.X;	this.y=position_x.Y;	}
			else if( position_y === undefined )	{ this.x=position_x.X;	this.y=position_x.Y;	}
			else								{ this.x=position_x;	this.y=position_y;		}
		};
	}

	if( PIXI.DisplayObject.prototype.SetScale===undefined )
	{
		PIXI.DisplayObject.prototype.SetScale		=	function( scale_x, scale_y )
		{
			if( scale_x instanceof Vector2 )	{ this.scale.x=scale_x.X;	this.scale.y=scale_x.Y;	}
			else if( scale_y !== undefined )	{ this.scale.x=scale_x;		this.scale.y=scale_y;	}
			else								{ this.scale.x=scale_x;		this.scale.y=scale_x;	}
		};

		//	For easeljs legacy stuff.
		Object.defineProperty( PIXI.DisplayObject.prototype, 'scaleX', {	get: function(){ return this.scale.x; }, set: function(value){ this.scale.x=value; } }	);
		Object.defineProperty( PIXI.DisplayObject.prototype, 'scaleY', {	get: function(){ return this.scale.y; }, set: function(value){ this.scale.y=value; } }	);
	}

	if( PIXI.DisplayObject.prototype.SetPivot===undefined )
	{
		PIXI.DisplayObject.prototype.SetPivot		=	function( pivot_data )
		{
			var	bounds	=	this.getBounds();

			if( pivot_data instanceof Vector2 )											{	this.pivot.x=pivot_data.X;this.pivot.y=pivot_data.Y;		}
			else
			{
				if( pivot_data.X !== undefined )										{	this.pivot.x	=	pivot_data.X;			}
				if( pivot_data.Y !== undefined )										{	this.pivot.y	=	pivot_data.Y;			}
				if( pivot_data.x !== undefined )										{	this.pivot.x	=	pivot_data.x;			}
				if( pivot_data.y !== undefined )										{	this.pivot.y	=	pivot_data.y;			}
				if( pivot_data.left !== undefined && pivot_data.left===true )			{	this.pivot.x	=  -bounds.width*0.5;		}
				if( pivot_data.top !== undefined && pivot_data.top===true )				{	this.pivot.y	=  -bounds.height*0.5;		}
				if( pivot_data.right !== undefined && pivot_data.right===true )			{	this.pivot.x	=	bounds.width*0.5;		}
				if( pivot_data.bottom !== undefined && pivot_data.bottom===true )		{	this.pivot.y	=	bounds.height*0.5;		}
				if( pivot_data.h_centre !== undefined && pivot_data.h_centre===true )	{	this.pivot.x	=	0;						}
				if( pivot_data.v_centre !== undefined && pivot_data.v_centre===true )	{	this.pivot.y	=	0;						}
			}
/*
			var	bounds	=	this.getBounds();

			if( pivot_data instanceof Vector2 )											{	this.anchor.x=pivot_data.X/bounds.width;this.anchor.y=pivot_data.Y/bounds.height;		}
			else
			{
				if( pivot_data.X !== undefined )										{	this.anchor.x	=	pivot_data.X/bounds.width;			}
				if( pivot_data.Y !== undefined )										{	this.anchor.y	=	pivot_data.Y/bounds.height;			}
				if( pivot_data.x !== undefined )										{	this.anchor.x	=	pivot_data.x/bounds.width;			}
				if( pivot_data.y !== undefined )										{	this.anchor.y	=	pivot_data.y/bounds.height;			}
				if( pivot_data.left !== undefined && pivot_data.left===true )			{	this.anchor.x	=	0;									}
				if( pivot_data.top !== undefined && pivot_data.top===true )				{	this.anchor.y	=	0;									}
				if( pivot_data.right !== undefined && pivot_data.right===true )			{	this.anchor.x	=	1;									}
				if( pivot_data.bottom !== undefined && pivot_data.bottom===true )		{	this.anchor.y	=	1;									}
				if( pivot_data.h_centre !== undefined && pivot_data.h_centre===true )	{	this.anchor.x	=	0.5;								}
				if( pivot_data.v_centre !== undefined && pivot_data.v_centre===true )	{	this.anchor.y	=	0.5;								}
			}
*/
		};
	}

	if( PIXI.DisplayObject.prototype.SetInteractive===undefined )
	{
		PIXI.DisplayObject.prototype.SetInteractive	=	function( state, listener, scope, once, args )
		{
			//	Is the button already in this state?
			if( this.interactive===state )
			{
				//	Seems to be, so do nothing.
				return;
			}

			//	If we're here, then set how interactive the display object is.
			this.interactive	=	state;

			//	Now do some state specific stuff.
			if( state )
			{
				var	click_fn	=	function( event )
				{
					//	Make sure nothing else gets this event.
					event.stopPropagation();

					//	Was it a once only job?
					if( this.il_once )
					{
						//	Yep, so clear interactivity.
						this.SetInteractive( false );
						this.buttonMode	=	false;
					}

					//	Is there a callback function?
					if( typeof listener==='function' )
					{
						//	Yep, so call it.
						listener.apply( scope, [event,args] );
					}

					return	false;
				}.bind(this);

				//	Make a note of the "once" state.
				this.il_once	=	once ? once : false;

				//	Listen out for stuff.
				this.on( 'click', click_fn );
				this.on( 'touchstart', click_fn );
			}
			else
			{
				//	Remove all event listeners.
				this.removeAllListeners( 'click' );
				this.removeAllListeners( 'touchstart' );
			}
		}
	}

	if( PIXI.DisplayObject.prototype.SetButtonMode===undefined )
	{
		PIXI.DisplayObject.prototype.SetButtonMode	=	function( state, listener, scope, once, args )
		{
			//	Set the button mode flag...
			this.buttonMode		=	state;

			//	...& get the base to do its thing.
			this.SetInteractive( state, listener, scope, once, args );
		}
	}

	if( PIXI.Container.prototype.getNumChildren===undefined )
	{
		PIXI.Container.prototype.getNumChildren			=	function()	{	return	this.children.length;	};
	}

	if( PIXI.Container.prototype.removeAllChildren===undefined )
	{
		PIXI.Container.prototype.removeAllChildren		=	function()	{	return	this.removeChildren();	};
	}
	if( PIXI.Container.prototype.cache===undefined )
	{
		PIXI.Container.prototype.cache					=	function()	{	this.cacheAsBitmap=true;		};
		PIXI.Container.prototype.updateCache			=	function()	{	this.cacheAsBitmap=true;		};
		PIXI.Container.prototype.uncache				=	function()	{	this.cacheAsBitmap=false;		};
	}

	if( PIXI.Sprite.prototype.gotoAndStop===undefined )
	{
		//	Add in the animation functions.
		PIXI.Sprite.prototype.gotoAndStop			=	function( anim_id )
		{
			this.SetAnimation( anim_id );
			this.Paused				=	true;
		};
		PIXI.Sprite.prototype.gotoAndPlay			=	function( anim_id, parms )
		{
			//	Any parms?
			if( parms )	{	this.ParseAnimParams( parms );	}

			this.SetAnimation( anim_id );
			this.Paused				=	false;
		};
		PIXI.Sprite.prototype.gotoAndPlayDuration	=	function( anim_id, parms )
		{
			//	Any parms?
			if( parms )	{	this.ParseAnimParams( parms );	}

			this.SetAnimation( anim_id, 1 );
			this.Paused				=	false;

/*
			//	Is the sprite ref is valid?
			if( this.SpriteSheet._animations.indexOf( anim_id )!=-1 )
			{
				//	Yep, so find the animation...
				var anim            =   this.spriteSheet.getAnimation( frameOrAnimation );


				//	It is, so get the frame ref...
				var frame_id	=	this.SpriteSheet._data[ anim_id ].frames[ 0 ];


			}

			if( this.spriteSheet )
			{
				//	Yep, so find the animation...
				var anim            =   this.spriteSheet.getAnimation( frameOrAnimation );

				//	...is it valid?
				if( anim )
				{
					//	Yep, so configure according to the params...
					var	callback	=	function(){},
						duration	=	1,
						stage		=	null;

					if( parms !== undefined )
					{
						if( parms.callback !== undefined )		{	callback=parms.callback;	}
						if( parms.duration !== undefined )		{	duration=parms.duration;	}
						if( parms.stage !== undefined )			{	stage=parms.stage;			}
					}

					//	...& get some anim stats.
					var	num_frames      =   anim.frames.length,
						time_stamp      =   Date.now();

					//  ...have some useful callback functions...
					var complete		=	function()
						{
							//	Ensure the final frame is visible.
							this.gotoAndStop( anim.frames[ num_frames-1 ] );

							//	Is there a stage attached?
							if( stage !== null )
							{
								//	Yep, so dirty it.
								stage.SetDirty();
							}

							//	Call the callback.
							callback();
						}.bind(this),
						update			=   function()
						{
							//  Calculate the normalised elapsed time...
							var elapsed_time    =   (Date.now()-time_stamp) / (duration*1000);

							//  ...& clamp it to 1.0
							if( elapsed_time > 1 )      {   elapsed_time=1; }

							//  Work out the frame...
							var frame   =   Math.floor( (num_frames-1) * elapsed_time );

							//  ...& display it.
							this.gotoAndStop( anim.frames[ frame ] );

							//	Is there a stage attached?
							if( stage !== null )
							{
								//	Yep, so dirty it.
								stage.SetDirty();
							}
						}.bind(this);

					//	...& play the anim.
					gsap.to( this, duration, {  onUpdate:update, onComplete:complete } );
				}
			}
*/
		};
		PIXI.Sprite.prototype.play					=	function( parms )
		{
			//	Any parms?
			if( parms )	{	this.ParseAnimParams( parms );	}

			this.Paused	=	false;
		};
		PIXI.Sprite.prototype.stop					=	function()	{	this.Paused	=	true;	};
	}

	if( PIXI.Text.prototype.clone===undefined )
	{
		PIXI.Text.prototype.clone	=	function()
		{
			var style	=	this.style.clone();

			return	new PIXI.Text( this.text, style );
		};
	}

	if( PIXI.Text.prototype.lineWidth===undefined )
	{
		Object.defineProperty( PIXI.Text.prototype, 'lineWidth', {	get: function(){ return this.width; }, set: function(value){ this.width=value; } }	);
	}

	if( PIXI.Text.prototype.maxWidth===undefined )
	{
		Object.defineProperty( PIXI.Text.prototype, 'maxWidth', {	get: function(){ return this.width; }, set: function(value){ this.width=value; } }	);
	}

	if( PIXI.DisplayObject.prototype.SetProps===undefined )
	{
		PIXI.DisplayObject.prototype.SetProps	=	function( parms )
		{
			if( parms.position!==undefined )	{	this.SetPosition( parms.position );		}
			if( parms.pivot!==undefined )		{	this.SetPivot( parms.pivot );			}
			if( parms.alpha!==undefined )		{	this.alpha=parms.alpha;					}
			if( parms.tint!==undefined  )		{	this.tint=parms.tint;					}
			if( parms.scale!==undefined )		{	this.SetScale( parms.scale );			}
			if( parms.scaleX!==undefined )		{	this.scaleX=parms.scaleX;				}
			if( parms.scaleY!==undefined )		{	this.scaleY=parms.scaleY;				}
			if( parms.rotation!==undefined )	{	this.rotation=parms.rotation;			}
			if( parms.visible!==undefined )		{	this.visible=parms.visible;				}
			if( parms.parent!==undefined  )		{	parms.parent.addChild( this ); 			}
		};
	}

	//-----------------------------------------------------------------------------------------------
	//	Beablib hooks.

	beablib.CreateSpriteSheet		=	Renderer.CreateSpriteSheet;
	beablib.CreateStage				=	Renderer.CreateStage;
	beablib.UpdateStages			=	Renderer.UpdateStages;
	beablib.UpdateStagesImmediate	=	Renderer.UpdateStagesImmediate;
	beablib.SetStageSize			=	Renderer.SetStageSize;
	beablib.SetStagePosition		=	Renderer.SetStagePosition;

	//-----------------------------------------------------------------------------------------------
	//	Spoof some createjs functions, for backwards compatibility.

	createjs.Container	=	function( parms )							{ return	Renderer.Container( parms ); 								};
	createjs.Sprite		=	function( sprite_sheet, sprite_ref, parms )	{ return	Renderer.CreateSprite(sprite_sheet, sprite_ref, parms );	};
	createjs.Text		=	function( text, text_params, parms )		{ return	Renderer.CreateText(text, text_params, parms );				};

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------
//	Beablib Button.
//-----------------------------------------------------------------------------------------------

beablib					=	window.beablib 			|| {};
beablib.Utils			=	beablib.Utils			|| {};

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	var	BUTTON_SCALE_PRESSED	=	0.98,
		PT_ABSOLUTE				=	0,
		PT_ABSOLUTE_CENTERED	=	1,
		PT_RELATIVE				=	2;

	//-----------------------------------------------------------------------------------------------
	//	Object definition.
	//-----------------------------------------------------------------------------------------------

	var CButton		=	function( position, scale, stage, sprite_sheet, normal_sprite, pressed_sprite, parms )
		{
			//	We want event dispatching capabilities for this object.
			createjs.EventDispatcher.initialize( CButton.prototype );

			//	Set up the defaults.
			var	pivot				=	null,
				prompt_anim			=	false,
				prompt_colour		=	0xffffff,
				prompt_glow			=	false,
				scale_x				=	1,
				scale_y				=	1;

			this.Stage				=	stage;
			this.ParentContainer	=	null;
			this.Position			=	position;
			this.PositionType		=	PT_RELATIVE;
			this.ButtonScale		=	scale;
			this.ButtonScalePressed	=	BUTTON_SCALE_PRESSED;
			this.SpriteSheet		=	sprite_sheet;
			this.IsToggle			=	false;
			this.ToggleState		=	false;
			this.Enabled			=	true;
			this.PromptType			=	"";
			this.PromptSequence		=	null;
			this.SoundEffect		=	"";
			this.HideOnPressed		=	false;

			//	Have we been passed parameters?
			if( parms !== undefined )
			{
				//	Yep, so configure the defaults accordingly.
				if( parms.Parent !== undefined )			{	this.ParentContainer	=	parms.Parent;		}
				if( parms.PushFn !== undefined )			{	this.ButtonPressed		=	parms.PushFn;		}
				if( parms.Pivot !== undefined  )			{	pivot					=	parms.Pivot;		}
				if( parms.Toggle !== undefined )			{	this.IsToggle			=	parms.Toggle;		}
				if( parms.ToggleState !== undefined )		{	this.ToggleState		=	this.IsToggle ? parms.ToggleState : 0;	}	//	Only set the toggle state if it's an actual toggle button.
				if( parms.PromptAnim !== undefined )		{	prompt_anim				=	parms.PromptAnim;	}
				if( parms.PromptGlow !== undefined )		{	prompt_glow				=	parms.PromptGlow;	}
				if( parms.PromptColour !== undefined )		{	prompt_colour			=	parms.PromptColour;	}
				if( parms.Sound !== undefined )				{	this.SoundEffect		=	parms.Sound;		}
				if( parms.PositionType !== undefined )
				{
					switch( parms.PositionType )
					{
						case	"fixed":
						{
							this.PositionType	=	PT_ABSOLUTE;
							break;
						}
						case	"centered":
						{
							this.PositionType	=	PT_ABSOLUTE_CENTERED;
							break;
						}
					}
				}
				if( parms.Flip !== undefined )
				{
					//	Are we trying to flip x?
					if( parms.Flip.x !== undefined )
					{
						//	Yep, so flip the scale...
						scale_x	=	-scale_x;

						//	...& the pivots if necessary.
						if( pivot!==null )
						{
							if( pivot.left !== undefined )
							{
								pivot.left	=	false;
								pivot.right	=	true;
							}
							else if( pivot.right !== undefined )
							{
								pivot.left	=	true;
								pivot.right	=	false;
							}
						}
					}

					//	Are we trying to flip y?
					if( parms.Flip.y !== undefined )
					{
						//	Yep, so flip the scale...
						scale_y	=	-scale_y;

						//	...& the pivots if necessary.
						if( pivot!==null )
						{
							if( pivot.top !== undefined )
							{
								pivot.top		=	false;
								pivot.bottom	=	true;
							}
							else if( pivot.bottom !== undefined )
							{
								pivot.top		=	true;
								pivot.bottom	=	false;
							}
						}
					}
				}
				if( parms.HideOnPressed !== undefined )
				{
					this.HideOnPressed	=	parms.HideOnPressed;
				}
			}

			//	Create a container to hold the button components.
			this.ButtonContainer	=	new	createjs.Container();

			//	Create the normal button sprite...
			var	button_sprite		=	new	createjs.Sprite( sprite_sheet, normal_sprite );

			if( pivot!==null )
			{
				button_sprite.SetPivot( pivot );
			}
			button_sprite.SetScale( scale_x, scale_y );

			this.GetButtonSprite	=	function(){ return button_sprite; };

			//	...& add it to the button container.
			this.ButtonContainer.addChild( button_sprite );

			//	Try to create a pressed button sprite.
			if( pressed_sprite!==null && pressed_sprite!=="" )
			{
				//	Create the sprite...
				this.ButtonDownSprite		=	new	createjs.Sprite( sprite_sheet, pressed_sprite );
				if( pivot!==null )
				{
					this.ButtonDownSprite.SetPivot( pivot );
				}
				this.ButtonDownSprite.SetScale( scale_x, scale_y );
				this.ButtonDownSprite.alpha	=	this.ToggleState;

				//	...& add it to the container.
				if( this.HideOnPressed )
				{
					this.ButtonContainer.addChildAt( this.ButtonDownSprite, 0 );
				}
				else
				{
					this.ButtonContainer.addChild( this.ButtonDownSprite );
				}
			}
			else
			{
				this.ButtonDownSprite		=	null;
			}

			//	Create a container to hold everything...
			this.Container			=	new	createjs.Container();
			this.Container.alpha	=	0;
			this.Container.addChild( this.ButtonContainer );

			//	...add it to the parent or stage?
			if( this.ParentContainer )
			{
				//	A parent...
				this.ParentContainer.addChild( this.Container );

				//	...which means we need to set the position directly...
				this.Container.SetPosition( this.Position );

				//	...& the scale.
				this.Container.SetScale( this.ButtonScale );
			}
			else
			{
				//	We're adding it directly to a stage...
				this.Stage.addChild( this.Container );

				//	...which means we want it to be responsible for its own position.
				beablib.AddRepositionable( this );
			}

			//	Do we want to play the prompt animation?
			if( prompt_anim )
			{
				//	Yep, so set the type.
				this.PromptType	=	"Anim";
			}
			else if( prompt_glow )
			{
				//	Yep, so set the type.
				this.PromptType	=	"Glow";

				//	Let's have a prompt glow, if the glow is defined.
				if( beablib.Utils.CGlow !== undefined )
				{
					this.GlowSprite	=	new beablib.Utils.CGlow( button_sprite, {alpha:0, colour:prompt_colour});
					this.ButtonContainer.addChild( this.GlowSprite );
				}
				else
				{
					this.GlowSprite	=	{alpha:0};
				}
			}

			//	Finally initialise it.
			this.Init();
		};

	//-----------------------------------------------------------------------------------------------
	//	Public.
	//-----------------------------------------------------------------------------------------------

	CButton.prototype.Init			=	function()
	{
		//	Has it been added to a parent container?
		if( !this.ParentContainer )
		{
			//	Nope, so we want to set its position.
			this.Reposition();
		}
	};

	//-----------------------------------------------------------------------------------------------

	CButton.prototype.Reposition	=	function( scale )
	{
		if( this.ParentContainer )
		{
			this.Container.SetPosition( this.Position.X, this.Position.Y );
			this.Container.SetScale( this.ButtonScale );
		}
		else
		{
			switch( this.PositionType )
			{
				case	PT_ABSOLUTE:
				{
					this.Container.SetPosition( this.Position.X*scale, this.Position.Y*scale );
					break;
				}
				case	PT_ABSOLUTE_CENTERED:
				{
					this.Container.SetPosition( this.Stage.View.HalfWidth+(this.Position.X*scale), this.Stage.View.HalfHeight+(this.Position.Y*scale) );
					break;
				}
				case PT_RELATIVE:
				{
					this.Container.SetPosition( this.Stage.View.Width*this.Position.X, this.Stage.View.Height*this.Position.Y );
					break;
				}
			}

			this.Container.SetScale( this.ButtonScale*scale );
		}
		this.Stage.SetDirty();
	};

	//-----------------------------------------------------------------------------------------------

	CButton.prototype.StartPrompt	=	function()
	{
		//	Have we created a prompt sequence?
		if( this.PromptSequence===null )
		{
			//	Nope, so we'll want to then.
			switch( this.PromptType )
			{
				case	"Anim":
				{
					//	Get the prompt animating.
					this.PromptSequence		=	gsap.timeline( {paused:true, callbackScope:this, onUpdate:function(){this.Stage.SetDirty();},repeat:-1, repeatDelay:3} );
					this.PromptSequence.addCallback( function(){ button_sprite.gotoAndPlay( normal_sprite ); }, 	"+=1" );
					this.PromptSequence.addCallback( function(){ button_sprite.gotoAndPlay( normal_sprite ); }, 	"+=1" );
					this.PromptSequence.addCallback( function(){ button_sprite.gotoAndPlay( normal_sprite ); }, 	"+=1" );
					break;
				}
				case "Glow":
				{
					this.PromptSequence		=	gsap.timeline( {paused:true, callbackScope:this, onUpdate:function(){this.Stage.SetDirty();},repeat:-1, delay:1, repeatDelay:3} );
					this.PromptSequence.add( gsap.to( this.GlowSprite, 0.4, {alpha:1} ) );
					this.PromptSequence.add( gsap.to( this.GlowSprite, 0.4, {alpha:0} ) );
					this.PromptSequence.add( gsap.to( this.GlowSprite, 0.4, {alpha:1} ) );
					this.PromptSequence.add( gsap.to( this.GlowSprite, 0.4, {alpha:0} ) );
					this.PromptSequence.add( gsap.to( this.GlowSprite, 0.4, {alpha:1} ) );
					this.PromptSequence.add( gsap.to( this.GlowSprite, 0.4, {alpha:0} ) );
					break;
				}
			}
		}

		//	Is the prompt valid & inactive?
		if( this.PromptSequence!==null && this.PromptSequence.paused )
		{
			//	Yep, so let's resume it.
			this.PromptSequence.restart( true );
		}
	};

	//-----------------------------------------------------------------------------------------------

	CButton.prototype.StopPrompt		=	function()
	{
		//	Is the prompt valid & active?
		if( this.PromptSequence!==null && !this.PromptSequence.paused )
		{
			//	Yep, so let's pause it...
			this.PromptSequence.pause(0);

			//	...& make sure the glow's hidden.
			this.GlowSprite.alpha	=	0;
		}
	};

	//-----------------------------------------------------------------------------------------------

	CButton.prototype.ButtonPressed	=	function()	{ };

	//-----------------------------------------------------------------------------------------------

	CButton.prototype.Enable		=	function( state )
	{
		//	Enable the button itself...
		this.Enabled				=	state;
		this.Container.mouseEnabled	=	state;

		//	...adjust the cursor...
		if( state )	{	this.Container.cursor="pointer";	}
		else		{	this.Container.cursor="default";	}

		//	...& maybe adjust the alpha if it's currently visible.
		if( this.Container.alpha )
		{
			this.Container.alpha=state ? 1 : 0.5;
			this.Stage.SetDirty();
		}
	};

	//-----------------------------------------------------------------------------------------------

	CButton.prototype.Disable		=	function()
	{
		//	Make sure there are no active tweens...
		gsap.killTweensOf( this.Container );

		//	...the mouse cursor is the default...
		this.Container.cursor="default";

		//	...& no active click handlers attached to this.
		this.Container.removeAllEventListeners( "click" );
	};

	//-----------------------------------------------------------------------------------------------

	CButton.prototype.Show			=	function( state )
	{
		var	update	=	function()
		{
			this.Stage.SetDirty();
		}.bind(this);

		//	Make sure there are no active tweens...
		gsap.killTweensOf( this.Container );

		//	...& no active click handlers attached to this.
		this.Container.removeAllEventListeners( "click" );

		//	State dependant alpha tween...
		var	alpha_to	=	state ? (this.Enabled ? 1 : 0.5) : 0;

		gsap.to( this.Container, 0.5, {alpha:alpha_to, onUpdate:update } );

		//	Is it appearing?
		if( state )
		{
			//	Start prompting...
			this.StartPrompt();

			//	...& listen out for clicks.
			this.Container.on	(
									"click",
									function( event )
									{
										//	Make sure we're the only thing that gets this event.
										event.stopImmediatePropagation();

										//	Maybe play a sound effect.
										if( this.SoundEffect !== "" )
										{
											beablib.Audio.Play( this.SoundEffect );
										}

										//	Is it a toggle?
										if( this.IsToggle )
										{
											//	Yes, so toggle the state.
											this.ToggleState	=	!this.ToggleState;
										}

										//	Reset the button.
										this.ButtonContainer.SetScale( 1 );
										if( this.ButtonDownSprite!=null )
										{
											this.ButtonDownSprite.alpha	=	this.IsToggle ? (this.ToggleState?1:0) : 0;
										}

										//	Bounce the entire button...
										gsap.to( this.ButtonContainer, 0.1, { scaleX:this.ButtonScalePressed, scaleY:this.ButtonScalePressed, yoyo:true, repeat:1, overwrite:true, onUpdate:update } );

										//	...& maybe bounce fade the button down part.
										if( !this.IsToggle && this.ButtonDownSprite!==null )
										{
											if( this.HideOnPressed )
											{
												//	Make sure the button down sprite is visible & the up button is hidden...
												this.ButtonDownSprite.alpha		=	1;
												this.GetButtonSprite().alpha	=	0;
												update();

												//	...then reverse that after 0.1 seconds.
												gsap.delayedCall( 0.1, function(){ this.ButtonDownSprite.alpha=0;this.GetButtonSprite().alpha=1; }, null, this );
//												gsap.to( this.GetButtonSprite(), 0, { alpha:0, yoyo:true, repeat:1, overwrite:true, onUpdate:update } );
											}
											else
											{
												gsap.to( this.ButtonDownSprite, 0.1, { alpha:1, yoyo:true, repeat:1, overwrite:true, onUpdate:update } );
											}
										}

										//	Call the button pressed function.
										this.ButtonPressed();
									},
									this
								);

			//	Switch on mouse tracking, & turn the cursor into a hand for desktop.
			if( !beablib.IsMobile )
			{
				this.Container.cursor	=	"pointer";
				this.Stage.enableMouseOver( 10 );
			}
		}
		else
		{
			//	Stop prompting...
			this.StopPrompt();

			//	...& set everything to default state.
			gsap.killTweensOf( this.ButtonContainer );
			this.ButtonContainer.SetScale(1);
			if( this.ButtonDownSprite!=null )
			{
				gsap.killTweensOf( this.ButtonDownSprite );
				this.ButtonDownSprite.alpha	=	this.IsToggle ? (this.ToggleState?1:0) : 0;
			}

			//	Switch off mouse tracking, & set the cursor to default for desktop.
			if( !beablib.IsMobile )
			{
				this.Container.cursor	=	"default";
//				this.Stage.enableMouseOver( 0 );
			}
		}
	};

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	beablib.Utils.CButton	=	CButton;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------
//	Beablib Bitmap Font.
//-----------------------------------------------------------------------------------------------

beablib				=	window.beablib		||	{};
beablib.Renderer	=	beablib.Renderer	||	{};
beablib.Utils		=	beablib.Utils		||	{};

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	var X_LEFT                  = -1,
		X_CENTRE                =  0,
		X_RIGHT                 =  1;

	var Y_BOTTOM                = -1,
		Y_CENTRE                =  0,
		Y_TOP                   =  1;

	//-----------------------------------------------------------------------------------------------
	//	Private static data.
	//-----------------------------------------------------------------------------------------------

	//	Beablib aliases.
	var	Renderer					=	beablib.Renderer;

	//	Font data.
	var	FontArray					=	[];

	//-----------------------------------------------------------------------------------------------
	//	Private members.
	//-----------------------------------------------------------------------------------------------

	var CreateText	=	function( chosen_font, chosen_size, text, parms )
	{
		//	We do, so let's create an appropriate style...
		var	anchor_x	=	0,
			anchor_y	=	0,
			max_width	=	-1,
			style		=	{
								font: {name:chosen_font.font, size:chosen_size},
								align: parms.textAlign!==undefined ? parms.textAlign : 'left',
								tint: parms.colour!==undefined ? parms.colour : 0xffffff
							};

		//	...and generate the new text.
		var	new_text	=	new PIXI.extras.BitmapText( text, style );

		//	Let's do the post parms setting...
		if( parms.maxWidth )		{	max_width=parms.maxWidth; 	}
		if( parms.textAlign )
		{
			switch( parms.textAlign )
			{
				case	'center':	anchor_x	=	0.5;	break;
				case	'right':	anchor_x	=	1;		break;
			}
		}
		if( parms.textBaseline )
		{
			switch( parms.textBaseline )
			{
				case	'alphabetic':	anchor_y=0.8;	break;
				case	'top':
				case	'hanging':		anchor_y=0;		break;
				case	'middle':		anchor_y=0.5;	break;
				case	'ideographic':
				case	'bottom':		anchor_y=1;		break;
			}
		}
		new_text.anchor.x	=	anchor_x;
		new_text.anchor.y	=	anchor_y;
		new_text.updateText();

		//	...including any properties.
		new_text.SetProps( parms );

		//	Additional useful data.
		new_text.IL_MaxWidth	=	max_width;
		if( new_text.IL_MaxWidth>=0 && new_text.width>new_text.IL_MaxWidth )	{	new_text.maxWidth=new_text.IL_MaxWidth;	}

		//	Change text via a method, so we can tweak the width.
		new_text.SetTextString	=	function( string )
		{
			this.text	=	string;
			if( this.IL_MaxWidth>=0 && this.width>this.IL_MaxWidth )	{	this.maxWidth=this.IL_MaxWidth;	}
			this.updateText();
		}.bind( new_text );


		return	new_text;
	};

	//-----------------------------------------------------------------------------------------------
	//	Constructor.
	//-----------------------------------------------------------------------------------------------

	var	CBitmapFont	=	function( font_def_file, font_image_file )
	{
		/*
				//	Has the font_image_file field been defined?
				if( font_image_file===undefined )
				{
					//	Nope, so font_def_file is probably the name of a font rather than an XML object, in which case let's set up the objects correctly.
					font_image_file	=	beablib.GetImageObjectByID( font_def_file+"SS" );
					font_def_file	=	beablib.GetXMLObject( font_def_file+".xml" );
				}

				//	Prepare a PIXI base texture.
				var	base_texture	=	new	PIXI.BaseTexture( font_image_file ); //, PIXI.settings.SCALE_MODE, beablib.DevicePixelRatio);

				//	Did it work?
				if( base_texture === null )
				{
					//	Nope, so bail.
					return	null;
				}

				var	texture	=	PIXI.Texture.from( font_image_file.src );

				this.FontDefinition	=	PIXI.extras.BitmapText.registerFont( font_def_file, texture );
		*/
		this.FontDefinition	=	CBitmapFont.RegisterFont( font_def_file );
	};

	//-----------------------------------------------------------------------------------------------
	//	Public.
	//-----------------------------------------------------------------------------------------------

	CBitmapFont.prototype.CalculateCursorPos	=	function( string, position, scale, justification )
	{
		console.log( "CBitmapFont.prototype.CalculateCursorPos::DEPRECATED" );

		return	{X:0,Y:0};
	};

	//-----------------------------------------------------------------------------------------------

	CBitmapFont.prototype.Print		=	function( string, position, scale, container, params )
	{
		var	style	=	{
							fontFamily: 	this.FontDefinition.FontFamily,
							colour: 		params.colour!==undefined ? params.colour : 0xffffff,
							size: 			this.FontDefinition.size,
							textAlign:		params.h!==undefined ? params.h : "left",
							textBaseline:	params.v!==undefined ? params.v : "alphabetic",

							//	Properties.
							position:		position,
							scale:			scale
						};

		var	new_text	=	CreateText( this.FontDefinition, this.FontDefinition.size, string, style );

		container.addChild( new_text );

		return new_text;
	};

	//-----------------------------------------------------------------------------------------------
	//	Public static members.
	//-----------------------------------------------------------------------------------------------

	CBitmapFont.RegisterFont	=	function( font_def_file )
	{
		var	xml	=	beablib.GetXMLObject( font_def_file+".xml" );

		//	Parse the XML if it's valid.
		if( xml )
		{
			var	font_info		=	xml.getElementsByTagName('info')[0],
				font_family		=	font_info.getAttribute('face'),
				font_size		=	parseInt(font_info.getAttribute('size'), 10),
				img_file_name	=	xml.getElementsByTagName( "page" )[0].getAttribute('file');

			//	Is the file name valid?
			if( img_file_name!==null )
			{
				//	Probably, so attempt to find the image file object.
				var img_object	=	beablib.GetImageObject( img_file_name );

				if( img_object )
				{
					//	Got it, so try to create a PIXI texture from it.
					var	texture	=	PIXI.Texture.from( img_object.src );

					if( texture )
					{
						//	Looks good, so let's fudge the name so PIXI can differentiate between font sizes easily...
						font_info.setAttribute( 'face', font_family+font_size );

						//	...register the font with PIXI...
						var	new_font	=	PIXI.extras.BitmapText.registerFont( xml, texture );

						//	...and try to keep track of it.
						var	font_face_ref	=	FontArray[ font_family ];

						//	Have we a previous reference?
						if( font_face_ref===undefined )
						{
							//	Nope, so create a new on.
							font_face_ref	=	{};
							FontArray[ font_family ]	=	font_face_ref;
						}

						//	Let the new font know about it's family name...
						new_font.FontFamily			=	font_family;

						//	...store a reference to the new font by size...
						font_face_ref[ font_size ]	=	new_font;

						//	...and return the new font too.
						return	new_font;
					}
				}
			}
		}

		//	Nothing.
		return	null;
	};

	//-----------------------------------------------------------------------------------------------

	CBitmapFont.CreateText		=	function( text, parms )
	{
		//	We can only create text if valid parameters have been passed.
		if( parms!==undefined && parms.fontFamily!==undefined )
		{
			var	font_family_ref	=	FontArray[ parms.fontFamily ];

			if( font_family_ref!==undefined )
			{
				var	chosen_font			=	null,
					current_size_diff	=	10000,
					preferred_size		=	parms.size!==undefined ? parms.size : 2;	//	Let's aim for a tiny size by default.

				//	They have, so let's go!
				for( var key in font_family_ref )
				{
					var	font_ref	=	font_family_ref[key],
						size		=	parseInt( key, 10 ),
						size_diff	=	Math.abs( size-preferred_size );

					//	Is this a size match?
					if( size_diff===0 )
					{
						//	Yep, so make a note...
						chosen_font	=	font_family_ref[key];

						//	...and bail.
						break;
					}
					else if( size_diff<current_size_diff )
					{
						//	Nope, but this is the current closest match...
						current_size_diff	=	size_diff;

						//	...so make a note.
						chosen_font			=	font_family_ref[key];
					}
				}

				//	So we *should* have a font now.
				if( chosen_font!==null )
				{
					return	CreateText( chosen_font, preferred_size, text, parms );
				}
			}
		}

		return	null;
	};

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	beablib.Utils.CBitmapFont	=	CBitmapFont;

	//-----------------------------------------------------------------------------------------------
}());


//-----------------------------------------------------------------------------------------------
//	Beablib SequenceTrigger.
//-----------------------------------------------------------------------------------------------

beablib					=	window.beablib 			|| {};
beablib.Utils			=	beablib.Utils			|| {};

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	var	CSequenceTrigger		=	function( event_name, sequence_fn )
		{
			var triggered		=	false,
				trigger_fn		=	function()
				{
					//	Clear the trigger...
					triggered	=	false;

					//	...& call the sequence function (notice the evils of no error checking).
					sequence_fn();
				};

			this.ClearTrigger	=	function()	{	triggered=false;	};

			this.Trigger		=	function()
			{
				//	Flag that we've been triggered...
				triggered	=	true;

				//	...but also send out a trigger event to the world.
				beablib.DispatchEvent( event_name );
			};

			this.ReadyToExecute	=	function()
			{
				//	Have we already been triggered?
				if( triggered )
				{
					//	Yep, so call the trigger code immediately.
					trigger_fn();
				}
				else
				{
					//	Nope, so listen for the trigger event.
					beablib.EventHandler.on( event_name, trigger_fn, null, true );
				}
			};
		};

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	beablib.Utils.CSequenceTrigger	=	CSequenceTrigger;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------
//	Beablib Spine.
//-----------------------------------------------------------------------------------------------

beablib				=	window.beablib 			|| {};
beablib.Renderer	=	beablib.Renderer		|| {};
beablib.Utils		=	beablib.Utils			|| {};

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	var	DEGS_TO_RADS				=	 0.017453;

	//-----------------------------------------------------------------------------------------------
	//	Private Statics.
	//-----------------------------------------------------------------------------------------------

	//	Beablib aliases.
	var Renderer			=	beablib.Renderer;

	//	Class data.
	var	NextID				=	0,
		AnimsArray			=	[],
		AnimsCleanupArray	=	[],
		AtlasInstances		=	{},
		AnimsProcess		=	{};

	//-----------------------------------------------------------------------------------------------
	//	Private Statics.
	//-----------------------------------------------------------------------------------------------

	AnimsProcess.Process	=	function( delta )
	{
		//	Process the animations.
		for( var c0=0; c0<AnimsArray.length; c0++ )
		{
			var	anim_ref	=	AnimsArray[c0];

			anim_ref.Process( delta );
		}

		//	Any animations in the cleanup array get removed once we've processed everything.
		for( c0=0; c0<AnimsCleanupArray.length; c0++ )
		{
			//	Find the anim object...
			var	idx	=	AnimsArray.indexOf( AnimsCleanupArray[c0] );

			//	...& attempt to remove it.
			if(idx>=0)	{	AnimsArray.splice( idx,1 );	}
		}
		AnimsCleanupArray.length	=	0;
	};

	AnimsProcess.Render		=	function()
	{
		//	Process the animations.
		for( var c0=0; c0<AnimsArray.length; c0++ )
		{
			var	anim_ref	=	AnimsArray[c0];

			anim_ref.Render();
		}
	};

	//	Make sure the anims gets processed every frame.
	beablib.AddProcessable( AnimsProcess );

	//-----------------------------------------------------------------------------------------------
	//	Main class definition.
	//-----------------------------------------------------------------------------------------------

	var CSpineAnim		=	function( atlas_object, json_object, image_object, parms )
	{
		//	We want event dispatching capabilities for this object.
		createjs.EventDispatcher.initialize( CSpineAnim.prototype );

		//	Parse some unique parameters.
		var scale			=	(parms&&parms.scale!==undefined) ? parms.scale : 1,
			unique_atlas_id	=	(parms&&parms.atlasUniqueID!==undefined) ? parms.atlasUniqueID : -1;

		// Instead of rolling our own spine code, we're going to use PixiSpine instead.
		PIXI.spine.Spine.globalAutoUpdate = false;

		var base_texture = new	PIXI.BaseTexture( image_object );

		var spineAtlas = new PIXI.spine.core.TextureAtlas( atlas_object, function(line, callback)
		{
			callback( base_texture );
		});

		var spineAtlasLoader = new PIXI.spine.core.AtlasAttachmentLoader( spineAtlas );
		var spineJsonParser = new PIXI.spine.core.SkeletonJson( spineAtlasLoader );

		spineJsonParser.scale = scale;

		this.SkeletonData = spineJsonParser.readSkeletonData( json_object );

		this.Atlas = spineAtlas;
	};

	//-----------------------------------------------------------------------------------------------

	CSpineAnim.prototype.CreateSpriteAssets	=	function( atlas, image )
	{
		//	Parse the atlas' regions to create a sprite sheet...
		var sprite_sheet =
		{
			images: [ image ],
			frames: [],
			animations: {}
		};

		for( var c0=0; c0<atlas.regions.length; c0++ )
		{
			var region	=	atlas.regions[ c0 ];

			sprite_sheet.frames.push(
										[
											region.x,
											region.y,
											region.width,
											region.height,
											0,
											(region.originalWidth/2) - region.offsetX,
											(region.originalHeight/2) - (region.originalHeight - (region.offsetY+region.height))
										]
									);

			sprite_sheet.animations[ region.name ]	=	new	Array( [c0] );
		}

		//	...& create the sheet.
		if( typeof Renderer.CreateSpriteSheet==='function' )
		{
			//	If there's a renderer then we want to create the sprite through that.
			atlas.SpriteSheet	=	Renderer.CreateSpriteSheet( sprite_sheet );
		}
		else
		{
			//	No renderer, so assume this is legacy.
			atlas.SpriteSheet	=	new	createjs.SpriteSheet( sprite_sheet );
		}

		//	Finally let's set the texture field for each region.
		for( var c0=0; c0<atlas.regions.length; c0++ )
		{
			var region	=	atlas.regions[ c0 ];

			region.texture	=	atlas.SpriteSheet._frames[c0];
		}

		//-----------------------------------------------------------------------------------------------
		//	Some handy helpers.

		this.GetSpriteSheet	=	function()				{	return	this.Atlas.SpriteSheet;			};

		//-----------------------------------------------------------------------------------------------
	};


	CSpineAnim.prototype.CreateAnimInstance_new	=	function( stage, parms )
	{
		var	skeleton_data	=	this.SkeletonData,
			spine_ref		=	new pixi_spine.Spine( skeleton_data );

		var	skeleton		=	spine_ref.skeleton;

		//	Assign a unique ID.
		skeleton.ID	=	NextID++;

		//-----------------------------------------------------------------------------------------------
		//	Animation state stuff.

		var	state_data			=	spine_ref.stateData,
			state				=	spine_ref.state;

		state.anim_paused		=	true;

		//	... & callbacks.
//		state.onStart		=	function( track_index )						{};
//		state.onEnd			=	function( track_index )						{};
//		state.onComplete	=	function( track_index, iteration )			{};
		state.onEvent		=	function( track_index, spine_event )
		{
			//	An event's been triggered, so dispatch it to the outside world.
			main_container.dispatchEvent( spine_event.data.name );
		};

		//-----------------------------------------------------------------------------------------------
		//	Drawing stuff.

		var	main_container		=	spine_ref,
			the_stage			=	stage,
			update_stage		=	false;

		main_container.SetProps( parms );

		//-----------------------------------------------------------------------------------------------
		//	GotoAndPlay functionality.

		main_container.gotoAndPlay		=	function( anim_name, parms )
		{
			//	Default parameters.
			var animation		=	skeleton_data.findAnimation( anim_name ),
				completion_fn	=	null,
				loop_it			=	false,
				time_scale		=	1;

			//	Is the animation valid?
			if( !animation )
			{
				//	Nope, so bail.
				console.log( "Animation: "+anim+" not found!" );
				return;
			}

			//	Any parameters passed in?
			if( parms!==undefined )
			{
				completion_fn	=	parms.callback ? parms.callback : completion_fn;		//	Legacy.
				completion_fn	=	parms.onComplete ? parms.onComplete : completion_fn;
				loop_it			=	parms.Loop ? parms.Loop : loop_it;						//	Legacy.
				loop_it			=	parms.loop ? parms.loop : loop_it;
				time_scale		=	parms.Speed ? parms.Speed : time_scale;					//	Legacy.
				time_scale		=	parms.timeScale ? parms.timeScale : time_scale;
			}

			//	Set up the new animation...
			skeleton.setToSetupPose();
			state.setAnimation( 0, anim_name, loop_it );

			//	...reset the state...
			state.anim_paused	=	false;
			state.timeScale		=	time_scale;
			state.onComplete	=	function()
			{
				//	Dispatch an event to say we've ended.
//				main_container.dispatchEvent( "animationend" );
				main_container.emit( "animationend" );

				//	Does it want to loop?
				if( !loop_it )		{	state.anim_paused=true;	}	//	Nope, so pause the animation.

				//	Was a completion callback supplied?
				if( completion_fn!==null )	{	completion_fn();		}	//	Yep, so call it.
			};

			//	...& make sure there's a cheeky update.
			main_container.Process(0);

		}.bind(this);

		//-----------------------------------------------------------------------------------------------
		//	Some handy helpers.

		main_container.HasAnimation		=	function( anim_name )	{	return	skeleton_data.findAnimation( anim_name )!=null;	};
		main_container.SetSkin			=	function( name )		{	skeleton.setSkinByName( name );							};
		main_container.SetStage			=	function( stage )		{	the_stage=stage;										};
		main_container.GetSpriteRef		=	function( slot_name )	{	return	slot_sprite_refs[slot_name];					};

		//-----------------------------------------------------------------------------------------------
		//	Process object functionality.

		main_container.Process			=	function( dt )
		{
			if( !state.anim_paused )
			{
				// state.update( dt );
				// state.apply( skeleton );
				// skeleton.updateWorldTransform();

				spine_ref.update( dt );

				update_stage	=	true;
			}
		};

		main_container.Render			=	function()
		{
			//	Do we want to update?
			if( update_stage )
			{
				//	Yep, so update the anim frame...
//				spine_ref.update();

				//	...dirty the stage...
				the_stage.SetDirty();

				//	...but try to avoid doing it again.
				update_stage	=	false;
			}
		};

		//-----------------------------------------------------------------------------------------------

		//	We need to handle being added to and from a container/parent for processing reasons, so create a handy function...
		var	add_anim		=	function()
			{
				AnimsArray.push( main_container )
			},
			remove_anim	=	function()
			{
				//	Instantly hide it...
//				main_container.visible	=	false;

				//	...and add it to the cleanup array for later removal.
				AnimsCleanupArray.push( main_container );
			};

		//	...and listen for events.
		main_container.once( "added", add_anim, main_container );
		main_container.once( "removed", remove_anim, main_container );

		//-----------------------------------------------------------------------------------------------

		//	Return the container as our base element.
		return	main_container;
	};

	CSpineAnim.prototype.CreateAnimInstance	=	function( stage, parms )
	{
		//-----------------------------------------------------------------------------------------------
		//	Skeleton stuff.

		//	Create a skeleton instance.
		var	skeleton_data	=	this.SkeletonData,
			skeleton		=	new spine.Skeleton( skeleton_data );

		//	Is it valid?
		if(!skeleton)	{	return	null;	}	//	Nope.

		//	Yep, so sort out the initial transform.
		skeleton.updateWorldTransform();

		//	Assign a unique ID.
		skeleton.ID	=	NextID++;

		//-----------------------------------------------------------------------------------------------
		//	Animation state stuff.

		var	state_data			=	new spine.AnimationStateData( skeleton_data ),
			state				=	new spine.AnimationState( state_data );

		state.anim_paused		=	true;

		//	... & callbacks.
//		state.onStart		=	function( track_index )						{};
//		state.onEnd			=	function( track_index )						{};
//		state.onComplete	=	function( track_index, iteration )			{};
		state.onEvent		=	function( track_index, spine_event )
		{
			//	An event's been triggered, so dispatch it to the outside world.
			main_container.dispatchEvent( spine_event.data.name );
		};

		//-----------------------------------------------------------------------------------------------
		//	Drawing stuff.

		var	draw_order			=	skeleton.drawOrder,
			main_container		=	Renderer.CreateContainer( parms ),
			slot_containers		=	[],
			slot_sprites		=	[],
			slot_sprite_refs	=	[],
			sprite_sheet		=	this.Atlas.SpriteSheet,
			the_stage			=	stage,
			update_stage		=	false;

 		//	Set up the draw containers.
		for( var c0=0; c0<draw_order.length; c0++ )
		{
			//	Create the container...
			slot_containers[c0]	=	Renderer.CreateContainer( {visible:false} );

			//	...& add it to the main container.
			main_container.addChild( slot_containers[c0] );
		}

		//	Set an animation frame.
		var	draw_anim_frame		=	function( first_time )
		{
			var	visible	=	(first_time!==undefined) ? !first_time : true;

			for( var c0=0; c0<draw_order.length; c0++ )
			{
				var slot		=	draw_order[c0],
					alpha		=	slot.a,
					attachment	=	slot.attachment,
					bone		=	slot.bone,
					colour		=	((255*slot.r)<<16) | ((255*slot.g)<<8) | (255*slot.b);

				//	Is there an attachment?
				if(!attachment)
				{
					//	Nope, so hide the container...
					slot_containers[c0 ].visible	=	false;

					//	...& skip the rest of this slot.
					continue;
				}

				//	Is there something to render?
				if( attachment.rendererObject )
				{
					//	Yep, so see how the sprite looks.
					var	sprite_name	=	attachment.rendererObject.name,
						sprite_ref	=	slot_sprites[c0];

					if( !sprite_ref )
					{
						//	We've not got one, so create one...
						sprite_ref	=	Renderer.CreateSprite( sprite_sheet, sprite_name );

						//	...make sure it's added to the container...
						slot_containers[c0].addChild( sprite_ref );

						//	...& that we keep track of it.
						slot_sprites[c0]					=	sprite_ref;
						slot_sprite_refs[ attachment.name ]	=	sprite_ref;
					}
					else
					{
						//	We've got one, so make sure it's the correct image.
						sprite_ref.gotoAndStop( sprite_name );
					}

					//	Make sure the container's visible.
					slot_containers[c0 ].visible	=	true;
				}

				//	Now transform the sprite.
				var	container	=	slot_containers[c0],
					sprite		=	slot_sprites[c0];

				if(container && sprite)
				{
					container.visible	=	visible;
					container.x			=	bone.worldX+attachment.x*bone.m00+attachment.y*bone.m01;
					container.y			=	bone.worldY+attachment.x*bone.m10+attachment.y*bone.m11;
					container.scaleX	=	bone.worldScaleX;
					container.scaleY	=	bone.worldScaleY;
					container.rotation	=  -bone.worldRotation*DEGS_TO_RADS;
					container.alpha		=	alpha;
					sprite.tint			=	colour;

					if( bone.worldFlipX )
					{
						container.scaleX	=	-container.scaleX;
						container.rotation	=	-container.rotation*DEGS_TO_RADS;
					}
					if( bone.worldFlipY === spine.Bone.yDown )
					{
						container.scaleY	=	-container.scaleY;
						container.rotation	=	-container.rotation*DEGS_TO_RADS;
					}

					sprite.gotoAndStop( attachment.name );
					sprite.rotation		= -(attachment.rotation*DEGS_TO_RADS);
				}
			}
		}.bind(this);

		//	Set up the first frame of animation.
		draw_anim_frame( true );

		//-----------------------------------------------------------------------------------------------
		//	GotoAndStop functionality.

		main_container.gotoAndStop		=	function( anim )
		{
			//	Find the animation...
			var	animation	=	skeleton_data.findAnimation( anim );

			//	...set up the first frame...
			skeleton.setToSetupPose();
			state.setAnimation( 0, animation, false );
			state.update(0);
			state.apply( skeleton );
			skeleton.updateWorldTransform();

			//	...& make sure it's updated.
			update_stage	=	true;
		}.bind(this);

		//-----------------------------------------------------------------------------------------------
		//	BlendAndPlay functionality.

		main_container.blendAndPlay		=	function( anim, parms )
		{
			//	TODO
		}.bind(this);

		//-----------------------------------------------------------------------------------------------
		//	GotoAndPlay functionality.

		main_container.gotoAndPlay		=	function( anim, parms )
		{
			//	Default parameters.
			var animation		=	skeleton_data.findAnimation( anim ),
				completion_fn	=	null,
				loop_it			=	false,
				time_scale		=	1;

			//	Is the animation valid?
			if( !animation )
			{
				//	Nope, so bail.
				console.log( "Animation: "+anim+" not found!" );
				return;
			}

			//	Any parameters passed in?
			if( parms!==undefined )
			{
				completion_fn	=	parms.callback ? parms.callback : completion_fn;		//	Legacy.
				completion_fn	=	parms.onComplete ? parms.onComplete : completion_fn;
				loop_it			=	parms.Loop ? parms.Loop : loop_it;						//	Legacy.
				loop_it			=	parms.loop ? parms.loop : loop_it;
				time_scale		=	parms.Speed ? parms.Speed : time_scale;					//	Legacy.
				time_scale		=	parms.timeScale ? parms.timeScale : time_scale;
			}

			//	Set up the new animation...
			skeleton.setToSetupPose();
			state.setAnimation( 0, animation, loop_it );

			//	...reset the state...
			state.anim_paused	=	false;
			state.timeScale		=	time_scale;
			state.onComplete	=	function()
			{
				//	Dispatch an event to say we've ended.
//				main_container.dispatchEvent( "animationend" );
				main_container.emit( "animationend" );

				//	Does it want to loop?
				if( !loop_it )		{	state.anim_paused=true;	}	//	Nope, so pause the animation.

				//	Was a completion callback supplied?
				if( completion_fn!==null )	{	completion_fn();		}	//	Yep, so call it.
			};

			//	...& make sure there's a cheeky update.
			main_container.Process(0);

		}.bind(this);

		//-----------------------------------------------------------------------------------------------
		//	Some handy helpers.

		main_container.HasAnimation		=	function( anim_name )	{	return	skeleton_data.findAnimation( anim_name )!=null;	};
		main_container.SetSkin			=	function( name )		{	skeleton.setSkinByName( name );							};
		main_container.SetStage			=	function( stage )		{	the_stage=stage;										};
		main_container.GetSpriteRef		=	function( slot_name )	{	return	slot_sprite_refs[slot_name];					};

		//-----------------------------------------------------------------------------------------------
		//	Process object functionality.

		main_container.Process			=	function( dt )
		{
			if( !state.anim_paused )
			{
				state.update( dt );
				state.apply( skeleton );
				skeleton.updateWorldTransform();
				update_stage	=	true;
			}
		};

		main_container.Render			=	function()
		{
			//	Do we want to update?
			if( update_stage )
			{
				//	Yep, so update the anim frame...
				draw_anim_frame();

				//	...dirty the stage...
				the_stage.SetDirty();

				//	...but try to avoid doing it again.
				update_stage	=	false;
			}
		};

		//-----------------------------------------------------------------------------------------------

		//	We need to handle being added to and from a container/parent for processing reasons, so create a handy function...
		var	add_anim		=	function()
			{
				AnimsArray.push( main_container )
			},
			remove_anim	=	function()
			{
				//	Instantly hide it...
//				main_container.visible	=	false;

				//	...and add it to the cleanup array for later removal.
				AnimsCleanupArray.push( main_container );
			};

		//	...and listen for events.
		main_container.once( "added", add_anim, main_container );
		main_container.once( "removed", remove_anim, main_container );

		//-----------------------------------------------------------------------------------------------

		//	Return the container as our base element.
		return	main_container;
	};

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	beablib.Utils.CSpineAnim	=	CSpineAnim;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//	WeBeable library game module root.
//-----------------------------------------------------------------------------------------------

beablib				=	window.beablib 	|| {};
beablib.Game		=	beablib.Game	|| {};

//-----------------------------------------------------------------------------------------------

(function()
{
	//-----------------------------------------------------------------------------------------------

	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Local paths to external objects.

	var	Game					=	beablib.Game;

	//-----------------------------------------------------------------------------------------------

	//	Game Events.
	Game.Events					=	{
										Config:				"BLGameCore:Config",
										Initialised:		"BLGameCore:Initialised",
										SetTitleMode:		"BLGameCore:SetTitleMode",
//										SetGameMode:		"BLGameCore:SetGameMode",
										PrepareGame:		"BLGameCore:PrepareGame",
										PrepareAutoplay:	"BLGameCore:PrepareAutoplay",
										ReadyToStart:		"BLGameCore:ReadyToStart",
										ContinueAutoplay:	"BLGameCore:ContinueAutoplay",
										StartGame:			"BLGameCore:StartGame",
										RestoreGame:		"BLGameCore:RestoreGame",
										TurnTaken:			"BLGameCore:TurnTaken",
										TurnsComplete:		"BLGameCore:TurnsComplete",
										SetupPrizeTable:	"BLGameCore:SetupPrizeTable",
										CancelledAutoplays:	"BLGameCore:CancelledAutoplays",
										UpdateAudio:		"BLGameCore:UpdateAudio",
										UpdateAutoplays:	"BLGameCore:UpdateAutoplays",
										UpdateBalance:		"BLGameCore:UpdateBalance",
										UpdateStake:		"BLGameCore:UpdateStake",
										UpdateState:		"BLGameCore:UpdateState",
										UpdateTurns:		"BLGameCore:UpdateTurns",
										UpdateWinnings:		"BLGameCore:UpdateWinnings",
										Winner:				"BLGameCore:Winner",

										HideAbout:			"BLGameCore:HideAbout",
										HideAutoplay:		"BLGameCore:HideAutoplay",
										HideHelp:			"BLGameCore:HideHelp",
										HideSettings:		"BLGameCore:HideSettings",
										HidePayTable:		"BLGameCore:HidePayTable",
										ShowAbout:			"BLGameCore:ShowAbout",
										ShowAutoplay:		"BLGameCore:ShowAutoplay",
										ShowHelp:			"BLGameCore:ShowHelp",
										ShowSettings:		"BLGameCore:ShowSettings",
										ShowPayTable:		"BLGameCore:ShowPayTable",

										//	Deprecated.
										EndGame:			"BLGameCore:EndGame",
										Error:				"BLGameCore:Error"
									};

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//	WeBeable library core - Camelot
//-----------------------------------------------------------------------------------------------

beablib				=	window.beablib 		|| {};
beablib.Renderer	=	beablib.Renderer	||	{};

//-----------------------------------------------------------------------------------------------

(function()
{
	//-----------------------------------------------------------------------------------------------

	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Private statics.
	//-----------------------------------------------------------------------------------------------

	//	Camelot loader aliases.
	var camelot			=	window.com.camelot,
		core			=	camelot.core,
		iwg				=	camelot.iwg;

	//	Beablib aliases.
	var	Renderer		=	beablib.Renderer;

	//	Data.
	var	PauseIcon		=	null,
		PauseOverlay	=	null;

	//-----------------------------------------------------------------------------------------------

	var	Reposition			=	function(){};

	//-----------------------------------------------------------------------------------------------

	var	CreatePauseOverlay	=	function()
	{
		//	Create a dimmed rectangale for the background...
		var	overlay		=	new	PIXI.Graphics();

		//	...with a handy update function.
		overlay.Update	=	function( scale )
		{
			overlay.clear();
			overlay.beginFill(0x0, 1);
			overlay.drawRect( -beablib.MainView.HalfWidth/scale, -beablib.MainView.HalfHeight/scale, beablib.MainView.Width/scale, beablib.MainView.Height/scale );
			overlay.endFill();
			overlay.alpha	=	0.75;
		};

		//	Has the pause icon been set?
		if( PauseIcon===null )
		{
			//	Nope, so let's create a default one.
			var	pause_icon	=	new	PIXI.Graphics();

			pause_icon.beginFill(0xffffff, 1);		//	White circle.
			pause_icon.drawCircle( 128,128,80 );
			pause_icon.endFill();

			pause_icon.beginFill(0x0, 1);			//	Black vertical bars.
			pause_icon.drawRoundedRect( 128-30,128-40,20,80,4 );
			pause_icon.drawRoundedRect( 128+10,128-40,20,80,4 );
			pause_icon.endFill();

			pause_icon.pivot.set( 128,128 );
/*
			//	...& its mask.
			var mask_canvas		=	document.createElement('canvas'),
				mask_ctx		=	mask_canvas.getContext('2d');

			mask_canvas.height		=	256;
			mask_canvas.width		=	256;

			mask_ctx.roundRect	=	function ( x, y, w, h, r )
			{
				//	Make sure the rect is centered.
				x	=	x-(w*0.5);
				y	=	y-(h*0.5);

				if (w < 2 * r) r = w / 2;
				if (h < 2 * r) r = h / 2;
				this.beginPath();
				this.moveTo(x+r, y);
				this.arcTo(x+w, y,   x+w, y+h, r);
				this.arcTo(x+w, y+h, x,   y+h, r);
				this.arcTo(x,   y+h, x,   y,   r);
				this.arcTo(x,   y,   x+w, y,   r);
				this.closePath();
				return this;
			};

			//	Mask comprises a circle...
			mask_ctx.fillStyle	=	"#ffffff";
			mask_ctx.beginPath();
			mask_ctx.arc( 128,128,70,0,2*Math.PI );
			mask_ctx.fill();
			mask_ctx.closePath();

			//	...a couple of vertical bars...
			mask_ctx.fillStyle	=	"#000";
			mask_ctx.roundRect( 128-20,128,20,80,3 ).fill();
			mask_ctx.roundRect( 128+20,128,20,80,4 ).fill();

			//	...which is munged together into a PIXI sprite...
			var icon_mask	=	new PIXI.Sprite( PIXI.Texture.fromCanvas(mask_canvas) );

			//	...which we add as a mask to the original icon...
			pause_icon.addChild( icon_mask );
			pause_icon.mask	=	icon_mask;
*/
			//	...& finally set.
			PauseIcon		=	pause_icon;
		}

		//	Create the overlay container...
		PauseOverlay	=	new	PIXI.Container();

		//	...& add the overlay & icon to it.
		PauseOverlay.addChild( overlay, PauseIcon );

		//	Let's add some handy functionality to the overlay.
		PauseOverlay.Reposition	=	function( stage, scale )
		{
			overlay.Update( scale );
			PauseOverlay.SetPosition( stage.View.HalfWidth, stage.View.HalfHeight );
			PauseOverlay.SetScale( scale );
		};

		PauseOverlay.WaitToUnPause			=	function( unpause_callback )
		{
			PauseOverlay.SetInteractive( true, unpause_callback, null, true );
		};
	};

	//-----------------------------------------------------------------------------------------------
	//	Public statics.
	//-----------------------------------------------------------------------------------------------

	Renderer.SetPauseIcon			=	function( pause_icon )
	{
		//	Does the pause overlay already exist?
		if( PauseOverlay!==null )
		{
			//	Yep, but has the pause icon been set already?
			if( PauseIcon!==null )
			{
				//	Yep, so remove it from the PauseOverlay.
				PauseOverlay.removeChild( PauseIcon );
			}

			//	Add the new pause icon to the pause overlay.
			PauseOverlay.addChild( pause_icon );
		}

		//	Make a note of the new pause icon.
		PauseIcon	=	pause_icon;
	};

	//-----------------------------------------------------------------------------------------------

	Renderer.GetPauseOverlay		=	function()
	{
		if( PauseOverlay===null )
		{
			CreatePauseOverlay();
		}

		return	PauseOverlay;
	};

	//-----------------------------------------------------------------------------------------------
}());


//-----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------
//	WeBeable library core - Camelot Flavour
//-----------------------------------------------------------------------------------------------

beablib					=	window.beablib 		|| {};
beablib.Audio			=	beablib.Audio		|| {};
beablib.Core			=	beablib.Core		|| {};
beablib.FontsLoader		=	beablib.FontsLoader	|| {};
beablib.Game			=	beablib.Game		|| {};
beablib.Renderer		=	beablib.Renderer	|| {};

//-----------------------------------------------------------------------------------------------

(function()
{
	//-----------------------------------------------------------------------------------------------

	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Private static data.
	//-----------------------------------------------------------------------------------------------

	//	Camelot loader aliases.
	var camelot			=	window.com.camelot,
		core			=	camelot.core,
		iwg				=	camelot.iwg;

	//	Beablib aliases.
	var	Core			=	beablib.Core,
		FontsLoader		=	beablib.FontsLoader,
		Game			=	beablib.Game,
		Renderer		=	beablib.Renderer;

	//	Default roots.
	var	LIB_ROOT		=	"src/",
		SOURCE_ROOT		=	"src/",
		IMPORTS_ROOT	=	"src/imports/";

	//-----------------------------------------------------------------------------------------------
	//	Useful globals.

	beablib.GamePath			=	"";
	beablib.AudioSpritePath		=	"";
	beablib.SpriteSheetPath		=	iwg.imports.js;
	beablib.IsMobile			=	false;
	beablib.PauseEnabled		=	true;
	beablib.AutoPause			=	true;
	beablib.ResizeEnabled		=	false;

	//-----------------------------------------------------------------------------------------------
	//	Patch console.log...obviously I'll patch it slightly more comprehensively later on.

	var	original	=	console.log;

	beablib.log		=	function( obj ){ console.log( obj ); /*original.apply(this,arguments)*/ };
//	console.log		=	beablib.log;

	//-----------------------------------------------------------------------------------------------

	beablib.ParentCanvasID			=	"IWGholder";
	beablib.GetBaseCanvasName		=	function()					{	return	"IWGcanvas";																	};
	beablib.GetAtlasPath			=	function( atlas_file )		{	return	beablib.GamePath+"src/imports/atlas/"+atlas_file;								};
	beablib.GetAtlasObject			=	function( atlas_file )		{	return	core.iwgLoadQ.getResult( beablib.GamePath+"src/imports/atlas/"+atlas_file );	};
	beablib.GetAtlasObjectByID		=	function( atlas_id )		{	return	core.iwgLoadQ.getResult( atlas_id );											};
	beablib.GetFontPath				=	function( font_file )		{	return	beablib.GamePath+IMPORTS_ROOT+"font/"+font_file;								};
	beablib.GetJSONPath				=	function( json_file )		{	return	beablib.GamePath+"src/imports/json/"+json_file;									};
	beablib.GetJSONObject			=	function( json_file )		{	return	core.iwgLoadQ.getResult( beablib.GamePath+"src/imports/json/"+json_file );		};
	beablib.GetJSONObjectByID		=	function( json_id )			{	return	core.iwgLoadQ.getResult( json_id );												};
	beablib.GetImage				=	function( image )			{	return	image;																			};
	beablib.GetImageObject			=	function( image_file )		{	return	core.iwgLoadQ.getResult( beablib.GamePath+"src/imports/img/"+image_file );		};
	beablib.GetImageObjectByID		=	function( image_id )		{	return	core.iwgLoadQ.images[ image_id ];												};
	beablib.GetXMLPath				=	function( xml_file )		{	return	beablib.GamePath+"src/imports/xml/"+xml_file;									};
	beablib.GetXMLObject			=	function( xml_file )		{	return	core.iwgLoadQ.getResult( beablib.GamePath+"src/imports/xml/"+xml_file );		};
	beablib.GetXMLObjectByID		=	function( xml_id )			{	return	core.iwgLoadQ.getResult( xml_id );												};
	beablib.GetLocalisedString		=	function( string_ref )		{	return	string_ref;		};
	beablib.FormatCurrencyString	=	function( value )			{	return	value;			};

	//-----------------------------------------------------------------------------------------------

	beablib.CreatePrizeTable		=	function( data )
	{
		//	Now we need to set the game's prize table up.
		BLGame.CurrentCard.PrizeTable	=	[];
	};

	//-----------------------------------------------------------------------------------------------

	beablib.CalcPseudoSeed			=	function( data )
	{
		//	Reset the pseudo seed.
		beablib.PseudoSeed	=	0;
	};

	//-----------------------------------------------------------------------------------------------

	beablib.ShowSettingsMenu		=	function()						{};

	//-----------------------------------------------------------------------------------------------

	beablib.PrepareGame				=	function()
	{
	};

	//-----------------------------------------------------------------------------------------------

	beablib.RevealCell				=	function( cell_ref )
	{
	};

	//-----------------------------------------------------------------------------------------------

	beablib.AutoReveal				=	function()
	{
	};

	//-----------------------------------------------------------------------------------------------
	//	Object aliases.

	var BLGame				=	beablib.Game;

	//-----------------------------------------------------------------------------------------------

	var initialise			=	function()
		{
			beablib.log( "Initialising Beablib_Core_Camelot" );

			//-----------------------------------------------------------------------------------------------
			//	Make a note on whether we're mobile or not.

			beablib.IsMobile		=	!com.camelot.core.IWG.ame('get','IS_DESKTOP');

			//-----------------------------------------------------------------------------------------------
			//	Get some info about the browser we're running on.
			Core.ParseBrowser();

			//-----------------------------------------------------------------------------------------------
			//	If we're in a frame, we need to make it the focus.

			var	keyboard_focus		=	function()
			{
				if( document.getElementsByName("html5-frame").length )
				{
					document.getElementsByName("html5-frame")[0].contentWindow.document.body.focus();
				}
			};

			//	Initial keyboard focus.
			keyboard_focus();

			//-----------------------------------------------------------------------------------------------
			//	Resizing.

			var	resize_enabled	=	true;

			//	Resize everything.
			var	resize	=	function( width, height )
			{
				//	Is resize enabled?
				if( !resize_enabled )
				{
					//	Nope, so bail.
					return;
				}

				//	Update the main view parameters.
				beablib.MainView.Set( width, height );

				//	Is this the desktop version of the game?
				if( core.IWG.ame('get','IS_DESKTOP') )
				{
					//	Yep, so we're going to be cheeky & tweak the loader's size.
					var	holder_ele	=	document.getElementById( "IWGholder" );

					 if( holder_ele != null )
					 {
						 holder_ele.style.width		=	width+"px";
						 holder_ele.style.height	=	height+"px";
					 }
				}

				//	Reposition everything.
				beablib.RepositionAll();
			};

			//	Let's set the device pixel ratio.
			if( window.devicePixelRatio !== undefined )
			{
				//	The window know all about dPR so make a note of it.
				beablib.DevicePixelRatio	=	window.devicePixelRatio;
			}
			else
			{
				//	dPR is undefined, so let's work it out a different way.
				var screen	=	window.screen;

				beablib.DevicePixelRatio	=	(screen !== undefined && screen.systemXDPI !== undefined && screen.logicalXDPI !== undefined && screen.systemXDPI > screen.logicalXDPI) ? (screen.systemXDPI/screen.logicalXDPI) : 1;
			}

			//	Initial resize pretends it's a 960 x 640 screen.
			resize( 960, 640 );

			//	Respond to standard window resize events (debug only really).
//			window.addEventListener( "resize", function(evt){ resize(window.innerWidth, window.innerHeight); } );

			//	Respond to IWGLoader resize events.
			com.camelot.iwg.IWGEM.on(
										com.camelot.core.IWGEVENT.RESIZE,
										function(evt)
										{
											resize	(
														parseInt( core.IWG.ame('get',{vars:['gameWidth']}) ),
														parseInt( core.IWG.ame('get',{vars:['gameHeight']}) )
													);

											//	Refocus the keyboard, just in case.
											keyboard_focus();
										}
									);

			com.camelot.iwg.IWGEM.on(
										com.camelot.core.IWGEVENT.FULLSCREEN,
										function(evt)
										{
											var	is_desktop	=	core.IWG.ame('get','IS_DESKTOP'),
												height		=	is_desktop ? window.innerHeight : core.IWG.ame('get',{vars:['gameHeight']}),
												width		=	is_desktop ? window.innerWidth	: core.IWG.ame('get',{vars:['gameWidth']});

											resize( width, height );

											//	Refocus the keyboard, just in case.
											keyboard_focus();
										}
									);

			//-----------------------------------------------------------------------------------------------
			//	Pausing.

			var	pause_canvas		=	null,
				pause_stage			=	null,
				pause_overlay		=	null,
				pause_reposition	=	null,
				show_pause_screen	=	function()
				{
					//	Get the renderer's pause overlay.
					pause_overlay	=	Renderer.GetPauseOverlay();

					//	Do we have a pause stage yet?
					if( pause_stage==null )
					{
						// Nope, so create a canvas...
						pause_canvas	=	beablib.CreateCanvas( {id:"BeablibPauseCanvas", zIndex:5000, position:"fixed", AddToParent:true });

						// ...& an associated stage.
						pause_stage	=	beablib.CreateStage( "BeablibPauseCanvas", beablib.MainView.Width, beablib.MainView.Height );
					}

					if( pause_reposition==null )
					{
						pause_reposition	=	{
													Reposition:	function()
													{
														if( typeof pause_overlay.Reposition==='function' )
														{
															pause_overlay.Reposition( pause_stage, beablib.MainView.ScaleFactor );
														}
													}
												};

						beablib.SetRepositionable( pause_reposition );
					}

					//	Make sure clicks/taps work on the stage & it's visible.
					pause_canvas.EnablePointerEvents( true );
					pause_canvas.Show( true );

					//	Add the pause overlay to the stage...
					pause_stage.addChild( pause_overlay );

					//	...& update it.
					pause_stage.SetDirty();
				};

			var paused	=	false,
				pause	=	function( event )
				{
					//	Is pause enabled?
					if( !beablib.PauseEnabled )
					{
						//	Nope, but do we want to autopause?
						if( beablib.AutoPause )
						{
							//	Yep.
							beablib.TweenHandler.Pause( event );
						}

						//	Bail.
						return;
					}

					//	Do we want to pause?
					if( event===true )
					{
						//	Yep & are we free to do so?
						if(paused !== true)
						{
							//	Yep, so pause...
							console.log("Pausing.");
							paused	=	true;
							//Game.Pause( paused );

							//	...make a note of the current tween pause state & pause regardless...
							var	tween_pause_state	=	beablib.TweenHandler.IsPaused();
							beablib.TweenHandler.Pause( true );

							//	...make a note of the current sound state & mute regardless...
							var	sound_state			=	createjs.Sound.muted;
							createjs.Sound.muted = true;

							//	...make a note of the input detection state & switch it off regardless...
							var	input_state			=	BLGame.DetectInput;
							BLGame.DetectInput	=	false;

							//	...show the default pause screen...
							show_pause_screen();

							//	...create a handy "unpause" function...
							var	unpause	=	function()
							{
								//	Start the unpausing process by getting rid of the pause overlay...
								pause_stage.removeChild( pause_overlay );
								pause_stage.SetDirty();

								//	...restore the sound state...
								createjs.Sound.muted = sound_state;

								//	...& make sure the pause canvas no longer receives input & is hidden.
								pause_canvas.EnablePointerEvents( false );
								pause_canvas.Show( false );

								//	Restore the tween pause state...
								beablib.TweenHandler.Pause( tween_pause_state );

								//	...restore the game detection state...
								BLGame.DetectInput	=	input_state;

								//	...& unpause.
								console.log( "UnPausing." );
								paused	=	false;
								//Game.Pause( paused );

								//	Update all the stages.
								beablib.UpdateStagesImmediate();

								//	Refocus the keyboard, just in case.
								keyboard_focus();
							};

							//	...& listen out for taps on the overlay.
							pause_overlay.WaitToUnPause( unpause );
						}
					}
				};

			//	A handy function for externally setting the pause icon.
			beablib.SetPauseIcon	=	function( pause_sprite )
			{
				Renderer.SetPauseIcon( pause_sprite );
			};

			//	Respond to IWGLoader pause events.
			com.camelot.iwg.IWGEM.on(
										com.camelot.core.IWGEVENT.PAUSE,
										pause
									);

			//-----------------------------------------------------------------------------------------------
			// 	Initialise the game...

			//	Is there are Init function?
			if( typeof BLGame.Init==='function' )
			{
				//	Yep, so Init.
				BLGame.Init();
			}

			//	...now let's do a post initialise resize to the actual window size, which let's beablib sort out the positioning of everything.
			resize	(
						parseInt( core.IWG.ame('get',{vars:['gameWidth']}) ),
						parseInt( core.IWG.ame('get',{vars:['gameHeight']}) )
					);

			//	Enable the resize based on whatever the game set.
			resize_enabled	=	beablib.ResizeEnabled;
		};

	//-----------------------------------------------------------------------------------------------

	var	IWGInit		=	function()
		{
			//-----------------------------------------------------------------------------------------------
			//	Work out the game path.

			//	Make a note of the game path...
			beablib.GamePath		=	com.camelot.core.IWG.ame('get', {vars: ['params']}).gamePath;

			//	...and set up some path variables for beablib to use.
			Core.ImportsRoot		=	beablib.GamePath+IMPORTS_ROOT;

			//-----------------------------------------------------------------------------------------------

			//	Handy launch function.
			var launch	=	function()
			{
				//	Initialise the game...
				initialise();

				//	...& kill the loader.
				core.IWG.ame('killLoader');

				//	Is there a Launch function?
				if( typeof BLGame.Launch==='function' )
				{
					//	Yep.
					var	launched	=	false,
						sub_launch	=	function()
						{
							//	Have we launched yet?
							if( !launched )
							{
								//	Nope, so do it.
								launched	=	true;
								BLGame.Launch();
							}
						};

					//	Whichever happens first, so we launch one way or another.  Note: This is to try and avoid the resize glitch when the FULLSCREEN events kicks in.
					com.camelot.iwg.IWGEM.on( com.camelot.core.IWGEVENT.FULLSCREEN, sub_launch );
					gsap.delayedCall( 1, sub_launch );
				}
			};

			//	Let's attempt to load the fonts before we initialise the game.
			FontsLoader.Load( BLGame.FontDefinitions, 0, launch );
		};

	//	Register the IWGInit function with the loader.
	iwg._class( "core.IWGInit", IWGInit );

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
