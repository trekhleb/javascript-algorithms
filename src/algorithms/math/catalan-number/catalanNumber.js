/**
 * Calculate nth Catalan number using dynamic programming approach.
 *
 * Catalan numbers form a sequence of natural numbers that occur in various
 * counting problems, often involving recursively-defined objects.
 *
 * The nth Catalan number can be expressed directly in terms of binomial coefficients:
 * C(n) = (2n)! / ((n + 1)! * n!)
 *
 * Or using the recursive formula:
 * C(0) = 1
 * C(n) = sum of C(i) * C(n-1-i) for i = 0 to n-1
 *
 * Applications:
 * - Number of different Binary Search Trees with n keys
 * - Number of expressions containing n pairs of parentheses
 * - Number of ways to triangulate a polygon with n+2 sides
 * - Number of paths in a grid from (0,0) to (n,n) without crossing diagonal
 *
 * @param {number} n - The position in Catalan sequence
 * @return {number} - The nth Catalan number
 */
export default function catalanNumber(n) {
  // Handle edge cases
  if (n < 0) {
    throw new Error('Catalan number is not defined for negative numbers');
  }

  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // Use dynamic programming to calculate Catalan number
  // This approach has O(n^2) time complexity and O(n) space complexity
  const catalan = new Array(n + 1).fill(0);
  catalan[0] = 1;
  catalan[1] = 1;

  // Calculate Catalan numbers from 2 to n
  for (let i = 2; i <= n; i += 1) {
    for (let j = 0; j < i; j += 1) {
      catalan[i] += catalan[j] * catalan[i - 1 - j];
    }
  }

  return catalan[n];
}
