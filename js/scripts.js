//Pizza Constructor
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  }

//totalPrice Prototype
Pizza.prototype.totalPrice = function() {
  let price = 8; 
  price = price + this.toppings.length;
  if (this.size === "large") {
    price = price + 3;
  }
  return price.toString();
}

//Test Code for Pizza and totalPrice()
const myPizza = new Pizza(["pepperoni", "pineapple"], "large");
myPizza.totalPrice();

