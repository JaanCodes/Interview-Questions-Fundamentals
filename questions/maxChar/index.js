/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

 const maxCharacter = (str) => {
  // MY TRY (didn't work):
  const map = new Map()
  for(let char of str) {
    map.set(char, [...value + 1])
  }
  return map


  // SOLUTIONS:
  // 1st Way
  const charObj = {}
  let max = 0
  let maxChar = ""
  
  for(let char of str) {
    charObj[char] = charObj[char] + 1 || 1
    if(charObj[char] > max){
      max = charObj[char]
      maxChar = char
    }
  }
  
  return maxChar

  // Most Efficient Way:
  const charMap = new Map()

  for(const char of str) {
    charMap.set(char, charMap.get(char) + 1 || 1)
  }

  for(const [char, count] of charMap) {
    if(count > max) {
      max = count
      maxChar = char
    }
  }

  return maxChar
};

module.exports = maxCharacter;
