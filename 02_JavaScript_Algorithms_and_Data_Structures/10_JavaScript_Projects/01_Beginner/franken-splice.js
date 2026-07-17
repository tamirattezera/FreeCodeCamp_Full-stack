// ==================================================
// Implement the Slice and Splice Algorithm
// ==================================================
// Goal:
// Copy elements from the first array into the second
// array at a specific index.
//
// IMPORTANT:
// Original arrays must NOT change.
//
// Example:
//
// frankenSplice([1,2,3], [4,5], 1)
//
// Result:
// [4,1,2,3,5]
//
// ==================================================

// Function Declaration

function frankenSplice(arr1, arr2, index) {
  // Create a copy of the second array
  // so we don't modify the original

  let newArray = arr2.slice();

  // Insert arr1 elements into newArray

  newArray.splice(index, 0, ...arr1);

  // Return the new array

  return newArray;
}

// ==================================================
// Testing
// ==================================================

console.log(frankenSplice([1, 2, 3], [4, 5], 1));

console.log(frankenSplice([1, 2], ["a", "b"], 1));

console.log(
  frankenSplice(
    ["claw", "tentacle"],
    ["head", "shoulders", "knees", "toes"],
    2,
  ),
);

console.log(frankenSplice([1, 2, 3, 4], [], 0));

// ==================================================
// Check Original Arrays
// ==================================================

const firstArray = [1, 2, 3];

const secondArray = [4, 5];

const result = frankenSplice(firstArray, secondArray, 1);

console.log("Result:", result);

console.log("Original first:", firstArray);

console.log("Original second:", secondArray);
