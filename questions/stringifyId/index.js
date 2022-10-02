/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

const stringifyId = (arr) => {
  // MY TRY (didn't work, it returned the Set and not only the values)
  return new Set(arr.map(obj => obj.id))


  // OTHER SOLUTIONS:
  // 2nd Way:
  const idArray = arr.map(obj => obj.id)
  const uniqueArray = []
  let idStr = ""

  for(let id of idArray){
    if(!uniqueArray.includes(id)) {
      uniqueArray.push(id)
    }
  }

  for(let i = 0 ; i < uniqueArray.length ; i++) {
    i === uniqueArray.length - 1 ? idStr += uniqueArray[i] : idStr += `${uniqueArray[i]}, `
  }
  return idStr

  // 3rd Way:
  for(let i = 0 ; i < uniqueArray.length ; i++) {
    idStr += `${uniqueArray[i]}, `
  }
  return idStr.slice(0, idStr.length - 2)

  // 4th Way:
  return uniqueArray.join(", ")


  // Most Efficient Way (what I did but only printing the values):
  const idArraySet = arr.map(obj => obj.id)
  const uniqueSet = [...new Set(idArraySet)]
  return uniqueSet.join(", ")

};

module.exports = stringifyId;
