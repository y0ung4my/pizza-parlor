//Pizza Constructor
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  }

//totalPrice Prototype
Pizza.prototype.totalPrice = function() {
  let price = 8;
  return price.toString();
}

//Test Code for Pizza and totalPrice()
const myPizza = new Pizza(["none"], "medium");
myPizza.totalPrice()