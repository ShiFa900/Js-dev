'use strict';

// simpan dulu element ke dalam variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal'); // ini akan me-return array
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
// classList adalah sebuah properti yang akan me-return koleksi class pada html
    // element ini akan meng-hapus/remove class hidden pada class modal.overlay
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    // menambahkan class hidden pada modal dan overlay
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//nama class diawali dengan '.' hanya pada penggunaan querySelector
for (let i = 0; i < btnsShowModal.length; i++) {
    // untuk variable showModal menggunakan no index karena merupakan array
    btnsShowModal[i].addEventListener('click', openModal);

    // function closeModal akan diakses ketika btn close di klik (maunya seperti itu, karena itu function clodeModal ditulis seperti ini)
    btnCloseModal.addEventListener('click', closeModal);
    // modal juga bisa tertutup saat overlay di click
    overlay.addEventListener('click', closeModal);

}

//handling esc key
// saat addEventListener di set pada document, maka ini akan men-tigger event yang ada di document
document.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) { // jika user meng-klik key esc (escape)
        // jika class hidden tidak ditemukan
        closeModal(); // eksekusi function ini, close the modal
    }
});


