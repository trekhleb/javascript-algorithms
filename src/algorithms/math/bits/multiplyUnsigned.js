/**
 * Multiply two unsigned 32-bit integers using bitwise operations.
 *
 * The main idea of bitwise multiplication is that every number may be split
 * to the sum of powers of two:
 *
 * I.e. 19 = 2^4 + 2^1 + 2^0
 *
 * Then multiplying number x by 19 is equivalent of:
 *
 * x * 19 = x * 2^4 + x * 2^1 + x * 2^0
 *
 * Doubling x advances to the next power of two. Use numeric addition for this
 * step because JavaScript's left shift truncates the result to a signed 32-bit integer.
 *
 * @param {number} number1
 * @param {number} number2
 * @return {number}
 */
export default function multiplyUnsigned(number1, number2) {
  let result = 0;

  // Let's treat number2 as a multiplier for the number1.
  let multiplier = number2;

  // Value of number1 multiplied by the current power of two.
  let multiplicand = number1;

  // Go through all bits of number2.
  while (multiplier !== 0) {
    // Check if current multiplier bit is set.
    if (multiplier & 1) {
      result += multiplicand;
    }

    multiplicand += multiplicand;
    // Zero-fill the high bit so unsigned values eventually reach zero.
    multiplier >>>= 1;
  }

  return result;
}
