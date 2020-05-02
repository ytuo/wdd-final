function hide(elem) {
    elem.style.display = "none";
}

function show(elem) {
    elem.style.display = "flex";
}

let jln1 = document.getElementById("javaln1");
let jln1exp = document.getElementById("javaln1-exp");

let jln2 = document.getElementById("javaln2");
let jln2exp = document.getElementById("javaln2-exp");

let jln3 = document.getElementById("javaln3");
let jln3exp = document.getElementById("javaln3-exp");

jln1.onmouseover = function() {
    show(jln1exp);
}

jln1.onmouseout = function() {
    hide(jln1exp);
}

jln2.onmouseover = function() {
    show(jln2exp);
}

jln2.onmouseout = function() {
    hide(jln2exp);
}


jln3.onmouseover = function() {
    show(jln3exp);
}

jln3.onmouseout = function() {
    hide(jln3exp);
}

