// ==============================================
// FETCH API - POST REQUEST
// ==============================================
//
// POST is used when we want to SEND data
// to a server.
//
// Example:
//
// React Form
//      |
//      |
//    fetch()
//      |
//      |
// Django REST API
//      |
//      |
// Database
//
// ==============================================

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// ==============================================
// Data we want to send
// ==============================================
//
// Normally this comes from:
// - Form input
// - User action
// - Application state
//

const newPost = {
  title: "Learning Fetch API",

  body: "I am practicing POST requests",

  userId: 963,
};

// ==============================================
// Async Function
// ==============================================

async function createPost() {
  try {
    // ======================================
    // Send POST Request
    // ======================================
    //
    // fetch(url, options)
    //
    // options contains:
    // - method
    // - headers
    // - body
    //

    const response = await fetch(API_URL, {
      // HTTP method
      method: "POST",

      // Tell server we are sending JSON
      headers: {
        "Content-Type": "application/json",
      },

      // Convert JavaScript object
      // into JSON string
      body: JSON.stringify(newPost),
    });

    // ======================================
    // Check Response
    // ======================================

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // ======================================
    // Convert Response JSON
    // ======================================

    const createdPost = await response.json();

    // ======================================
    // Display Result
    // ======================================

    console.log("Post Created Successfully:");

    console.log(createdPost);
  } catch (error) {
    console.log("Creating post failed:");

    console.log(error.message);
  }
}

// Run function

createPost();
