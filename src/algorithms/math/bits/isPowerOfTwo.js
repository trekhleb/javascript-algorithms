/**
 * @param {number} number
 * @return bool
 */
export default function isPowerOfTwo(number) {
  // 1 (2^0) is the smallest power of two and all powers of two are positive.
  // Without this check zero (and, for example, the minimal 32-bit signed
  // integer -2^31) would incorrectly pass the bitwise test below.
  if (number < 1) {
    return false;
  }

  return (number & (number - 1)) === 0;
}
