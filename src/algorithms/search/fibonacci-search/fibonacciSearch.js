/** Author Slim Gharbi
 * Fibonacci search implementation.
 *
 * @param {*[]} integers
 * @param {*} elementToSearch
 * @return {number}
 */
export default function fibonacciSearch(integers, elementToSearch) {
  let i;

  /* Initialize fibonacci numbers */
  let fibonacciMinus2 = 0;// (m-2)'th Fibonacci No.
  let fibonacciMinus1 = 1;// (m-1)'th Fibonacci No.
  let fibonacciNumber = fibonacciMinus2 + fibonacciMinus1; // m'th Fibonacci
  /* fibonacciNumber is going to store the smallest
 Fibonacci Number greater than or equal to the length of the array */
  while (fibonacciNumber < integers.length) {
    fibonacciMinus2 = fibonacciMinus1;
    fibonacciMinus1 = fibonacciNumber;
    fibonacciNumber = fibonacciMinus2 + fibonacciMinus1;
  }
  // Marks the eliminated range from front
  let offset = -1;
  /* while there are elements to be inspected.
 Note that we compare integers[fibonacciMinus2] with elementToSearch.
 When fibonacciNumber becomes 1, fibonacciMinus2 becomes 0 */
  while (fibonacciNumber > 1) {
  // Check if fibonacciMinus2 is a valid location
    i = Math.min((offset + fibonacciMinus2), (integers.length - 1));
    /* If elementToSearch is greater than the value at
  index fibonacciMinus2, cut the subarray array
  from offset to i */
    if (integers[i] < elementToSearch) {
      fibonacciNumber = fibonacciMinus1;
      fibonacciMinus1 = fibonacciMinus2;
      fibonacciMinus2 = fibonacciNumber - fibonacciMinus1;
      offset = i;
    } else if (integers[i] > elementToSearch) {
      fibonacciNumber = fibonacciMinus2;
      fibonacciMinus1 -= fibonacciMinus2;
      fibonacciMinus2 = fibonacciNumber - fibonacciMinus1;
      /* If elementToSearch is greater than the value at index
      fibonacciMinus2, cut the subarray after i+1 */
    } else return i;
    // element found. return index
  }
  // comparing the last element with elementToSearch
  if (fibonacciMinus1 === 1 && integers[offset + 1] === elementToSearch) return offset + 1;
  // element not found. return -1
  return -1;
}
