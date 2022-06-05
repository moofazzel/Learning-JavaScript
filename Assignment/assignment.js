// // feetToMile 

function feetToMile(feet) {
  var mile = feet / 5280;
  return (mile.toFixed(7) + ' mi')
}

console.log(feetToMile(1))

function mileToFeet(mile) {
  var feet = mile * 5280;
  return (feet + ' ft')
}

console.log(mileToFeet(1))


function woodCalculator(chair, table, bed) {
  var woodForChair = chair * 1;
  var woodForTable = table * 3;
  var woodForBed = bed * 5;
  var totalWood = woodForChair + woodForTable + woodForBed;
  return ("Total wood for Chair, Table & Wood " + totalWood);
}
// Input argument should be three (chair, table, bed) 
console.log(woodCalculator(5, 4, 2))

// Brick Calculator 
// Per fit building needs 1000 bricks 
// First 10 floor 15 fit Height 
// First 11-20 floor 12 fit Height 
// First 20 above floor 10 fit Height 

function brickCalculator(numberOfFloor) {
  var totalBrick = 0;
  if (numberOfFloor <= 10) {
    var Height = numberOfFloor * 15;
    var totalBrick = Height * 1000;
  } else if (numberOfFloor <= 20) {
    var floor10 = 150 * 1000;
    var remainFloor = numberOfFloor - 10;
    var Height = remainFloor * 12;
    var floor20 = Height * 1000;
    totalBrick = floor20 + floor10;
  } else {
    var floor10 = 150 * 1000;
    var floor20 = 120 * 1000;
    var remainFloor = numberOfFloor - 20;
    var Height = remainFloor * 10;
    var above20 = Height * 1000;
    totalBrick = above20 + floor10 + floor20;
  }
  return totalBrick;
}

//   return (totalBrickForTenFloor + " " + totalBrickFor11_20Floor);
// }

console.log(brickCalculator(22))


// // Tiny Friend

// // function tinyfriend(names)

// var names = ['ant', 'bison', 'camel', 'duck', 'bison'];

// // names.length=2
// console.log(names.length=2);
