'use strict';

// Lecture all done.

/*
const Person = function(firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function() {
  //     console.log(2077 - this.birthYear);
  //   };
};

const aydin = new Person('Aydin', 2004);
console.log(aydin);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

const aslan = new Person('Aslan', 2005);
const rahib = new Person('Rahib', 2000);
console.log(aslan, rahib);

console.log(aydin instanceof Person);

Person.hey = function() {
  console.log('hey there :)');
  console.log(this);
};

Person.hey();

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
  console.log(2077 - this.birthYear);
};

aydin.calcAge();
aslan.calcAge();

console.log(aydin.__proto__);
console.log(aydin.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(aydin));
console.log(Person.prototype.isPrototypeOf(aslan));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObject

Person.prototype.species = 'Homo Sapiens';
console.log(aydin.species, rahib.species);

console.log(aydin.hasOwnProperty('firstName'));
console.log(aydin.hasOwnProperty('species'));

console.log(aydin.__proto__);
// Object.prototype (top of prototype chain)
console.log(aydin.__proto__.__proto__);
console.log(aydin.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 5, 5, 6, 2, 4, 8, 6, 1, 2, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make}'s going at ${this.speed}km/h`);
};

Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make}'s going at ${this.speed}km/h`);
};

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
*/

// class exploration
// const PersonCl = class {};
/*
// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .property property
  calcAge() {
    console.log(2077 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return console.log(2077 - this.birthYear);
  }

  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('hey there :)');
    console.log(this);
  }
}

const ayse = new PersonCl('Ayşe Esgerova', 2004);
console.log(ayse);
ayse.calcAge();
ayse.age;

PersonCl.hey();

console.log(ayse.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//   console.log(`Hey ${this.firstName}`);
// };
ayse.greet();

// 1. Classes are Not hoisted
// 2. Classes are first=class citizes
// 3. Classes are executed in strick mode
/*
const walter = new PersonCl('Walter White', 1988);

const account = {
  owner: 'Aydin',
  movements: [200, 150, 362, 154, 248],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
};

console.log(account.latest);

account.latest = 51;
console.log(account.movements);
*/
/*
const PersonProto = {
  calcAge() {
    console.log(2077 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steve = Object.create(PersonProto);
console.log(steve);
steve.name = 'Steve';
steve.birthYear = 2002;
steve.calcAge();

console.log(steve.__proto__ === PersonProto);

const lale = Object.create(PersonProto);

lale.init('Lale', 2003);
lale.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make}'s going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make}'s going at ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/
/*
const Person = function(firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
  console.log(2077 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const messi = new Student('Messi', 1988, 'IT');
messi.introduce();
messi.calcAge();

console.log(messi.__proto__);
console.log(messi.__proto__.__proto__);

console.log(messi instanceof Student);
console.log(messi instanceof Person);
console.log(messi instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make}'s going at ${this.speed}km/h`);
};

Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make}'s going at ${this.speed}km/h`);
};

const EV = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make}'s going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
*/
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .property property
  calcAge() {
    console.log(2077 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return console.log(2077 - this.birthYear);
  }

  // Set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('hey there :)');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${2077 -
        this.birthYear} years old student, but I feel more like ${2077 -
        this.birthYear -
        40}`
    );
  }
}

const nuru = new StudentCl('Nureddin Cumayev', 2004, 'German Academy');
nuru.introduce();
nuru.calcAge();
*/
/*
const PersonProto = {
  calcAge() {
    console.log(2077 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steve = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mehdi = Object.create(StudentProto);
mehdi.init('Mehdi', 2005, 'Information Technology');
mehdi.introduce();
mehdi.calcAge();
*/

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also a static version)

/*
class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for creating an account, ${this.owner}`);
  }

  // 3) Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  _approveLoan(val) {
    return true;
  }
}

const account1 = new Account('Aydin', 'AZN', 1111);
// account1.movements.push(250);
// account1.movements.push(-150);
account1.deposit(250);
account1.withdraw(150);
account1.requestLoan(1000);
account1._approveLoan(1000);
console.log(account1.getMovements());
console.log(account1);
Account.helper();

// console.log(account1.#movements);
// console.log(account1.#pin);
// console.log(account1.#approveLoan);

// Chaining
account1
  .deposit(330)
  .deposit(400)
  .withdraw(50)
  .requestLoan(2500)
  .withdraw(900);
console.log(account1.getMovements());
*/

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}

CarCl.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make}'s going at ${this.speed}km/h`);
};

CarCl.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make}'s going at ${this.speed}km/h`);
  return this;
};

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  // Link the prototype
  // EVCl.prototype = Object.create(CarCl.prototype);

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make}'s going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}
const rivian = new EVCl('Rivian', 100, 100);
rivian
  .chargeBattery(24)
  .accelerate()
  .brake();
