/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate 
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

 const steps = (n) => {
  // OTHER SOLUTIONS:
  // 1st Way
  for(let row = 0 ; row < n ; row++) {
    let step = ""
    for(let column = 0 ; column < n ; column++){
      if(column <= row){
        step += "#"
      }
      else{
        step += " "
      }
    }
   console.log(step)
  }

  // MY TRY (it returns a whole string, not a string for every row):
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

module.exports = steps;
