/**
 * Switch the sign of the number using "Twos Complement" approach.
 * @param {number} number
 * @return {number}
 */
export default function switchSign(number) {
  return ~number + 1;
}
