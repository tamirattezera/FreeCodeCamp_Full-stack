// =========================================
// ASYNC / AWAIT BASICS
// =========================================

// Simulate getting user data
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Tamirat",
        role: "Full-Stack Developer",
      });
    }, 2000);
  });
}

// async means this function always returns a Promise
async function displayUser() {
  console.log("Loading user...");

  const user = await getUser();

  console.log("User Loaded");
  console.log(user);
}

displayUser();

console.log("Program continues...");
