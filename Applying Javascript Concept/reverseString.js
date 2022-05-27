var revString = "Hello dear brother and sister";


function reverseString(str) {
  var rev = "";

  for (i = 0; i < str.length; i++) {
    var char = str[i];
    var rev = char + rev;
  }
  return rev
}

var reverseStringResult = reverseString(revString);

console.log(reverseStringResult)