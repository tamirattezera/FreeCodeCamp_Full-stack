// =========================================
// ASYNC/AWAIT ERROR HANDLING
// =========================================

// Simulate API request
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve({
          id: 1,
          name: "Tamirat",
        });
      } else {
        reject("Failed to fetch user");
      }
    }, 2000);
  });
}

// =========================================
// try / catch
// =========================================

async function loadUser() {
  try {
    console.log("Loading user...");

    const user = await fetchUser();

    console.log(user);
  } catch (error) {
    console.log("Something went wrong:");
    console.log(error);
  }
}

loadUser();

console.log("Application continues...");
