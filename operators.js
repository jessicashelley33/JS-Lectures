// Operators

/* 
Assignment, Arithmetic & Comparison
 - Assignment  operator = assigns value to a declaration
 - denoted by = 

 - Comparison operator - compare values
 - Addition +
 - subtraction -
 Division /
 - multiplication *
 - Exponent **
 - Modulus % 
 - Math. objects to help with other operations 
 -Equality and Strict Equality == & ===
 -Inequality and strict Inequality 
 Greater than or less than > <
 -Greater or equal than or less or equal than 
 AND && OR ||  

 

 - Comparison operators compare values

 - Equality performs type coercion on one of the values it's being compared to. For ex: 5 == "5" converts the string into an integer
 - Strict equality checks if the value and its type are the same
*/


console.log(5 != 7);
let age = 25;

console.log(2 + 5)

// Modulus - provides remainder of Euclidean

console.log(20 % 5);

//Math Object - allows access to more advanced mathematical computations

console.log(Math.max(5, 2, 17, 22, 97))

//Equality vs Strict Equality Operators

/*
        Equality & Strict Equality Operators
        - Return truthy or falsey value depending on a given condition
*/

console.log(5 == 5) // return
console.log(5 === 5) // returns true
console.log(5 == "5") // returns true because of type coercion
console.log(5 === "5") // returns false because we're checking for value & value type

let x = 5;
let y = "5";

console.log(typeof x, typeof y) // same value different data type

let todayDate = new Date
console.log(todayDate.getFullYear());
//How to get Date in JS
let date = new Date
let year = date.getFullYear()
let month = date.getMonth()
month += 1
let day = date.getDay()
console.log(`Today is ${day} day of ${month} of ${year}`);

console.log(date.toDateString());

// Null - there is a place but no value assigned 
// udefined - nothing is there

// Null vs Undefined vs Not a Number

/*
        Null - empty value; a container or space for something to fill it in the future.
        Undefined - default value of a declaration. Does not act as an empty container.
        Not a Number (NaN) - determins if a value is not a number

*/

console.log(isNaN(123)); // returns false (is a number)
console.log(isNaN(0/0)); // returns true (can't divide by zero; NaN)
console.log(isNaN(NaN)); // returns true
console.log(isNaN(Math.sqrt(-1))); // returns true because imaginary (i) number is NaN

console.log(date.toUTCString())

console.log(5 != 7); //not equal
console.log(5 !== 5); // returns false (both values are the same)
console.log(5 != "5"); // type corecison
console.log(5 !== "5"); //different data type

// AND  returns true if two values are the same
console.log(false || false);

// Is Not equal ! (not or opposite of what you are comparing)
//Flips resulting boolean
let flippedBool = !true
console.log(flippedBool)
/*



*/

