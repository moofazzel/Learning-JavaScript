function SayLoveYou() {
  console.log('Whenever I Want')
  console.log('I can call')
}

SayLoveYou();

// function TripleIt(num) {
//   var result = num * 3;
//   console.log('Triple your money = ' + result);
// }

// TripleIt(3);


function doubleIt(num) {
  var result = num * 2;
  return result;
  // console.log('Triple your money = ' + result);
}

var firstResult = doubleIt(10);
var secondResult = doubleIt(100);
var thirdResult = doubleIt(1000);
console.log(firstResult, secondResult, thirdResult);

var total = firstResult + secondResult + thirdResult;
console.log(total);

// we can add Multiple parameter    
function add(num, num2){
  var result = num + num2;
  return result;
}

var sum = add(11, 33);
console.log(sum);