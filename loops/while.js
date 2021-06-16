// While Loops

/* 
    While statement creates a loop so long as the condition we've specified returns true.

    while(condition) {
        code statement
    }

    To stop a while loop from executing, the condition must at one point return false

*/

/*let count = 0; // 1

while(count <= 100) {
    console.log(count)
    count++
}*/

// Challenge

// Fizz Buzz + Loops
// Create a loop which will iterate over numbers from 100 500.
//For Multiples of 3, print "Fizz"
// For Multiples of 5, print Buzz
// for multiples of 3 and 5, print "Fizz Buzz"

/*for(let i = 1; i <= 500; i++) {
    
let myNum;
if (i % 15 === 0) {
 console.log ("Fizz Buzz");
} else if (i % 3 === 0 ) {
    myNum = "Fizz";
} else if (i % 3 === 0 ) {
myNum = "Buzz";
} 
console.log(myNum);
}*/

for (let number = 100; number <= 500; number++) {
    let message;
  
    if (number % 15 === 0) {
      message = 'FizzBuzz';
    } else if (number % 3 === 0) {
      message = 'Fizz';
    } else if (number % 5 === 0) {
      message = 'Buzz';
    } else {
      message = number;
    }
  
    console.log(message);
  }

