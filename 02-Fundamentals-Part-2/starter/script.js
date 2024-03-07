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
//   return `${firstName} will retires in ${retirement} years, his age is ${age}`;
// }

// console.log(yearsUntilRetirement(1999, 'Jamal'));

// function call function

/**
 * 
 * @param {int} birthYear 
 * @returns int number of current year minus given birth year
 */
function calcAge(birthYear){
  return 2037 - birthYear;
}

/**
 * @param retirement as retirement number in years
 * @param firstName 
 * @return string of information that containe person first name and their retaiment number
 */
const checkRetirement = (retirement, firstName) => {
if(retirement > 0){
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
const yearsUntilRetirement = function (birthYear, firstName){
  // dapatkan umurnya
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  console.log(checkRetirement(retirement,firstName));
  return age;

}

console.log(yearsUntilRetirement(1991, 'Moka'));
console.log(yearsUntilRetirement(1981, 'jamela'));