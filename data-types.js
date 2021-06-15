// Data Types

/*
 - There are six primitive data types in JS
    -string
    -number
    -boolean
    -null
    -undefined
*/

// string

let myString = 'this is a string';
// Can use ' ', " ", ` ` to encompass your string 
console.log(myString);

// String Concatenation 

let san = "San";
let diego = "Diego";
console.log(san + " " + diego)
// concatenation method
let concat_full = san.concat(diego);

console.log(concat_full);

let longString = "This is a long string \nand I would like it on multiple lines"

console.log(longString);
//Strings can be accessed by their index, using [] notation
console.log(longString[3])

// Template literal or Template String
/* 
 - Utilizes back ticks ` ` to allow us to contain placeholders
 -- Syntax for it is ` string and a ${value}`

*/

let firstName = "Paul"
console.log(`Hello my name is not ${firstName}`);

//Numbers

let integer = 90;
console.log(integer);

let float = 5.6;

let rounded = 0.2 + 0.1;
console.log(rounded);

let strNumber = "125";
let strConvertedNumber = Number(strNumber);
console.log(typeof strConvertedNumber);

//literals 
// Hardcoded values

let literalString = "literal string";
//Can be created using constructors
let constrLiteralStr = String("constructor String")
console.log(constrLiteralStr)

// booleans

/*
 - True or False values
   - Booleans have six primitive falsey values.
   -0
   - empty string " "
   - false
   - Undefined
   - Null
   - NaN (Not a Number)
    - Any other values in JS is considered truthy
*/

let trueValue = true;
console.log(trueValue);
let falseValue = false;
console.log(falseValue);

let truthy = Boolean(5)
console.log(truthy)

let falsey = Boolean(0)
console.log(falsey)