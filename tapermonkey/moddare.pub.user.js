// ==UserScript==
// @name         alert on mod dare
// @version      0.1
// @description  moves the inspired to the top of the page
// @author       GodOfLaundryBaskets
// @include      http*://archiveofourown.org/*
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// @updateURL    https://github.com/godoflaundry/fandom-scripts/raw/master/tapermonkey/seepodficfirst.pub.user.js
// @downloadURL  https://github.com/godoflaundry/fandom-scripts/raw/master/tapermonkey/seepodficfirst.pub.user.js
// @grant        none
// ==/UserScript==

var $ = window.jQuery;

const words = [ "Octopus",
               "Vacuum",
               "Insipid",
               "Chaos",
               "Electrifying",
               "Treachery",
               "Ectoplasm",
               "Adhesive",
               "Mollify",
               "Exclamation Point!"];

function moddare() {
    words.forEach((word) => {
        if ($("*:icontains('"+word+"')").length > 0) {
            // Text found on the page
            alert("mod dare found! " + word);
        }
    })
}

$.expr[':'].icontains = function(a, i, m) {
    return $(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};


$( document ).ready(function() {
    'use strict';
    var added = moddare();
});
