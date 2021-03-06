// ==UserScript==
// @name         See Podfic First
// @version      0.1
// @description  moves the inspired to the top of the page
// @author       GodOfLaundryBaskets
// @include      http*://archiveofourown.org/*works*
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// @updateURL    https://github.com/godoflaundry/fandom-scripts/raw/master/tapermonkey/seepodficfirst.pub.user.js
// @downloadURL  https://github.com/godoflaundry/fandom-scripts/raw/master/tapermonkey/seepodficfirst.pub.user.js
// @grant        none
/* globals jQuery, $, waitForKeyElements */
// ==/UserScript==


function addPodficsOnSamePage() {
    const children = Array.from(document.querySelectorAll('div.children'));
    if (!children.length) {
        return false;
    }
    $("div.notes").first().append("<br />").append(children);
    $("p.jump").first().remove();
    return true;
}

function addPodficsAtEndOfWork() {
    const jumpBlock = Array.from(document.querySelectorAll('p.jump'));

    if (!jumpBlock.length || !jumpBlock[0].textContent.includes("other works inspired by this one")) {
        return false;
    }

    $(jumpBlock).css("font-weight", "bold")
    $(jumpBlock).css("background-color", "#e2e2e2");;
}

$( document ).ready(function() {
    'use strict';
    var added = addPodficsOnSamePage();

    if(!added) {
        addPodficsAtEndOfWork()
    }
});