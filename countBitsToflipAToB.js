import countSetBits from 'countSetBits';

/**
 * @param {number} number
 * @return {number}
 */
export default function countBitsToflipAToB(numberA, numberB) {

  return countSetBits(numberA ^ numberB);

}
