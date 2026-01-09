/**
 * @param {number} number
 * @return {number}
 */
 export default function factorialRecursiveTCO(number) {
  function fact(number, accumulator = 1) {
    if (number < 2) return accumulator;
    else return fact(number - 1, accumulator * number);
  }

  return fact(number);
}
