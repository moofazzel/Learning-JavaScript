var shoppingCart = {
  books: 3,
  sunglass: 1,
  pen: 5,
  headphone: 2,
  keyboard: 5,
  mouse: 2,
  shoes: 2,
};

const keys = Object.keys(shoppingCart);
console.log(keys);

const Value = Object.values(shoppingCart);
console.log(Value);

for (let i = 0; i < keys.length; i++) {
  const propertyName = keys[i];
  var propertyValue = shoppingCart[propertyName];
  console.log(propertyName, propertyValue);
}

var shoppingItems = ["books"];

// for in loop

for (var propertyName in shoppingCart) {
  const value = shoppingCart[propertyName];
  console.log(propertyName, value);
}
