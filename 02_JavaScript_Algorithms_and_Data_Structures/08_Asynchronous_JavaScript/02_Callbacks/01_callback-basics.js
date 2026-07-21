/*
=========================================
JAVASCRIPT CALLBACKS
=========================================

Learn:

1. What is a callback?
2. Function passed as argument
3. Synchronous callback
4. Asynchronous callback

=========================================
*/

// ========================================
// 1. Function as a value
// ========================================

function sayHello() {
  console.log("Hello Tamirat");
}

function executeFunction(callback) {
  callback();
}

executeFunction(sayHello);

/*
Output:

Hello Tamirat


A callback is:

A function passed into another function.
*/

// ========================================
// 2. Callback with data
// ========================================

function calculate(number, callback) {
  const result = number * 2;

  callback(result);
}

calculate(10, function (result) {
  console.log(result);
});

// Output:
// 20

// ========================================
// 3. Asynchronous Callback
// ========================================

console.log("\nAsync Callback");

function fetchData(callback) {
  console.log("Getting data...");

  setTimeout(() => {
    const data = {
      id: 1,
      name: "JavaScript",
    };

    callback(data);
  }, 1000);
}

fetchData(function (data) {
  console.log("Data received");

  console.log(data);
});

// ========================================
// 4. Real-world Example
// ========================================

console.log("\nUser Login Example");

function login(username, callback) {
  console.log("Checking user...");

  setTimeout(() => {
    const user = {
      username: username,
      status: "active",
    };

    callback(user);
  }, 1000);
}

login("Tamirat", function (user) {
  console.log("Login successful");

  console.log(user);
});

// ========================================
// 5. Callback Problem Preview
// ========================================

/*

Multiple async operations become difficult:


login(user, ()=>{

    getProfile(()=>{

        getPosts(()=>{

            getComments(()=>{

            })

        })

    })

})


This is called:

Callback Hell


Solution:

Promises
Async/Await


*/
