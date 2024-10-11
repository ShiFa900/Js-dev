'use strict';

function calcAge(birthYear) {
    const age = 2024 - birthYear;

    function printAge() {
        // variable firstName, age dan birthYear berada dalam scope parentnya, namun tetap dapet diakses oleh child
        // namun variable yang ada di child, tidak akan bisa diakses oleh si parent

        const firstName = 'Maya'; // variable firstName akan di ubah valuenya menjadi 'Maya', sebab nama variablenya sama
        let output = `${firstName}, you are ${age} and you was born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1997 && birthYear <= 2012) {
            output = 'New Output'; // reassigning value dari outer scope variable
            var millenial = true; // var adalah deklarasi variable yang scopenya global
            const str = `Oh, you're Gen Z, ${firstName}`;
            console.log(str);
        }

        // variable millenial bisa di akses disini, walaupun di deklarasikan di dalam scope if, karena var adalah global scope.
        console.log(millenial);
    }

    // printAge();
    return age;
}


// const firstName = 'Masala';
// calcAge(2005);

// Hoisting variables
// ini akan error, karena diakses sebelum di deklarasikan (TDZ)
// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'saya';
// let job = 'pekerjaan';
// const year = 'tahun sekarang';

//Hoisting function
// console.log(addDelc(2, 5)); // regular function
// console.log(addExp(2, 5)); // akan error, cannot access before initialize, karena function ini di hold oleh const
// console.log(addArrow(2, 5)); // begitu pula dengan function ini
function addDelc(a, b) {
    return a + b;
}

const addExp = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// THIS KEYWORD
// console.log(this); // global object with this keyword
const hitungAge = function (birthYear) {
    console.log(2024 - birthYear);
    console.log(this); // ini undefined, this keywordnya punya sendiri
}
// hitungAge(2004); // ini akan undefined

const hitungAgeArrow = birthYear => {
    console.log(2024 - birthYear);
    console.log(this); // ini akan menghasilkan 'window', arror function tidak memiliki this keywordnya sendiri, melainkan global object, this keyword dari global parent
}
// hitungAgeArrow(2004);

// ini adalah method coba
const coba = {
    tahun: 1989,
    calcAge: function () {
        // console.log(this); // this keyword yang ada disini akan menjadi object yang memanggil si method
        // console.log(2024 - this.tahun); // akan mendapatkan hasil dari pengurangan dari tahun sekarang - object tahun
    },
};
//memanggil function yang ada pada method coba
// coba.calcAge();

const matilda = {
    year: 2018
};

// ini ndk mau dia, entah apa
// matilda.calcAge = coba.calcAge();
// console.log(matilda);
// ini disebut dengan method borrowing, kita meminjam method jadi tanpa menuliskannya lagi
// matilda.calcAge();
const f = coba.calcAge();
// f(); // ini akan menghasilkan undefined, karena adalah sebuah regular function

// REGULAR function VS. ARROW function

var firstName = 'Maya'; // ini adalah global scope, karena menggunakan var
const babangJonas = {
    year: 2001,
    firstName: 'Bang Jonas',
    calcAge: function () {
        console.log(this);
        console.log(2024 - this.year);

        // #SOLUTION 1
        // const self = this; // menyimpan this keyword, agar bisa digunakan di method isMillenial
        // const isMillenial = function (){
        //     console.log(self) // ini isinya akan menjadi object this keyword
        //     // console.log(this) // ini akan menghasilkan undefined
        //
        //     // console.log(this.year >= 1997 && this.year <= 2012);
        //     console.log(self.year >= 1997 && self.year <= 2012);
        // }
        // isMillenial(); // ini akan menghasilkan undefined

        // #SOLUTION 2
        // arrow function mendapatkan this keyword dari scope parentnya (calcAge), maka dari itu this keyword bisa digunakan oleh arrow function
        const isMillenial =  () => {
            console.log(this);
            console.log(this.year >= 1997 && this.year <= 2012);
        }
        isMillenial();

        // *note: di dalam regular function this keyword akan menghasilkan undefined, mendapatkan this keywordnya sendiri (?)
    },

    // jika ada variable yang menggunakan nama firstName dan menggunakan deklarasi var, maka value dari global variable tersebut akan di print
    // *note: jangan gunakan arrow function sebagai sebuah method
    // greet: () => console.log(`Hey ${this.firstName}`) // ini adalah arrow function, dia akan menggunakan this keyword dari global
    greet: function () {
        console.log(this);
        console.log(`Hey ${this.firstName}`); // akan mereturn firstName dari object yang memanggil method greet
    }
};
// babangJonas.greet();
// babangJonas.calcAge();

// ARGUMENT KEYWORD
// keyword ini hanya bisa digunakan untuk regular function

// regular function
const addExpr = function (a,b)
{
    console.log(arguments); // ini akan menampilkan argument" yang dimiliki oleh si function
    return a + b;
}

// addExpr(4,2);
// addExpr(4,2, 3, 5); // walau paramnya hanya dua, namun param argumentnya tetap bisa diberi banyak, karena pada function paramnya tidak memiliki nama.

// arrow function
// const addArrow = (a,b) => {
//     console.log(arguments); // nah ini akan error, karena argument keyword hanya bisa untuk di regular function
//     return a + b;
// }
// addArrow(4,6);

//PRIMITIVE & REFERENCE OBJECT

// Primitive
let lastName = 'Wellberg';
let oldLastName = lastName;
lastName = 'Willfouw';
console.log(lastName, oldLastName);

// object reference
const jamela = {
    firstName: 'Jamela',
    lastName: 'Marckeinzie',
    age: 24
};

const marriedJamela = jamela;
// hasilnya tidak akan seperti di primitive
// hal ini karena di call stack valuenya berupa reference ke memory heap, maka jika object di heap memory ini diganti,
// maka call stack yang valuenya adalah address reference ke heap akan ikut berubah
marriedJamela.lastName = jamela;
console.log('before marriage: ',jamela);
console.log('after mariage: ', marriedJamela);

// copying object
const jamela2 = {
    firstName: 'Jamela',
    lastName: 'Marckeinzie',
    age: 24
};

// function ini fungsinya untuk merge
const jamelaCopy = Object.assign({}, jamela2); // ini akan merge empty object dengan object jamela2
jamelaCopy.lastName = 'Bargouw';
console.log('before marriage: ', jamela2); // ini akan menampilkan object jamela saat blum menikah
console.log('after marriage: ', jamelaCopy); // ini akan menampilkan object jamela ketika sudah menikah (lastname nya berubah)