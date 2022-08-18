// 1. convert radian to degree

function radianToDegree(radian) {
  if (typeof radian === "number") {
    let degree = radian * 57.2958;
    return degree.toFixed(2);
  } else {
    return "Please enter a valid number";
  }
}

// console.log(radianToDegree(10));

// 2. check js file

function isJavaScriptFile(File) {
  if (typeof File === "string" && File.endsWith(".js")) {
    return true;
  } else if (typeof File !== "string") {
    return "Enter correct file name";
  } else {
    return false;
  }
}

// console.log(isJavaScriptFile("image.js"));

// 3. calculate the total oil price that I have to pay

function oilPrice(diesel, petrol, octane) {
  const dieselPrice = 114;
  const petrolPrice = 130;
  const octanePrice = 135;
  if (
    typeof diesel === "number" &&
    typeof petrol === "number" &&
    typeof octane === "number"
  ) {
    return dieselPrice * diesel + petrolPrice * petrol + octanePrice * octane;
  } else {
    return "Enter correct price in all parameters";
  }
}

// console.log(oilPrice(30, 20, 10));

// 4. public bus fare

function publicBusFare(passenger) {
  if (typeof passenger === "number") {
    if (passenger < 50) {
      return (passenger % 11) * 250;
    } else {
      const maxBusPeople = passenger % 50;
      return (maxBusPeople % 11) * 250;
    }
  } else {
    return "Please enter number";
  }
}

// console.log(publicBusFare('121'));

// 5. Matching friend

let r = { name: "tom", friend: "rock" };
let j = { name: "rock", friend: "tom" };

function isBestFriend(name1, name2) {
  if (typeof name1 !== "object" || typeof name2 !== "object") {
    return "Your input may wrong ";
  } else if (name1.name === name2.friend && name2.name === name1.friend) {
    return true;
  } else {
    return false;
  }
}

console.log(isBestFriend(r, j));

