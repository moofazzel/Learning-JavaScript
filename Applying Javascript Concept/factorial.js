// Factorial js with forloop 
// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//   factorial = factorial * i;
//   console.log(factorial);
// }

// Factorial js with forloop function

function factorialfunction(n) {
  let factorial = 1;
  for (i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

let factorialResult = factorialfunction(10);

console.log(factorialResult)