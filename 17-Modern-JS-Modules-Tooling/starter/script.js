// MODULES
// ES6 modules: modules stored in files, exactly one module per file.

///////////////////////////////////////////
// exporting and importing modules
// IMPORTING module

// import function addToCart dari file shoppingCart
// memberikan alias
// import {addToCart, qty, totalPrice as price} from './shoppingCart.js';

// menggunakan function hasil import
// addToCart("biskuit", 4);
// // hasil dari import yang lain
// console.log(qty, price);

import {totalPrice} from "./shoppingCart.js";

// console.log('import module');

// import everything from js file with an alias
// import * as ShoppingCart from "./shoppingCart.js";
// // can use any method from export
// ShoppingCart.addToCart("bayam", 8);

// ini akan meng-import data yang di set export secara default, ketika nama method tidak ditulis, maka akan menggunakan export default
// export dan import bersamaan, don't usually do
// hindari ini untuk reduce complexity
// import add, {addToCart, qty, totalPrice as price} from "./shoppingCart.js";
// console.log(price)
import add, {cart} from "./shoppingCart.js";

// add("bayam", 8);
// add("nasi ayam", 8);
// add("nasi goreng", 8);
// console.log(cart);

// TOP level await
// console.log("start fetching...");
// await di sini akan menghentikan semua eksekusi sebelum fetching data selesai
// const res = await fetch('https://jsonplaceholder.typicode.com/todos');
// const data = await res.json();
// console.log(data)
// console.log("something");

// const getLastPost = async function () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     return {title: data.at(-1).title, text: data.at(-1).body};
// };

// const lastPost = getLastPost();
// dengan menggunakan then method, akan menampilkan isi dari promise lastPost
// lastPost.then(last => console.log(last));
// dengan menggunakan await
// console.log(await lastPost);
// const lastPost2 = getLastPost();
// console.log(await lastPost2);

// module pattern, dengan teknik IEFI
const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost}%)`);
    };

    const orderStock = function (product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    // return all stuff that want to be public
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();
// ShoppingCart2.addToCart("pizza", 2)
// ShoppingCart2.addToCart("bihun", 4)

// type of modules(?)
// common JS module
// export
// export const addToCart = function (product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
// };

// import
// const {addToCart} = require("/shoppingCart.js");

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
// import cloneDeep from 'lodash-es';
import cloneDeep from 'lodash';

const state = {
    cart: [
        {product: "jajak", quantity: 5},
        {product: "mie ayam", quantity: 3},
    ],
    user: {loggedIn: true},
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
    module.hot.accept();
}

class Person{
    #greeting = "Hey";
    constructor(name){
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}
const jonas = new Person("Jamal");
console.log(`jamal` ?? null);
console.log(card.find(el =>el.quantity >= 3));
