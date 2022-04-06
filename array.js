var friendsAge = [20, 15, 22, 40, 26];

friendsAge[1] = 100; /* change array index 15 to 100 */

var rony = friendsAge[2]; /* putting any array to a variable */

friendsAge[2] = 300;

var position = friendsAge.indexOf(100); /* checking any array index(position) */

console.log(friendsAge.length); 
console.log(friendsAge); 

friendsAge.push(34); /* Adding new element into array  */

// Appends new elements to the end of an array, and returns the new length of the array.
friendsAge.push(30);

friendsAge.pop();   /* Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.*/

console.log(friendsAge);
