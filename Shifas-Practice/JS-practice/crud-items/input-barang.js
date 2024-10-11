// membuat sebuah aplikasi web sederhana yang bisa melakukan CRUD untuk penambahan data barang.
// note*, data hanya disimpan sementara oleh browser

const stationeryList = [
  'Binder',  
  'pens',
  'cocoa milk',
  'papers'
];


// function untuk menampilkan list data pada browser
function show() {
  const listOfItems = document.getElementById('list-barang');
  listOfItems.innerHTML = '';

  // melakukan looping untuk menampilkan data yang ada di array stationeryList
  for (let i = 0; i < stationeryList.length; i++){
    // mendeklarasikan variable untuk menambahkan btn edit dan hapus di sebelah pada tiap data
    let btnEdit = "<a href='#' onclick='editData(" + i + ")'>Edit</a>";
    let btnDelete = "<a href='#' onclick='deleteData(" + i + ")'>Delete</a>";

    listOfItems.innerHTML += "<li>" + stationeryList[i] + " [" + btnEdit  +" | " + btnDelete + "]</li>";
  }
}

// function untuk create data
const create = function () {
  // mendapatkan data yang di inputkan oleh user
  let inputData = document.querySelector('input').value;
  // menambahkan data baru pada array
  if (stationeryList.push(inputData)) {
  // setelah menambahkan data pada array, akan ditampilkan
    show();
  } else {
    // tampilkan pesan error (walau saat ini redundant)
    return 'Error found while saving data.';
  }
  
}

// function untuk edit data
const editData = function (id) {
  // meminta input nama baru lewat prompt (request user)
  let newData = prompt('New name: ', stationeryList[id]);
  // append data baru pada data yang lama
  stationeryList[id] = newData;
  // tampilkan data baru
  show();
}

const deleteData = function(id) {
  stationeryList.splice(id, 1);
  show();
}

show();