/*
=========================================
PROMISE CHAINING
=========================================

Learn:

1. Returning values from .then()
2. Multiple async operations
3. Chaining promises
4. Avoiding callback hell


=========================================
*/

// ========================================
// 1. Basic Promise Chain
// ========================================

console.log("--- Basic Chain ---");

Promise.resolve(5)

  .then((number) => {
    console.log("Step 1:", number);

    return number * 2;
  })

  .then((result) => {
    console.log("Step 2:", result);

    return result + 10;
  })

  .then((finalResult) => {
    console.log("Final:", finalResult);
  });

/*

Flow:


Promise

   |
   v

then()

   |
   v

return value

   |
   v

next then()


*/

// ========================================
// 2. Async Promise Chain Example
// ========================================

console.log("\n--- User Data Flow ---");

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Tamirat",
      });
    }, 1000);
  });
}

function getProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userId: userId,
        role: "Developer",
      });
    }, 1000);
  });
}

function getProjects(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Finance App", "AI Project"]);
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log("User:", user);

    return getProfile(user.id);
  })

  .then((profile) => {
    console.log("Profile:", profile);

    return getProjects(profile.userId);
  })

  .then((projects) => {
    console.log("Projects:", projects);
  })

  .catch((error) => {
    console.log("Error:", error);
  });

// ========================================
// 3. Callback Hell vs Promise Chain
// ========================================

/*

Callback style:


login(user, ()=>{

    getProfile(()=>{

        getProjects(()=>{

            getData(()=>{

            })

        })

    })

})


Promise style:


login()

.then(getProfile)

.then(getProjects)

.then(getData)

.catch(error)



Much easier to read.

*/

// ========================================
// 4. Error Propagation
// ========================================

console.log("\n--- Error Handling ---");

Promise.resolve()

  .then(() => {
    console.log("Starting");

    throw new Error("Something failed");
  })

  .then(() => {
    console.log("This will not run");
  })

  .catch((error) => {
    console.log(error.message);
  });
