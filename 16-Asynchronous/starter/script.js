'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

// const getCountryData = function (country) {
//     fetch(`https://restCountries.com/v2/name/${country}`)
//         .then((response) => response.json())
//         .then((data) => renderCountry(data[0]))
//
// };

const getCountryData = function (country) {
    // country 1
    fetch(`https://restCountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then(data => { // promise yang akan menampilkan 23
            renderCountry(data[0])
            const neighbour = data[0].borders[0]

            if(!neighbour) return

            // country 2
           return fetch(`https://restCountries.com/v2/alpha/${neighbour}`)
            // return 23;
        })
        .then(response => response.json())
        .then(data => renderCountry(data, "neighbour"))
        // handle with this method, will show alert with value of data
        // .then(data => alert(data))

};
getCountryData("usa");