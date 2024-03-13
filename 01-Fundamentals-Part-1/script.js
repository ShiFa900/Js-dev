let js = "shifa";
// if(js === 'shifa') alert("Hello world, this is Shifa's first JS practice");

// console.log(20+394);

// ini adalah salah satu cara untuk men-deklarasikan variable
// gunakan 'let' untuk membuat variable
// nama variable = camel case
let firstName = "Hippy";
// value dari console ini akan sama dengan value dari variable firstName
// console.log(firstName);
// typeof disini akan mereturn type data dari variable yang menjadi paramnya
// console.log(typeof true);
// assigned value baru (meng-update valuenya), tanpa menggunakan 'let' lagi
firstName = "Ho oh";

// gunakan const untuk menetapkan value dari sebuah variable, valuenya tidak akan bisa diubah, contoh tahun lahir
// dan const tidak boleh 'empty value'
const birthDate = 2004;

// type variable ini hampir mirip dengan 'let' tapi berbeda untuk di browser
var jobs = "koki";

// membuat variable tanpa mendeklarasikan type variablenya, yang mana artinya JS akan menjadikan variable ini global di dalam scope file
lastName = "Moca";

let now = 2024;
const ageShifa = now - 2005;
const ageKiwi = now - 2023;

// gunakan koma (,) untuk separate antara satu value dengan value yang lain
// console.log(ageKiwi, ageShifa);

// gunakan ** double star untuk menulis pangkat
// console.log(2**3);

let namaDepan = "hari";
let namaBelakang = "selasa";

// concat dua nama, menggabung kan dua kata menjadi sebuah kalimat
// console.log(namaDepan + " " + namaBelakang);

// basic math
let x = 12 + 4; // ini 16
x += 5 // x = x + 5 = 21
// console.log(x);


// penggunaan right-to-left dan precedence
let a,b;
a = b = 20 - 4 - 3;
// console.log(a,b); 

// CHALLENGE
// mendeklarasikan variable
const massMark = 78
const massJohn = 92;

const heightMark = 1.69;
const heightJohn = 1.95;

// mendapatkan nilai BMI dari kedua orang di atas
const bmiMark = massMark / (heightMark * heightMark); // massMark / (heightMark ** 2)
const bmiJohn = massJohn / (heightJohn * heightJohn); // massJohn / (heightJohn ** 2)
const markHigherBmi = bmiMark > bmiJohn; 

// console.log(bmiMark, bmiJohn);

// console.log(markHigherBmi);

// TAKE DECISION (if/else)
// menghitung umur seseorang untuk mendapatkan driver license

const age = 10;
 if(age >= 18){
  // console.log('You can have your driver license');
 } else {
  // lakukan pengecekan jika umur kurang dari 18 (false)
  const getLeftYear = 18 - age;
  // gunakan 'baltic' untuk membuat string dengan variable di dalamnya
  // console.log(`You can have your driver license in ${getLeftYear} years :)`);
 }

 // TYPE CONVERSION & COERSION

// conversion tipe data di js
const birthYear = '2019'; // ini tipenya string ''
// console.log(birthYear); // ini tipenya string
// untuk melakukan operasi matematika, kita harus konversi dulu birthYear menjadi int atau number
// console.log(Number(birthYear) + 2); // hasilnya 2021 dan hasilnya adalah int/number

// console.log('Coba'); // ini akan menghasilkan 'Nan' yang artinya 'not a number', karena coba terdiri dari string/huruf

// coersion
// console.log("i'am " + 21 + " years old"); // angka 21 disini akan diubah tipenya menjadi string, otomatis oleh js
// console.log('23' + '1' + 4); // ini tetap menjadi string, 2314
// console.log('23' - '1' + 4); // sedangkan ini menjadi int/number hasilnya 26
// console.log('22' * 22); // console.log('22' * '22') ini juga bisa, akan di coersion menjadi number, begitu juga dengan divide/

// mini game
let n = '1' + 1; // kedua object tersebut akan digabung sesuai dengan operatornya, maka menjadi 11
n = n - 1; // sedangkan disini, 10 akan dikurangi dengan 1, maka 10
// console.log(n);

// const fav = prompt("What is favorite number?"); // prompt disini untuk menampilkan form input popup di browser
// if(fav == 23) console.log("what an amazing number"); // dengan == (loose) maka ini akan berhasil, karena value dari fav (tipenya string) akan di coersion menjadi int
// namun bila menggunakan === (strict), tidak akan berhasil
// const fav = Number(prompt("What is favorite number?")); // conversi input dari browser menjadi number
// if(fav === 23) console.log("what an amazing number") // maka ini akan berhasil, 23 === 23


//CHALLENGE
const dolpinsScore = (96 + 108 + 89) / 3;
const koalaScor = (96 + 108 + 89) / 3;
// const koalaScor = (88 + 91 + 110) / 3;

// if(dolpinsScore > koalaScor){
//     console.log("Dolphins win the trophy!");
// } else if(dolpinsScore < koalaScor){
//     console.log("Koala win the trophy");
// } else {
//     console.log("Both win the trophy")
// }

// if(dolpinsScore > koalaScor && dolpinsScore >= 100){
//   console.log("Dolphins win the trophy! 🏆");
// } else if(dolpinsScore < koalaScor && koalaScor >= 100){
//   console.log("Koala win the trophy 🏆");
// } else if(dolpinsScore === koalaScor && dolpinsScore >= 100 && koalaScor >= 100){
//   console.log("Both win the trophy 🏆")
// } else {
//   console.log("No team wins the trophy :'(");
// }

// MINI CHALLENGE

// let day = 'wednesday';
// if(day === 'monday'){
//   console.log("Hari ini adalah hari senin");
// } else if(day === 'tuesday'){
//   console.log("Hari ini adalah hari selasa");
// } else if(day === "wednesday" || day === "thursday"){
//   console.log("Hari ini waktunya kerja");
// } else if (day === 'friday'){
//   console.log("Hari ini adalah hari jumat");
// } else if (day === 'saturday' || day === 'sunday'){
//   console.log("Nikmati weekend!");
// } else {
//   console.log("Hari tidak valid!");
// }

const bill = 40;
let tip = bill >= 50 && bill <= 300 ?bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total values is ${tip+bill}`); 



