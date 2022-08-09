//
function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please enter a number";
  }
  return num1 + num2;
}

// console.log(add(22, 33));

let sum = 0;
for (let i = 0; i <= 3; i++) {
  sum = sum + i;
}

console.log(sum);


