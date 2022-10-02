/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

const palindrome = (str) => {
  // MY TRY:
  const reversedStr = str.split("").reduce((accumulator, currentValue) => currentValue + accumulator)
  return str === reversedStr ? true : false

  // OTHER SOLUTIONS:
  // 2nd Way:
  return str.split("").every((char, index) => (
    char === str[str.length - 1 - index]
  ))

  // Most Efficient Way:
  const halfStr = Math.floor(str.length / 2)
  for(let i = 0 ; i < halfStr ; i++) {
    const oppositeIndex = str.length - 1 - i
    if(str[i] !== str[oppositeIndex]) {
      return false
    } 
  }
  return true
};

module.exports = palindrome;
