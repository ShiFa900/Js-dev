"use strict";

const calculateGeo = function () {
  const length = document.getElementById("length").value;
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  return length * width * height;
};

const show = function () {
  const field = document.getElementById("field");
  field.innerHTML = "";
  const volume = calculateGeo();
  let geoName = "";

  if (length === 10 && width === 10 && height === 10) {
    geoName = "Balok indah!";
  } else if (length === width && width === height) {
    geoName = "Kubus";
  } else {
    geoName = "Balok";
  }

  field.innerHTML +=
    "<p>" + "Bangun ruang: " + geoName + "</br>" + "Volume: " + volume + "</p>";
};
