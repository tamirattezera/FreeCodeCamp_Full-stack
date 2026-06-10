/*
Problem:
Return the length of the longest word in a sentence.

Input:
- sentence (string)

Output:
- number representing the length of the longest word

Example:
"The quick brown fox jumped over the lazy dog"
=> 6

Approach:
1. Split the sentence into an array of words.
2. Traverse each word.
3. Compare the current word length with the longest length found so far.
4. Update the maximum length when a longer word is found.
5. Return the longest length.

Data Structures:
- Array (stores words after splitting the sentence)
- Number (stores the current maximum length)

Complexity:
- Time: O(n), where n is the number of words
- Space: O(n), due to the array created by split()
*/

function findLongestWordLength(sentence) {
  const words = sentence.split(" ");
  let longestLength = 0;

  for (const word of words) {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }

  return longestLength;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog"),
); // 6
console.log(findLongestWordLength("May the force be with you")); // 5
console.log(findLongestWordLength("Google do a barrel roll")); // 6
console.log(findLongestWordLength("")); // 0
