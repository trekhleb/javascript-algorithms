/**
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */

/*Method 1: A bit Complex to understand*/
export default function euclideanAlgorithm(originalA, originalB) {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}

/*Method 2: Easy to evaluate*/
export default function euclideanAlgorithm2(originalA, originalB) {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);
  
  while(a != b){
    [a,b] = a>b : [a-b, b] : [a, b-a]
  }
  
  return a || b;
}
