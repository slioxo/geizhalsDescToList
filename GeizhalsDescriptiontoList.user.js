// ==UserScript==
// @name         Geizhals Description to List
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes the description of Geizhals articles a list rather than a text
// @author       http://t.me/lioxo
// @include      /^https?:\/\/geizhals\.(at|de|eu)\/.*$/
// @grant        none
// ==/UserScript==

//get div with product description
var prodDesc = document.getElementById('gh_proddesc');
if(prodDesc){
    //extract innerHTML, split by dot symbols, and create the list from the resulting array
    //then, insert this HTML into the div
    var prodDescText = prodDesc.innerHTML;
    var prodDescArray = prodDescText.split(" • ");
    var prodDescList = createList(prodDescArray);
    prodDesc.innerHTML = prodDescList;
}

//create a simple unordered list from a given array
function createList(listArray){
    var html = '<ul>';
    listArray.forEach(function appendAsListPoint(listItem){
        html += '<li>'+listItem+'</li>';
    });
    html += '</ul>';
    return html;
}
