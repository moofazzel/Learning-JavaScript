// write a function thats return only positive number from a array

// when array element reach to any negative number then oonly print before elements of the negative number

const number = [45, 56, 47, 76, -86, 75, 46, 345, 76, 450, 500];

function onlyPositive(num) {
  let positiveNumber = [];
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element < 0) {
      break;
    } else {
      positiveNumber.push(element);
    }
  }
  return positiveNumber;
}

console.log(onlyPositive(number));
