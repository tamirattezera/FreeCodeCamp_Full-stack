// String Creation
// let name = "John"; // primitive string

// console.log(typeof name);

let city = "london";

console.log(typeof city);

let user = new String("Kaleab"); // Object String(avoid)

console.log(user);

let a = new String("John");
let b = new String("John");

console.log(a === b); // false:  Because objects compare memory locations.

// ===================================================
// CHARACTER METHODS
// ===================================================

// 1. charAt()
// Purpose: Returns character at a position.
// Sybthax: string.charAt(index)

let name = "John";

console.log(name.charAt(0));

console.log("JavaScript".charAt(4));

console.log("DOMManipulation".charAt(3));

const username = "Tame@963";

console.log(username.charAt(0));

// 2. at()    Modern alternative.
// Purpose:
// Access characters using positive or negative indexes.
// Synthax: string.at(index)

const word = "JavaScript";

console.log(word.at(0));

console.log(word.at(-1));

// 3. charCodeAt()
// Purpose:
// Returns UniCode value

console.log("A".charCodeAt(0));
console.log("G".charCodeAt(0));

// 4. codePointAt()
// Handles Unicode properly.

console.log("😊".codePointAt(0));

// ====================================================
// SEARCH METHODS
// ====================================================

// indexOf()

//Purpose:

// Find first occurrence.

// Syntax: string.indexOf(searchValue)

const text = "hello world";

console.log(text.indexOf("w"));

//  includes()
// Purpose:
// Check existence.

const email = "user@gmail.com";

console.log(email.includes("@"));

// startsWith()

console.log("https://openai.com".startsWith("https"));

// endsWith()
console.log("photo.jpg".endsWith(".jpg"));

// search()
console.log("hello123".search(/\d/));

// =========================================================
// SLICE & EXTRACTION
// =========================================================
