// ================================================
// Build the Largest Number Finder
// ================================================
// Goal:
// Find the largest number from each sub-array.
//
// Example:
//
// [
//   [4,5,1,3],
//   [13,27,18,26],
//   [32,35,37,39]
// ]
//
// Output:
// [5,27,39]
//
// ================================================

// Function Declaration

function largestOfAll(arr) {
  // Store the largest numbers
  let result = [];

  // Loop through each sub-array
  for (let i = 0; i < arr.length; i++) {
    // Get current sub-array
    let currentArray = arr[i];

    // Assume first number is largest
    let largestNumber = currentArray[0];

    // Compare every number inside sub-array
    for (let j = 1; j < currentArray.length; j++) {
      if (currentArray[j] > largestNumber) {
        largestNumber = currentArray[j];
      }
    }

    // Add largest number to result array
    result.push(largestNumber);
  }

  return result;
}

// ================================================
// Testing
// ================================================

console.log(
  largestOfAll([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ]),
);

console.log("--------------------");

console.log(
  largestOfAll([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ]),
);

console.log("--------------------");

console.log(
  largestOfAll([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ]),
);

console.log("--------------------");

console.log(
  largestOfAll([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ]),
);
