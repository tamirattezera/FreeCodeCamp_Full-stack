# Longest Word Finder

## Description

A JavaScript function that returns the length of the longest word in a sentence.

## Problem Statement

Given a sentence, find and return the length of the longest word.

Example:

Input:

"The quick brown fox jumped over the lazy dog"

Output:

6

## Concepts Practiced

- Strings
- Arrays
- Loops
- Conditionals
- Variables
- Problem Solving

## Algorithm

1. Split the sentence into an array of words.
2. Initialize a variable to track the longest word length.
3. Traverse each word.
4. Compare the current word length with the maximum length found so far.
5. Update the maximum length if a longer word is found.
6. Return the maximum length.

## Data Structures

- Array
  - Stores words after splitting the sentence.
- Number
  - Stores the current maximum length.

## Complexity Analysis

### Time Complexity

O(n)

Where n is the number of words in the sentence.

### Space Complexity

O(n)

Due to the array created by split().

## Example

findLongestWordLength("The quick brown fox jumped over the lazy dog");
// Output: 6

## Skills Developed

- Breaking down problems into smaller steps
- Algorithmic thinking
- Looping through collections
- Tracking a maximum value
- Writing clean and readable code
