/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

//Values are the smallest unit of information
console.log("Cardy");
console.log(23);

//Variables

let firstName = "Angelina";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_maltida = "JM";
let $function = 27;

//Good Descriptions
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher"
console.log(myFirstJob);

//Bad Descriptions
let job1 = "Programmer";
let job2 = "Teacher"


//Data Types

//Numbers are used for decimals and integers
let age = 47;

//Strings are text
let testString = "Tony";

//Boolean are for logical values of true or false
let javascriptIsFun = true;
console.log(javascriptIsFun);




// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Cardy");

//Assign a new value to javascriptIsFun
//Do not use let
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

//Undefined is an empty value
let year;
console.log(year);
console.log(typeof year);

year = 1974;
console.log(typeof year);

//Null is also an empty value
console.log(typeof null); //displays as object, but is a bug in JS

//Symbol is an immutable value introduced in ES2015

//BigInt are integers too large for the number type


//let, const, and var
//let is useful for empty variables and mutating variables
let age = 47;
age = age++;

//const is for variables that won't change values
//const variables can't be undefined
const birthYear = 1974;

//var should be avoided as it is a legacy keyword
var job = "programmer";
job = "teacher";


//Basic Operators
//Operators allow us to transform or combine values

//Arithmetic operators
const now = 2037;
const cardyBirth = 1991;
const sarahBirth = 2018;
const ageCardy = now - cardyBirth;
const ageSarah = now - sarahBirth;
console.log(ageCardy, ageSarah);

console.log(ageCardy * 2, ageCardy / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2 * 2 * 2

//concatonation
const firstName = "Cardy";
const lastName = "Moten";
console.log(firstName + " " + lastName);

//typeof is another operator used previously

//Assignment operator (=, +=, -=, *=, /=, ++, --)
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++;//x = x + 1
x--;
x--;
console.log(x);

//Comparison operators (<, <=, >, >=, ===)
console.log(ageCardy > ageSarah);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
*/

/*
//Strings and Template Literals

const firstName = "Cardy";
const job = "Soldier";
const birthYear = 1974;
const year = 2021;

const cardy = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(cardy);

//Template literal
const cardyNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(cardyNew);
console.log(`Just a regular string...`);

//Multi-line string
//Old method
console.log('String with \n\ multiple \n\ lines.');

//Better method
console.log(`Another string
with multiple
lines`);
*/

/*
//If/Else Statements
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start her driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/


/*
//Assignments


///// Start Assignment 1 /////
//1. Declare variables called 'country', 'continent' and
//'population' and assign their values according to your own
//country (population in millions)

//2. Log their values to the console

const country = "USA";
const continent = "North America";
let population = 333;

console.log(country);
console.log(continent);
console.log(population);

///// End Assignment 1 /////

///// Start Assignment 2 /////
//1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable'language', but don't assign it any value yet

let isIsland = false;
let language;

//2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

///// End Assignment 2 /////

///// Start Assignment 3 /////
//1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
language = "English";

//2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

//3. Try to change one of the changed variables now, and observe what happens

// country = "Germany";

///// End Assignment 3 /////

///// Start Assignment 4 /////
//1. If your country split in half, and each half would contain half the population,then how many people would live in each half?
let halfPopulation = population / 2;
console.log(halfPopulation);

//2. Increase the population of your country by 1 and log the result to the console
population++;
console.log(population);


//3. Finland has a population of 6 million. Does your country have more people than Finland?
let finlandPopulation = 6;
console.log(population > finlandPopulation);


//4. The average population of a country is 33 million people.Does your country have less people than the average country ?
const avgPopulation = 33;
console.log(population < avgPopulation);


//5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
let description = 'Portugal is in Europe, and its 11 million people speak portuguese'
console.log(description);

///// End Assignment 4 /////

///// Start Assignment 5 /////

//1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description);

///// End Assignment 5 /////

///// Start Assignment 6 /////

//1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
if (population > avgPopulation) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${avgPopulation - population} million below average.`)
}


//2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

population = 13;

if (population > avgPopulation) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${avgPopulation - population} million below average.`)
}

population = 130;

if (population > avgPopulation) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${avgPopulation - population} million below average.`)
}

population = 333;

///// End Assignment 6 /////
*/

/*
///// Start Coding Challene 1 /////
//Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

//Your tasks:
//1. Store Mark's and John's mass and height in variables
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

//2. Calculate both their BMIs using the formula (you can even implement both versions)
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;



//3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);

//Test data:
//Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
//Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


///// End Coding Challene 1 /////
*/

