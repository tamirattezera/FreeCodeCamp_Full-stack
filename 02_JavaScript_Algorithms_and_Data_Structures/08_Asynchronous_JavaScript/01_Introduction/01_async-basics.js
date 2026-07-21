/*
=========================================
ASYNC JAVASCRIPT - INTRODUCTION
=========================================

Topics:
1. Synchronous JavaScript
2. Asynchronous JavaScript
3. Blocking vs Non-blocking
4. setTimeout()
5. Execution order

Run:


=========================================
*/

// ========================================
// 1. Synchronous JavaScript
// ========================================

console.log("1. Start");

console.log("2. Processing data");

console.log("3. Finish");

// Output:
// 1. Start
// 2. Processing data
// 3. Finish

// ========================================
// 2. Asynchronous JavaScript
// ========================================

console.log("\n--- Async Example ---");

console.log("A: Program started");

setTimeout(() => {
  console.log("B: Async operation completed");
}, 2000);

console.log("C: Program finished");

// Output:
// A: Program started
// C: Program finished
// B: Async operation completed

// ========================================
// 3. Understanding Callback
// ========================================

console.log("\n--- Callback Example ---");

function downloadFile(callback) {
  console.log("Downloading file...");

  setTimeout(() => {
    const file = {
      name: "javascript.pdf",
      size: "5MB",
    };

    callback(file);
  }, 1500);
}

downloadFile((file) => {
  console.log("Download completed");

  console.log(file);
});

// ========================================
// 4. Real-world simulation
// ========================================

console.log("\n--- User Authentication Example ---");

function loginUser(username, callback) {
  console.log(`Checking ${username}...`);

  setTimeout(() => {
    const user = {
      id: 1,
      username: username,
      role: "developer",
    };

    callback(user);
  }, 1000);
}

loginUser("Tamirat", (user) => {
  console.log("User authenticated");

  console.log(user);
});

// ========================================
// 5. Event Loop Demonstration
// ========================================

console.log("\n--- Event Loop Demo ---");

console.log("First");

setTimeout(() => {
  console.log("Second");
}, 0);

console.log("Third");

// Output:
//
// First
// Third
// Second
//
// Why?
// setTimeout goes to Web API
// callback waits in Task Queue
// Event Loop executes after main stack is empty
