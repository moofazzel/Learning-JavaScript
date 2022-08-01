// // Practice problem 1
var Fruits = ["Apple", "Banana", "Orange"];

console.log(Fruits);

var position = Fruits.indexOf("Banana");
console.log(position);

Fruits[1] = "Mango";

console.log(Fruits);

Fruits.pop();

console.log(Fruits);

// Practice problem 2

var marks = 40;

if (marks >= 80) {
  console.log("Your Grade is " + "A");
} else if (marks >= 60) {
  console.log("Your Grade is " + "B");
} else if (marks >= 50) {
  console.log("Your Grade is " + "C");
} else if (marks >= 40) {
  console.log("Your Grade is " + "D");
} else {
  console.log("Your Grade is " + "F");
}

=== --------
// Practice Problem 3

var num1 = 993;
var num2 = 559;
var num3 = 995;

var largestNumber;

if (num1 > num2 && num1 > num3) {
  largestNumber = num1;
} else if (num2 > num3) {
  largestNumber = num2;
} else {
  largestNumber = num3;
}

console.log("larges tNumber is " + largestNumber);

// Practice Problem 4

var left = 7;
var right = 4;
var bottom = 4;

if (bottom === left && bottom != right) {
  console.log("Two side are EQUAL");
} else if (bottom === right && bottom != left) {
  console.log("Two side are EQUAL");
} else {
  console.log("Two side are NOT EQUAL");
}
