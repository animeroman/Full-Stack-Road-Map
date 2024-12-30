'use strict';

// Lecture All done.

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.includes('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}

/*
/////////////////////////////////////////
// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[5]]: {
    open: 12,
    close: 22
  },
  [weekdays[6]]: {
    open: 11,
    close: 23
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24
  }
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski'
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze'
    ]
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};

const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Gargamel',
  'Seid',
  'Pizza',
  'GArlic'
]);

const question = new Map([
  ['question', 'What is the best programming language in the planet?'],
  [1, 'C++'],
  [2, 'C#'],
  [3, 'Python'],
  [4, 'Java'],
  [5, 'JavaScript'],
  ['answer', 5],
  [true, 'Correct!'],
  [false, 'Try again :)']
]);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const row = text.split('\n');
  console.log(row);

  for (const [i, r] of row.entries()) {
    const [first, second] = r
      .toLowerCase()
      .trim()
      .split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card']
]);

console.log('a+very+nice+string'.split('+'));
console.log('Aydin Suleymanli'.split(' '));

const [firstName, lastName] = 'Aydin Suleymanli'.split(' ');

console.log(['Mr.', firstName, lastName].join(' '));

const capitalizedName = function(name) {
  const names = name.split(' ');
  const upperCase = [];
  for (const n of names) {
    upperCase.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(upperCase.join(' '));
};

capitalizedName('seid via afayet');
capitalizedName('aydin');

// Padding
const message = 'Come to A.Alakbarov street 16';
console.log(message.padStart(25, '+').padEnd(35, '-'));
console.log('Aydin'.padStart(25, '+').padEnd(35, '-'));

const maskCreditCard = function(number) {
  const str = number + '';
  const lastNumber = str.slice(-4);
  return lastNumber.padStart(str.length, '*');
};

console.log(maskCreditCard(4296774));
console.log(maskCreditCard(42967742265241556952));
console.log(maskCreditCard('429677425485417894514156746'));

// Repeat
const message2 = 'Bad Weather... All Departures Delayed... ';
console.log(message2.repeat(3));

const planeInLine = function(n) {
  console.log(`There are ${n} planes in the line ${' >->'.repeat(n)}.`);
};

planeInLine(3);
planeInLine(1);
planeInLine(11);


const airline = 'Seid Hava Yollari';
const pilot = 'Aydin';

console.log(pilot.toLowerCase());
console.log(pilot.toUpperCase());

// Fix capitalization in name
// const typedName = prompt('');
const typedName = 'ayDin';
const lowerTypedName = typedName.toLowerCase();
const correctTypedName =
  lowerTypedName[0].toUpperCase() + lowerTypedName.slice(1);
console.log(correctTypedName);

// Comparing Emails
const email = 'erfuaz@gmail.com';
const loginEmail = ' Erfuaz@gMail.Com \n';

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);

// replacing
const priceGP = '5010,14£';
const priceUS = priceGP.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'Please, wait there an there and there.';

console.log(announcement.replace('there', 'here'));
console.log(announcement.replaceAll('there', 'here'));

// Booleans

const plane = 'Airbus A320neo';

console.log(plane.includes('A320'));
console.log(plane.includes('Aydin'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}

// Practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('You are NOT allowed on board!');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I got a laptop, and some smart technologies.');
checkBaggage('I got some socks and camera.');
checkBaggage('I bring a gun for protect someone else.');


console.log(pilot[0]);
console.log(pilot[1]);
console.log(pilot[2]);
console.log('Afayet'[1]);

console.log(airline.length);
console.log('Suleymanli HAva Yollari'.length);

console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('hava'));

console.log(airline.slice(5));
console.log(airline.slice(5, 9)); // Cut from start until 4 & 7 since end

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(pilot.slice(-2));
console.log(pilot.slice(0, -1));

const checkMiddleSeat = function(seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat :(');
  } else {
    console.log('You are lucky :)');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('27C');
checkMiddleSeat('19E');


// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
const time = [...new Set(gameEvents.keys())].pop();
console.log(time);
console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);

// 4.
for (const [min, events] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${events}`);
}


console.log(question);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Your answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer?'));
const answer = 5;
console.log(answer);
// answer = 5 ? console.log(question.get(true)) : console.log(question.get(false));
console.log(question.get(question.get('answer') === answer));

// Convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);


const rest = new Map();
rest.set('name', 'KAziko Seido');
rest.set(1, 'Alaskar Alakbarov street');
console.log(rest.set(2, 'Alaskar Dilarov street'));

rest
  .set('catagories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are close right now :))');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(2));

const time = 7;
const openOrNot = rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(openOrNot);

console.log(rest.has('catagories'));
rest.delete(1);
console.log(rest.has(1));
// rest.clear();

const arr = [2, 3];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));


console.log(ordersSet);

console.log(new Set('Afayat'));

console.log(ordersSet.size);
console.log(ordersSet.has('Seid'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Pizza');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('aydinsuleymanli').size);


// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'Draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}


// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we are open at ${open} and close at ${close}`);
}


if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
// const users = [{ name: 'Aydin', email: 'hello@aydin.io' }];
const users = [];
console.log(users[0]?.name ?? 'User array empty.');

if (users.length < 0) console.log(users[0].name);
else console.log('User array empty.');


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


const rest1 = {
  name: 'Iskender',
  numGuests: 0
};

const rest2 = {
  name: 'SeidCoffe',
  owner: 'Aydin Rosso'
};

// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


console.log('---- OR ----');

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Aydin');
console.log('' || 'Aydin');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Aydin' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');

console.log(0 && 'Aydin');
console.log(7 && 'Aydin');

console.log('Hello' && 15 && null && 'Aydin');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


// 1) Destructuring

// SPREAD, because Right side of =
const arr = [1, 2, ...[3, 4]];

// REST, because LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFoods);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(1, 2);
add(5, 4, 8, 7);
add(7, 4, 1, 2, 5, 6, 3);

const x = [25, 4, 8];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

console.log(...goodNewArr);
console.log(1, 2, 7, 8, 9);

const newMainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMainMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Aydin';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Suleymanli`);

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?')
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIN: 'Home', ...restaurant, founder: 'Seid' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);



restaurant.orderDelivery({
  time: '22:00',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close }
} = openingHours;
console.log(open, close);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
