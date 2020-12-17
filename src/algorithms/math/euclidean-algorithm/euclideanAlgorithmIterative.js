/**
 * Iterative version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
export default function euclideanAlgorithmIterative(originalA, originalB) {
  // Make input numbers positive.
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);

  // Subtract one number from another until both numbers would become the same.
  // This will be out GCD. Also quit the loop if one of the numbers is zero.
  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }

  // Return the number that is not equal to zero since the last subtraction (it will be a GCD).
  return a || b;
}
