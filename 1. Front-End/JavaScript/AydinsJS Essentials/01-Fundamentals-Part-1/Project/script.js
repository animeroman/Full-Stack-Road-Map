// Eposide All done.
/*
let js = 'amazing';
console.log(12+58-90+360);

// Variable names
let firstName = "Aydın";
let myAge = 19;

console.log(firstName);
console.log(firstName);
console.log(myAge);

let myFirstJob = "Waiter";
let myCurrentJob = "Learner";

console.log(myFirstJob);
console.log(myCurrentJob);

let javascriptIsFUN = true;
console.log(javascriptIsFUN);

// console.log(typeof true);
console.log(typeof javascriptIsFUN);
// console.log(typeof "Aydın");
// console.log(typeof 20);

javascriptIsFUN = 'YES!'
console.log(typeof javascriptIsFUN);

let year;
console.log(year);
console.log(typeof year);

year = 2004;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 2004;
// birthYear = 2005;
// const job;

var job = 'Waiter';
job = 'Learner';

lastName = 'Süleymanlı';
console.log(lastName);

// Math Operators
const now = 2077;
const ageAydin = now - 2004;
const ageSeid = now - 2007;
console.log(ageAydin, ageSeid);

console.log(ageAydin * 2, ageSeid / 31, 5 ** 2);

const firtsName = 'Aydın';
const lastName = 'Süleymanlı';
console.log(firtsName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4
x++;
x--;
console.log(x);

// Comparison Operators
console.log(ageAydin > ageSeid);// >, <, >=, <=
console.log(ageSeid <= 69);

console.log(now - 2004 > now - 2007);

const now = 2077;
const ageAydin = now - 2004;
const ageSeid = now - 2007;

console.log(ageAydin > ageSeid);// >, <, >=, <=

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageAydin + ageSeid) / 2
console.log(ageAydin, ageSeid, averageAge);

//Challange #1
const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / (heightJohn * heightJohn);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

const firstName = "Aydın";
const lastName = "Süleymanlı";
const birthYear = 2004;
const currentJob = 'Programmer';
const now = 2077;

const aydin = "I'm " + firstName + ' ' + lastName + ', a ' + (now - birthYear) + ' year old ' + currentJob + '!';
console.log(aydin);

const aydinNew = `I'm ${firstName}, a ${currentJob}!`;
console.log(aydinNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`)

const firstName = 'Aydın';
const secondName = 'Səid';
const ageAydin = 20;
const ageSeid = 16;
const isOldEnoughForAydin = ageAydin >= 18;
const isOldEnoughForSeid = ageSeid >= 18;

if (isOldEnoughForAydin) {
    console.log(`${firstName} can get driving license.`)
} else {
    console.log(`${firstName} is too young. Wait another ${18 - ageAydin} years :).`);
}

if (isOldEnoughForSeid) {
    console.log(`${secondName} can get driving license.`)
} else {
    console.log(`${secondName} is too young. Wait another ${18 - ageSeid} years :).`);
}

const birthYear = 2004;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

const markBMI = 28.3;
const johnBMI = 23.9;
const higherBMI = markBMI > johnBMI;

if(higherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher that Mark's!");
}

// type conversion
const inputYear = 2004;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + inputYear);
console.log(Number(inputYear) + 18);

const firstName = 'Aydın';
console.log(Number(firstName));
console.log(typeof NaN);

const ageAydin = 20;
console.log(String(ageAydin), ageAydin);

// type coercion
console.log("I'm " + 20 + " years old.");
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * 2);
console.log('23' / 2);

let n = '1' + 1; // 11
n = n - 1; //11 - 1 = 10
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean('Aydın'));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

const age = '18';
if(age === 18) console.log('You just became an adult.(strict)');

if(age == 18) console.log('You just became an adult.(loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if(favorite === 20) {
    console.log("Cool! 20 is an amazing number!");
} else if(favorite === 7) {
    console.log('7 is also a cool number!');
} else if(favorite === 9) {
    console.log('9 is also a cool number!');
} else {
    console.log("Number is not 23 or 7 or 9");
}

if(favorite !== 31) console.log("Why not 31 nigga?")

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if(hasDriverLicense && hasGoodVision) {
//     console.log("Aydın is able to drive!");
// } else {
//     console.log("Someone should be drive...");
// }

const isTired = false; // C
if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Aydın is able to drive!");
} else {
    console.log("Someone should be drive...");
}
// Data 1
// const dolphinsFirstScore = 96;
// const dolphinsSecondScore = 108;
// const dolphinsThirdScore = 89;
// const koalasFirstScore = 88;
// const koalasSecondScore = 91;
// const koalasThirdScore = 110;
// Data 2
// const dolphinsFirstScore = 97;
// const dolphinsSecondScore = 112;
// const dolphinsThirdScore = 101;
// const koalasFirstScore = 109;
// const koalasSecondScore = 95;
// const koalasThirdScore = 123;
// Data 3
const dolphinsFirstScore = 97;
const dolphinsSecondScore = 112;
const dolphinsThirdScore = 101;
const koalasFirstScore = 109;
const koalasSecondScore = 95;
const koalasThirdScore = 106;


const teamDolphins = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3
const teamKoalas = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3

console.log(teamDolphins, teamKoalas);

if(teamDolphins > teamKoalas && teamDolphins >= 100) {
    console.log("Team Dolphins wins the Trophy!");
} else if (teamDolphins < teamKoalas && teamKoalas >=100) {
    console.log("Team Koalas wins the Trophy!");
} else if (teamDolphins === teamKoalas && teamDolphins >= 100, teamKoalas >=100) {
    console.log("There is a Draw!") ;
} else {
    console.log("No Team wins the Trophy :(");
}

const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Today is Monday!');
        break;
    case 'tuesday':
        console.log('Today is Tuesday!');
        break;
    case 'wednesday':
        console.log('Today is Wednesday!');
        break;
    case 'thursday':
        console.log('Today is Thursday!');
        break;
    case 'friday':
        console.log('Today is Friday!');
        break;
    case 'saturday':
        console.log('Today is Saturday!');
        break;
    case 'sunday':
        console.log('Today is Sunday!');
        break;
    default:
        console.log('Not a valid day!');
}
// String
if (23 > 10) {
    const str = '23 is bigger that 10';
}

const age = 20;
age >= 18 ? console.log('I am adult now!') :
console.log('I need to grow up!');

const agePosition = age >= 18 ? 'Adult' : 'Not adult yet';
console.log(agePosition);

let agePosition2
if (age >= 18) {
    agePosition2 = 'Adult';
} else {
    agePosition2 = 'Not adult yet';
}
console.log(agePosition2);

console.log(`I am ${age >= 18 ? 'Adult' : 'Not adult yet'}`);
*/

// const bill = 275;
const bill = 40;
// const bill = 430;
const tip =  (bill>= 50 && bill<= 300) ? bill * (15/100) : bill * (20/100);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);