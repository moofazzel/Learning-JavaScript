/* Question
Let's say you have x amount of money. if you have more than 80,000 then you will buy a macbook 
id more then 60,000 then you will buy a gaming laptop
if you have more then 40,000 then you wil buy an used laptop 
otherwise, you will use your mobile phone
*/

var money = 41000;

if(money>80000){
  console.log("Buy a MacBook")
}
else if(money>60000){
  console.log("Buy a Gaming Laptop")
}
else if(money>40000 ){
  console.log("Buy a Lenovo Yoga Laptop")
}
else if(money>20000 ){
  console.log("Buy a Used Laptop")
}else{
  console.log("Used Mobile Phone")
}