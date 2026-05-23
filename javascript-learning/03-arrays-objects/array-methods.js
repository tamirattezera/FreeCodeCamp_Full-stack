// const fruits = ["apple", "banana"];

// const newLength = fruits.push("orange");

// const lastFruit = fruits.pop();

// console.log(newLength); // 3
// console.log(fruits); // ["apple", "banana"]
// console.log(lastFruit); // "orange"

let numbers = [2, 3];
let newLength = numbers.unshift(1);
console.log(numbers); // [1, 2, 3]
console.log(newLength);

// let colors = ["red", "green", "blue"];
// let firstColor = colors.shift();
// console.log(colors); // ["green", "blue"]
// console.log(firstColor); // "red"

// let arr = ["a", "b", "c", "d"];
// let first = arr.shift();
// let last = arr.pop();
// console.log(first, last, arr);

// let str = "hello";
// let charArray = str.split("");
// console.log(charArray);
// charArray.reverse();
// console.log(charArray);

let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString);

let str = "coding";
let reversed = str.split("").reverse().join("");
console.log(reversed);

let word = "hello";
let chars = word.split("");
chars.reverse();
console.log(chars.join("-"));

// let colors = ["red", "green", "blue", "yellow", "green"];
// let index = colors.indexOf("green", 2);
// console.log(index);

// Remove Elements from the Middle
// let fruits = ["apple", "banana", "orange", "mango"];

// fruits.splice(1, 2);

// console.log(fruits);

// Add Elements into the Middle
// let fruits = ["apple", "mango"];

// fruits.splice(1, 0, "banana", "orange");

// console.log(fruits);

// Replace Elements in the Middle
let fruits = ["apple", "banana", "orange", "mango"];

fruits.splice(1, 2, "grape", "kiwi");

console.log(fruits);

let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6, 7);
console.log(arr);

const colors = ["red", "blue", "green", "yellow"];
colors.splice(1, 2, "purple");
console.log(colors);
