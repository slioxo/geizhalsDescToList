// ==UserScript==
// @name         Geizhals Description to List
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes the description of Geizhals articles a list rather than a text
// @author       http://t.me/lioxo
// @match        http://geizhals.de/*
// @grant        none
// ==/UserScript==

var prodDesc = document.getElementById('gh_proddesc');
if(prodDesc){
    var prodDescText = prodDesc.innerHTML;
    var prodDescArray = prodDescText.split(" • ");
    var prodDescList = createList(prodDescArray);
    prodDesc.innerHTML = prodDescList;
}

function createList(listArray){
    var html = '<ul>';
    listArray.forEach(function appendAsListPoint(listItem){
        html += '<li>'+listItem+'</li>';
    });
    html += '</ul>';
    return html;
}