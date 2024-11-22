'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// selecting element
// console.log(document.documentElement); // mendapatkan seluruh element HTML
// console.log(document.head); // mendapatkan element pada tag head
// console.log(document.body); // mendapatkan element pada tag body

const header = document.querySelector('.header'); // mendapatkan element pada
const allSelection = document.querySelectorAll('.section');
// console.log(allSelection);

document.getElementById('section--1');
const allButton = document.getElementsByTagName('button'); // akan mendapatkan semua element dengan tag button

// creating and inserting element
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message); // ditampilkan sebelum tag header
header.append(message); // ditampilkan setelah tag header
// header.append(message.cloneNode(true)); // ditampilkan sebelum dan sesudah tag header

// header.after(message); // sama dengan append
// header.before(message); // sama dengan prepend

//delete element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // akan me-remove sebuah element jika ter-trigger dengan di klik
    // message.parentElement.removeChild(message); // remove element dari parentnya
  });

// styles
message.style.backgroundColor = '#37D';
message.style.width = '104%';

// computed style
// console.log(getComputedStyle(message).color); // akan menampilkan style yang ada pada file CSS (hidden)
// console.log(getComputedStyle(message).height);

// men-set height dari sebuah element
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 50 + 'px'; // tingginya menjadi 43px

// document.documentElement.style.setProperty('--color-primary', 'orangered'); // akan mengubah semua element dengan class '--color-primary' dengan value baru (di overwrite)

//Attributes
const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className); // menghasilkan nama classnya

logo.alt = 'Beautiful minimalist logo';

// non-standart
// console.log(logo.designer); // akan menghasilkan undefined karena prop designer tidak ada pada tag img
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');

// console.log(link.href);
// console.log(link.getAttribute('href'));

// data attributes
// console.log(logo.dataset.versionNumber);

// classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// don't use, ini akan mengubah/overwrite seluruh nama class
// logo.className = 'jamal';

// implementing smooth scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  // dengan cara lama, pageXOffset dan pageYOffset deprecated, tidak digunakan lagi
  // console.log('current scroll (x/y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // old way
  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + pageYOffset,
  //   behavior: 'smooth',
  // });

  // modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

// types of event and event handler
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  // akan menghilangkan event listener setelah ditampilkan pertama kali
  // alert tidak akan muncul kembali pada hover kedua kalinya
  // h1.removeEventListener('mouseenter', alertH1);
};

// akan menampilkan alert popup ketika mouse menyentuh bagian h1
// h1.addEventListener('mouseenter', alertH1);

// remove event listener dengan waktu
// event listener akan dihilangkan setelah 3 detik
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// old way to handler event
// one on event property
// h1.onmouseenter = function (e) {
//   alert('mouseenter: Great! You are reading the heading :D');
// };

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this); // ini akan true, this keyword sama dengan e.currentTarget
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
