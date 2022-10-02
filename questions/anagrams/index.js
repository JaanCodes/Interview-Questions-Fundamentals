/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

const anagrams = (strA, strB) => {
  // MY TRY:
  const charMapA = new Map();
  const charMapB = new Map();
  for (const char of strA) {
    charMapA.set(char, charMapA.get(char) + 1 || 1);
  }
  for (const char of strB) {
    charMapB.set(char, charMapB.get(char) + 1 || 1);
  }
  if (charMapA.size !== charMapB.size) {
    return false;
  } else {
    for (const [keyMapStrA, valueMapStrA] of charMapA) {
      if (!charMapB.get(keyMapStrA)) {
        return false;
      } else return true;
    }
  }

  // OTHER SOLUTIONS

  // 2nd Way
  for (const char of strA.replaceAll(" ", "").toLowerCase()) {
    charMapA.set(char, charMapA.get(char) + 1 || 1);
  }
  for (const char of strB.replaceAll(" ", "").toLowerCase()) {
    charMapB.set(char, charMapB.get(char) + 1 || 1);
  }
  if (charMapA.size !== charMapB.size) return false;
  for (const [charA, countA] of charMapA) {
    if (charMapB.get(charA) !== countA) {
      return false;
    }
  }
  return true;

  // 3rd Way
  const cleanedStrA = strA.toLowerCase().replaceAll(" ", "").split("").sort().join("");
  const cleanedStrB = strB.toLowerCase().replaceAll(" ", "").split("").sort().join("");
  return cleanedStrA === cleanedStrB;
};

module.exports = anagrams;
