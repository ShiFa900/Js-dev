'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

// destructuring object
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// mengganti nama
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours,tags);

//set default value
const {menu = [], starterMenu: starter = []} = restaurant;
console.log(menu, starter);

// Mutating variables



// destructuring array
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
//
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
// const [p = 1, q = 1, r = 1] = [8,4]; // jika di suatu posisi nilainya tidak di set, maka nilainya menjadi akan 1
// console.log(p,q,r);