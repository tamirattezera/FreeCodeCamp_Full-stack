/*
=========================================
ASYNC JAVASCRIPT - EVENT LOOP
=========================================

Topics:

1. JavaScript Runtime Model
2. Call Stack
3. Web APIs
4. Callback Queue
5. Event Loop
6. Microtasks vs Macrotasks preview

=========================================
*/

// ========================================
// 1. Basic Event Loop Example
// ========================================

console.log("1. Start");

setTimeout(() => {
  console.log("2. Timer Callback");
}, 0);

console.log("3. End");

/*

Execution:

Call Stack:

console.log(Start)
        |
        v
setTimeout()
        |
        v
console.log(End)


Timer callback waits.


Output:

1. Start
3. End
2. Timer Callback


*/

// ========================================
// 2. Runtime Components
// ========================================

console.log("\n--- Runtime Model ---");

console.log("Call Stack");

setTimeout(() => {
  console.log("Callback Queue");
}, 1000);

console.log("Continue execution");

/*

Browser/Node Runtime:

             JavaScript Engine

                 |
                 |
            Call Stack
                 |
                 |
        -------------------
        |                 |
     Web APIs        Callback Queue
                          |
                          |
                     Event Loop
                          |
                          |
                    Call Stack


*/

// ========================================
// 3. Multiple Timers
// ========================================

console.log("\n--- Multiple Timers ---");

setTimeout(() => {
  console.log("Timer 1");
}, 3000);

setTimeout(() => {
  console.log("Timer 2");
}, 1000);

setTimeout(() => {
  console.log("Timer 3");
}, 2000);

console.log("Main Code Finished");

/*

Important:

Timer delay is NOT execution time.

It means:

"Do not run before this time"

The callback runs only when:

1. Timer completed
2. Call Stack empty
3. Event Loop moves it


*/

// ========================================
// 4. Blocking the Call Stack
// ========================================

console.log("\n--- Blocking Example ---");

function heavyTask() {
  console.log("Heavy task started");

  const start = Date.now();

  while (Date.now() - start < 3000) {
    // blocking CPU work
  }

  console.log("Heavy task finished");
}

heavyTask();

setTimeout(() => {
  console.log("Timer after blocking");
}, 0);

console.log("Program continues");

/*

Output:


Heavy task started

(wait 3 seconds)

Heavy task finished

Program continues

Timer after blocking


Why?

Because Call Stack was busy.


Event Loop cannot interrupt running code.


*/

// ========================================
// 5. Event Loop Mental Model
// ========================================

/*

Remember:


Synchronous:

Code
 |
 Call Stack
 |
 Execute immediately



Asynchronous:

Code
 |
 Runtime API
 |
 Queue
 |
 Event Loop
 |
 Call Stack



Event Loop Rule:

"Move waiting callbacks
only when Call Stack is empty."


*/
