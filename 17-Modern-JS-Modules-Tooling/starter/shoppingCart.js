// EXPORTING module
// console.log('export module');

// console.log("start fetching users");
// blocking code
// await  fetch('https://jsonplaceholder.typicode.com/users')
// console.log("finishing fetching users ");
// dua variable (shippingCost & cart) di scoped di current  module, karena itu tidak bisa digunakan di luar scopenya
const shippingCost = 10
// it will private in this variable
 export const cart = [];

export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    // console.log(`${quantity} ${product} added to cart`);
}

const totalQuantity = 3;
const totalPrice =  237;

// memberikan alias dari exportnya
export {totalQuantity as qty, totalPrice};

export default function(product, quantity) {
    cart.push({product, quantity});
    // console.log(`${quantity} ${product} added to cart`);
}
