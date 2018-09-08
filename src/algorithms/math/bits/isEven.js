/**
 * @param {number} number
 * @return bool
 */
export default function isEven(number) {
  return (number & 1) === 0;
}
