// Getting Started with basic Javascript

// Any letter to uppercase

var promice = "this letter should be convert to uppercase";

var promice = promice.toUpperCase();
promice = promice.toUpperCase();

console.log(promice);

Any letter to Lowercase

var low = "ANY LETTER SHOULD BE LOWERCASE";
low = low.toLowerCase();

console.log(low);

var number = 22;
var number2 = "55.33";
number2 = parseInt(number2);
var total = number + number2;

console.log(total);

var number = 22;
var number2 = "55.33";
number2 = parseInt(number2);
number = "" + 22;
var total = number + number2;

console.log(total);

var num = .02;
var num2 = .55;
var total = num +num2;
total = total.toFixed(2);

console.log(total);

var num = 90;
var num2 = -555;
var total = num +num2;
var absulateNumbar = Math.abs(total);

console.log(absulateNumbar);

var num = 90;
var num2 = -555.42;
var total = num +num2;
var total = Math.abs(total);

// var total = Math.round(total);

// var total = Math.ceil(total);

var total = Math.floor(total);

console.log(total);

var noodlsePrice = 22;

if (noodlsePrice < 20) {
  console.log("You Can Buy This")
} 
else {
  console.log("Don't Buy")
}


var noodlsePrice = 22;
if (noodlsePrice == 20) {
  console.log("You Can Buy This");
} 
else {
  console.log("Don't Buy");
}


var hardWorking = yes;
var Millionheir = yes;


if (noodlsePrice != 20) {

  console.log("You Can Buy This");

} 
 
else {
  console.log("Don't Buy");
}