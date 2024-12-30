'use strict';
// lecture All done.

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

function logger() {
    console.log('My name is Aydin');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apple, orange) {
    console.log(apple, orange);
    const juice = `Juice has ${apple} apples and ${orange} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 3);
console.log(orangeJuice);

const num = Number('23');

// Function Declaration
function calcAge1(birthYear) {
    return 2077 - birthYear;
}
const age1 = calcAge1(2004);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2077 - birthYear;
}
const age2 = calcAge2(2004);

console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2077 - birthYear;
const age3 = calcAge3(2004);
console.log(age3);

const yearsUntilRetirements = (birthYear, firstName) => {
    const age = 2077 - birthYear;
    const retirement = 80 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirements(2004, 'Aydın'));
console.log(yearsUntilRetirements(2007, 'Seid'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apple, orange) {
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);
    const juice = `Juice has ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2077 - birthYear;
}

const yearsUntilRetirements = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 73 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
}

console.log(yearsUntilRetirements(2004, 'Aydin'));
console.log(yearsUntilRetirements(2007, 'Seid'));

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAverage = (a, b, c) => (a + b + c) / 3;
// Data 1
let scoreDolphins = (44, 23, 71);
let scoreKoalas = (65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy, (${avgDolphins} vs. ${avgKoalas}).`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win the trophy, (${avgKoalas} vs. ${avgDolphins}).`);
    } else {
        console.log('No team wins.');
    }
}

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
// Data 2
scoreDolphins = (85, 54, 41);
scoreKoalas = (23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(20, 58);

const friend1 = 'Michael';
const friend2 = 'Trevor';
const friend3 = 'Franklin';

const friends = ['Michael', 'Trevor', 'Franklin'];
console.log(friends);

// const years = new Array(1976, 1979, 2004, 2007);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Carl';
console.log(friends);
// friends = [Bob, Alice];

const firstName = 'Aydin';
const aydin = [firstName, 'Suleymanli', 2077 - 2004, 'Coder', friends];
console.log(aydin);
console.log(aydin.length);

// Exercise
const calcAge = function (birthYear) {
    return 2077 - birthYear;
}

const years = [1976, 1979, 2004, 2007];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const ageLast = calcAge(years[years.length - 1]);
console.log(age1, age2, ageLast);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Add elements
const friends = ['Michael', 'Trevor', 'Franklin'];
const newLength = friends.push('Carl');
console.log(friends);
console.log(newLength);

friends.unshift('Tommy');
console.log(friends);

// Remove elements
friends.pop(); // Last one
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First one
console.log(friends);

console.log(friends.indexOf('Trevor'));
console.log(friends.indexOf('Claud'));

friends.push(23);
console.log(friends.includes('Trevor'));
console.log(friends.includes('Claud'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Trevor')) {
    console.log("There's a guy named Trevor!")
}

function calcTip(bill) {
    if (bill>=50 && bill<=300) {
        bill = bill * 0.15;
    } else {
        bill = bill * 0.2;
    }
    return bill;
}

// Test data: 125, 555 and 44
const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total)

const aydinArray = [
    'Aydin',
    'Suleymanli',
    20770 - 2004,
    'coder',
    ['Tom', 'Jason', 'Dave']
];

const aydin = {
    firstName: 'Aydin',
    lastName: 'Suleymanli',
    age: 2077 - 2004,
    job: 'coder',
    friends: ['Tom', 'Jason', 'Dave']
};

const aydin = {
    firstName: 'Aydin',
    lastName: 'Suleymanli',
    age: 2077 - 2004,
    job: 'coder',
    friends: ['Tom', 'Jason', 'Dave']
};
console.log(aydin);

console.log(aydin.lastName);
console.log(aydin['lastName']);

const nameKey = 'Name';
console.log(aydin['first' + nameKey]);
console.log(aydin['last' + nameKey]);


aydin.location = 'Azerbajan';
aydin['instagram'] = 'Yoxdur!';
console.log(aydin);

const interestIn = prompt('What do you want to know about Aydin? Choose between fisrtName, lastName, age, job, friends!');

if (aydin[interestIn]) {
    console.log(aydin[interestIn]);
} else {
    console.log('Wrong request!')
}

console.log(`Aydin has ${aydin.friends.length} friends, and his best friend is called ${aydin.friends[0]}.`)

const aydin = {
    firstName: 'Aydin',
    lastName: 'Suleymanli',
    birthYear: 2004,
    job: 'coder',
    friends: ['Tom', 'Jason', 'Dave'],
    hasDriverLicense: false,

    // calcAge: function(birthYear) {
    //     return 2077 - birthYear;
    // }

    // calcAge: function() {
    //     return 2077 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2077 - this.birthYear
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is ${this.age}~years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(aydin.calcAge());
// console.log(aydin['calcAge'](2004));

console.log(aydin.age);
console.log(aydin.age);
console.log(aydin.age);

// Challenge
// "Aydin is 73~years old coder, and he has a/no driver's license."
console.log(aydin.getSummary());

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.67,

    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI;
    }
}

const john = {
    fullName: 'John Smith',
    mass:  92,
    height: 1.95,

    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI;
    }
}
mark.calcBMI();
john.calcBMI();

//  Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
console.log(mark.BMI, john.BMI);
console.log(mark.BMI > john.BMI ? `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!` : `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`)


console.log('Lifting weight repetition 1');
console.log('Lifting weight repetition 2');
console.log('Lifting weight repetition 3');
console.log('Lifting weight repetition 4');
console.log('Lifting weight repetition 5');
console.log('Lifting weight repetition 6');
console.log('Lifting weight repetition 7');
console.log('Lifting weight repetition 8');
console.log('Lifting weight repetition 9');
console.log('Lifting weight repetition 10');

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <=10; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}

const aydin = [
    'Aydin',
    'Suleymanli',
    2077 - 2004,
    'coder',
    ['Tom', 'Jason', 'Dave']
];
const types = [];

for(let i = 0; i < aydin.length; i++) {
    // Reading from aydin array
    console.log(aydin[i], typeof aydin[i]);
    // Filling types array
    // types[i] = typeof aydin[i];
    types.push(typeof aydin[i]);
}
console.log(types);

const years = [1976, 1979, 2004, 2007];
const ages = [];

for( let i = 0; i < years.length; i++) {
    ages.push(2077 - years[i]);
}
console.log(ages);

// continue and break
console.log('---Only Strings---')
for(let i = 0; i < aydin.length; i++) {
    if(typeof aydin[i] !== 'string') continue;
    console.log(aydin[i], typeof aydin[i]);
}

console.log('---Break with Numbers---')
for(let i = 0; i < aydin.length; i++) {
    if(typeof aydin[i] === 'number') break;
    console.log(aydin[i], typeof aydin[i]);
}

const aydin = [
    'Aydin',
    'Suleymanli',
    2077 - 2004,
    'coder',
    ['Tom', 'Jason', 'Dave'],
    true
];

for(let i = aydin.length - 1; i >= 0; i--) {
    console.log(i, aydin[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`----Starting Exercise ${exercise}----`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight rep ${rep}`);
    }
}

for(let rep = 1; rep <=10; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}

let rep = 1;
while(rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('The count about to end...');
}
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcTip(bill) {
    if (bill>=50 && bill<=300) {
        bill = bill * 0.15;
    } else {
        bill = bill * 0.2;
    }
    return bill;
}

let tips = [];
let totals = [];

for(let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}
console.log(totals);

for(let i = 0; i <= totals.length - 1; i++) {
    console.log(totals[i]);
}

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));