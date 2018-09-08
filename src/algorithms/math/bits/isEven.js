/**
 * @param {number} number
 * @return {boolean}
 */
export default function isEven(number) {
  return (number & 1) === 0;
}
