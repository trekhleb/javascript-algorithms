/**
 * @param {number} number
 * @return {number}
 */
export default function factorial(number) {
  //resulting to a negative number
  if(number<0)
    return NaN;
  
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}
