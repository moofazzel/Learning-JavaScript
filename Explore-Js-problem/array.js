var friendsAge = [20, 15, 22, 40, 26];

var rony = friendsAge[2]; /* putting any array to a variable */


friendsAge[1] = 100; /* change array index 15 to 100 */

friendsAge[2] = 300;

var position = friendsAge.indexOf(100); /* checking any array index(position) */

console.log(friendsAge.length);
console.log(friendsAge);

friendsAge.push(34); /* Adding new element into array  */

// Appends new elements to the end of an array, and returns the new length of the array.
friendsAge.push(30);

friendsAge.pop(); /* Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.*/

console.log(friendsAge);

friendsAge.shift(); /* Removes the first element from an array and returns it */

console.log(friendsAge);

friendsAge.unshift(
  111
); /*Inserts new elements at the start of an array, and returns the new length of the array. */


// Slice

console.log(friendsAge);

var nameList = [
  "rony",
  "emon",
  "wazed",
  "masud",
  "salam",
  "manna",
  "kalam",
]; /* We can use string as a array*/
console.log(nameList);

var topper = nameList.slice(0, 2);
console.log(topper);

var second = nameList.slice(2, 3);
console.log(second);

var third = nameList.slice(-1, 8);
console.log(third);

var last = nameList.slice(2, -1);
console.log(last);

var unknown = nameList.slice(-2); /* Last two elements will be available */
console.log(unknown);

var unknownTwo = nameList.slice(); /** All elements will be available */
console.log(unknownTwo);

// Splice

var playerList = [
  "ony",
  "mon",
  "azed",
  "masu",
  "alam",
  "anna",
  "lam",
];

playerList.splice(7, "joli");

var addName = playerList.splice(3, 0, "joli"); /*add an element on especific position */


// var replaceName = playerList.splice(1, 1,);
var replaceName = playerList.splice(1, 1, "koli"); /**Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.*/

// first value is where you want to add new element and second value is how many elements remove form the first value starting form third value is inserted elements.

console.log(playerList);
// console.log(replaceName);
