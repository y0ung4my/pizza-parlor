Describe: Pizza()  

Test: "Should return a Pizza object with two properties for toppings and size"  
Code: const myPizza = new Pizza(["pepperoni", "pineapple", "jalapenos"], "medium")  
Expected Output: Pizza { topping: ["pepperoni", "pineapple", "jalapenos"] size: "medium" }  

Describe: Pizza.prototype.totalPrice();  

Test 1: "Should return a base price of 8 as a string"  
Code: 
const myPizza = new Pizza([], "medium");  
myPizza.totalPrice();  
Expected Output: "8"  

Test 2: "Should return 9 if the pizza has one topping"  
Code:  
const myPizza = new Pizza(["pepperoni"], "medium");  
myPizza.totalPrice(); 

Test 3: "Should return 10 if the pizza has two toppings"  
Code:  
const myPizza = new Pizza(["pepperoni", "pineapple"], "medium");  
myPizza.totalPrice(); 

