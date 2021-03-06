/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){var n=/\+/g;function o(e){return r.raw?e:encodeURIComponent(e)}function i(e){return o(r.json?JSON.stringify(e):String(e))}function t(o,i){var t=r.raw?o:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(n," "))}catch(e){return}try{return r.json?JSON.parse(e):e}catch(e){}}(o);return e.isFunction(i)?i(t):t}var r=e.cookie=function(n,c,u){if(void 0!==c&&!e.isFunction(c)){if("number"==typeof(u=e.extend({},r.defaults,u)).expires){var a=u.expires,d=u.expires=new Date;d.setDate(d.getDate()+a)}return document.cookie=[o(n),"=",i(c),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}for(var f,s=n?void 0:{},p=document.cookie?document.cookie.split("; "):[],m=0,v=p.length;m<v;m++){var x=p[m].split("="),l=(f=x.shift(),r.raw?f:decodeURIComponent(f)),g=x.join("=");if(n&&n===l){s=t(g,c);break}n||void 0===(g=t(g))||(s[l]=g)}return s};r.defaults={},e.removeCookie=function(n,o){return void 0!==e.cookie(n)&&(e.cookie(n,"",e.extend({},o,{expires:-1})),!0)}}));