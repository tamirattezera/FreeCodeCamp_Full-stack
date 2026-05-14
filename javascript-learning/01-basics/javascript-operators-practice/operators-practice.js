// ======================================================
// JavaScript Operators Practice
// Author: Tame
// Purpose:
// Learn increment, decrement, assignment,
// comparison, and logical operators in JavaScript
// ======================================================

// ======================================================
// 1. PREFIX INCREMENT
// ++x -> Increment first, then use value
// ======================================================

let x = 9;

console.log(++x); // 10
console.log(x); // 10

// ======================================================
// 2. POSTFIX INCREMENT
// y++ -> Use current value first, then increment
// ======================================================

let y = 7;

console.log(y++); // 7
console.log(y); // 8

// ======================================================
// 3. PREFIX DECREMENT
// --score -> Decrease first, then use value
// ======================================================

let score1 = 95;

console.log(--score1); // 94
console.log(score1); // 94

// ======================================================
// 4. POSTFIX DECREMENT
// age-- -> Use value first, then decrease
// ======================================================

let age = 20;

console.log(age--); // 20
console.log(age); // 19

// ======================================================
// 5. PREFIX WITH ANOTHER VARIABLE
// ======================================================

let a1 = 15;
let b1 = ++a1;

console.log(b1); // 16
console.log(a1); // 16

// ======================================================
// 6. POSTFIX WITH ANOTHER VARIABLE
// ======================================================

let c1 = 12;
let d1 = c1++;

console.log(d1); // 12
console.log(c1); // 13

// ======================================================
// 7. ADDITION ASSIGNMENT
// ======================================================

let num = 5;

num += 2; // same as: num = num + 2

console.log(num); // 7

// ======================================================
// 8. SUBTRACTION ASSIGNMENT
// ======================================================

let score2 = 20;

score2 -= 7; // same as: score2 = score2 - 7

console.log(score2); // 13

// ======================================================
// 9. MULTIPLICATION ASSIGNMENT
// ======================================================

let points = 5;

points *= 3; // same as: points = points * 3

console.log(points); // 15

// ======================================================
// 10. DIVISION ASSIGNMENT
// ======================================================

let balance = 100;

balance /= 4; // same as: balance = balance / 4

console.log(balance); // 25

// ======================================================
// 11. IF ELSE STATEMENT
// ======================================================

let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
  console.log("You're old enough to drive");
} else {
  console.log("Sorry, you are not old enough to drive");
}

// ======================================================
// 12. EQUALITY OPERATORS
// ======================================================

// == compares value only
console.log(5 == "5"); // true

// === compares value AND datatype
console.log(5 === "5"); // false

// != checks if values are NOT equal
console.log(5 != "5"); // false

// !== checks value and datatype
console.log(5 !== "5"); // true

// ======================================================
// 13. GREATER THAN / LESS THAN
// ======================================================

let a2 = 5;
let b2 = 3;

console.log(a2 > b2); // true
console.log(b2 > a2); // false

// ======================================================
// 14. GREATER THAN OR EQUAL TO
// ======================================================

let a3 = 6;
let b3 = 9;
let c3 = 6;

console.log(a3 >= b3); // false
console.log(b3 >= a3); // true
console.log(a3 >= c3); // true

// ======================================================
// 15. LESS THAN
// ======================================================

let a4 = 6;
let b4 = 9;

console.log(a4 < b4); // true
console.log(b4 < a4); // false

// ======================================================
// 16. LESS THAN OR EQUAL TO
// ======================================================

let a5 = 6;
let b5 = 9;
let c5 = 6;

console.log(a5 <= b5); // true
console.log(b5 <= a5); // false
console.log(a5 <= c5); // true

// ======================================================
// 17. LOGICAL OPERATORS
// ======================================================

// AND (&&)
// true only if BOTH conditions are true

let hasLicense = true;
let hasCar = true;

console.log(hasLicense && hasCar); // true

// OR (||)
// true if ONE condition is true

let isWeekend = false;
let isHoliday = true;

console.log(isWeekend || isHoliday); // true

// NOT (!)
// reverses boolean value

let isLoggedIn = false;

console.log(!isLoggedIn); // true

// ======================================================
// 18. REAL WORLD PRACTICE EXAMPLES
// ======================================================

// Banking Example
let bankBalance = 1000;

bankBalance += 500; // deposit
bankBalance -= 200; // withdraw

console.log(bankBalance); // 1300

// Shopping Example
let itemPrice = 50;
let quantity = 4;

let total = itemPrice * quantity;

console.log(total); // 200

// Student Grade Example
let marks = 85;

if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 19. BONUS CHALLENGES

let counter = 1;
counter++;

console.log(counter);

let temperature = 30;
temperature -= 5;

console.log(temperature);

let money = 200;

if (money > 100) {
  console.log("You can buy the product");
} else {
  console.log("Not enough money");
}
