'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// implementing smooth scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

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

// btn scrolling
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

// page navigation

//event delegation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1.add event listener to common parent element
// 2.determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // smooth scroll
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// tabbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // closest method untuk mendapatkan parent dengan class operations__tab terdekat

  // guard clause
  if (!clicked) return; //jika variable bernilai false, maka akan langsung return

  // remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // activate tab
  clicked.classList.add('operations__tab--active');

  // activate tab content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// menu fade animation
// const handleHover = function (e, opacity) {
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibling.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
        // el.style.opacity = opacity;
      }
      logo.style.opacity = this;
      // logo.style.opacity = opacity;
    });
  }
};

// passing "argument" into handler
// always passed a function on second param
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
nav.addEventListener('mouseover', handleHover.bind(0.5));

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });
nav.addEventListener('mouseout', handleHover.bind(1));

// sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   if (this.window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1); // target element intersecting dengan elemen pada threshold yang telah di defined pada root

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height; // tinggi dari nav

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // tinggi navigation, nav akan muncul sebelum section1 habis
});
headerObserver.observe(header);

// reveal section
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

// slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // function
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // active dots
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active')); // hilangkan dulu semua class activenya

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active'); // menambahkan class dot active, pada cur slide
  };

  const goToSlide = function (slide) {
    console.log(slide);
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // go to next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0; // jka value cur slide lebih besar dari jumlah slide yang harus ditampikan, maka ketika button next diklik akan kembali ke slide pertama
    } else {
      curSlide++; // value curslide akan ditambah jika nilainya di bawah max slide (jumlah slide yang ditampilkan)
    }

    console.log(curSlide);
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // go to prev slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // saat pertama kali page di reload
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // event handler
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // navigation pada dot

  // handler dengan arrow key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide(); // dengan arrow key left, akan mengembalikan slide ke prev
    // dengan short circuiting
    e.key === 'ArrowRight' && nextSlide(); // dengan arrow key right, akan mengubah slide ke next slide
  });

  // handler dengan mengklik button dotsnya, slide yang ditampilkan akan sesuai dengan dotnya
  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// selecting element
// console.log(document.documentElement); // mendapatkan seluruh element HTML
// console.log(document.head); // mendapatkan element pada tag head
// console.log(document.body); // mendapatkan element pada tag body

// const header = document.querySelector('.header'); // mendapatkan element pada
// const allSelection = document.querySelectorAll('.section');
// // console.log(allSelection);

// document.getElementById('section--1');
// const allButton = document.getElementsByTagName('button'); // akan mendapatkan semua element dengan tag button

// // creating and inserting element
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent =
// //   'We use cookied for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// // header.prepend(message); // ditampilkan sebelum tag header
// header.append(message); // ditampilkan setelah tag header
// // header.append(message.cloneNode(true)); // ditampilkan sebelum dan sesudah tag header

// // header.after(message); // sama dengan append
// // header.before(message); // sama dengan prepend

// //delete element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove(); // akan me-remove sebuah element jika ter-trigger dengan di klik
//     // message.parentElement.removeChild(message); // remove element dari parentnya
//   });

// // styles
// message.style.backgroundColor = '#37D';
// message.style.width = '104%';

// // computed style
// // console.log(getComputedStyle(message).color); // akan menampilkan style yang ada pada file CSS (hidden)
// // console.log(getComputedStyle(message).height);

// // men-set height dari sebuah element
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 50 + 'px'; // tingginya menjadi 43px

// // document.documentElement.style.setProperty('--color-primary', 'orangered'); // akan mengubah semua element dengan class '--color-primary' dengan value baru (di overwrite)

// //Attributes
// const logo = document.querySelector('.nav__logo');
// // console.log(logo.alt);
// // console.log(logo.src);
// // console.log(logo.className); // menghasilkan nama classnya

// logo.alt = 'Beautiful minimalist logo';

// // non-standart
// // console.log(logo.designer); // akan menghasilkan undefined karena prop designer tidak ada pada tag img
// // console.log(logo.getAttribute('designer'));
// // logo.setAttribute('company', 'Bankist');

// // console.log(logo.src);
// // console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');

// // console.log(link.href);
// // console.log(link.getAttribute('href'));

// // data attributes
// // console.log(logo.dataset.versionNumber);

// // classes
// // logo.classList.add('c');
// // logo.classList.remove('c');
// // logo.classList.toggle('c');
// // logo.classList.contains('c'); // not includes

// // don't use, ini akan mengubah/overwrite seluruh nama class
// // logo.className = 'jamal';

// // types of event and event handler
// const h1 = document.querySelector('h1');

// // h1.addEventListener('mouseenter', function (e) {
// //   alert('You are on h1 :D');
// // });

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');

//   // akan menghilangkan event listener setelah ditampilkan pertama kali
//   // alert tidak akan muncul kembali pada hover kedua kalinya
//   // h1.removeEventListener('mouseenter', alertH1);
// };

// // akan menampilkan alert popup ketika mouse menyentuh bagian h1
// // h1.addEventListener('mouseenter', alertH1);

// // remove event listener dengan waktu
// // event listener akan dihilangkan setelah 3 detik
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// // old way to handler event
// // one on event property
// // h1.onmouseenter = function (e) {
// //   alert('mouseenter: Great! You are reading the heading :D');
// // };

// // Event propagation in practice

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); // ini akan true, this keyword sama dengan e.currentTarget

//   // stop propagation
//   // e.stopPropagation(); // ini akan menghentikan propagation, kedua parent tidak akan mengganti warnanya
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true
// );

// const h1 = document.querySelector('h1');

// // Going downwards: selecting from child element
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); // only for direct child

// h1.firstElementChild.style.color = 'blue';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parent element
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // closest
// // parent terdekat yang memiliki class ini akan mendapatkan style yang telah di set
// h1.closest('.header').style.backgroundColor = 'pink';
// h1.closest('h1').style.backgroundColor = '#39b385';

// // closes bertentangan dengan querySelector:
// // keduanya mengambil query string sebagai input, namun querySelector dapat menemukan child element seberapa pun dalam posisinya.
// // sementara closest method mencari parentnya juga seberapa dalam pun di dalam DOM tree.

// // Going sideways: selecting siblings
// console.log(h1.previousElementSibling); // element sebelum elemnt saat ini, ini hasilnya null (sekarang)
// console.log(h1.nextElementSibling); // element setelah elemnt saat ini

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children); // akan mendapatkan semua children dari sibling), bukan hanya prev dan next sibling
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// lifecycle DOM event
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built', e);
});

window.addEventListener('load', function (e) {
  console.log('page totally loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  // e.returnValue; // deprecated
});
