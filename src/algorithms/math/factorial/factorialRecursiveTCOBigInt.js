/**
 * @param {bigint} number
 * @return {bigint}
 */
 export default function factorialRecursiveTCOBigInt(number) {
  function fact(number, accumulator = 1n) {
    if (number < 2n) return accumulator;
    else return fact(number - 1n, accumulator * number);
  }

  return fact(number);
}
