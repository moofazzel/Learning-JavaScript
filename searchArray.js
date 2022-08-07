/*
let lyrics =
  "Tomi bondu kla Pakhi ami jeno ki. Bosonto kale tomai bolte pari ni. kala kala sada sada";


const search = "Sada";
 const lyricsLowerCase = lyrics.toLowerCase();
const searchLowerCase = search.toLowerCase();
const doesExit= lyricsLowerCase.includes(searchLowerCase) 

const searchString = "Tomai";
const searchOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

console.log(searchOneLine);


console.log(lyrics.indexOf("ki2"));

const searchByIndex = "jeno";

if (lyrics.indexOf(searchByIndex) !== -1) {
  console.log("Exists inside the string");
} else {
  console.log("Cannot found");
}
*/

let lyrics =
  "Tomi bondu kla Pakhi ami jeno ki. Bosonto kale tomai bolte pari ni. kala kala sada sada";

// Start With
console.log(lyrics.startsWith("Tomi"));

// Ends With
console.log(lyrics.endsWith("sada"));

const fileName = "rony.pdf";
const othersFileName = "picture.png";

console.log(othersFileName.endsWith(".png"));
console.log(othersFileName.endsWith(".jpg"));

