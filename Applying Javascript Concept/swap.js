// using 3 Variables 

var a = 5;
var b = 6;
console.log("before swap a = ", a, " b = ", b);

var temp = a;
a = b;
b = temp;
console.log("After swap a = ", a, " b = ", b);


// Using little math 

var x = 9;
var y = 88;
console.log("before swap x = ", x, " y = ", y);

x = x + y;
y = x - y;
x = x - y;
console.log("After swap x = ", x, " y = ", y);


var p = 9;
var q = 88;

console.log("before swap p = ", p, " q = ", q);

[p,q]= [q,p ]

console.log("After swap p = ", p, " q = ", q);


