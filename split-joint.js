/* let lyrics =
  "Tomi bondu kla Pakhi ami jeno ki. Bosonto kale tomai bolte pari ni. kala kala sada sada";

const part = lyrics.split(" ");
console.log(part);
const sentences = lyrics.split(".");
console.log(sentences);
const chars = lyrics.split("");
console.log(chars);
 */

const lines = [
  "Tomi bondu kla Pakhi ami jeno ki",
  " Bosonto kale tomai bolte pari ni",
  " kala kala sada sada",
];

const newSong = lines.join(" . ");

console.log(newSong);
