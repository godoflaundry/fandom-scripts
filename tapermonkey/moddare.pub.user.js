// ==UserScript==
// @name         alert on mod dare
// @version      1.0
// @description  moves the inspired to the top of the page
// @author       GodOfLaundryBaskets
// @include      http*://archiveofourown.org/*
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// @updateURL    https://github.com/godoflaundry/fandom-scripts/blob/master/tapermonkey/moddare.pub.user.js
// @downloadURL  https://github.com/godoflaundry/fandom-scripts/blob/master/tapermonkey/moddare.pub.user.js
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
               "Exclamation Point",
              "Exclamation Mark"];

function moddare() {
    words.forEach((word) => {
        if ($("*:icontains('"+word+"')").length > 0) {
            // Text found on the page
            $("div.flash").first().append("<br /><br/><br/>").append("<h2 align=\"center\" class='title heading'><b>mod dare found: "+word+" </b></h2><br/><br/><br/><br/>");
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
