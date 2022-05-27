// var speech = "I am a very good person. I don't snore at night.";
// var count = 0;

// for (i = 0; i < speech.length; i++) {
//   var char = speech[i];
//   if (char == " " && speech[i-1] != " ") {
//     count++
//   }
// }

// console.log(count+1)


var words = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";

var wordCount = 0;

for (i = 0; i < words.length; i++) {
  var char = words[i];
  if (char == " " && words[i-1] != " ") {
    wordCount++
  }
}
wordCount++
console.log(wordCount)