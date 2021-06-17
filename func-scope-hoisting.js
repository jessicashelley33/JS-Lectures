// Functions

/* 
    Function is a block of code that can take in parameters (door), perform an action, and return the result of that action.
    There are two types of functions:
        -function declaratioin
        -function expression
         - arrow functions
    Functions have a default return statement of undefined unless otherwise specified.
*/

// Function Declaration
/* 
    Declarations are hoisted. This is their template.
    function functionName(parameter) {
        block of code to be run
        return statement(not needed)
    }
*/

function funDeclaration() {
    //console.log("This is a function declaration.");
    return "This is a function delcaration.";
}
// Function will not run until it is called.
// Parentheses immediately invoke the function.
//funDeclaration();

//console.log(funDeclaration())

//let result = funDeclaration();
//console.log(result);

// Functions can have 0 - infinite amount of parameters
// Parameters act as doors to let arguments inside of the function.
function greetUser(firstName) {
    return `Hello ${firstName}`;
}
let userName1 ="Kinsey"
let userName2 ="Marshall"
let userName3 = "Jessica"

console.log(greetUser(userName1));
console.log(greetUser(userName2));
console.log(greetUser(userName3));

// Function Expression
/* 
    Function expression utlizes a variable as a placeholder.
    Function expression is not hoisted.
    Anonymous function = another name for a Function Expression
*/

let myDog = function(name, breed) {
            console.log(`${name} is a ${breed}`)
}

console.log (myDog("Bentley", "Olde English Bulldog"));

// Arrow Function

/* 
    Introduced in ES6
    More concise way of writing functions
    Arrow functions are created using function expression ONLY
*/
// Concise body Function
// Can only have one parameter if it's not enclosed by ( )
// let( decalring variable) name of the variable = name of the arugment => whatever the function does
let greeting = (firstName, age) => console.log(`Hello ${firstName} ${age}`);

greeting("Paul", 25);

// Block body Arrow Function 

let sendEmail = (email, userName) => {
   return `Hello ${userName}:
    We have been trying to reach you about your car's extended warranty.

    Is this email, the correct email for you? ${email}

    Sincerely,

    Annoying People
    `
}

console.log(sendEmail('hi@mail.com, Jessica'));

// Immediately Invoked Function Exercution
/*
    Function declarations that have no name and are immediately invoked.
*/

(function() {
    console.log("Hey guys!")
})();

// Function return statements
// Must always return only one value

function returnFun(x, y) {
    // return 2, 5 returns 5 because return must only have one value
   return [x, y];
    
}
console.log(returnFun(2, 5));

// Challenge

// Create a function declaration named tipCalculator which takes the bill, sales tax, and the tip percentage and returns the tip amount.

/*function tipCalculator (bill, salesTax, tipPer) {
        let tipAmount = bill * Math.round(salesTax);
        let totalBill = bill + tipAmount;
        let totalTip = totalBill * Math.round(tipPer);
        let billTotal = totalTip + totalBill;
        return billTotal;
}

console.log(tipCalculator(100, 9, 20));

// Extra spicy challenge

/*
    Create a function of your choice (Declaratioin or Expression) name capitalizeName which takes one paramenter. It then capitalizes the first letter of the name and returns the full name you

*/

/*function userName (firstName) {
    let userNameChar = firstName.charAt(0);
    userNameChar = userNameChar.toUpperCase();
    let fullName = userNameChar + firstName.slice([1]);
    return fullName;
    }

console.log(userName('shelley')); */

/*function capName(fullName) {
    let lowerName = fullName.toLowerCase();
    let firstLetter = lowerName[0].toUpperCase();
    return firstLetter + lowerName.slice([1]);
}*/

// Challenge
// Create a function which reverses a string using recursion

/*function myFun(param1) {
    let myString = ["H","E","L","L","O"]
    return param1.reverse();
}

console.log(myFun("Hello"))*/

/*function revStr(str) {
    if (str === " ") {
        return " ";}
    else
        {return revStr(str.substr(1)) + str.charAt((0));}
}

revStr("Jessica");*/

