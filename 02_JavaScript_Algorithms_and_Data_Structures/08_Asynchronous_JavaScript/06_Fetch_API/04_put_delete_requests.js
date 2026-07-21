// ==============================================
// FETCH API - PUT AND DELETE REQUESTS
// ==============================================
//
// PUT    -> Update existing data
// DELETE -> Remove data
//
// Real example:
//
// User edits profile
//        |
//        |
// PUT /api/users/1
//
// User deletes account
//        |
//        |
// DELETE /api/users/1
//
// ==============================================

const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

// ==============================================
// 1. UPDATE DATA WITH PUT
// ==============================================

async function updatePost() {
  try {
    // Data we want to update

    const updatedPost = {
      id: 1,

      title: "Updated Title",

      body: "Learning PUT request",

      userId: 963,
    };

    // ======================================
    // Send PUT Request
    // ======================================

    const response = await fetch(API_URL, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(updatedPost),
    });

    // Check response

    if (!response.ok) {
      throw new Error(`Update failed: ${response.status}`);
    }

    // Convert response

    const data = await response.json();

    console.log("Updated Post:");

    console.log(data);
  } catch (error) {
    console.log("Update Error:");

    console.log(error.message);
  }
}

// ==============================================
// 2. DELETE DATA
// ==============================================

async function deletePost() {
  try {
    const response = await fetch(API_URL, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Delete failed: ${response.status}`);
    }

    console.log("Post deleted successfully");
  } catch (error) {
    console.log("Delete Error:");

    console.log(error.message);
  }
}

// ==============================================
// Execute
// ==============================================

updatePost();

// Uncomment when testing delete
// deletePost();
