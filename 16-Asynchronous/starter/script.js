'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = "") {
    const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('afterbegin', html);
    countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryData = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restCountries.com/v2/name/${country}`);
//     request.send();
//
//     request.addEventListener('load', function () {
//         // console.log(this.responseText);
//         const [data] = JSON.parse(request.responseText);
//         console.log(data);
//
//         const html = ` <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>`
//
//         countriesContainer.insertAdjacentHTML('afterbegin', html);
//         countriesContainer.style.opacity = 1
//     });
// }
//
// getCountryData("Portugal");
// getCountryData("Australia");

// const getCountryAndNeighbors = function (country) {
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restCountries.com/v2/name/${country}`);
//     request.send();
//
//     request.addEventListener('load', function () {
//         // console.log(this.responseText);
//         const [data] = JSON.parse(request.responseText);
//         console.log(data);
//
//         // Render country 1
//         renderCountry(data)
//
//         // get neighbour country (2)
//         // const neighbour = data.borders?.[0];
//         const [neighbour] = data.borders;
//
//         if(!neighbour) return;
//
//         // AJAX call (2)
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restCountries.com/v2/alpha/${neighbour}`);
//         request2.send();
//
//         request2.addEventListener('load', function () {
//             const data2 = JSON.parse(this.responseText);
//             console.log(this.responseText);
//
//             renderCountry(data2, "neighbour");
//         })
//     });
// }
//
// getCountryAndNeighbors("usa");

const request = fetch('https://restCountries.com/v2/name/usa');

////////////////////
// PROMISES: consume promises
// const getCountryData = function (country) {
//     fetch(`https://restCountries.com/v2/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         })
//
// };

// consuming promises

// const getCountryData = function (country) {
//     fetch(`https://restCountries.com/v2/name/${country}`)
//         .then((response) => response.json())
//         .then((data) => renderCountry(data[0]))
//
// };

// consuming promises with chaining promises
// const getCountryData = function (country) {
//     // country 1
//     fetch(`https://restCountries.com/v2/name/${country}`)
//         .then((response) => response.json())
//         .then(data => { // promise yang akan menampilkan 23
//             renderCountry(data[0])
//             const neighbour = data[0].borders[0]
//
//             if(!neighbour) return
//
//             // country 2
//            return fetch(`https://restCountries.com/v2/alpha/${neighbour}`)
//             // return 23;
//         })
//         .then(response => response.json())
//         .then(data => renderCountry(data, "neighbour"))
//         // handle with this method, will show alert with value of data
//         // .then(data => alert(data))
//
// };
// getCountryData("usa");

const getJson = function (url, errMsg = "Something went wrong.") {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
        return response.json();
    });
};

// handle errors:
// const getCountryData = function (country) {
//     // country 1
//     fetch(`https://restCountries.com/v2/name/${country}`)
//         .then(response => {
//             console.log(response);
//             // jika terjadi/ditemukan adanya error, maka promises akan rejected dan me-return
//             // dan akan masuk ke dalam code catch di bawah
//             if (!response.ok) {
//                 throw new Error(`Country not found (${response.status})`);
//             }
//             return response.json()
//
//         })
//         .then(data => { // promise yang akan menampilkan 23
//             renderCountry(data[0])
//             const neighbour = data[0].borders[0]
//
//             if (!neighbour) return
//
//             // country 2
//             return fetch(`https://restCountries.com/v2/alpha/${neighbour}`)
//             // return 23;
//         })
//         // dipanggil ketika suatu kondisi terpenuhi
//         .then(response => {
//             console.log(response)
//             return response.json()
//         })
//         .then(data => renderCountry(data, "neighbour"))
//         // catching the error, dan dipanggil ketika promises rejected/ditolak (?)
//         .catch(error => {
//             console.error(`${error} :(`);
//             renderError(`Something went wrong, ${error.message} :(. Try again.`);
//         })
//         // not always usefully, digunakan ketika ingin mendapatkan result entah itu memenuhi suatu kondisi atau tidak
//         // contoh case, spinner untuk loading
//         // only work in promises, atau jika catch juga return promises
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         })
//
//     // handle with this method, will show alert with value of data
//     // .then(data => alert(data))
//
// };

const getCountryData = function (country) {
    // country 1
    getJson(`https://restCountries.com/v2/name/${country}`, "Country not found")
        .then(data => { // promise yang akan menampilkan 23
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            console.log(neighbour);

            // dengan throwing error di sini, akan secara langsung me-reject promises
            if (!neighbour) throw new Error('No neighbour found!');

            // country 2
            return getJson(`https://restCountries.com/v2/alpha/${neighbour}`, "Country not found");
            // return 23;
        })
        // catching the error, dan dipanggil ketika promises rejected/ditolak (?)
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })

        // not always usefully, digunakan ketika ingin mendapatkan result entah itu memenuhi suatu kondisi atau tidak
        // contoh case, spinner untuk loading
        // only work in promises, atau jika catch juga return promises
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });

    // handle with this method, will show alert with value of data
    // .then(data => alert(data))

};

// btn.addEventListener('click', function () {
//     getCountryData("vietnam");
// });
// getCountryData("indonesia");

// CODING CHALLENGE
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

// coding challenge 1
/**
 PART 1
 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
 The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
 4. Chain a .catch method to the end of the promise chain and log errors to the console
 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

 PART 2
 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

 TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
 TEST COORDINATES 2: 19.037, 72.873
 TEST COORDINATES 2: -33.933, 18.474

 GOOD LUCK 😀
 */

// const whereAmI = function (lat, lng) {
//     fetch(` https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//         .then(res => {
//             if (!res.ok) throw new Error(`Problem with geocoding, ${res.status}`);
//             console.log(res);
//             return res.json()
//         })
//
//         .then(data => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.countryName}`);
//
//             return fetch(`https://restCountries.com/v2/name/${data.countryName}`)
//         })
//         .then(res => {
//             if (!res.ok) throw new Error(`Country not found, ${res.status}`);
//
//             return res.json();
//         })
//         .then(data => renderCountry(data[0]))
//
//         .catch(err => console.error(`${err.status}`));
// }
//
// whereAmI(52.508, 13.381)
// whereAmI(19.037, 72.873)
// whereAmI(-33.933, 18.474)

//////////////////////////////////
// Event Loop
// execute 1
// console.log('Test start');
// // execute 4, ini akan tampil setelah eksekusi pada micro-task sudah selesai
// setTimeout(() => console.log('0 sec timer'), 0);
// // execute 3 (promise akan disimpan di micro-task queue, dan merupakan prioritas. Karena itu ini menjadi urutan kedua)
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
//
// Promise.resolve('Resolved promise 2').then(res => {
//     // semakin banyak 0 nya, maka komputer akan semakin lama untuk melakukan eksekusi
//     for(let i = 0; i < 10000; i++){}
//     console.log(res)
// });
// // execute 2
// console.log('Test end')

// simple promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log('lottery draw is happening 🔮');
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('You win 💰');
//         } else {
//             // dengan menambahkan new Error, akan menampilkan tampilan error pada console dan akan menampilkan pada bagian mana yang error
//             reject(new Error('You lose 💩'));
//         }
//     }, 2000);
//
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// promisifying means to convert callback based asynchronous behavior to promise based
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

// callback function with asynchronous
// wait(2)
//     .then(() => {
//         console.log('1 second passed.');
//         // chain sequential AJAX calls with fetch function
//         // first fetch, will create new fetch then return
//         return wait(1);
//
//         // then handle that for one more
//     }).then(() => {
//     console.log('2 second passed.');
//     return wait(1);
// })
//     .then(() => {
//         console.log('3 second passed.');
//         return wait(1);
//
//     })
//     .then(() => {
//         console.log('4 second passed.');
//         return wait(1);
//
//     })

// callback hell
// setTimeout(() => {
//     console.log('1 second passed.');
//     setTimeout(() => {
//         console.log('2 second passed.');
//         setTimeout(() => {
//             console.log('3 second passed.');
//
//             setTimeout(() => {
//                 console.log('4 second passed.');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// simple promises
// Promise.resolve('abc').then(x => console.log(x)); // akan tampil pada console
// Promise.reject(new Error('Problem!')).catch(x => console.error(x)) // akan menampilkan error pada console

// Promisifying Geo API
// const getPosition = function (position) {
//     return new Promise(function (resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(
//         //     // position => console.log(position),
//         //     position => resolve(position), // resolve the current position when no error
//         //     // err => console.log(err)
//         //     err => reject(err) // reject the error
//         // );
//
//         // secara otomatis resolve dan reject position
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };

// getPosition().then(pos => console.log(pos));

// new way to get the position
// const whereAmI = function () {
//     getPosition().then(pos => {
//         const {latitude: lat, longitude: lng} = pos.coords;
//
//         // return new chain promises
//         return fetch(` https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
//     })
//         .then(res => {
//             if (!res.ok) throw new Error(`Problem with geocoding, ${res.status}`);
//             console.log(res);
//             return res.json();
//         })
//
//         .then(data => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.countryName}`);
//
//             return fetch(`https://restCountries.com/v2/name/${data.countryName}`);
//         })
//         .then(res => {
//             if (!res.ok) throw new Error(`Country not found, ${res.status}`);
//
//             return res.json();
//         })
//         .then(data => renderCountry(data[0]))
//
//         .catch(err => console.error(`${err.status}`));
// };
// btn.addEventListener('click', whereAmI);

// CODING CHALLENGE 2

////////////////////////
// ASYNC/AWAIT
// setelah ditambahkan kata 'async' di depan function, maka sebuah function akan menjadi asynchronous function, yang artiny
// dapat berjalan di balik layar selagi run code

const getPosition = function (position) {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function (country) {
    try {
        // geolocation
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;

        // reverse geocoding
        const resGeo = await fetch(` https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
        if (!resGeo.ok) throw new Error(`Problem getting location data`);

        const dataGeo = await resGeo.json();
        console.log(dataGeo);

        // country data
        // await keyword digunakan untuk await result dari sebuah promise
        // tidak menggunakan chaining promise
        const res = await fetch(`https://restCountries.com/v2/name/${dataGeo.countryName}`);
        if (!res.ok) throw new Error(`Problem getting country`);

        const data = await res.json();
        console.log(data);
        renderCountry(data[0]);

        // akan menjadi fulfilled value dari promise yang di return oleh function
        return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
    } catch (err) {
        console.error(`${err} 💥`);
        renderError(`💥 ${err.message}`);

        // reject promise returned from async function
        throw err;
    }
};
// whereAmI();
// whereAmI();
// console.log('1: will get location');
// javascript tidak akan tahu apa yang akan di retun dari function ini, maka itu yang di return adalah promise, saat di console akan menampilkan <pending>
// const city = whereAmI();
// console.log(city);
// jika function whereAmI terdapat error, console.log tetap tampil yang artinya jika ada error pada async function, functionnya tetap akan fulfilled
// dan tidak akan rejected
// whereAmI()
//     // mendapatkan error dari callback function, karena itu akan mendapatkan dua undefined, bukan catch(?)
//     // artinya, jika pada async function terdapat error, maka promise return value is still fulfilled
//     .then(city => console.log(`2: ${city}`))
//
//     // cara menangkap error pada async function dengan catch
//     .catch(err => console.error(`2: ${err.message} 💥`))
//     // ini akan selalu dieksekusi, jadi berurutan ni dia
//     .finally(() => console.log('3: finishing getting location'));

// error handling with async/await

//IIFE: menggunakan IIFE untuk mengubah function di atas
// last remaining cases for IIFE
// async function calling other async function
// (async function () {
//     try {
//         const city = await whereAmI();
//         console.log(`2: ${city}`);
//     } catch (err) {
//         console.error(`2: ${err.message} 💥`);
//     }
//     console.log('3: finishing getting location');
// })();

// get 3 countries data with orders does not matter.
const get3Countries = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJson(`https://restCountries.com/v2/name/${c1}`);
        // const [data2] = await getJson(`https://restCountries.com/v2/name/${c2}`);
        // const [data3] = await getJson(`https://restCountries.com/v2/name/${c3}`);

        console.log([data1.capital, data2.capital, data3.capital]);
    } catch (err) {
        console.error(`${err} 💩`);
    }
};

get3Countries('portugal', 'indonesia', 'vietnam');

// running promises in parallel
