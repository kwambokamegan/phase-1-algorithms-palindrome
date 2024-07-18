// index.js

/**
 * Checks if a given string is a palindrome.
 * A palindrome is a string that reads the same forwards and backwards.
 *
 * @param {string} word - The string to check.
 * @returns {boolean} - Returns true if the string is a palindrome, false otherwise.
 */
function isPalindrome(word) {
  // Pseudocode:
  // 1. Reverse the string.
  // 2. Compare the reversed string with the original string.
  // 3. Return true if they are the same, otherwise return false.
  
  // Reverse the string and compare it with the original string
  return word === word.split('').reverse().join('');
}

/* 
  Pseudocode:
  1. Split the string into an array of characters.
  2. Reverse the array.
  3. Join the array back into a string.
  4. Compare the reversed string to the original string.
  5. Return true if they are identical, false otherwise.
*/

/*
  Explanation:
  - `word.split('')` splits the string into an array of characters.
  - `reverse()` reverses the array of characters.
  - `join('')` joins the reversed array back into a string.
  - `word === reversedWord` checks if the original string is equal to the reversed string.
  - If they are equal, the word is a palindrome and we return `true`; otherwise, we return `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar")); // true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot")); // false
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a")); // true

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba")); // true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab")); // false

  // Additional tests
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam")); // true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello")); // false

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level")); // true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("world")); // false
}

module.exports = isPalindrome;