// ==============================================
// FETCH API BASICS
// ==============================================
// Fetch is a built-in JavaScript API for making
// HTTP requests.
//
// It returns a Promise.
//
// Common HTTP methods:
// GET    -> Retrieve data
// POST   -> Send data
// PUT    -> Update data
// DELETE -> Remove data
// ==============================================

// ==============================================
// 1. Making a GET Request
// ==============================================
//
// We request data from an API endpoint.
//
// This example uses JSONPlaceholder,
// a fake API for practicing.
//
// fetch() immediately returns a Promise.
// It does NOT wait for the data.
//

fetch("https://jsonplaceholder.typicode.com/users")
  // ==========================================
  // 2. First Promise Resolution
  // ==========================================
  //
  // The first response is not the actual data.
  //
  // It contains:
  // - status code
  // - headers
  // - request information
  //
  // We need response.json()
  // to convert JSON into JavaScript object.
  //

  .then((response) => {
    console.log("Response received");

    return response.json();
  })

  // ==========================================
  // 3. Second Promise Resolution
  // ==========================================
  //
  // Now we have real JavaScript data.
  //

  .then((users) => {
    console.log("Users data:");

    console.log(users);
  })

  // ==========================================
  // 4. Error Handling
  // ==========================================
  //
  // This catches network errors.
  //

  .catch((error) => {
    console.log("Request failed:");

    console.log(error);
  });

console.log("Program continues...");
