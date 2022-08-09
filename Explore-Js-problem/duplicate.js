const names = [
  "abul",
  "abul",
  "babul",
  "dabul",
  "ebul",
  "abul",
  "babul",
  "babul",
  "kabul",
  "babul",
  "abul",
];

/* function removeDuplicate(names) {
  let uniqueNames = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (uniqueNames.includes(name) === false) {
      uniqueNames.push(name);
    }
  }
  return uniqueNames;
} */

function removeDuplicate(names) {
  let uniqueNames = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (uniqueNames.indexOf(name) === -1) {
      uniqueNames.push(name);
    }
  }
  return uniqueNames;
}

console.log(removeDuplicate(names));