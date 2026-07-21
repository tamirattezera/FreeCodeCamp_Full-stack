/*
=========================================
ASYNC JAVASCRIPT - CALL STACK
=========================================

Topics:
1. What is Call Stack?
2. Function execution order
3. Stack LIFO behavior
4. Nested function calls
5. Stack trace

=========================================
*/

// ========================================
// 1. Basic Call Stack Example
// ========================================

function firstFunction() {
  console.log("First function");
}

function secondFunction() {
  console.log("Second function");
}

console.log("Program Start");

firstFunction();

secondFunction();

console.log("Program End");

/*

Execution:

Call Stack

1. global()
2. firstFunction()
3. remove firstFunction()
4. secondFunction()
5. remove secondFunction()
6. global finished


Output:

Program Start
First function
Second function
Program End

*/

// ========================================
// 2. Nested Function Calls
// ========================================

console.log("\n--- Nested Calls ---");

function multiply(a, b) {
  return a * b;
}

function calculate() {
  const result = multiply(5, 10);

  console.log(result);
}

calculate();

/*

Stack:

Global
 |
 calculate()
 |
 multiply()


multiply finishes
 |
 calculate finishes
 |
 Global continues


*/

// ========================================
// 3. LIFO Principle
// ========================================

console.log("\n--- Stack LIFO ---");

function third() {
  console.log("Third");
}

function second() {
  third();

  console.log("Second");
}

function first() {
  second();

  console.log("First");
}

first();

/*

Call Stack:

Step 1:

first()
 |
 second()
 |
 third()


third executes first


Output:

Third
Second
First


Because Stack follows:

Last In First Out (LIFO)

*/

// ========================================
// 4. Stack With Error Trace
// ========================================

console.log("\n--- Error Stack Example ---");

function levelOne() {
  levelTwo();
}

function levelTwo() {
  levelThree();
}

function levelThree() {
  throw new Error("Something went wrong");
}

// Uncomment to see stack trace

// levelOne();

/*

Error output shows:

levelThree()
levelTwo()
levelOne()


The stack remembers
where functions came from.


*/

// ========================================
// 5. Call Stack + Async Preview
// ========================================

console.log("\n--- Async Preview ---");

console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

console.log("End");

/*

Important:

setTimeout DOES NOT enter Call Stack immediately.

Flow:

1. console.log("Start")
2. setTimeout registered
3. console.log("End")
4. Call Stack empty
5. Event Loop moves callback
6. Timer callback executes


Output:

Start
End
Timer callback


*/
