// document.getElementById("L1").addEventListener("click", function() {

//     var Line = document.getElementsById("line");
//     Line.classList.toggle("hide");
// });
var Tab1 = document.getElementById("HU1");
var Tab2 = document.getElementById("HU2");
var Tab5 = document.getElementById("HU5");
var Tab4 = document.getElementById("HU4");
var Tab3 = document.getElementById("HU3");
var Tab7 = document.getElementById("HU7");
var Tab6 = document.getElementById("HU6");
var Tab8 = document.getElementById("HU8");
var Tab9 = document.getElementById("HU9");
var Line1 = document.getElementById("line1");
var Line2 = document.getElementById("line2");
var Line3 = document.getElementById("line3");
var Line4 = document.getElementById("line4");
var Line6 = document.getElementById("line6");
var Line7 = document.getElementById("line7");
var Line9 = document.getElementById("line9");
var Line5 = document.getElementById("line5");
var Line8 = document.getElementById("line8");
var I1 = document.getElementById("1");
var I2 = document.getElementById("2");
var I3 = document.getElementById("3");
var I4 = document.getElementById("4");
var I5 = document.getElementById("5");
var I6 = document.getElementById("6");
var I7 = document.getElementById("7");



document.getElementById("L1").addEventListener("click", function() {
    Tab1.classList.toggle("hide");
    Tab1.classList.toggle("border");
    Line1.classList.toggle("hide");
    I1.classList.toggle("color");
});

document.getElementById("L2").addEventListener("click", function() {
    Line2.classList.toggle("hide");
    Tab2.classList.toggle("hide");
    Tab2.classList.toggle("border");
    I2.classList.toggle("color");
});

document.getElementById("L3").addEventListener("click", function() {
    Line3.classList.toggle("hide");
    Tab3.classList.toggle("hide");
    Tab3.classList.toggle("border");
});

document.getElementById("L4").addEventListener("click", function() {
    Line4.classList.toggle("hide");
    Tab4.classList.toggle("hide");
    Tab4.classList.toggle("border");
    I3.classList.toggle("color");
});

document.getElementById("L5").addEventListener("click", function() {
    Line5.classList.toggle("hide");
    Tab5.classList.toggle("hide");
    Tab5.classList.toggle("border");
    I4.classList.toggle("color");
});

document.getElementById("L6").addEventListener("click", function() {
    Line6.classList.toggle("hide");
    Tab6.classList.toggle("hide");
    Tab6.classList.toggle("border");
});

document.getElementById("L7").addEventListener("click", function() {
    Line7.classList.toggle("hide");
    Tab7.classList.toggle("hide");
    Tab7.classList.toggle("border");
    I7.classList.toggle("color");
});

document.getElementById("L8").addEventListener("click", function() {
    Line8.classList.toggle("hide");
    Tab8.classList.toggle("hide");
    Tab8.classList.toggle("border");
    I5.classList.toggle("color");
});

document.getElementById("L9").addEventListener("click", function() {
    Line9.classList.toggle("hide");
    Tab9.classList.toggle("hide");
    Tab9.classList.toggle("border");
    I6.classList.toggle("color");
});