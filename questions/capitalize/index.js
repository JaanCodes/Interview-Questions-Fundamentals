/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

 const capitalize = (str) => {
  // SOLUTIONS:
  // 1st Way:
  let resultStr = ""
  for(let i = 0 ; i < str.length ; i++){
    if(str[i - 1] === " " || i === 0){
      resultStr += str[i].toUpperCase()
    }
    else {
      resultStr += str[i]
    }
  }
  return resultStr

  // Most Efficient Way:
  const strToArr = str.split(" ")
  const resultArr = []
  for(let word of strToArr) {
    const capitalizedWord = word[0].toUpperCase() + word.slice(1)
    result.push(capitalizedWord)
  }
  return resultArr.join(" ")
};

module.exports = capitalize;
