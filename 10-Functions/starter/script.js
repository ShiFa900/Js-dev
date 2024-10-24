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

createBooking('37LB', 12); // akan menggunakan default param
createBooking('OP097', 25, 200); // tanpa default param

// Value vs Reference
const flight = 'LH123';
const jamal = {
  name: 'jamal sayogi',
  passport: 239182379173912,
};

const checkin = function (flightNum, passanger) {
  flightNum = 'B712';
  passanger = 'Jane';
};
// lanjut untuk disini

checkin(flight, jamal);
