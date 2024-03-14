// function in js
// di js, param di sebuah function tidak perlu menggunakan type data, karena js bukan typed language

// function declaration
// function fruitCategory(name){
// if (name === "apple"){
//   console.log(`${name} adalah buah yang mempunyai biji di dalam buahnya`);
// } else {
//   console.log(`${name} adalah buah yang memiliki biji di luar buahnya`);
// }
// }

// fruitCategory("apple");

// anonymous function : function expression
// saat menggunkaan expression function, function tidak bisa dipanggil / calling sebelum function di initialize
// const ageResult = function (birthYear){
//   return 2024 - birthYear;
// }

// atau simpan dulu hasil return dari function ke dalam sebuahv variable
// const age = ageResult(2000);
// console.log(age);
// console.log(ageResult(2005));

// Arrow function
// dengan function ini, tidak perlu menggunakan curly bracket, param di tulis sebelum simbol arrow (=>)
const calcAge1 = birthYear => 2024 - birthYear;
const age3 = calcAge1(2004);
// console.log(age3);

// contoh lain arrow function dengan param yang lebih dari 1
// const yearsUntilRetirement = (birthYear, firstName) => { 
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} will retire in ${retirement} years, his age is ${age}`;
// }

// console.log(yearsUntilRetirement(1999, 'Jamal'));

// function call function

/**
 *
 * @param {int} birthYear
 * @returns int number of current year minus given birth year
 */
function calcAge(birthYear) {
    return 2037 - birthYear;
}

/**
 * @param retirement as retirement number in years
 * @param firstName
 * @return string of information that contain person first name and their retaiment number
 */
const checkRetirement = (retirement, firstName) => {
    if (retirement > 0) {
        return `${firstName} will retires in ${retirement} years`;
    } else {
        return `${firstName} already retires :D`;
    }

}

/**
 *
 * @param {int} birthYear
 * @param {string} firstName
 * @returns
 */
const yearsUntilRetirement = function (birthYear, firstName) {
    // dapatkan umurnya
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    // console.log(checkRetirement(retirement,firstName));
    return age;

}

// console.log(yearsUntilRetirement(1991, 'Moka'));
// console.log(yearsUntilRetirement(1981, 'jamela'));

// const calcAverage = (firstScore, secondScore, thirdScore) => {
//     return (firstScore + secondScore + thirdScore) / 3;
// }

// test 1
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoala = calcAverage(23, 34, 27);

// test 2
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoala = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoala);

// const checkWinner = function (avgDolphins, avgKoalas){
//   if(avgDolphins >= 2 * avgKoalas){
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins){
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//   } else {
//     console.log('No team wins...');
//   }
// }

// checkWinner(scoreDolphins, scoreKoala);

const friends = ['lala', 'moka', 'maya'];
// add element into array in JS
friends.push('jaka'); // menambahkan data pada array di urutan terakhir
friends.unshift('ucok'); // menambahkan data pada array di urutan pertama

// delete/remove data from array
friends.pop(); // akan meremove data array dengan urutan terakhir
friends.shift(); // akan mevemove data array dengan urutan pertama

// cek element
friends.indexOf('moka'); // ini akan me-return 1, karena data moka ada di dalam array friends.
friends.includes('moka'); // sama seperti indexOf, tapi method ini akan me-return boolean. Ini strict

// CHALLENGE

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// mini challenge

// buat pop up input yang dapat menampilkan data dari sebuah array yang sesuai denga propertie yang diketikkan oleh user
// const interestedIn = prompt("What do you interested in with sunflower? please choose one of these things: variety, seeds, color, shape");
const sunflower = {
    variety: ['Helianthus cusickii', 'Helianthus nuttallii', 'Perennial sunflower', 'Common sunflower'],
    seed: "Black to brown",
    color: "Yellow",
    shape: "Round shape"
};

// if(sunflower[interestedIn]){
//   console.log(sunflower[interestedIn])
// } else {
//   console.log("Wrong request! Please choose between seeds, color and shape of sunflower!");
// }

// showing this text
// sunflower has 22 varieties, but most of them has black to brown seed color and with round shape and yellow color on petals.
// console.log(`FunFact:
// Sunflower has ${sunflower["variety"].length} varieties, but most of them has ${sunflower["seed"]} color, with ${sunflower["shape"]} and ${sunflower["color"]} on petals. Common sunflower is called ${sunflower['variety'][3]}`);

// challenge

const ucok = {
    firsName: 'ucok',
    birthYear: 1990,
    job: "Chef",
    friends: ["maya", "osa", "shui"],
    hasDriverLicense: true,

    calculateAge: function () {
        // ini untuk meng-assign key age di array dengan nama ucok
        this.age = 2024 - this.birthYear; // keyword this akan mendapatkan data dari object
        return this.age;
    },

    getSummary: function () {
        return `${ucok.firsName} is a ${ucok.calculateAge()} ${ucok.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} Driver license`
    }
};

// console.log(ucok.calculateAge());
// console.log(ucok.getSummary());


const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};


john.calcBmi(); // akan mengarah ke object john, maka keyword 'this' di object john akan mendapatkan nilai dari method calcBmi di object john
mark.calcBmi(); // mengarah ke object mark
// if(john.bmi > mark.bmi){
//   console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s (${mark.bmi}) !`)
// } else if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}) !`)
// } else {
//   console.log("John has the same BMI with Mark!");
// }

// For statement
// for(let i = 1; i <= 10; i++){
//   console.log(`lah ini ternyata angka ${i}`); // ini akan di print sebanyak 10 kali, karena kondisinya bernilai true.
// }

const sunflowerData = [
    'Helianthus cusickii',
    "Black to brown",
    "Yellow",
    "Round shape",
    2000
];

const types = [];
// .length disini sama dengan penggunaan count pada PHP
// for (let i = 0; i < sunflowerData.length; i++) { // looping akan berhenti ketika variable i sama atau lebih besar dari length/count object sunflowerData
//     console.log(sunflowerData[i], typeof sunflowerData[i]);
//
//     // menambahkan/menyimpan tipe data ke dalam array
//     types[i] = typeof sunflowerData[i];
//     // menambahkan/menyimpan data dengan menggunakan method push ke dalam array untuk urutan terakhir
//     types.push(typeof sunflowerData[i]);
// }

// CONTINUE & BREAK
// - continue: dapat melewati value saat ini yang tidak masuk dalam kondisi
// for (let i = 0; i < sunflowerData.length; i++) { // looping akan berhenti ketika variable i sama atau lebih besar dari length/count object sunflowerData
//     if (typeof sunflowerData[i] !== 'string') continue; // ini hanya akan menampilkan data" dengan type string
//     if (typeof sunflowerData[i] === 'number') break; // jika type data ditemukan dalam type number, maka loop akan berhenti dan keluar dari block for
//
//     console.log(sunflowerData[i]);
// }


//*
//**
//***
//****
//*****
//*****
//****
//***
//**
//*

//WHILE STATEMENT
// let i = 1;
// while(i <= 10){
//     console.log(`ini urutan ke ${i}`);
//     i++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//
//     if (dice === 6) {
//         console.log('The loop is end...');
//     }
// }

// CHALLENGE
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let sum = 0;

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);// mendapatkan nilai tipnya

    totals.push(tip + bills[i]); // mendapatkan nilai total (bills + tips)

    console.log(`bill ${bills[i]}, with tip ${tips[i]} and total is ${totals[i]}`);
}

function calcAverage(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum =  sum + arr[i] ; // menghitung rata"
        //sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2,4,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

calcTip(bills);


