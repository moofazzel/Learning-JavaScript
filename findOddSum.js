/* function getSumOfArray(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  return sum;
}

const myNumbers = [44, 55, 77, 45, 34, 243, 676, 234, 22, 44, 87, 65, 34, 21];

console.log(getSumOfArray(myNumbers));
 */


/* // Find odd number from an array 
const myNumbers = [44, 55, 77, 45, 34, 243, 676, 234, 22, 44, 87, 65, 34, 21];

function getOddNumber(num) {
  let oddNumber = [];
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element % 2 !== 0) {
      oddNumber.push(element);
    }
  }
  return oddNumber;
}

console.log(getOddNumber(myNumbers)); */


// Find even number from an array 

const myNumbers = [44, 55, 77, 45, 34, 243, 676, 234, 22, 44, 87, 65, 34, 21];

function getEvenNumber(num) {
  let evenNumber = [];
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element % 2 === 0) {
      evenNumber.push(element);
    }
  }
  return evenNumber;
}

console.log(getEvenNumber(myNumbers));
