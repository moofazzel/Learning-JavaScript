// animal counter 

// distance upto 10 mile = per mile animal count is 50
// distance upto 20 mile = per mile animal count is 100
// distance upto infinite mile = per mile animal count is 300

function animalCounter(Distance) {
  var animal = 0;
  if (Distance <= 10) {
    animal = Distance * 50;

  } else if (Distance <= 20) {
    var first10 = 10 * 50;
    var remainDistance = Distance - 10;
    var second20 = remainDistance * 100;
    animal = first10 + second20;
  } else {
    var first10 = 10 * 50;
    var second20 = 20 * 100;
    var remainDistance = Distance - 20;
    var third = remainDistance * 300;
    animal = first10 + second20 + third;
  }
  return animal;

}

console.log(animalCounter(11))