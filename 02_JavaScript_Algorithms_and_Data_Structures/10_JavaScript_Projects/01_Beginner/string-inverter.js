// ================================================
// Build a String Inverter
// ================================================
// Goal:
// Create a function that reverses a given string.
//
// Example:
// "hello" → "olleh"
// "Howdy" → "ydwoH"
// ================================================

// Function Declaration
function reverseString(str) {
  return str
    .split("") // Convert string into an array of characters
    .reverse() // Reverse the array order
    .join(""); // Convert array back into a string
}

// ================================================
// Testing the function
// ================================================

console.log("Original: hello");
console.log("Reversed:", reverseString("hello"));

console.log("--------------------");

console.log("Original: Howdy");
console.log("Reversed:", reverseString("Howdy"));

console.log("--------------------");

console.log("Original: Greetings from Earth");
console.log("Reversed:", reverseString("Greetings from Earth"));

// ================================================
// Extra Practice Tests
// ================================================

console.log("--------------------");

console.log(reverseString("JavaScript"));

console.log(reverseString("Full Stack Developer"));

console.log(reverseString("AI Engineer"));
