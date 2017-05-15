//business logic

// size and toppings objects key: value pairs may be easily discerned and edited
// var size = {
//   sm: 12,
//   md: 15,
//   lg: 18
// };

// var toppings = {
//   sauce: 1,
//   anch: 1,
//   tomato: 1,
//   basil: 1,
//   arti: 1,
//   olives: 2,
//   shrooms: 2,
//   mozza: 2,
//   sausage: 2,
//   prosc: 3,
//   morta: 3
// };

//Pizza constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.total = 0;
}

//method that adds price of size to total, returns total
Pizza.prototype.addSize = function() {
  if (this.size === "sm") {
    this.total += 12;
  } else if (this.size === "md") {
    this.total += 15;
  } else if (this.size === "lg") {
    this.total += 18;
  }
  return this.total;
}

// method to push chosen toppings into new pizza object
Pizza.prototype.pushTopping = function(topping) {
  this.toppings.push(topping);
}

//method that adds price of topping chosen to total, returns total
Pizza.prototype.addToppings = function() {
  for (i = 0; i < this.toppings.length; i++) {
  this.total += 2;
  }
  return this.total;
}

//UI logic

$(function() {
  $("form#pie").submit(function(event) {
    event.preventDefault();

    var size = $("select#size").val();
    var toppings = [];
    var newPizza = new Pizza(size, toppings);
    $(":checkbox:checked").each(function(i) {
      toppings[i] = $(this).val();
      newPizza.pushTopping(toppings);
    });
    newPizza.addSize();
    newPizza.addToppings();

    $("#total").text(newPizza.total);
  });
});
