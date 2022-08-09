/* 
// Reversed a sentence using loop 
function reverseString(text) {
  let revered = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    revered = revered + element;
  }
  return revered;
}

const myString = "I am a good boy";
console.log(reverseString(myString));
 */

// ======================================

// Reversed a sentence using loop

const myString = "I am a good boy";

function reverseString(text) {
  const splitText = text.split(" ");
  const reversed = splitText.reverse();
  const joinText = reversed.join(" ");
  return joinText;

  // can use together 
  // return text.split(" ").reverse().join(" ");
}

const result = reverseString(myString);
console.log("reverse by world:- ", result);

function reverseWorld(text) {
  let worldSplit = text.split(" ");
  const result = [];
  const joinResult = result.join("");
  console.log(joinResult);
  for (let i = worldSplit.length - 1; i >= 0; i--) {
    const element = worldSplit[i];
    result.push(element);
  }
  return result;
}

console.log("reversed world using for loop:- ", reverseWorld(myString));
