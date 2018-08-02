/**
 * @param {number} number
 * @return bool
 */
export default function ifPowerOf2(number) {
  return number && (!(number & (number - 1)));
}
