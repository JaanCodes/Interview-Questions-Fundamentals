const arr = [1, -1, 2, 3]

const sum = arr.reduce((accumulator, currentValue ) => (
  accumulator + currentValue
)/*, first value */)


const reverseInteger = (int) => {
  const intToStr = int.toString()
  const strArr = intToStr.split("")
  const reversedArr = strArr.reverse()
  const arrToStr = reversedArr.join("")
  return int < 0 ? -parseInt(arrToStr.substr(0, arrToStr.length - 1)) : parseInt(arrToStr)
};

const stringifyId = (arr) => {
  return new Set(arr.map(obj => obj.id))
};

const maxCharacter = (str) => {
  const charMap = {}
  let max = 0
  let maxChar = ""
  
  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1
    if(charMap[char] > max){
      max = charMap[char]
      maxChar = char
    }
  }
  
  return maxChar
};


const anagrams = (strA, strB) => {
  const charMapStrA = new Map()
  const charMapStrB = new Map()

  for(const char of strA) {
    charMapStrA.set(char, charMapStrA.get(char) + 1 || 1)
  }

  for(const char of strB) {
    charMapStrB.set(char, charMapStrB.get(char) + 1 || 1)
  }

  if(charMapStrA.size !== charMapStrB.size) {
    return false
  }
  else {
    for(const [keyMapStrA, valueMapStrA] of charMapStrA) {
      if(!charMapStrB.get(keyMapStrA)) {
        return false
      }
      else return true
    }
  }
}

const arrayChunk = (array, size) => {
  const chunkedArray = []
  for(let i = 0 ; i < array.length ; i++){
    if(i % size === 0) {
      chunkedArray.push(array.slice(i, i + size))
    }
  }
  return chunkedArray
};



const capitalize = (str) => {
  let resultStr = ""
  for(let i = 0 ; i < str.length ; i++){
    if(str[i - 1] === " "){
      resultStr += str[i].toUpperCase()
    }
    else {
      resultStr += str[i]
    }
  }
  return resultStr
};


const steps = (n) => {
  let result = ""
  for(let i = 1 ; i <= n ; i++){
    if(i !== n){
      result += "#".repeat(i) + " ".repeat(n - 1) + "\n"
    }
    else{
      result += "#".repeat(n)
    }
  }
  return result
};


const pyramid = (n) => {
  for(let row = 0 ; row < n ; row++) {
    let step = ""
    for(let column = 0 ; column < (n +( n - 1)) ; column++){
      if(column === n - 1 || row === n - 1 || column === n && row > column){
        step += "#"
      }
      else {
        step += " "
      }
    }
    console.log(step)
  }
};

pyramid(3)