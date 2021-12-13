# Pizza Parlor

#### By _Amy Young_

#### _"Build a pizza and calculate price"_

## Technologies Used

* _HTML_
* _JavaScript_
* _jQuery_
* _Bootstrap_

## Description

_When the user selects toppings, pizza size, and submits the form on the left, the pizza selection and price are shown in the output field to the right. This site uses Object-Oriented JavaScript to save the user's inputs to a Pizza object, then calculates price using the prototype Pizza.prototype.totalPrice()._

## Setup/Installation Requirements

_Use as a template for further development_
1) open terminal
2) enter the following into terminal:  
 `# git clone https://github.com/y0ung4my/pizza-parlor`
3) to view the webpage as you make changes, you can open the index.html file in a web browser and refresh the page once the changes are saved.

_To view in GitHub Pages (requires internet connection)_
https://y0ung4my.github.io/pizza-parlor/

## Known Bugs

* There is no shopping cart. "Add to cart" simply hides the order forcing the user to start a new pizza

## License

MIT License

Copyright (c) 2021 Amy Young

Questions or comments: youngamy1223@gmail.com

## Specifications (Test-Driven Development for scripts.js):  


**Describe:** Pizza()  

**Test:** "Should return a Pizza object with two properties for toppings and size"  
**Code:** const myPizza = new Pizza(["pepperoni", "pineapple", "jalapenos"], "medium")  
**Expected Output:** Pizza { topping: ["pepperoni", "pineapple", "jalapenos"] size: "medium" }   

**Describe:** Pizza.prototype.totalPrice();  

**Test 1:** "Should return a base price of 8 as a string"  
**Code:**  
const myPizza = new Pizza([], "medium");  
myPizza.totalPrice();  
**Expected Output:** "8"  

**Test 2:** "Should return 9 if the pizza has one topping"  
**Code:**  
const myPizza = new Pizza(["pepperoni"], "medium");  
myPizza.totalPrice(); 
**Expected Output:** "9"  

**Test 3:** "Should return 10 if the pizza has two toppings"  
**Code:**  
const myPizza = new Pizza(["pepperoni", "pineapple"], "medium");  
myPizza.totalPrice(); 
**Expected Output:** "10"  

**Test 4:** "Should return 13 if the pizza has two toppings and is large"  
**Code:**  
const myPizza = newPizza(["pepperoni", "pineapple"], "large");  
myPizza.totalPrice();  
**Expected Output:** "13"  

**Test 5:** "Should return 10 if the pizza has two toppings and is medium"  
**Code:**  
const myPizza = newPizza(["pepperoni", "pineapple"], "medium");  
myPizza.totalPrice();  
**Expected Output:** "10"  