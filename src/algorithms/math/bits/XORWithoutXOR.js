/**
 * @param {number} number
 * @return {number}
 */
export default function XORWithoutXOR(numberA, numberB) {
  return ((numberA | numberB) & (~numberA | ~numberB));
}
