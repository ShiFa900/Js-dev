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
        </article>`

    countriesContainer.insertAdjacentHTML('afterbegin', html);
    countriesContainer.style.opacity = 1
}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}

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
    })
}

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
    getJson(
        `https://restCountries.com/v2/name/${country}`,
        "Country not found")
        .then(data => { // promise yang akan menampilkan 23
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) throw new Error('No neighbour found!');

            // country 2
            return getJson(
                `https://restCountries.com/v2/alpha/${neighbour}`,
                "Country not found");
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
        })

    // handle with this method, will show alert with value of data
    // .then(data => alert(data))

};

btn.addEventListener('click', function () {
    getCountryData("vietnam");
});
getCountryData("australia");

