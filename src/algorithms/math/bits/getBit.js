/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
export default function getBit(number, bitPosition) {
  return (number & (1 << bitPosition)) === 0 ? 0 : 1;
}
