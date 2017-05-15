//business logic

// size and toppings objects key: value pairs may be easily discerned and edited
// var size = {
//   sm: 12,
//   md: 15,
//   lg: 18
// };


//Pizza constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.total = 0;
  this.perTopping = 0;
}

//method that adds price of size to total, returns total
Pizza.prototype.addSize = function() {
  if (this.size === "small") {
    this.total += 10;
  } else if (this.size === "medium") {
    this.total += 13;
  } else if (this.size === "large") {
    this.total += 16;
  }
  return this.total;
}

//method that adds price of topping chosen to total, returns total
Pizza.prototype.addToppings = function() {
  if (this.size === "small") {
    this.perTopping = 1;
  } else if (this.size === "medium") {
    this.perTopping = 2;
  } else if (this.size === "large") {
    this.perTopping = 3;
  }

  for (i = 0; i < this.toppings.length; i++) {
    this.total += this.perTopping;
  }
  return this.total;
}

//UI logic

$(function() {

  var newPizza;

  $("form#pie").change(function() {

    var size = $('input[name=size]:checked').val();
    var toppings = [];
    newPizza = new Pizza(size, toppings);
    $(":checkbox:checked").each(function(i) {
      toppings[i] = $(this).val();
    });
    newPizza.toppings = toppings;
    newPizza.addSize();
    newPizza.addToppings();

    $("#total").text(newPizza.total);
    $("#topping-price").text("$" + newPizza.perTopping + " each");
  });

  $("form#pie").submit(function(event) {
    event.preventDefault();

    var output = "";

    if(newPizza.toppings.length < 1) {
      output = "<p>Please add topping(s)</p>";
    } else if (typeof newPizza.size != 'undefined') {
      output = "<h3 class='order-head'>Your Order</h3>" + "<span class='order'>" + newPizza.size + " pie with " + newPizza.toppings.join(", ") + "</span>";
      $("button").hide();
    }

    $("#complete").html(output);
  });
});
