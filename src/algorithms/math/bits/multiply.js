import divideByTwo from './divideByTwo';
import isEven from './isEven';
import multiplyByTwo from './multiplyByTwo';

/**
 * FUNCTION DEFINITION
 * multiply(a, b) = 0 if a is zero or b is zero or if both a and b are zeros
 * multiply(a, b) = multiply(2a, b/2) if b is even
 * multiply(a, b) = multiply(2a, (b-1)/2) + a if b is odd and b is positive
 * multiply(a, b) = multiply(2a, (b+1)/2) - a if b is odd and b is negative
 *
 * COMPLEXITY
 * O(log b)
 * @param {number} a
 * @param {number} b
 * @return {number} a * b
 */
export default function multiply(a, b) {
  if (b === 0 || a === 0) {
    return 0;
  }

  const multiplyByOddPositive = () => multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
  const multiplyByOddNegative = () => multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;
  const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));
  const multiplyByOdd = () => (b > 0 ? multiplyByOddPositive() : multiplyByOddNegative());

  return isEven(b) ? multiplyByEven() : multiplyByOdd();
}
