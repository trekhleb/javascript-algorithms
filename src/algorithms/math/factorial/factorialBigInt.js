/**
 * @param {bigint} number
 * @return {bigint}
 */
 export default function factorialBigInt(number) {
  let result = 1n;

  for (let i = 2n; i <= number; i += 1n) {
    result *= i;
  }

  return result;
}
