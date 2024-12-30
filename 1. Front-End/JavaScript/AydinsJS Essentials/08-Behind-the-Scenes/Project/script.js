'use strict';
// Lecture All done.

/*
function calcAge(birthYear) {
  const age = 2077 - 2004;

  function printName() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1987 && birthYear <= 2037) {
      var millenial = true;
      // Creating new variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'New Output!';

      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printName();

  return age;
}

const firstName = 'Aydin';
calcAge(2004);

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Aydin';
let job = 'Coder';
const year = 2004;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function(a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numCards);
if (!numCards) deleteShoppingCard();

var numCards = 10;

function deleteShoppingCard() {
  console.log('All shipping cards are deleted.');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// console.log(this);

const calcAge = function(birthYear) {
  console.log(2077 - birthYear);
  //   console.log(this);
};
calcAge(2004);

const calcAgeArrow = birthYear => {
  console.log(2077 - birthYear);
  //   console.log(this);
};
calcAgeArrow(2004);

const aydin = {
  year: 2004,
  calcAge: function() {
    console.log(this);
    console.log(2077 - this.year);
  }
};
aydin.calcAge();

const seid = {
  year: 2007
};
seid.calcAge = aydin.calcAge;
seid.calcAge();

const f = aydin.calcAge;
f();

const aydin = {
  firstName: 'Aydin',
  year: 2004,
  calcAge: function() {
    // console.log(this);
    console.log(2077 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMilenial = function() {
    //   console.log(self);
    //   console.log(self.year >= 1991 && self.year <= 2037);
    //   //   console.log(this.year >= 1991 && this.year <= 2037);
    // };
    // isMilenial();

    // Solution 2
    const self = this; // self or that
    const isMilenial = () => {
      console.log(this);
      console.log(this.year >= 1991 && this.year <= 2037);
    };
    isMilenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`)
};
aydin.greet();
aydin.calcAge();

// argument keyword
const addExpr = function(a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Aydin',
  age: 20
};

const friend = me;
friend.age = 14;
console.log('Friend', friend);
console.log('Me', me);
*/

// Primitive types
let lastNAme = 'Villiams';
let oldLastName = lastNAme;
lastNAme = 'Davis';
console.log(lastNAme, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Villiams',
  age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Villiams',
  age: 27,
  family: ['Alice', 'Bob']
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Josh');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
