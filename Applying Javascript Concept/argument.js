function addNumbers(num1, num2) {
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    sum=sum+num;
  }
  return (sum);
}

console.log(addNumbers(2, 10, 33, 44, 34 ))