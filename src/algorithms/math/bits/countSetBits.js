/**
 * @param {number} originalNumber
 * @return {number}
 */
export default function countSetBits(originalNumber) {
  let setBitsCount = 0;
  let number = originalNumber;

  while (number) {
    // Using And operation on number with previous number.
    number &= (number - 1);

    setBitsCount += 1;
  }

  return setBitsCount;
}
