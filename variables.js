// Variables

/*
 - Primitive data type which can hold any type of value (object)
 - Begin with a declaration and can have values assigned, but not neccessary.

 - storing a space in memeory

 - Declarations are case sensitive. Student is not the same as student.

 -Preferrable variable naming convention is camelCase.
 - Variables may not begin with a number.



*/

let student; // Variable Declaration - function scope
//New Keyword introduced with ES6
console.log(student);

student = 'Jessica'

let homework = "Never" // Var declaration of homework with str value of "never"

var teacher; // var is function scope
// old keyword. causes lots of headaches with scope and hoisting

const classroom = "Web Dev"; // Variable Declaration
// Declares a variable that may not be reassigned
// Cannot be declared with undefined. Must have value attached.
console.log(classroom);

//Numbers

let myNum = 5;
let myFavNum = Number("5.0")
console.log(myFavNum);

