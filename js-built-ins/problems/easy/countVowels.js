/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/

function countVowels(str) {
  let vowel_count = 0;
  for (let i = 0; i < str.length; i++) {
    let current_char = str.charAt(i);
    if (current_char == 'a' || current_char == 'e' || current_char == 'i' || current_char == 'o' || current_char == 'u' || current_char == 'A' || current_char == 'E' || current_char == 'I' || current_char == 'O' || current_char == 'U') {
      vowel_count++;
    }
  }
  return vowel_count;
}

// console.log(countVowels("saubhagya"));
module.exports = { countVowels };



