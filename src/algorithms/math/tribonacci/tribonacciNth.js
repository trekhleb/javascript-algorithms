/**
 * Calculate tribonacci number at specific position using Dynamic Programming approach.
 *
 * @param n
 * @return {number}
 */
export default function tribonacciNth(n) {
  const tribSequence = [0, 0, 1];
  let currentValue = 1;

  for (let i = 3; i <= n; i += 1) {
    tribSequence.push(currentValue);
    currentValue += tribSequence[i - 1] + tribSequence[i - 2];
  }

  return tribSequence[n];
}
