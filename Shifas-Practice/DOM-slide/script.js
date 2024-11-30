"use strict";

let index = 0;
const scale = 1300;

const slides = document.getElementById("lines");
const line = document.getElementsByClassName("line");

const next = function () {
  goToSlide(index + 1);
};

const prev = function () {
  goToSlide(index - 1);
};

function goToSlide(idx) {
  // perlu validasi, krn idx tidak boleh kurang dari 0 dan melebihi length slide items
  if (idx < 0) return;
  if (idx >= line.length) {
    idx = 0;
  }
  index = idx;

  const disabledBtn = document.getElementById("prev");
  // hapus dulu class `active` di kedua tombol navigasi
  disabledBtn.disabled = false;

  if (index == 0) {
    disabledBtn.disabled = true;
  }
  slides.style.transform = "translateX(-" + idx * scale + "px)";
  dotIndicator(index);
}

const dotIndicator = function (i) {
  const dots = document.getElementsByClassName("dot");

  for (let j = 0; j < dots.length; j++) {
    dots[j].classList.remove("dot-fill");
  }
  dots[i].classList.add("dot-fill");
};

// setInterval(function () {
//   next();
// }, 3000);
