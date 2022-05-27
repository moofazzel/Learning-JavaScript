//  We can convert any inch to feet

var inch = 555;
var feet = inch/12;
console.log(feet);

function inchToFeet(inch){
  var Feet = inch/12;
  return Feet;
}

var toFeet = inchToFeet(606);
console.log(toFeet + " Feet");