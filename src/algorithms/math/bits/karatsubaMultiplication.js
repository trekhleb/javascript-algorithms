/**
 * @param {number} number
 * @return bool
 */
export default function karatsubaMultiplication(A, B) {
  let A1, A2, B1, B2, base, multiplier;
  base  = 10;

	if(( A < base ) || ( B < base )) {
    return A * B;
  }

  let tempA = A.toString();
  let tempB = B.toString();

  let num = (tempA.length > tempB.length) ? tempB.length : tempA.length;
  multiplier = Math.round(num >> 1);

  var highBits1 = parseInt(tempA.substring(0, tempA.length - multiplier));
  var lowBits1 = parseInt(tempA.substring(tempA.length - multiplier, tempA.length)) ;

  var highBits2 = parseInt(tempB.substring(0, tempB.length - multiplier));
  var lowBits2 = parseInt(tempB.substring(tempB.length - multiplier, tempB.length));


  var res0 = karatsubaMultiplication(lowBits1, lowBits2);
  var res1 = karatsubaMultiplicationa(lowBits1 + highBits1, lowBits2 + highBits2);
  var res2 = karatsubaMultiplication(highBits1, highBits2);

  var res = (res2 *  Math.pow(10, multiplier << 1 )) + ((res1 - res2 - res0) * Math.pow(10,  multiplier)) + res0;

  return res;

 }
