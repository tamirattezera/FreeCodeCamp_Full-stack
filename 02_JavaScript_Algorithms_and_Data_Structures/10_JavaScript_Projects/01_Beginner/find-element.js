// ==================================================
// Build a First Element Finder
// ==================================================
// Goal:
// Find the first element that passes a test function.
//
// Example:
//
// findElement(
//   [1,3,5,8],
//   num => num % 2 === 0
// )
//
// Output:
// 8
//
// ==================================================

// Function Declaration

function findElement(arr, func) {
  // Loop through the array

  for (let i = 0; i < arr.length; i++) {
    // Get current element

    let element = arr[i];

    // Run the test function

    if (func(element)) {
      // Return immediately
      // when first match is found

      return element;
    }
  }

  // If no element passes the test

  return undefined;
}

// ==================================================
// Testing
// ==================================================

// Test 1

console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
);

// Test 2

console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
);

// Test 3

console.log(
  findElement([1, 2, 3, 4], function (num) {
    return num > 2;
  }),
);

// Test 4

console.log(
  findElement(["hello", "world", "javascript"], function (str) {
    return str.length > 5;
  }),
);

// Test 5

console.log(
  findElement(["cat", "dog", "bird"], function (str) {
    return str.length > 10;
  }),
);

// Test 6

console.log(
  findElement([2, 4, 6, 8], function (num) {
    return num % 2 === 0;
  }),
);

// Test 7

console.log(
  findElement([], function (num) {
    return num > 0;
  }),
);
