/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
export default function setBit(number, bitPosition) {
  return number | (1 << bitPosition);
}
