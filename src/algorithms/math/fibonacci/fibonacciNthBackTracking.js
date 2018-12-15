/**
 * Calculate fibonacci number at specific position using BackTracking approach
 * and concepts of memoization/closures.
 * The function doesn't backtrack values when it is cached in memoized
 * array,otherwise it does backtracking and stores in memoized array.
 * This way,execution of function query takes O(1) in best case and
 * O(n) in worst case
 *
 * @param n
 * @return {number}
 */
const fibonacciNth = () => {
  // memoized array for storing calculated values,this acts as a closure for inner function
  const memoized = [];
  return (n) => {
    // First two numbers in fibonacci series is 0 and 1
    memoized[0] = 0;
    memoized[1] = 1;

    // When the memoized value is present return immediately in O(1)
    if (memoized[n] !== undefined) return memoized[n];

    // When not present backtrack, calculate, store the results for all elements < n in O(n)
    let count;
    for (count = 2; count <= n; count += 1) {
      // for each number add the (count-1) and (count-2) and store in memoized array till we reach n
      memoized[count] = memoized[count - 1] + memoized[count - 2];
    }

    // return the calculated result
    return memoized[n];
  };
};
const getFibonacci = fibonacciNth();

export default getFibonacci;
