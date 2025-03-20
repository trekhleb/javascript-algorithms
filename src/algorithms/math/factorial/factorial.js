/**
 * @param {number} number
 * @return {number}
 */
export default function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}
/**
 * @param {number} number
 * @return {number}
 * Recursive solution
 */
export default function factorial(number){
  if (number>=1){
    return number*factorial(number-1);
  }
  else{
    return 1
  }
}
