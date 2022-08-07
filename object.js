/* 

var student = { id: 16, phone: 938688488, name: "rony" };
var student2 = { id: 33, phone: 488, name: "imran" };

// console.log(student, student2);
 
var studentPhone = student.phone;
var studentPhone1 = student2["phone"];
var studentPhone1 = student2["phone"];

// When you know the specific property name, use dot notation to get the property value
var phoneNumber = student.phone;
console.log(phoneNumber); // student.phone = 645456456465;


var phoneNumber2 = student['id'];
console.log(phoneNumber); // student['id'] = 645456456465;

// Update element
student2["phone"] = 44411122;

// Add element
student2["new bike"] = "GSXR";

console.log(studentPhone);
console.log(student2);

 */

var shoppingCart = {
  books: 3,
  sunglass: 1,
  pen: 5,
  headphone: 2,
};

console.log(shoppingCart[headphone]);

// access all properties of a object
var properties = Object.keys(shoppingCart);
console.log(properties);

// access all properties of a object
var propertyValue = Object.values(shoppingCart);
console.log(propertyValue);

// set property value
shoppingCart.pen = 20;
console.log(shoppingCart);

shoppingCart["headphone"] = 5;
console.log(shoppingCart);

