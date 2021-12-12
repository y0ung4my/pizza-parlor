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
// const myPizza = new Pizza(["pepperoni", "pineapple"], "medium");
// myPizza.totalPrice();

//UI Logic
function toppingsPopulation() {
  toppingsArray = [];
  $.each($("input[name='toppings']:checked"), function(){
    toppingsArray.push(($(this).val()));
  });
  return toppingsArray;
}

function toppingsList(newPizza) {
  newPizza.toppings.forEach(function(item) {
    $("ul#final-toppings").append("<li>" + item + "</li>");
  });
}

//jQuery
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const inputtedToppings = toppingsPopulation();
    const inputtedSize = $("input:radio[name=size]:checked").val();
    
    const myPizza = new Pizza(inputtedToppings, inputtedSize);
    $("button#add-pizza").click(function() {
      toppingsList(myPizza);
      $("#final-size").text(myPizza.size);
      $("#price").text(myPizza.totalPrice());
      $("#pizza-confirm").show();
    });
  });
});
