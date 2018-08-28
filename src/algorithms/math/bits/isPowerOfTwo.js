/**
 * @param {number} number
 * @return bool
 */
export default function isPowerOfTwo(number) {
  return (number & (number - 1)) === 0;
}
