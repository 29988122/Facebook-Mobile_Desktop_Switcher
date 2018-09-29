// ==UserScript==
// @name        MeowYourFacebook
// @namespace   https://m.facebook.com/*
// @description Meow
// @include     https://m.facebook.com/*
// @exclude     %exclude%
// @version     
// @grant       none
// ==/UserScript==
var add = window.location.href;
add = add.replace("//m.","//www.");
add = add.replace("story.php?","permalink.php?");
window.location.assign(add);
//window.alert(add);