const shoppingCart = [
  { name: "shoe", price: 2200, quantity: 2 },
  { name: "shart", price: 1200, quantity: 4 },
  { name: "pant", price: 2700, quantity: 5 },
  { name: "belt", price: 800, quantity: 2 },
];

function totalCost(products) {
  let cost = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    cost = cost + product.price * product.quantity;
  }
  return cost;
}

console.log(totalCost(shoppingCart));
