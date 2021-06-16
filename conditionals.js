/* 
        ~Conditionals~
        JS Conditionals allow us to make decisions and carry out actions according to those decisions.
        - Traditional if else; else; else if statements.
        -Ternary operator
        -Switch statement
        Conditionals execute a piece of code if a condition is true by default.

*/

let myNumber;
//console.log(Boolean(myNumber));
//if (myNumber) {
   // console.log("There's something in myNumber variable.")
//}

/*
if (conditional) {
    fire off this block of code if above condition is true 
    }
*/

//If Else

/* if(myNumber) {
    console.log(`My Number is ${myNumber}`)
} else {
    console.log(`The condition appears to be false.`)
}*/

/* 
if (conditional) {
    fire off this block of code if above condition is true
   } else {
    Fire off this block of code if above condition is false.
}
*/

//Else if & Chaining multiple statements

/*let temp = 80;

if (temp > 100) {
    console.log("Global warming yo!")
} else if (temp > 80) {
    console.log("Nice summer day")
} else if (temp > 60) {
    console.log("Spring or Fall")
} else if (temp < 60) {
    console.log("What's next snow plows?!")
} else {
    console.log("Bruv you alright?! This is a weather app!")
}

let weekDay = "Thursday";

if (weekDay == "Wednesday") {
    console.log("Dentist appointment")
} else if (weekDay == "Thursday") {
    console.log("9am EFA Web Dev Session")
} else if (weekDay == "Friday") {
    console.log("Weekend!!!!!")
}*/

// Testing Multiple Conditions

/*let myName = "Danielle";
let age = 20;

if(myName == "Jessica" && age == 25 ) {
    console.log(`Jessica is telling the truth. Her age is ${age}`)
} else if (myName == "Danielle" && age >= 21) {
    console.log(`She's your instructor, but I don't know her age. I assume she's over 21 because she had wine last night.`)
} else {
    console.log(`I'm lonely please send help.`)
}*/

// Ternaries

/* 
    A conditional statement which takes three operands: a condition, followed by a questino mark ?
    -truthy expression followed by a color :
    - falsey expression
    Shortcut to the if statement
    condition ? true : false
*/

let lightSwitch = false;

// condition ? block of code if true : block of code if false

/*if (lightSwitch) {
    console.log("Lights are on.")
} else {
    console.log("Lights are off.")
}

lightSwitch ?  console.log("Lights are on.") : console.log("Lights are off.") */

//temp = 70;

/*(temp >= 100) ? console.log("Am I in flordia?") 
: (temp >= 80) ? console.log("Fine summer day.")
: (temp >= 60) ? console.log("Spring or Fall?")
: (temp >= 40) ? console.log("What's next? Snow Plows?!") : console.log("I asked for the temperature, not your life story.")*/

// Switch Statements

/* 
    Switches evaluate expressions matching their expression value to a case clause. Switch then executes that case statement unitl it is "broken"
*/

/*temp = 90;
let mySwitch = false;
switch(true) {
    case temp >= 100:
    case mySwitch: // allows you to nest multiple "if" switches together to check their condition
        console.log("Am I in Florida?")
        break;
    case temp >= 80:
        console.log("Fine Summer day!")
        break;
        
}

//console.log(new Date().toDateString())
//console.log(new Date().getDay())

switch(new Date().getDay()) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesy")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
} */

// Challenge ~ FizzBuzz

// Create a variable with any number between  0-100.
// For multiples of 3, print "Fizz"
// For multiples of 5, print "Buzz"
//For multiples of 3 and 5, print "Fizz Buzz"
//If it's not multiples of 3 and 5, print the number itself

let myNum = 3;

if (myNum % 3 === 0) {
 console.log("Fizz Buzz");
} else if (myNum % 5 === 0 ) {
    console.log("Fizz");
} else if (myNum % 15 === 0 ) {
    console.log("Buzz");
} else {
    console.log(myNum);
}