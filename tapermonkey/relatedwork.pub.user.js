
// ==UserScript==
// @name         Tone Marks
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Cathalinaheart
// @match        https://archiveofourown.org/*
// @updateURL    https://github.com/Cathalinaheart/AO3-Tone-Marks/blob/main/Tone%20Marks.user.pub.js
// @downloadURL  https://github.com/Cathalinaheart/AO3-Tone-Marks/blob/main/Tone%20Marks.user.pub.js
// @grant        none
// ==/UserScript==

const user_regex = /https:\/\/archiveofourown\.org\/users\/([^/]+)/;

$( document ).ready(function() {
    let m = window.location.href.match(user_regex);
    if (m === null) {
        return;
    }
    console.log("On a profile, adding realted work button info...")

    $("#dashboard ul").last().append(
        `<li><a href="${m[0]}/related_works?target=blank">Related Works</a></li>`
    )

});
