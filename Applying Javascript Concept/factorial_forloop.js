// var factorial = 1;

// for (i = 1; i <= 8; i++) {
//   var factorial = factorial * i;
//   // console.log(factorial)
// }

// function Factorialfn(n) {
//   var factorial2 =1;
//   for (i = 1; i <= n; i++) {
//     var factorial2 = factorial2 * i;
//   }
//   return factorial2
// }

// var result = Factorialfn(8);
// console.log(result, factorial);


// factorial while loop 

// var factorial = 1;
// i=1;
// while(i<=5){
//   factorial=factorial*i;
//   i++
//   console.log(factorial)
// }

// function factorialWhileloop(n) {
//   var factorial = 1;
//   var i = 1;
//   while (i <= n) {
//     factorial = factorial * i;
//     i++
//   }
//   return factorial;
// }

// var result = factorialWhileloop(5);

// console.log(result)

function factorialRec(n){
  if(n==0){
    return 1;
  }else{
  return n * factorialRec(n-1);
  }
}

var result2 = factorialRec(5);

console.log(result2)