const arrayValues = [];

const show = function () {
  const listnya = document.getElementById("listnya");
  const table = document.getElementsByClassName("table");
  listnya.innerHTML = "";

  for (let i = 0; i < arrayValues.length; i++) {
    console.log(arrayValues);
    // berikan element baru saat akan menampilkan datanya
    listnya.innerHTML += "<td>" + (i + 1) + "</td>";
    listnya.innerHTML += "<td>" + arrayValues[i][0] + "</td>";
    listnya.innerHTML += "<td>" + arrayValues[i][1] + "</td>";
    listnya.innerHTML += "<td>" + arrayValues[i][2] + "</td>";

    table.appendChild(listnya);
  }
};

// function untuk save data
const create = function () {
  let input = [
    document.getElementById("name").value,
    document.getElementById("amount").value,
    document.getElementById("date").value,
  ];
  arrayValues.push(input);

  show();
};
