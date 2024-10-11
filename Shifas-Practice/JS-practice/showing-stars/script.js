const input = prompt("How many stars do you want to show?");
const canvas = document.getElementById("wrapper");

// membuat aplikasi sederhana, meminta jumlah bintang yang diinginkan user
// lakukan bintang dengan melakukan perulangan dengan kondisi sampai counter memenuhi number input user
// tampilkan bintang dalam bentuk increase
// di tampilkan pada halaman HTML nya

function showingStarsUp() {
  let result = "";
  for (let i = 0; i < input; i++) {
    for (let j = 0; j <= i; j++) {
      result += "*";
    }
    result += "</br>";
  }
  return result;
}

function showingStarsDown() {
  let result = "";
  for (let i = 0; i <= input; i++) {
    for (let j = 4; j > i; j--) {
      result += "*";
    }
    result += "</br>";
  }
  return result;
}

canvas.innerHTML = showingStarsUp();
// canvas.innerHTML = showingStarsDown();

// console.log(showingStarsUp());
// console.log(showingStarsDown());
