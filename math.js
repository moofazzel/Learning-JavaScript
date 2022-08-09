// math power like 8 to the power 3
const result = Math.pow(8, 3);
console.log(result);

const num = 34;
const num2 = 45;

// =====================================

// const gap = num - num2; //gap = -20

// Math.abs() returns absolute/positive value of a number ( value of -5 ans 5 are same)
const gap = Math.abs(num - num2); //gap = 20

if (gap < 5) {
  console.log("You guys can friends");
} else {
  console.log("You guys stay apart");
}

// ======================================

/* 
// math round
const number = 2.5445;
// const number = 2.3562;
const numRound = Math.round(number);
console.log(numRound);
*/

// ======================================
/* 
// math ceiling and floor
const number = 2.5445;
const number2 = 2.5445;

const numRound = Math.ceil(number);
console.log(numRound);

const numRound2 = Math.floor(number2);
console.log(numRound2);

 */

// ======================================

// math random
const random = Math.random() * 10;
console.log(Math.round(random));
