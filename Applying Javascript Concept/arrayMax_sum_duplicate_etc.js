// var marks = [44, 5, 66, 22, 54, 87, 5, 7, 624, 545, 6997, 6596, 1200];
// var max = marks[0];
// for (i = 0; i < marks.length; i++) {
//   var elements = marks[i];

//   if (elements > max) {
//     max = elements;

//   }
// }

// console.log(max);

// array sum 

// var numbers = [44, 5, 66, 22, 54, 87, 5, 7, 624, 545, 6997, 6596, 1200];
// var sum = 0;

// for (i = 0; i < numbers.length; i++) {
//   var element = numbers[i];
//   var sum = sum+element;
// }

// console.log(sum)

// var n = [44, 5, 66, 22, 54, 87, 5, 7, 624, 545, 6997, 6596, 1200];


// function arraySum(n) {
//   var sum = 0;

//   for (i = 0; i < n.length; i++) {
//     var element = n[i];
//     sum = sum + element;
//   }
//   return sum
// }

// var result = arraySum(n)
// console.log(result)


// var studentsMarks = [11, 22, 12, 13, 25, 54, 87, 5, 87, 1, 5, 8, 3, 52, 8, 220];
// var allStudentMarks = 0;

// for (i = 0; i < studentsMarks.length; i++) {
//   var element = studentsMarks[i];
//   allStudentMarks = allStudentMarks + element;
// }

// console.log(allStudentMarks):

// Array maximum 

// var numbers = [11, 22, 12, 13, 25, 54, 87, 5, 87, 1, 5, 822, 3, 52, 8, 220];
// var maximumNumbar = [0];

// for (i = 0; i < numbers.length; i++) {
//   var element = numbers[i];

//   if (element > maximumNumbar) {
//     maximumNumbar = element;
//   }
// }

// console.log(maximumNumbar); 



// Removed Duplicate from Array 

var rolls = [11, 12, 5, 44, 54, 11, 5, 5, 4, 5, 88, 5, 4];
var uniqueRolls = [];

for (i = 0; i < rolls.length; i++) {
  var element = rolls[i];
  var index = uniqueRolls.indexOf(element);
  if (index == -1) {
    uniqueRolls.push(element);
  }
}
console.log(uniqueRolls)


var names = ["rony", "roy", "jos", "josu", "rony", "roy"];

var uniqueName = [];


for (i = 0; i < names.length; i++) {
  var element = names[i];
  var index = uniqueName.indexOf(element);
  if (index == -1) {
    uniqueName.push(element);
  }
}

console.log("All Unique Names are",uniqueName)