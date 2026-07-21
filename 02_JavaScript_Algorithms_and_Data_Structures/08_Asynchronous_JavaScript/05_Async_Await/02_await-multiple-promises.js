// =========================================
// AWAIT MULTIPLE PROMISES
// =========================================

// Fake API request
function fetchData(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} data loaded`);
    }, delay);
  });
}

// =========================================
// 1. Sequential execution
// =========================================

async function sequentialLoading() {
  console.log("Sequential Start");

  const users = await fetchData("Users", 2000);

  const products = await fetchData("Products", 2000);

  console.log(users);
  console.log(products);

  console.log("Sequential Finished");
}

sequentialLoading();

// =========================================
// Parallel execution
// =========================================

async function parallelLoading() {
  console.log("Parallel Start");

  const [users, products] = await Promise.all([
    fetchData("Users", 2000),
    fetchData("Products", 2000),
  ]);

  console.log(users);
  console.log(products);

  console.log("Parallel Finished");
}

parallelLoading();
