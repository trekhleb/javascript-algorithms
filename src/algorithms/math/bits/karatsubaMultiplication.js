/**
 * @param {number} number
 * @return bool
 */
export default function karatsubaMultiplication(A, B) {
  const base = 10;

  if ((A < base) || (B < base)) {
    return A * B;
  }

  const tempA = A.toString();
  const tempB = B.toString();

  const num = (tempA.length > tempB.length) ? tempB.length : tempA.length;
  const multiplier = Math.round(num >> 1);

  const highBits1 = parseInt(tempA.substring(0, tempA.length - multiplier), base);
  const lowBits1 = parseInt(tempA.substring(tempA.length - multiplier, tempA.length), base);

  const highBits2 = parseInt(tempB.substring(0, tempB.length - multiplier), base);
  const lowBits2 = parseInt(tempB.substring(tempB.length - multiplier, tempB.length), base);


  const res0 = karatsubaMultiplication(lowBits1, lowBits2);
  const res1 = karatsubaMultiplication(lowBits1 + highBits1, lowBits2 + highBits2);
  const res2 = karatsubaMultiplication(highBits1, highBits2);

  const res = (res2 ** (10, multiplier << 1)) + ((res1 - res2 - res0) ** (10, multiplier)) + res0;

  return res;
}
