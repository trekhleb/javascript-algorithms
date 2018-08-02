/**
 * @param {number} number
 * @return {number}
 */
export default function countSetBits(number) {
  let count = 0;
  let num = number; // eslint error https://eslint.org/docs/rules/no-param-reassign
  while (num) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}
