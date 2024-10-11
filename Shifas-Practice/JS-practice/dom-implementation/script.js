"use strict";
const tutor = document.getElementById("tutor-page");
const contentWrapper = document.getElementsByClassName("content-wrapper");
const paragraf = document.getElementsByClassName("paragraf");

function setStyle() {
  contentWrapper[0].style.paddingRight = "1rem";
}

// const setInterval = function () {
setInterval(function () {
  tutor.style.backgroundColor = "cyan";
  tutor.style.color = "black";
  paragraf[0].style.color = "red";
  paragraf[1].style.color = "blue";
  paragraf[2].style.color = "purple";
  paragraf[3].style.color = "orange";
  paragraf[4].style.color = "aqua";
  paragraf[5].style.color = "green";

  setTimeout(function () {
    tutor.style.backgroundColor = "blue";
    tutor.style.color = "red";
    paragraf[0].style.color = "black";
    paragraf[1].style.color = "black";
    paragraf[2].style.color = "black";
    paragraf[3].style.color = "black";
    paragraf[4].style.color = "black";
    paragraf[5].style.color = "black";
  }, 500);
}, 1000);
// };

setStyle();
// setInterval();
