// 1. ROUNDING NUMBERS

let price = 99.8;

console.log("Original Price:", price);
console.log("Rounded:", Math.round(price)); // nearest integer
console.log("Floor:", Math.floor(price)); // always down
console.log("Ceil:", Math.ceil(price)); // always up

// 2. MIN / MAX / AVERAGE

let a = 20;
let b = 30;
let c = 40;

let average = (a + b + c) / 3;

console.log("\nNumbers:", a, b, c);
console.log("Max Value:", Math.max(a, b, c));
console.log("Min Value:", Math.min(a, b, c));
console.log("Average:", average.toFixed(2)); // cleaner output

// 3. PERCENTAGE CALCULATION

let score = 45;
let total = 50;

let percentage = (score / total) * 100;

console.log("\nScore:", score, "/", total);
console.log("Percentage:", percentage.toFixed(2) + "%");

// 4. RANDOM NUMBERS
let randomNumber = Math.random();

console.log("\nRandom Decimal (0 - 1):", randomNumber);

// Random integer between 1 - 10
let dice = Math.floor(Math.random() * 10) + 1;

console.log("Random Integer (1-10):", dice);
