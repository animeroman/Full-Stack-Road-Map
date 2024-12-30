// Lecture all done until 13th.

// Importing Module
// import { addToCart, totalPrice as price, tQuantity } from './shoppingCart.js';
console.log('Importing Module');
// addToCart('apple', 10);
// console.log(price, tQuantity);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('banana', 7);
// console.log(ShoppingCart.totalPrice);

// import add, {
//   addToCart,
//   totalPrice as price,
//   tQuantity
// } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('bread', 2);
add('pizza', 1);
add('burger', 3);

console.log(cart);
/*
// console.log('Start Fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/comments');
// const data = await res.json();
// console.log(data);
// console.log('End Fetching');

const getLastComment = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();

  return { title: data.at(-1).email, comment: data.at(-1).body };
};

const lastComment = await getLastComment();
console.log(lastComment);

// Not very clean
// lastComment.then(last => console.log(last));
*/

/*
const shoppingCart2 = (function() {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 741;
  const totalQuantity = 23;

  const addToCart = function(product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to the cart (shipping cost is ${shippingCost}).`
    );
  };

  const addStock = function(product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} stocked by customer.`);
  };

  return {
    cart,
    shippingCost,
    totalPrice,
    totalQuantity,
    addToCart
  };
})();

shoppingCart2.addToCart('book', 100);
shoppingCart2.addToCart('pizza', 1);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);
*/

/*
// Export 
export.addToCart = function(product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to the cart (shipping cost is ${shippingCost}).`
    );
  };

// Import
const { addToCart } = require('./shoppingCart.js');
*/

// import cloneDeep from 'lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [{ product: 'bread', quantity: 5 }, { product: 'pizza', quantity: 5 }],
  user: { loggedIn: true }
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';
