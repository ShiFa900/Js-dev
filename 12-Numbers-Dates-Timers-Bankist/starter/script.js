'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  // movements: [1, 2, 3, 4, -8, 4, -12, 2],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementsDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  // console.log(calcDaysPassed(new Date(), date));
  // console.log(date);
  const dayPassed = calcDaysPassed(new Date(), date);
  // console.log(dayPassed);
  // console.log(calcDaysPassed(new Date(), date));

  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${dayPassed} days ago`;
  // else {
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  // }
  return Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  // console.log(movs);

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // console.log(mov);

    // console.log(mov, 'hasilnyas');
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementsDate(date, acc.locale);

    const movFormat = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${movFormat}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`; // 2:00

    // when 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);

      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // decrease 1s
    time--;
  };
  // set time to 5 min
  let time = 120; // dua menit

  // call the function immediately
  tick();
  // call the timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};

// ///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// const option = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric', // tanggal hari ini akan berupa angka
//   month: 'long', // bulan akan berupa string (january...)
//   year: 'numeric',
//   weekday: 'long',
// };

// labelDate.textContent = new Intl.DateTimeFormat('en-US', option).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time
    const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric', // tanggal hari ini akan berupa angka
      month: 'long', // bulan akan berupa string (january...)
      year: 'numeric',
      // weekday: 'long',
    };

    // const locale = navigator.language; // mendapatkan informasi tanggal dan waktu pada browser user
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale, // akan menampilkan sesuai dengan format pada current acc
      option
    ).format(now); // akan menampilkan format tanggal dan waktu sesuai dengan lokal user

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // clear timer if it already running
    if (timer) clearInterval(timer);
    // set timeout
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500); // akan di eksekusi setelah 2.5 detik
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0); // ini true
// // base 10 - 0 to 9 1/10 = 0.1 3/10 = 3.3333333
// // base binary base 2 - 0 - 1
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false

// // conversion
// console.log(Number(23)); // true
// console.log(+23); // true, tanda + akan menimbulkan type corcien

// // parsing
// console.log(Number.parseInt('30x', 10)); // numeral system 0 - 9
// console.log(Number.parseInt('30x'));

// console.log(Number(parseFloat('2.5rem'))); // 2.5 tipe number

// // isNaN
// console.log(Number.isNaN(20)); // hasilnya false

// console.log(Number.isNaN('20')); // hasilnya false

// console.log(Number.isNaN(+'20X')); // hasilnya true, karena merupakan 'not a number'

// console.log(Number.isNaN(23 / 0)); // false

// // isFinite
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite('20')); // false

// // isInteger
// console.log(Number.isInteger(23)); // true
// console.log(Number.isInteger(23.0)); // true
// console.log(Number.isInteger(23 / 0)); // false

// Math and Rounding
// kuadrat
// console.log(Math.sqrt(25)); // 5, sqrt = square root (akar kuadrat)
// console.log(25 ** (1 / 2)); // 5
// console.log(8 ** (1 / 3)); // 2

// max
// console.log(Math.max(1, 6, 4, 20, 9)); // 20
// console.log(Math.max(1, 6, 4, '20', 9)); // 20
// console.log(Math.max(1, 6, 4, '20px', 9)); // NaN

// min
// console.log(Math.min(2, 3, 5, 6, 9)); // 2

// Pi
// console.log(Math.PI);
// menghitung luas lingkaran
// console.log(Math.PI * Number.parseFloat('10x') ** 2);

// random number
// console.log(Math.trunc(Math.random() * 6) + 1);

// function untuk calculate random number dengan 2 value
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1);
// 0...1
// memberikan angka dari 0 sampai 1
// 0...(max - min) -> min...max

// rounding integer
// console.log(Math.trunc(23.2));
// console.log(Math.round(23.3)); // dibulatkan ke atas atau ke bawah

// console.log(Math.ceil(23.2)); // akan selalu dibulatkan ke atas
// console.log(Math.ceil(23.9)); // 24 juga

// console.log(Math.floor(23.4)); // akan selalu dibulatkan ke bawah
// console.log(Math.floor('23.9')); // bisa pada string

// console.log(Math.trunc(23.4)); // akan menghilangkan bagian decimalnya

// console.log(Math.trunc(-23.5)); // akan menghasilkan -23
// console.log(Math.trunc(-23.8)); // akan menghasilkan -24

// rounding decimal
// console.log((2.7).toFixed(0)); // akan dibulatkan ke atas, menjadi 3
// console.log((2.7).toFixed(3)); // akan menghasilkan 2.700
// console.log((2.345).toFixed(2)); //2.35, angka pada urutan ter-kanan akan di bulatkan
// console.log(+(2.345).toFixed(2)); //2.35 bertipe number

// remainder operator
// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 + 1

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);

// const isEven = n => n % 2 === 0;
// // console.log(isEven(8)); // true
// // console.log(isEven(23)); // false
// // console.log(isEven(514)); // true

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__value')].forEach(function (
//     row,
//     i
//   ) {
//     // 0, 2, 4, 6
//     if (i % 2 === 0) row.style.backgroundColor = 'red';
//     // 0, 3, 6, 9
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

// numeric separator
const diameter = 287_800_000_000; // separator dengan menggunakan _
// console.log(diameter);

const price = 372_90;
// console.log(price);

const PI = 3.1415; //akan menjadi 3.1415
// console.log(PI);

// console.log(Number('230000')); // akan menjadi 2300 dengan tipe 2300
// console.log(Number('230_000')); // akan menjadi NaN
// console.log(parseInt('230_000')); // akan menjadi 230

// BigInt
// BigInt adalah sebuah tipe integer yang baru keluar pada 2020
// jika melakukan operasi matematika dengan menggunakan value yang besar, maka JS akan kehilangan presisi dalam operasi tersebut
// console.log(2 ** 53 - 1, 'o');
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(198378237298732984719247n); // dengan menambahkan n pada baris belakang, akan otomatis menjadi BigInt
// console.log(BigInt(198378));

// Operation
// console.log(10000n + 20000n);
// console.log(2323883032938298321039n * 100000000n);

const huge = 2092192839201209n;
const num = 23;
// console.log(huge * BigInt(num));//method BigInt akan menjadi diperlukan

// exception
// console.log(20n > 15); // true
// console.log(20n === 20); // false
// console.log(typeof 20n); // bigint
// console.log(20n == '20'); // true

// console.log(huge + ' is REALLY big!');

// division
// console.log(10n / 3n);
// console.log(10 / 3); // akan menjadi infinite

// create a date
// const now = new Date();
/*
console.log(now);

console.log(new Date('Aug 02 2020 18:15:41'));
console.log(new Date('December 25, 2015'));
console.log(new Date(account1.movementsDates[0]));

// 10 = nov, 19 = date, 15 = hour, 3 = min, 5 = sec
console.log(new Date(2037, 10, 19, 15, 3, 5)); // Thu Nov 19 2037 15:03:05 GMT+0800
console.log(new Date(2037, 10, 31)); // bulan nov tidak ada tanggal 31, maka akan autocorrect oleh si JS menjadi 1 Dec
console.log(new Date(0)); //Thu Jan 01 1970 01:00:00 unix timestamp pertama
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 07:30:00 GMT+0730
*/

// const future = new Date(2037, 10, 19, 15, 3);
// console.log(future);
// console.log(future.getFullYear()); // akan mendapatkan full tahunnya 2037
// console.log(future.getMonth()); // akan mendapatkan bulannya 10
// console.log(future.getDate()); // akan mendapatkan tanggal 19
// console.log(future.getDay()); // akan mendapatkan hari 4 (thursday)
// console.log(future.getHours()); // akan mendapatkan jam 15
// console.log(future.getMinutes()); // akan mendapatkan menit 3
// console.log(future.getSeconds()); // akan mendapatkan sec 0
// console.log(future.toISOString()); // akan mendapatkan ISO string 2037-11-19T07:03:00.000Z
// console.log(future.getTime()); // 2142226980000 mendapatkan waktu dalam timestamp
// console.log(new Date(2142226980000)); // akan mengkonversi timestamp ke dalam bentuk string Thu Nov 19 2037 15:03:00
// console.log(Date.now()); // 1731483768764 // timestamp current times
// future.setFullYear(2040);
// console.log(future); // Mon Nov 19 2040 15:03:00 GMT+0800, tahunnya akan sesuai dengan tahun yang di set

// Operation with dates
const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future); // timestamp akan menjadi number

const calcDaysPassed = (date1, date2) =>
  // (date2 - date1) / (1000 * 60 * 60 * 24); // menghasilkan -10 pada code di atas
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)); // akan dibuat menjadi absolut, tidak akan mencapai nilai minus

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4)); // akan menghasilkan -10

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4)); // akan menghasilkan -10

// const days1 = calcDaysPassed(
//   new Date(2037, 3, 4),
//   new Date(2037, 3, 14, 10, 8)
// );

// console.log(days1);

// tersangka utama dari kiap ini adalah kegiatan begadang bersama bi dekk, awalnya bisa di tahan, kita sudah berjanji untuk idak begadang untuk lagi, aku selalume k daj, apa itu kucing ku yang berwana coklat? Karen itu sangat telihat familiar. Korban terpaksa harus mengikuti  ajaran bujo, maka dari itu penulis i. ngin mengapresiasi orang" dengan skill yang terkadang g masu akal. rekaman ini telah berhasil, i[| sj, itu sayang anjing bangettttt

// internationalizing number (Intl)
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
};

const numer = 908128.89;
console.log('US: ', new Intl.NumberFormat('en-US', options).format(numer));
console.log('Germany: ', new Intl.NumberFormat('ed-DE', options).format(numer));
console.log('ar-SY: ', new Intl.NumberFormat('ar-SY', options).format(numer));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(numer)
); // akan mengubah format menjadi lokal format dari user

// set Timeout
const ingredients = ['olives', 'spinach '];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}🍕`),
  3000,
  ...ingredients
); // akan muncul setelah 3 detik
console.log('halo...');

// jika pada ingredients ditemukan element 'spinach, maka
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
//   console.log(now.getHours());
//   console.log(now.getMinutes());
//   console.log(now.getSeconds());
// }, 3000);
// akan menampilkan isi dari variable now tiap 3 detik
