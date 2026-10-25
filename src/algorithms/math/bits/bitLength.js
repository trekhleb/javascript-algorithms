/**
 * Return the number of bits used in the binary representation of the number.
 *
 * @param {number} number
 * @return {number}
 */
export default function bitLength(number) {
  let bitsCounter = 0;

  // Use 2 ** bitsCounter instead of (1 << bitsCounter) since the bitwise
  // shift operator works with 32-bit integers only and would overflow here
  // for numbers that are 31 bits long or more.
  while ((2 ** bitsCounter) <= number) {
    bitsCounter += 1;
  }

  return bitsCounter;
}
