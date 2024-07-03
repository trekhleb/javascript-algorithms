/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
export default function clearBit(number, bitPosition) {
  const mask = ~(1 << bitPosition);

  return number & mask;
}
