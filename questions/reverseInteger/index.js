/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

 const reverseInteger = (int) => {
  // MY TRY:
  const reversedInt = int.toString().split("").reverse().join("")
  return int < 0 ? -parseInt(reversedInt) : parseInt(reversedInt)

  // OTHER SOLUTIONS:
  // 2nd Way:
  const reversed = int.toString().split("").reverse().join("")
  return parseInt(reversed) * Math.sign(int)

};

module.exports = reverseInteger;
