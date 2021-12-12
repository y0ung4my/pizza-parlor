//Business Logic

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

//UI Logic
function toppingsPopulation() {
  toppingsArray = [];
  $.each($("input[name='toppings']:checked"), function(){
    toppingsArray.push(($(this).val()));
  });
  return toppingsArray;
}

function toppingsList(newPizza) {
  if (newPizza.toppings.length === 0) {
    $("#final-toppings").html("none")
      } else {
  $("#final-toppings").html(newPizza.toppings.join(", "));
}
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
