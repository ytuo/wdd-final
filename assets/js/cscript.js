let lineGroups = document.getElementsByClassName("cln2-4");
let numLines = lineGroups.length;

function changeColor(color) {
    for (let i = 0; i < numLines; i++) {
        // lineGroups[i].style.transition = "opacity 0.6s linear";
        lineGroups[i].style.backgroundColor = color;
    }
}

for (let i = 0; i < numLines; i++) {
    lineGroups[i].onmouseover = function() {
        changeColor("#9CC0E7");
        show(document.getElementById("cln2-4-exp"));
    };
    lineGroups[i].onmouseout = function() {
        changeColor("white");
        hide(document.getElementById("cln2-4-exp"));
    };
}

function hide(elem) {
    elem.style.display = "none";
}

function show(elem) {
    elem.style.display = "flex";
}

let cln1 = document.getElementById("cln1");
let cln1exp = document.getElementById("cln1-exp");

let cln3 = document.getElementById("cln3");
let cln3exp = document.getElementById("cln3-exp");

cln1.onmouseover = function() {
    show(cln1exp);
}

cln1.onmouseout = function() {
    hide(cln1exp);
}

cln3.onmouseover = function() {
    show(cln3exp);
}

cln3.onmouseout = function() {
    hide(cln3exp);
}

