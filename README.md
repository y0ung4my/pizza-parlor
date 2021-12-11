Describe: Pizza()  

Test: "Should return a Pizza object with two properties for toppings and size"  
Code: const myPizza = new Pizza(["pepperoni", "pineapple", "jalapenos"], "medium")  
Expected Output: Pizza { topping: ["pepperoni", "pineapple", "jalapenos"] size: "medium" }  

Describe: Pizza.prototype.totalPrice();  

Test 1: "Should return a base price of 8 as a string"  
Code: 
const myPizza = new Pizza(["none"], "medium")
myPizza.totalPrice()
Expected Output: "8"



