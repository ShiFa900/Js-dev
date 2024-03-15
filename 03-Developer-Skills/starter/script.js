// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// CHALLENGE

// test data 1 = [17, 21, 23];
// test data 2 = [12, 5, -5, 0, 4];
// displaying data : "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."

// buat function yang akan menampilkan text di atas
// di depan angka harus berisi tiga dots (...)
// cara mendapatkan harinya, index + 1

function printForecast(arr) {
    let str = '';
    let dots = "... ";
    for (let i = 0; i < arr.length; i++) {
        let nextDay = i + 1;
        str += `${arr[i]}ºC in ${nextDay} days ${dots} `
    }
    console.log(dots + str);

}

const temperature1 = [17, 21, 23];
const temperature2 = [12, 5, -5, 0, 4];
// console.log(`... ${temperature[0]}ºC ... ${temperature[1]}ºC ... ${temperature[2]}ºC`);
printForecast(temperature1);

