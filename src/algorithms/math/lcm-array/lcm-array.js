import euclideanAlgorithm from '../euclidean-algorithm/euclideanAlgorithm.js';

export default function leastCommonMultipleArray(arr) {
  let siz = arr.length;
  if (siz == 0) throw new Error('Array is empty');
  for (let num of arr) {
    if (num == 0) return 0;
  }
  let lcm = arr[0];
  for (let i = 0; i < siz; i++) {
    let prod = Math.abs(lcm * arr[i]);
    let gcd = euclideanAlgorithm(lcm, arr[i]);
    lcm = prod / gcd;
  }
  return lcm;
}
