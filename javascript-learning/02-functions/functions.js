// The name serves as the parameter while the strings Tame and Eden serve as the arguments.
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Tame");
console.log("Eden");

function add() {
  console.log(24 + 4);
}
add();

function laptopPriceCalculator(laptopName, price, discount) {
  let tax = (price * 6) / 100;
  let total = price - discount + tax;
  console.log(`${laptopName} Total price is $${total}`);
}
laptopPriceCalculator("HP", 1000, 58);

function adder(x, y) {
  var c;
  c = x + y;
  return c;
}

var added = adder(4, 5);
console.log(added);

function average(x, y) {
  let av;
  av = adder(x, y) / 2;
  return av;
}
let k = average(90, 75);
console.log(k);
