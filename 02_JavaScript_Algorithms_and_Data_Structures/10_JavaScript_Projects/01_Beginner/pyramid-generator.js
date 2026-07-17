// ==================================================
// Build a Pyramid Generator
// Modern JavaScript Version
// ==================================================
//
// Function:
// pyramid(pattern, rows, inverted)
//
// Arguments:
// pattern  -> character to repeat
// rows     -> number of pyramid rows
// inverted -> false = normal pyramid
//            true  = upside-down pyramid
//
// ==================================================

function pyramid(pattern, rows, inverted) {
  let result = "\n";

  // Normal pyramid
  if (!inverted) {
    for (let i = 0; i < rows; i++) {
      result += " ".repeat(rows - i - 1) + pattern.repeat(i * 2 + 1) + "\n";
    }
  }

  // Inverted pyramid
  else {
    for (let i = rows; i > 0; i--) {
      result += " ".repeat(rows - i) + pattern.repeat(i * 2 - 1) + "\n";
    }
  }

  return result;
}

// ==================================================
// Testing
// ==================================================

// Test 1: Normal pyramid

console.log("Test 1: Normal Pyramid");

console.log(pyramid("o", 4, false));

/*
Expected:

   o
  ooo
 ooooo
ooooooo

*/

// ==================================================

// Test 2: Inverted pyramid

console.log("Test 2: Inverted Pyramid");

console.log(pyramid("p", 5, true));

/*
Expected:

ppppppppp
 ppppppp
  ppppp
   ppp
    p

*/

// ==================================================

// Test 3: Different pattern

console.log("Test 3: Star Pyramid");

console.log(pyramid("*", 6, false));

// ==================================================

// Test 4: Small pyramid

console.log("Test 4: Small Pyramid");

console.log(pyramid("#", 3, false));

// ==================================================
// Automatic Assertions
// ==================================================

console.log("Running Tests...");

console.assert(
  pyramid("o", 4, false) === "\n   o\n  ooo\n ooooo\nooooooo\n",
  "Test failed: Normal pyramid",
);

console.assert(
  pyramid("p", 5, true) === "\nppppppppp\n ppppppp\n  ppppp\n   ppp\n    p\n",
  "Test failed: Inverted pyramid",
);

console.assert(
  typeof pyramid("*", 3, false) === "string",
  "Test failed: Return value should be string",
);

console.log("All tests passed ");
