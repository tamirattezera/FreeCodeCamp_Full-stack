function binarySearch(searchList, value) {
  // Stores every middle value visited during the search
  const pathToTarget = [];

  // Define the current search boundaries
  let low = 0;
  let high = searchList.length - 1;

  // Continue searching while a valid search range exists
  while (low <= high) {
    // Calculate the middle index
    const mid = Math.floor((low + high) / 2);

    // Get the value at the middle index
    const valueAtMiddle = searchList[mid];

    // Record the visited value
    pathToTarget.push(valueAtMiddle);

    // Target found
    if (value === valueAtMiddle) {
      return {
        found: true,
        index: mid,
        path: pathToTarget,
        message: `Value found at index ${mid}`,
      };
    }

    // Search the right half
    if (value > valueAtMiddle) {
      low = mid + 1;
    }
    // Search the left half
    else {
      high = mid - 1;
    }
  }

  // Target not found
  return {
    found: false,
    index: -1,
    path: pathToTarget,
    message: "Value not found",
  };
}

// Test Cases
console.log(binarySearch([1, 2, 3, 4, 5], 3));

console.log(binarySearch([1, 2, 3, 4, 5, 9], 4));

console.log(binarySearch([1, 3, 5, 9, 14, 22], 10));
