/**
 * @param {number} originalA
 * @param {number} originalB
 * @return {number|null}
 */
export default function euclideanAlgorithm(originalA, originalB) {
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);

  if (a === 0 && b === 0) {
    return null;
  }

  if (a === 0 && b !== 0) {
    return b;
  }

  if (a !== 0 && b === 0) {
    return a;
  }

  if(a === b) return a;

  // Normally we need to do subtraction (a - b) but to prevent
  // recursion occurs to often we may shorten subtraction to (a % b).
  // Since (a % b) is normally means that we've subtracted b from a
  // many times until the difference became less then a.
  
  if(a > b) // swapping so as make sure b is greater than a
    [a , b] = [b , a];

  while(b%a!=0) {
    [a , b] = [b % a , a];
  }
  return a;
}
