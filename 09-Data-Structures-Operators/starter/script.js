'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// object hours akan digunakan pada object restaurant
const hours = {
    [weekday[3]]: {
        open: 12,
        close: 22,
    },
    [weekday[4]]: {
        open: 11,
        close: 23,
    },
    [weekday[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    // ES6 enhanced object literals
    hours,

    // orderDelivery: function (obj) {
    //     console.log(obj);
    // }
    //destructuring
    // namanya harus sama dengan nama object yang di bawah
    // orderDelivery: function ({starterIndex, mainIndex, time, address}) {
    //     console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    // }

    // memberikan default values jika valuesnya tidak di set
    // orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    //     console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    // },
    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    // orderPasta: function (ing1, ing2, ing3) {
    //     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}!`);
    // },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}!`);
    },

    // hasilny adalah value dari main ingredient ditambah dengan array dari rest element
    // orderPizza: function (mainIngredient, ...otherIngredient) {
    //     console.log(mainIngredient);
    //     console.log(otherIngredient);
    // }
    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

const rest1 = {
    name: 'Capri',
    // numGuests: 20
    numGuests: 0
};

const rest2 = {
    name: 'Jamal',
    owner: 'Jamalan'
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // akan undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
//
// console.log(rest1);
// console.log(rest2);

// NULLISS COALESCING OPERATOR
// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest); // ini hasilnya adalah 10, pdhla numGuest ada valueny 0;
//
// // ini adalah perbadingan dengan Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // ini hasilnya sesuai dengan value dari numGuests

// SHORT CIRCUITING (&& ||)

// console.log("--- OR ---");
// use ANY data type, return ANY data type, short-circuiting;
// console.log(3 || 'lah');
// console.log('' || 'lah');
// console.log(true || 0);
// console.log(undefined || null);
//
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // ini hasilnya adalah 'Hello' karena bernilai true

// restaurant.numGuests = 12;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // arti pernyataanya, jika di object restaurant object numGuests ada, maka gunakan value tersebut untuk variable guest1,
// // jika tidak ada maka gunakan 10 sbgai valuenya.
//
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);
// value dari variable guest1 dan guest2 adalah sama, 12


// console.log('---- AND ----');
// console.log(0 && 'lah'); // return 0, 0 bernilai falsy maka pengecekan tidak dilanjutkan
// console.log(7 && 'lah'); // return lah, karena semuanya bernilai true, akan mereturn value yang terakhir

// REST PATTERN & PARAMETERS
// rest pattern hampir mirip dengan spread operator, hanya saja rest pattern itu membungkus element ke dalam array

// 1) DESTRUCTURING
// SPREAD, because on RIGHT side of =
// const arr = [1,2, [3,4]];
//
// // REST, because on LEFT side of =
// const [x,y, ...others] = [1,2,3,4,5]; // akan mengambil rest/sisa dari element
// // sisa element tersebut akan di simpan ke dalam array baru yang pada kasus ini diberi nama others.
// console.log(x,y, others);
//
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // const [pizza, , risotto, ...otherFood, bread] = [...restaurant.mainMenu, ...restaurant.starterMenu]; // setelah rest element, maka setelahnya tidak boleh ada element lagi
//
// // otherFood isinya adalah element setelah element risotto, dan tidak meng-include element yang di skip
// console.log(pizza,risotto,otherFood);
//
// //Objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);
//
// // 2) FUNCTIONS
// // function (...numbers) -> rest param
// const add = function(...numbers){
//     console.log(numbers);
//     // rest argument, akan meng-compress element menjadi array
//     // menghitung jumlah dari sebuah array
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     console.log(sum);
// }
//
// add(2,3);
// add(2,8,4,1);
// add(2,4,6,1,2,9);
//
// // cara lainnya
// const z = [23,1,9];
// add(...z); // akan mendapatkan data array (spread) yang akan digunakan di parama function add (rest param)
//
// restaurant.orderPasta('mushroom', 'onion', 'olives');

// SPREAD OPERATOR
// const arr = [6, 7, 3];
// const badNewArr = [1, 3, arr[0], arr[1], arr[2]]; // ini akan menimbulkan pertanyaan, 'bagaimana jika elemnt di array ada banyak?'
// console.log(badNewArr);
//
// const newArr = [1, 3, ...arr]; // spread operator akan mengambil semua element yang ada di dalam array 'arr', hanya element-nya
// console.log(newArr);
//
// const newMenu = [...restaurant.mainMenu, 'Bakso']; // menambahkan menu baru pada object restaurant di object mainMenu
// console.log(newMenu);

// copy menu
// const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// LOOPING ARRAYS :  FOR-OF LOOP

// for statement ini lebih mirip ke foreach, hanya saja menggunakan of
// dan penempatan array dengan variable yang menyimpan data loop terbalik
// for (const items of menu) console.log(items);

// for(const item of menu.entries()){
for (const [i, el] of menu.entries()) {
    // console.log(`${i + 1} : ${el}`);
    // console.log(item); // ini akan menampilkan data dengan no index-nya
}

// OPTIONAL CHAINING (?.)

if (restaurant.hours && restaurant.hours.mon)
    console.log(restaurant.hours.mon.open);

// WITH OPTIONAL CHAINING
// ini artinya adalah, jika properti yang ada di depan tanda tanya dan dot (?.) exist, maka properti selanjutnya akan di eksekusi.
// jika properti tidak exits dan tidak null dan tidak undefined
// console.log(restaurant.hours.mon?.open);

// Example
// optional chaining, nullish operator, dan for-of operator
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
for (const day of days) {
    const open = restaurant.hours[day]?.open ?? 'closed';
    // console.log(`on ${day}, we open at ${open}`);
}

// optional chaining in METHODS
// console.log(restaurant.order?.(0,1) ?? 'methods does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'methods does not exist'); // jika optional chaining menghasilkan undefined,
// maka nullish operator akan me-return string 'methods does not exist';

// optional chaining in ARRAYS
const user = [{
    name: 'Naya',
    email: 'nay@gmail.com'
}];
// name?.name -> jika properti name ditemukan pada method user maka tampilkan value dari properti name
// jika tidak, maka tampilkan string false dari nullish operator
// console.log(user[0]?.name ?? 'user array does not exist');

// LOOPING OBJECT : object values, object keys and entries

// Property NAMES
const properties = Object.keys(hours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `; // akan menampilkan nama" dari keys-nya
}
// console.log(openStr);

// Property VALUES
const values = Object.values(hours);
// console.log(values); // akan menampilkan values dari object

// Entires Object
const entries = Object.entries(hours);
// entries mengubah object menjadi array
// console.log(entries); // akan menampilkan data berupa array

// [key, object] -> jika object memiliki value yang simpel :)
// {open, close} -> necessary karena valuesnya berupa object
for (const [key, {open, close}] of entries) {
    // console.log(`On ${key} we open at ${open} dan close at ${close}`);
}

// Iterables: arrays, strings, maps, sets. NOT objects
// spread operator pada string
// const str = 'Canas';
// const letters = [...str, ' ', 'ari'];
// console.log(letters);

const ingredients = [
    // prompt("Let's make a pasta, what you like for ingredients 1?"),
    // prompt("What you like for ingredients 2?"),
    // prompt("What you like for ingredients 3?")
];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // tanpa spread operator
// restaurant.orderPasta(...ingredients); // dengan spread operator

// pada modern ES6, spread operator bisa digunakan pada object
// Objects
// const newRestaurant = {
//     foundedIn: 1881,
//     ...restaurant,
//     founder: 'Giuseppe'
// };
// console.log(newRestaurant);
//
// const restaurantCopy = {...restaurant}; // spread operator pada objects
// restaurantCopy.name = 'BangSlay';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// *note: value yang ditambahkan ke dalam object akan ditambahkan pada urutan terakhir

// DESTRUCTURING OBJECT
// restaurant.orderDelivery({
//     time: '20:13',
//     address: 'Jl.Soerkarno, 20',
//     mainIndex: 2,
//     starterIndex: 2
// });
//
// restaurant.orderDelivery({
//     address: 'Jl.Soerkarno, 20',
// });

const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// mengganti nama
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

//set default value
// const {menu = [], starterMenu: starter = []} = restaurant;
// console.log(menu, starter);

// MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = {a: 23, b: 21, c: 14};

// {a,b} = obj;// ini error, karena ketika menggunakan kurung kurawal, Js menduga akan ada code block, maka kita tidak bisa menggunakan token '='
// lakukan ini
({a, b} = obj);
// console.log(a, b);

// NESTED OBJECT
// const {
//     fri: {open: o, close: c}, // fri adalah object yang ada di object restaurant (object di dalam object)
//     // open dan close adalah inner object dari object fri
// } = openingHours;
// console.log(o, c); //

// DESTRUCTURING ARRAY
// const arr = [2, 3, 4];
// // meng-assign tiap variable
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// meng-assign data dalam one line
// const [x, y, z] = arr; // ini disebut destructuring assign, bukan array
// console.log(x, y, z);
// variable x valuenya akan berisi value dari index ke 0 di array arr

// const [first, second] = restaurant.categories; // ini hasilnya akan menjadi Italian dan Pizzeria
// ini akan melompati value kedua dan akan langsung mendapatkan value ketiga
// let [main, , secondary] = restaurant.categories; // ini hasilnya akan menjadi Italian dan vegetarian
// console.log(main, secondary);

// const temp = main;
// main = secondary; // overWritten
// secondary = temp;
// console.log(main, secondary);

// cara lainnya
// [main, secondary] = [secondary, main]; // lebih singkat, tanpa menggunakan variable temp
// console.log(main, secondary);

// mendapatkan 2 return values dari function order di object restaurant
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// dengan nested array
// const nested = [2,4,[3,2]];
// // const [i, ,j] = nested; // akan menghasilkan 2 [3,2]
// // console.log(i,j);
// const [i, ,[j,k]] = nested;
// console.log(i,j,k); // akan menghasilkan 2,3,2
//
// // const [p,q,r] = [9,1]; // ini akan error, karena panjangnya tidak sama
// const [p = 1, q = 1, r = 1] = [8,4]; // jika di suatu posisi nilainya tidak di set, maka nilainya menjadi akan 1 (default value)
// console.log(p,q,r);

// SETS
// sets berisi kumpulan-kumpulan dari unique values, sets merupakan iterable
// setiap values hanya akan muncul satu kali setiap Sets, dan set dapat menyimpan type data apa saja

// const namesSet = new Set([
//     'Jamal',
//     'Ferra',
//     'Jamal',
//     'Corgi',
//     'Ferra'
// ]);
// console.log(namesSet); // hanya akan menampilkan data" yang unique
// console.log(new Set('Jamol')); // akan menampilkan 'j', 'a', 'm', 'o', 'l'
//
// console.log(namesSet.size); // akan menampilkan length/jumlah elemnt yang ada
// console.log(namesSet.has('Corgi')); // menampilkan boolen apakah element ada atau tidak
// namesSet.add('Colin'); // akan menambahkan element pada object
// namesSet.delete('Corgi');
// // namesSet.clear(); // object namesSet akan menjadi empty
// console.log(namesSet);
//
// // Sets adalah iterables, maka bisa di loop
// for (const name of namesSet) console.log(name);
//
// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter'];
// // const staffUnique = new Set(staff); // hasilnya adalah unique values
// const staffUnique = [...new Set(staff)]; // untuk menjadikannya array
// console.log(staffUnique);
//
// // counting how many difference letters in a string
// console.log(new Set('kasurrusak').size);

// MAPS: fundamentals
// maps adalah data struktur yang digunakan untuk 'mengubah' maps values -> keys
// keysnya bisa bertype apa saja, bahkan object
const rest = new Map();
rest.set('name', 'Classy Coffe'); // meng set values untuk map rest
rest.set(1, 'Jln.Soekarno');

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'Yes, we are open :D')
    .set(false, 'Sorry, we are closed :(')

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));
// console.log(rest.get('categories'));

// const time = 9;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// MAPS: Iteration
// the first position will be the key
// the second position will be the values
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again']
])
// console.log(question);
// mirip dengan yang satu ini
// console.log(Object.entries(hours));
// convert OBJECT to MAP
const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);
// Iteration in MAPS
// console.log(question.get('question'));
for(const [key, value] of question){
    // if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get('correct') === answer ? question.get(true) : question.get(false));
// console.log(question.get(question.get('correct') === answer));
// convert MAP to ARRAY
// console.log(...question);
// // console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());

// WORKING WITH STRING #1
const airlines = 'TAP Air Portugal';
const plane = 'A320';
// akan mendapatkan value dari urutan pertama
// padahal ini string yak (?)
console.log(plane[0]);

// menghitung panjang /length dari sebuah string
console.log(airlines.length);
console.log('Masala037'.length);

// mengambil index ke-n/position dari sebuah string
console.log(airlines.indexOf('i'));
console.log(airlines.lastIndexOf('al')); // return index dari urutan 'al' pada urutan terakhir dari string

// menggunakan slice pada string
console.log(airlines.slice(4));
// lanjutkan di section 9 eps 122 working with string


// CODING CHALLENGES #1

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neur',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
}

// 1
const [player1, player2] = game.players;
// console.log(player1, player2);

// 2
const [gk, ...fieldPlayer] = player1;
// console.log(gk, fieldPlayer);

// 3
const allPlayer = [...player1, ...player2];
// console.log(allPlayer);

//4
const additionalPlayers = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...player1, ...additionalPlayers]
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5
const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw ,team2);

// 6
const printGoal = function (...players) {
// console.log(`${players.length} goals were scored!`);
}
// printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoal('Lewandowski', 'Kimmich');
printGoal(...game.scored);

// 7
// menggunakan && operator untuk menggantikan if/else statement
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// CODING CHALLENGES #2

// 1
for (const [i, g] of game.scored.entries()) {
    // console.log(`Goal ${i + 1}: ${g}`);
}

// 2
let avg = 0;
const odds = Object.values(game.odds);
// for (const odd of Object.values(game.odds)) {
//     avg += odd;
//     console.log(avg /= Object.values(game.odds).length);
// }
for (const odd of odds) avg += odd;
avg /= odds.length;
// console.log(avg);


// 3
let oddStr = `Odd of victory `;
for (const [team, odd] of Object.entries(game.odds)) {
    let teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    // console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4 (BONUS)
const scores = {}
for (const player of game.scored) {
    // tambahkan properti ke dalam object scores
    // jika player tertentu ditemukan dalam object (for pertama) maka valueny menjadi 1
    // jika player ternyata melakukan scored lebih dari satu, maka ++ dari nilai sebelumnya
    scores[player] ? scores[player]++ : scores[player] = 1;
}
// console.log(scores);

// CODING CHALLENGE #3
//1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
const gameEvent = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);
//1
const events =  [...new Set(gameEvent.values())];
// console.log(events);

//2
gameEvent.delete(64);
// console.log(gameEvent);

//3
// console.log(`An event happened, on average ${90/gameEvent.size} minutes`);
const time = [...gameEvent.keys()].pop();
// console.log(time);
// console.log(
//     `An event happened, on average, every ${time / gameEvent.size} minutes`
// );

//4
for(const [t, event] of gameEvent){
    const section = t <= 45 ? 'FIRST' : 'SECOND';
    // console.log(`${section} HALF ${t}: ${event}`);
}


