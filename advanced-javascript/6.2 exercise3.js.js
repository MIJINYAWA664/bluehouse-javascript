// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = test;


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstName, lastName, age, eyeColor } = person;

// Object properties
const okObj = { a, b, c };


// Template strings
const message = `Hello ${firstName}, have I met you before? I think we met in ${city} last summer, no???`;


// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;


// Symbol
// Create a symbol: "This is my first Symbol"
const myFirstSymbol = Symbol("This is my first Symbol");


// Arrow functions
const whereAmI = (username, location) => 
    username && location ? "I am not lost" : "I am totally lost!";
  