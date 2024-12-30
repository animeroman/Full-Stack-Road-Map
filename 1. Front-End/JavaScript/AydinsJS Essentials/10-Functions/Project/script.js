'use strict';

// lecture All done.

/*
const bookings = [];

const createBooking = function(
  flightName,
  numPassengers = 1,
  price = 250 * numPassengers
) {
  const booking = {
    flightName,
    numPassengers,
    price
  };
  bookings.push(booking);
  console.log(booking);
};
createBooking('AydinAirWays');
createBooking('SeidAirWays', 45, 8000);
createBooking('AfaAirWays', 5);
createBooking('SeidAirWays', undefined, 20000);

const flight = 'LH236';
const aydin = {
  name: 'Aydin Suleymanli',
  passport: 485961963256
};

const checkIn = function(flightNum, passengerName) {
  flightNum = 'LH049';
  passengerName.name = 'Mr.' + passengerName;

  if (passengerName.passport === 485961963256) {
    alert('Checked In');
  } else alert('Wrong ID!');
};

// checkIn(flight, aydin);
// console.log(flight);
// console.log(aydin);

// IS the same as doing...
// const flightNum = flight;
// const passengerName = aydin;

const newPassword = function(person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassword(aydin);
checkIn(flight, aydin);
console.log(flight);
console.log(aydin);

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
};

const firstUpperWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn) {
  console.log(`Original one: ${str}`);
  console.log(`Transformed one: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best programming language!', firstUpperWord);

transformer('JavaScript is the best programming language!', oneWord);

// JS uses callbacks all the time.
const high5 = function() {
  console.log('You slapped!');
};

document.body.addEventListener('click', high5);
['Aydin', 'Seid', 'NotMati'].forEach(high5);

// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHi = greet('Hi');
greeterHi('Seid');
greeterHi('Aydin');
greet('Bye')('Seid');

const lufthansa = {
  name: 'Lufthansa',
  code: 'LH',
  booking: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked at seat on ${this.name}, flight number is ${this.code}${flightNum}`
    );
    this.booking.push({ flight: `${this.code}${flightNum}`, passengerName });
  }
};

lufthansa.book('049', 'Aydin Suleymanli');
lufthansa.book(777, 'Seid Suleymanli');

const eurowings = {
  name: 'Eurowings',
  code: 'EW',
  booking: []
};

const book = lufthansa.book;

// Does NOT work
// book(446, 'Afayet Suleymanli');

// Call Method
book.call(eurowings, 466, 'Afayet Suleymanli');
console.log(eurowings);

book.call(lufthansa, 778, 'Seid Lens');
console.log(lufthansa);

const swiss = {
  name: 'Swiss Airline',
  code: 'SX',
  booking: []
};

book.call(swiss, 778, 'Aydin lens');

//  Apply Method
const flightData = [585, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind Method
// book.call(eurowings, 466, 'Afayet Suleymanli');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSX = book.bind(swiss);

bookEW(466, 'Afayet Suleymanli');

const bookEW466 = book.bind(eurowings, 466);
bookEW466('Aydin Lens');
bookEW466('Seid Lens');

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlanes = function() {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// const addVat = value => value + value * 0.23;

console.log(addVat(100));
console.log(addVat(23));

const addTax2 = rate => value => value + value * rate;
const addVat2 = addTax2(0.23);
console.log(addVat2(1000));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};

// poll.registerAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

const runOnce = function() {
  console.log('This will never call again.');
};
runOnce();

// IIFE
(function() {
  console.log('This will never call again.');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never call again.'))();

{
  const isPrivate = 23;
  var notPrivate = 49;
}
// console.log(isPrivate);
console.log(notPrivate);

const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();
booker();
booker();

console.dir(booker);


// Example 1
let f;

const g = function() {
  const a = 45;
  f = function() {
    console.log(a * 2);
  };
};

const h = function() {
  const b = 84;
  f = function() {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
  const groupPassengers = n / 3;

  setTimeout(function() {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${groupPassengers} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

const groupPassengers = 1000;
boardPassengers(270, 5);
*/

(function() {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function() {
    header.style.color = 'blue';
  });
})();
