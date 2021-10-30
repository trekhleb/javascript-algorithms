/**
 * @param {string} string
 * @return {boolean}
 */
export default function palindrome(string) {
  const reverseString = string.split('').reverse().join('');
  return reverseString === string;
}
