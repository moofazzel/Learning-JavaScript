// let inch = 59;
// let feet = inch/12;

// console.log(feet)

// function inchToFeet(inchs) {

//   var feets = parseInt(inchs / 12);
//   var inchsRemind = inchs % 12;
//   return (feets + ' ' + inchsRemind + "'");
// }

// console.log(inchToFeet(555));


// function convertInches(inches) {
//   let feetFromInches = Math.floor(inches / 12);//There are 12 inches in a foot
//   let inchesRemainder = inches % 12;

//   return (feetFromInches + "'-" + inchesRemainder + "\"");
//   // console.log(result);
// }
// var resultt = convertInches(59);
// console.log(resultt);

// function toFeetandInch(inches){
//   return (parseInt(inches/12) + ' ' + Math.round(inches%12,1)+"'")
// }

// console.log(toFeetandInch(69))


// function inchToFeetCon(inch) {
//   if (inch > 1) {
//     var feet = inch / 12;
//     var remainInch = inch % 12;
//     console.log (Math.floor(feet) + " Feet " + remainInch + " inch");

//   } else {
//     console.log(" Please put right number");
//   }

// }

// console.log(inchToFeetCon(59));









function inchToFeetCalculator( inc ) {
  var feet = Math.floor( inc /12);
    var remainInch = inc % 12;
    return (feet + " " + remainInch + '"');
  }

  console.log(inchToFeetCalculator(-59))