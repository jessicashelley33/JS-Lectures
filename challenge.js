let firstName = "Jessica";
let age = 30;
let cityState = "Noblesville, Indiana.";

console.log(`Hi, My name is ${firstName}. I am ${age} years old. I live in ${cityState}.`);

let result = `Hi, My name is ${firstName}. I am ${age} years old. I live in ${cityState}.`;

console.log(result.length);

let caps = result.toUpperCase();
console.log(caps);
console.log(cityState == 'Indianapolis');

if(cityState == "Indianapolis") {
    console.log(cityState);
} else {
    console.log(`I don't live in Indianapolis! I live in ${cityState}`);
}



