# Reflection

## Project Goal

The goal of this project was to build a factorial calculator in JavaScript and practice solving a problem using a structured algorithmic-thinking process rather than immediately writing code.

## My Problem-Solving Process

Before coding, I analyzed the problem and identified the following:

- Input: A non-negative integer.
- Output: The factorial of that integer.
- Constraint: Factorial is undefined for negative numbers.

I manually solved examples such as:

5! = 5 × 4 × 3 × 2 × 1 = 120

7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040

From these examples, I noticed a pattern: repeatedly multiply numbers from 1 up to the target number.

## Key Insight

The most important insight was realizing that factorial is an accumulation problem.

To solve it:

1. Start with a result value of 1.
2. Loop from 1 to the given number.
3. Multiply the current result by the loop counter.
4. Return the final result.

This pattern appears in many programming problems that require running totals, products, or aggregations.

## What I Learned

### Technical Skills

- Creating reusable JavaScript functions.
- Using loops to perform repetitive calculations.
- Handling invalid input using conditional statements.
- Returning values from functions.
- Using template literals to display formatted output.

### Algorithmic Thinking Skills

- Breaking a problem into smaller steps.
- Identifying patterns before coding.
- Translating a manual solution into pseudocode.
- Converting pseudocode into JavaScript.
- Thinking about edge cases before finalizing a solution.

## Challenges Encountered

One challenge was deciding how to handle negative numbers.

Since factorials are only defined for non-negative integers in this project, I added validation to return:

"Factorial undefined"

when the input is less than zero.

Another challenge was ensuring the multiplication started with the correct initial value. Starting with 1 is essential because multiplying by 0 would make every result equal to 0.

## Complexity Reflection

My solution uses a single loop that visits each number once.

- Time Complexity: O(n)
- Space Complexity: O(1)

This is efficient because no additional arrays or complex data structures are needed.

## Future Improvements

Possible improvements include:

- Implementing a recursive factorial solution.
- Accepting user input from the terminal.
- Validating non-numeric inputs.
- Comparing iterative and recursive approaches.
- Building a simple web interface using HTML, CSS, and JavaScript.

## Lessons Learned

The biggest lesson from this project is that writing code becomes much easier after understanding the problem and identifying the pattern.

Instead of jumping directly into coding, following a structured process helped me create a solution that is easier to understand, test, and improve.
