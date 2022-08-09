let first = 33;
let second = 55;

console.log(first, second);

/* 
// approach: 1 (using temp: variable)
let temp = first;
console.log(first, second);

first = second;
second = temp;

console.log(first, second);

 */

// ============================

// approach: 2 (destructuring)
[first, second] = [second, first];
console.log(first, second);

