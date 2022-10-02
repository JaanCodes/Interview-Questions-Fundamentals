/** Given an array along with a chunk size, return a new array that contains
 * many subarrays where the length of each subarray is length `size`.
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 */

 const arrayChunk = (array, size) => {
  // MY TRY:
  const chunkedArray = []
  for(let i = 0 ; i < array.length ; i++){
    if(i % size === 0) {
      chunkedArray.push(array.slice(i, i + size))
    }
  }

  return chunkedArray

  // OTHER SOLUTIONS:
  // Most Efficient Way:
  for(let i = 0 ; i < array.length ; i += size) {
    const subarray = array.slice(i, i + size)
    chunkedArray.push(subarray)
  }
};

module.exports = arrayChunk;
