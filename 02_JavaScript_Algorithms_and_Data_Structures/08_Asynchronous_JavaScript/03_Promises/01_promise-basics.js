/*
=========================================
JAVASCRIPT PROMISES - BASICS
=========================================

Learn:

1. What is a Promise?
2. Promise states
3. resolve()
4. reject()
5. then()
6. catch()

Run:

node 01_promise-basics.js

=========================================
*/

// ========================================
// 1. Creating a Promise
// ========================================

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation completed successfully");
  } else {
    reject("Something failed");
  }
});

// ========================================
// 2. Consuming Promise
// ========================================

myPromise

  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  });

// ========================================
// 3. Promise States
// ========================================

/*

A Promise has 3 states:


1. Pending

(waiting)


2. Fulfilled

(resolve)


3. Rejected

(reject)



Example:


new Promise((resolve,reject)=>{

    resolve();

});


Pending
   |
   v
Fulfilled


*/

// ========================================
// 4. Async Promise Example
// ========================================

console.log("\nAsync Promise Example");

function fetchUser() {
  return new Promise((resolve, reject) => {
    console.log("Loading user...");

    setTimeout(() => {
      const user = {
        id: 1,
        name: "Tamirat",
      };

      resolve(user);
    }, 1000);
  });
}

fetchUser()
  .then((user) => {
    console.log("User received");

    console.log(user);
  })

  .catch((error) => {
    console.log(error);
  });

// ========================================
// 5. Promise Failure Example
// ========================================

console.log("\nPromise Error Example");

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Access granted");
    } else {
      reject("Access denied");
    }
  });
}

checkAge(20)
  .then((message) => {
    console.log(message);
  })

  .catch((error) => {
    console.log(error);
  });
