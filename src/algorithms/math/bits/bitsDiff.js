import countSetBits from './countSetBits';

/**
 * Counts the number of bits that need to be change in order
 * to convert numberA to numberB.
 *
 * @param {number} numberA
 * @param {number} numberB
 * @return {number}
 */
export default function bitsDiff(numberA, numberB) {
  return countSetBits(numberA ^ numberB);
}
