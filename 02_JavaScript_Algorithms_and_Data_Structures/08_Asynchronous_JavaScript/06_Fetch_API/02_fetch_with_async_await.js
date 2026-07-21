// ==============================================
// FETCH API WITH ASYNC / AWAIT
// ==============================================
//
// Modern JavaScript applications usually use
// async/await instead of long Promise chains.
//
// Flow:
//
// async function
//        |
//        |
//     await fetch()
//        |
//        |
//     await response.json()
//        |
//        |
//     use data
//
// ==============================================

// ==============================================
// API URL
// ==============================================
//
// This is a public fake REST API.
//
// In real projects this could be:
//
// Django:
// http://localhost:8000/api/users/
//
// Node:
// http://localhost:3000/api/users/
//

const API_URL = "https://jsonplaceholder.typicode.com/users";

// ==============================================
// Create Async Function
// ==============================================
//
// async means this function returns a Promise.
//
// await can only be used inside async functions.
//

async function getUsers() {
  try {
    // ======================================
    // Step 1:
    // Send HTTP Request
    // ======================================
    //
    // fetch() returns a Promise.
    //
    // await pauses this function until
    // the server responds.
    //

    const response = await fetch(API_URL);

    // ======================================
    // Step 2:
    // Check HTTP Status
    // ======================================
    //
    // Important:
    // fetch() only rejects on network errors.
    //
    // A 404 or 500 response does NOT
    // automatically throw an error.
    //

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // ======================================
    // Step 3:
    // Convert JSON to JavaScript Object
    // ======================================
    //
    // Response body starts as JSON text.
    //
    // response.json() also returns Promise.
    //

    const users = await response.json();

    // ======================================
    // Step 4:
    // Use Data
    // ======================================

    console.log("Users Loaded:");

    console.log(users);

    // Example:
    // Access first user

    console.log("First User:", users[0].name);
  } catch (error) {
    // ======================================
    // Error Handling
    // ======================================

    console.log("Failed to load users:");

    console.log(error.message);
  }
}

// ==============================================
// Execute Function
// ==============================================

getUsers();

// This runs immediately.
//
// Because await only pauses getUsers(),
// not the entire JavaScript program.
//

console.log("Application is running...");
