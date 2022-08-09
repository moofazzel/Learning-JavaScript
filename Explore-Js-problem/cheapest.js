const phones = [
  {
    name: "Samsung",
    camera: 12,
    Storage: "32gb",
    price: 36000,
    color: "sliver",
  },
  {
    name: "Walton",
    camera: 10,
    Storage: "32gb",
    price: 22000,
    color: "sliver",
  },
  {
    name: "Iphone",
    camera: 10,
    Storage: "32gb",
    price: 82000,
    color: "sliver",
  },
  { name: "Oppo", camera: 10, Storage: "32gb", price: 20000, color: "sliver" },
  { name: "Nokia", camera: 10, Storage: "32gb", price: 44000, color: "sliver" },
  { name: "HTC", camera: 10, Storage: "32gb", price: 62000, color: "sliver" },
];

function cheapestPhone(phone) {
  let cheapPhone = phone[0];
  for (let i = 0; i < phone.length; i++) {
    const index = phone[i];
    if (index.price < cheapPhone.price) {
      cheapPhone = index;
    }
  }
  return cheapPhone;
}

// const mySelection = cheapestPhone(phone)

console.log(cheapestPhone(phones));
