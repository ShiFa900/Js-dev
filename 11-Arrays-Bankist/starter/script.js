'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

// BANKIST APP
const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovement(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

const createInitial = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};
// perubahan terjadi pada objectnya langsung
createInitial(accounts);
// console.log(accounts);

const updateUi = function (acc) {
  // display movement
  displayMovement(acc.movements);

  // display balance
  calcDisplayBalance(acc);

  // display summart
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  // menemukan user yang tengah login
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount, 'current');

  // menggunakan optional chaining, properti pin akan di cek ketika propertinya ada
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log('LOGIN');

    // display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input field
    // string kosong akan di-assign pada inputLogin pin yang akan di-assign kembali ke inputLoginUsername
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // cursor tidak akan fokus kembali

    updateUi(currentAccount);
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
    // console.log('Transfer success');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUi(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(currentAccount);

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // soft delete data
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ARRAY METHODS

// SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(1)); // akan menghasilkan ['b', 'c', 'd', 'e']
// console.log(arr.slice(2, 4)); // ['c', 'd']
// console.log(arr.slice(-2)); // ['d','e']

// SPLICE
// console.log(arr.splice(2)); // ["c", "d", "e"]
// console.log(arr.splice(-1)); // akan menghilangkan data paling akhir
// console.log(arr); // ["a", "b", "c", "d"]

// REVERSE
const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); // reverse data pada array
// console.log(arr2); // mutate, original array juga akan ikut berubah

// CONCAT
arr = ['a', 'b', 'c', 'd', 'e'];
const letters = arr.concat(arr2); // akan menggabungkan kedua array
// console.log(letters);
// console.log([...arr, ...arr2]);

// JOIN
// console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

// AT METHODS
const arrNum = [23, 11, 64];
// console.log(arrNum[0]); // sama" akan menghasilkan 23
// console.log(arrNum.at(0));

// getting last array element
// console.log(arrNum[arrNum.length - 1]); // n
// console.log(arrNum.splice(-1)[0]); // 64
// console.log(arrNum.at(-1)); // 64

// FOREACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// i adalah current index
// movement adalah valuenya
// for (const movement of movements){
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('---FOREACH---');
// param 1: current element
// param 2: current index
// param 3: entire array yang di looping
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// forEach method adalah sebuah method tertinggi yang requires callback function

// ForEach: Maps & Sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// set
const currenciesUnique = new Set(['USD', 'GBP', 'EURO', 'USD', 'GBP']);
// console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  // console.log(`${key}: ${value}`); // USD: USD...
});
// set tidak memiliki key juga index, maka param 'key' tidak masuk akal jika masih ada pada parameter lisnya
// gunakan _ untuk menunjukkan unnecessary param

// Coding Challenge #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an 
adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of 
Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") 
or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const checkDogs = function (dogsKate, dogsJane) {
  const JaneDogCorrected = dogsJane.slice();

  JaneDogCorrected.splice(0, 1);
  JaneDogCorrected.splice(-2);
  const dogs = dogsKate.concat(JaneDogCorrected);
  console.log(dogs);
  //
  dogs.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old.`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [(10, 5, 6, 1, 4)]);

// The MAP method
const euroToUsd = 1.1;
// menggunakan callback function dalam map
// const movementToUsd = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

// dengan arrow function
const movementToUsdArr = movements.map(mov => mov * euroToUsd); // hasilkan sama dengan code di atas

// menggunakan for, di assigned ke dalam new array
const movementToUsdFor = [];
for (const mov of movements) movementToUsdFor.push(mov * euroToUsd);
// console.log(movementToUsdFor);

// menggunakan cara simple, dengan arrow function pada map method
const movementsDesc = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
// console.log(movementsDesc);

// computing username
// const createInitial = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(function (name) {
//       return name[0];
//     })
//     .join('');

//   return username;
// };
// console.log(createInitial('Steven Thomas Williams'));

// edit properti pada object

// dengan arrow function
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');
// console.log(username);

// FILTER method
// akan mem-filter data dengan nilai positif, data dengan nilai negatif tidak diikut sertakan
const deposites = movements.filter(function (mov) {
  return mov > 0;
});

// akan me-return data dengan nilai negatif
const withdrawel = movements.filter(mov => mov < 0);

// console.log(deposites);
// console.log(withdrawel);

// REDUCE method
// untuk mempersingkat data yang ada pada array menjadi single value

//current data -> current index -> seluruh array

const balance = movements.reduce((acc, cur) => acc + cur, 0);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// 0 di atas jika diganti akan membuat angka pada bagian kanan setelah simbol : akan berubah sesuai pertama di berikan
// Iteration 0: 0
//  Iteration 1: 200
//  Iteration 2: 650
//  Iteration 3: 250
//  Iteration 4: 3250
//  Iteration 5: 2600
//  Iteration 6: 2470
//  Iteration 7: 2540

// console.log(balance);

// menggunakan for
let balance2 = 0;
for (const mov of movements) balance2 += mov;
// console.log(balance2);

// max value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

// console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const calcAverageHumanAge = function (ages) {
  // meng-konversi umur anjing menjadi umur manusia :)
  // const humanAges = ages.map(function (age) {
  //   return age <= 2 ? 2 * age : 16 + age * 4;
  // });

  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  // const adultAge = humanAges.filter(function (age) {
  //   return age >= 18;
  // });

  const adultAge = humanAges.filter(age => age >= 18);

  // calculate averages
  // const average = adultAge.reduce((acc, age) => acc + age, 0) / adultAge.length;

  const average = adultAge.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // console.log(humanAges, 'Human ages');
  // console.log(adultAge, 'adulting');
  return average;
};

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

const eurToUsd = 1.1;
// PIPELINE
const totalDepositeToUsd = movements
  // .filter(mov => mov > 0)
  // .map((mov, i, arr) => {
  //   console.log(arr);
  //   return mov * eurToUsd;
  // })

  .filter(mov => mov < 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositeToUsd);

//TODO: jangan gunakan chaining terlalu sering, ini akan membuat kebingungan untuk penggunaan pada array yang punya data banyak

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAgeArr = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAgeArr([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAgeArr([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// FIND method
const firtWithDrawal = movements.find(mov => mov < 0);
// console.log(firtWithDrawal);

// untuk menemukan object
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// SOME dan EVERY
// some method hampir sama dengan method include, mengecek apakah sebuah array mengandung sebuah data tertentu, akan mereturn boolean
// console.log(movements.includes(-130)); // true

const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits); // akan menghasilkan true

// every method akan menghasilkan true ketika setiap element memenuhi kondisi pengecekan
// console.log(movements.every(mov => mov > 0)); // false
// console.log(account4.movements.every(mov => mov > 0)); // true

// FLAT and FLATMAP
const arr3 = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
// console.log(arr3.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat()); // hanya akan turun 1 level (default)
// console.log(arrDeep.flat(2)); // akan turun 2 level, akan menghasilkan [1, 2, 3, 4, 5, 6, 7, 8, 9]

const accMovement = accounts.map(acc => acc.movements);
// console.log(accMovement);

// kombinasi antara map, flat dan reduce
const overalMovements = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

// console.log(overalMovements);

// flatmap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements) //one level deeper
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// sorting arrays
// akan mengubah data aslinya

// string
const owners = ['naya', 'ayu', 'bintang', 'cayai']; // sorting berdasarkan abjad ['ayu', 'bintang', 'cayai', 'naya']
// console.log(owners.sort());

// numbers
// sort method khusus digunakan pada string
// console.log(movements);
// console.log(movements.sort);

// return < 0,A,b (keep order)
// return > 0,A,b (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// another way of doing that
movements.sort((a, b) => a - b);
// console.log(movements);
// akan menghasilkan nilai yang sama

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements.sort((a, b) => b - a);
// console.log(movements);

// more ways of creating array
const x = new Array(7); // akan menghasilkan (empty x 7) 7 empty value
x.fill(34, 1, 5);
// console.log(x);
// index pertama adalah valuenya, param selanjutnya adalah nilai dari start index dan end index
x.fill(1);
// console.log(x); // mutate value dari variable x, isi dari variable x menjadi [1, 1, 1, 1, 1, 1, 1]

const array = [1, 2, 3, 4, 5, 6, 7];
const newArr = new Array(1, 2, 3, 4, 5, 6, 7);

array.fill(12, 2, 5);
// console.log(array);

// Array.from()
const y = Array.from({ length: 7 }, () => 1); // [1, 1, 1, 1, 1, 1, 1] more cleaner dari pada menggunakan cara yang di atas
// console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); // [1,2,3,4,5,6,7]
// console.log(z);

labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  // console.log(movementUI);

  const movementUI2 = [...document.querySelectorAll('.movements__value')];
  // console.log(movementUI2);
});

// array method practice
// 1.
const bankDepositNum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositNum);

// 2.
// const numDeposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 100).length;

const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? count++ : count), 0); // ini menghasilkan 0

// console.log(numDeposit1000);

// preficed ++
let a = 10;
// console.log(a++); // ini akan menghasilkan 10, tanda ++ tidak ter-apply
// console.log(++a); // do this instead, menghasilkan 11
// console.log(a); // ini akan menghasilkan 11

// 3.
const { deposits, withdrawal } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawal += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawal'] += cur; // just a litte more cleaner
      return sums;
    },
    { deposits: 0, withdrawal: 0 }
  );

// console.log(deposits, withdrawal);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'in', 'on', 'with', 'and'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return capitalize(titleCase);
};

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(
//   convertTitleCase(
//     'this is an example text, let make it a litte bit longer than two others'
//   )
// );

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// belum juga apa" nie :v
// 1.
// perubahan juga dilakukan pada object aslinya
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log('1.', dogs);

// 2.
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
// lakukan perbandingan dari curFood dengan properti baru (recFood)
console.log(
  `This litte buddy is eating too ${
    sarahsDog.curFood > sarahsDog.recFood
      ? 'much ' + sarahsDog.curFood
      : 'little ' + sarahsDog.curFood
  }`
);

// 3.
const ownersDogsEatToMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

const ownersDogsEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersDogsEatToMuch);
console.log(ownersDogsEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
console.log(`${ownersDogsEatToMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersDogsEatTooLittle.join(' and ')} dogs eat too little`);

// 5.
// menampilkan data anjing yang curFood = recFood
console.log(dogs.some(dog => dog.curFood === dog.recFood));

console.log(dogs);
// 6.
//current > (recommended * 0.90) && current < (recommended * 1.10)
// console.log(
//   dogs.some(
//     dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
//   )
// );
const checkAmountOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkAmountOkay));

// 7.
console.log(dogs.filter(checkAmountOkay));

// 8.
// sort it by recommended food portion in an ascending order
const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);
