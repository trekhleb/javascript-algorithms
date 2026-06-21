/**
 * Return a fibonacci sequence as an array.
 *
 * @param n
 * @return {number[]}
 */
export default function fibonacci(n) {
  const fibSequence = [1];

  let currentValue = 1;
  let previousValue = 0;

  if (n === 1) {
    return fibSequence;
  }

  let iterationsCounter = n - 1;

  while (iterationsCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    fibSequence.push(currentValue);

    iterationsCounter -= 1;
  }

  return fibSequence;
}
/**
* Return a fibonacci series using recursion
* Time Complexity -- O(2^N)
* Space Complexity -- O(N)
*/
export default function fib(int n){
  if(n==1 || n==0){
    return n;
  }
  else{
    return fib(n-1)+fib(n-2)
  }
}
