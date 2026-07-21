/*
=========================================
JAVASCRIPT PROMISE METHODS
=========================================

Learn:

1. Promise.all()
2. Promise.race()
3. Promise.allSettled()
4. Promise.any()

Run:

node 02_promise-methods.js

=========================================
*/

// ========================================
// Helper Function
// ========================================

function createTask(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} completed`);
    }, time);
  });
}

// ========================================
// 1. Promise.all()
// ========================================

console.log("\n--- Promise.all() ---");

Promise.all([
  createTask("Task 1", 1000),

  createTask("Task 2", 2000),

  createTask("Task 3", 1500),
])

  .then((results) => {
    console.log(results);
  });

/*

Promise.all waits for ALL promises.

If one fails:

Everything fails.

Example:

Task 1 ✅
Task 2 ❌
Task 3 ✅

Result:

Rejected

*/

// ========================================
// 2. Promise.race()
// ========================================

console.log("\n--- Promise.race() ---");

Promise.race([createTask("Fast Task", 500), createTask("Slow Task", 2000)])

  .then((result) => {
    console.log(result);
  });

/*

race returns
the FIRST completed promise.


Fast Task wins.

*/

// ========================================
// 3. Promise.allSettled()
// ========================================

console.log("\n--- Promise.allSettled() ---");

Promise.allSettled([
  Promise.resolve("Success"),

  Promise.reject("Failed"),

  Promise.resolve("Completed"),
])

  .then((results) => {
    console.log(results);
  });

/*

allSettled waits for everything.

It returns:

fulfilled
rejected


*/

// ========================================
// 4. Promise.any()
// ========================================

console.log("\n--- Promise.any() ---");

Promise.any([
  Promise.reject("Server 1 failed"),

  Promise.resolve("Server 2 success"),

  Promise.resolve("Server 3 success"),
])

  .then((result) => {
    console.log(result);
  });

/*

any returns:

First successful promise.


Useful for:

- Multiple API servers
- Backup requests

*/

// ========================================
// 5. Real World Example
// ========================================

console.log("\n--- API Example ---");

const usersAPI = createTask("Users API", 1000);

const postsAPI = createTask("Posts API", 1500);

Promise.all([usersAPI, postsAPI])

  .then((data) => {
    console.log("Dashboard loaded");

    console.log(data);
  });
