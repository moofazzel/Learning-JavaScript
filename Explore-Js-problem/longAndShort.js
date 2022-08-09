const friendsName = [
  "rohem",
  "korem",
  "sajid",
  "abul",
  "roy",
  "jobayer bin rased",
  "cinku",
];

function bestFriend(names) {
  let bigName = names[0];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (bigName.length < name.length) {
      bigName = name;
    }
  }
  return bigName;
}

console.log(bestFriend(friendsName));
