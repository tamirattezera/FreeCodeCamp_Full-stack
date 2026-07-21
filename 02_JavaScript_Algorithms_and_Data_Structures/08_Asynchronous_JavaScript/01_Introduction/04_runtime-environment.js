/*
=========================================
JAVASCRIPT RUNTIME ENVIRONMENT
=========================================

Learn:

1. JavaScript Engine
2. Browser Runtime
3. Node.js Runtime
4. Web APIs
5. Event Loop connection


=========================================
*/

// ========================================
// 1. JavaScript Engine
// ========================================

console.log("JavaScript Engine");

function greet() {
  console.log("Hello JavaScript");
}

greet();

// JavaScript engine executes code
// Example:
// Chrome  -> V8 Engine
// Node.js -> V8 Engine

// ========================================
// 2. Browser Runtime Example
// ========================================

console.log("\nBrowser Runtime");

/*

Browser provides extra features:

- setTimeout()
- DOM
- fetch()
- localStorage
- geolocation


JavaScript engine alone does not provide these.

*/

setTimeout(() => {
  console.log("Browser Timer API example");
}, 1000);

// ========================================
// 3. Node.js Runtime
// ========================================

console.log("\nNode.js Runtime");

/*

Node.js adds:

- File system
- HTTP server
- Database connections
- Operating system access


Example:

const fs = require("fs");


*/

console.log("Running JavaScript outside browser");

// ========================================
// 4. Simple Runtime Flow
// ========================================

console.log("\nRuntime Flow");

console.log("1. Call Stack");

setTimeout(() => {
  console.log("3. Event Loop sends callback");
}, 0);

console.log("2. Runtime waits");

/*

Flow:


JavaScript Code

      |
      v

JavaScript Engine

      |
      v

Call Stack

      |
      v

Runtime APIs

      |
      v

Event Loop

      |
      v

Callback executes



*/

console.log("\nDone");
