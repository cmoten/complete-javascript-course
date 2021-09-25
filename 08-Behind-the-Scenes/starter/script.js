'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //Create NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       //Reassigning outer scope's variable
//       output = 'NEW OUTPUT';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // console.log(add(2,3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Cardy';
// calcAge(1983);

//Hoisting and Temporal Dead Zone

// //Hoisting with varaibles
// console.log(me); //undefined
// //console.log(job); //initialization error
// //console.log(year); //won't run

// var me = 'Cardy';
// let job = 'Soldier';
// const year = 1974;

// //Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// }; //reference error

// var addArrow = (a, b) => a + b; //reference error

// //Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//This Keyword
// console.log(this); //

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); //undefined in strict mode
// };

// calcAge(1974);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   //console.log(this); //window object
// };

// calcAgeArrow(1977);

// const cardy = {
//   year: 1974,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// cardy.calcAge();

// const angelina = {
//   year: 1977,
// };

// angelina.calcAge = cardy.calcAge; //method borrowing
// angelina.calcAge();

// const f = cardy.calcAge;
// f(); //throws TypeError

//Regular vs Arrow Functions
// var firstName = 'Angelina';

// const cardy = {
//   firstName: 'Cardy',
//   year: 1974,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     //Solution 1
//     // const self = this; //self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // isMillenial();

//     //Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`), //this is window and won't read Cardy as the first name,
// };

// cardy.greet();
// cardy.calcAge();

// //Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8); //arguments undefined

//Primitives vs Objects

//Primitive types
let lastName = 'Moten';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; //Only copying the object reference

marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

// marriedJessica = {};//not allowed for const

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
