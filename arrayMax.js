// Find the maximum number from array using loop
function maxInArray(numbers) {
  let largest = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

// Find the minium number from array using loop

function minInArray(numbers) {
  let lowest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}

const heights = [123, 143, 156, 187, 165, 10];

console.log("Largest number is ", maxInArray(heights));
console.log("Largest number is ", minInArray(heights));
