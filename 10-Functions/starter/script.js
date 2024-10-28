'use strict';
const bookings = [];

const createBooking = function (
  flightNum,
  numPassanger = 1,
  price = 199 * numPassanger
) {
  const booking = [flightNum, numPassanger, price];
  console.log(booking);
  bookings.push(booking);
};

// createBooking('37LB', 12); // akan menggunakan default param
// createBooking('OP097', 25, 200); // tanpa default param

// Value vs Reference
const flight = 'LH123';
const jamal = {
  name: 'jamal sayogi',
  passport: 2391823791739,
};

const checkin = function (flightNum, passanger) {
  flightNum = 'B712'; // like copy value
  passanger.name = 'Mr.' + passanger.name; // reference

  if (passanger.passport === 239182379173912) {
    alert('Checked in!');
  } else {
    alert('Wrong password!');
  }
};
// lanjut untuk disini

// checkin(flight, jamal);
// console.log(flight);
// console.log(jamal);

// First Class vs Higher-Order Function

// 1.first class (low level function)
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split('');
  return [first.toUpperCase(), ...others].join('');
};

// 2.higher order function
const tranformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Trasformed by: ${fn.name}`);
};

// tranformer('Javascript is the best!', upperFirstWord);
// tranformer('Javascript is the best!', oneWord);

// JS callback
const high5 = function () {
  // console.log('o3o');
};

// addEventListener memanggil function lain
document.addEventListener('click', high5);
['Jane', 'Kommi', 'Kim'].forEach(high5);

// another practice of callback
function processData(input, callback) {
  return callback(input); // akan mengeksekusi function toUpperCase
}

function toUpperCase(str) {
  return str.toUpperCase();
}

// Using the function
// console.log(processData('hello world', toUpperCase)); // Output: "HELLO WORLD"

// function returning function
const greet = function (greeting) {
  return function (name) {
    // console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Nyaloo');
// greetHey('Jamal'); //function di dalam function greet
// greetHey('Komi');

// with arrow function
// const sayGreet = greeting => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// sayGreet('hey')('jane');

const sayGreet = greeting => name => console.log(`${greeting} ${name}`);
// sayGreet('Hola')('Jane');

// 3 the call and apply methods
const lufthtansa = {
  airline: 'Lufthansa',
  aitaCode: 'LH',
  bookings: [],
  // book: function(){} // cara biasanya

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.aitaCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.aitaCode}${flightNum}`, name });
  },
};

// lufthtansa.book(237, 'mayang');
// lufthtansa.book(238, 'merta');
// console.log(lufthtansa);

const eurowings = {
  airline: 'Eurowings',
  aitaCode: 'EW',
  bookings: [],
};
// nama properti harus sama

const book = lufthtansa.book;
// book(231, 'Mesari'); // akan undefined, regular function

// apply method
// book.call(eurowings, 23, 'Jane Williams');
const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};
const flightData = [538, 'Gringer Weld'];
book.apply(swiss, flightData);

// bind method
const bookEw = book.bind(eurowings);
bookEw(23, 'Jane Williams'); // being as simply flightNum and passenger name

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jamal');

// with even listener
lufthtansa.planes = 30;
lufthtansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthtansa.buyPlane.bind(lufthtansa));

// partial application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// dengan menggunakan bind
const addVAT = addTax.bind(null, 0.23); // ignore 'this keyword'
// console.log(addVAT(100));

// mini challange
const oneFunction = rate => value => console.log(value + value * rate);
// oneFunction(0.23)(23);

// const addRateTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addRateTax(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// CHALLENGE 1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favorite programming languange?',
  option: ['0: Python', '1: JavaScript', '2: Rush', '3: C++'],
  answer: new Array(4).fill(0),
  registerNewAnswer() {
    const getInput = Number(
      prompt(
        `${this.question}\n${this.option.join('\n')}\n(Write option number)`
      )
    );
    console.log(getInput);

    if (typeof getInput === Number && getInput > this.option.length) {
      this.getInput[getInput]++;
    }
    console.log(getInput);
  },
};

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer());
poll.registerNewAnswer();
