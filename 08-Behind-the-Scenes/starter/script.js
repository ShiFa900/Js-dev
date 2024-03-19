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


const firstName = 'Masala';
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

console.log(this);
const hitungAge = function (birthYear) {
    console.log(2024 - birthYear);
    console.log(this); //
}
hitungAge(2004); // ini akan undefined

const hitungAgeArrow = birthYear => {
    console.log(2024 - birthYear);
    console.log(this); //
}
hitungAgeArrow(2004);

// ini adalah method coba
const coba = {
    tahun: 1989,
    calcAge: function (){
        console.log(this); // this keyword yang ada disini akan menjadi object yang memanggil si method
        console.log(2024 - this.tahun);
    },
};
//memanggil function yang ada pada method coba
coba.calcAge();

const matilda = {
    year: 2018
};

// ini ndk mau dia, entah apa
const f = coba.calcAge();
matilda.calcAge = coba.calcAge();
console.log(matilda);
// ini disebut dengan method borrowing, kita meminjam method jadi tanpa menuliskannya lagi
matilda.calcAge();