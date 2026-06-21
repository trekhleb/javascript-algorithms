/**
 * Return a tribonacci sequence as an array.
 *
 * @param n
 * @return {number[]}
 */
export default function tribonacci(n) {
  const tribSequence = [0];

  if (n >= 2) {
    tribSequence.push(0);
  }

  let currentValue = 1;

  for (let i = 2; i < n; i += 1) {
    tribSequence.push(currentValue);
    currentValue += tribSequence[i - 1] + tribSequence[i - 2];
  }

  return tribSequence;
}
