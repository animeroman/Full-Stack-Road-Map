// Exporting Module
console.log('Exporting Module');

// Blocking Code
// console.log('Start Fetching Users');
// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('End Fetching Users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart.`);
};

const totalPrice = 414;
const totalQuantity = 12;

export { totalPrice, totalQuantity as tQuantity };

export default function(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart.`);
}
