/**
 * @param {number[]} array
 * @return {number}
 */
export default function kadanesAlgorithm(array) {
  let a = array[0];
  let b = array[1];
  for(let i = 1; i < array.length; i++){
  	a = Math.max(array[i], array[i] + a);
  	b = Math.max(a, b);
  }
  return b;
}