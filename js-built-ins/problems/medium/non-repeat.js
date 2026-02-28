/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/
function nonrepeat(str) {
  if (str == " ") {
    return null;
  }
  const mp1 = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!mp1.has(str[i])) {
      mp1.set(str[i], 1);
      // console.log(mp1.get(str[i]));
    }
    else {
      mp1.set(str[i], mp1.get(str[i]) + 1);
    }
  }
  // console.log(mp1);
  for (const [key, value] of mp1) {
    if (value == 1) {
      return key;
      break;
    }
  }

}

console.log(nonrepeat(" "));

module.exports = nonrepeat;
