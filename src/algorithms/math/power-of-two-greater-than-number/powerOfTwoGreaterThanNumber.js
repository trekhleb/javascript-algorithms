/**
 * @param {number} number
 * @return {number}
 */
export default function powerOfTwoGreaterThanNumber(number) {
  // if number is negative or equal to 0, we return -1
  if (number <= 0) {
    return -1;
  }

  const power = Math.floor(Math.log(number) / Math.log(2)) + 1;

  return 2 ** power;
}
