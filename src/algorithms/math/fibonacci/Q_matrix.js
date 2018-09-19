/**
 * Calculate fibonacci number at specific position using Q matrix in O(logn) time.
 *
 * @param n
 * @return {number}
 */
 export default function fibonacciNth(n) {
 
  //Require math.js library. If you're from python background, it is equivalent to numpy
  const math = require('mathjs');
  
  //mod is just for our convenience to see how quick large values are getting computed
  const M = math.matrix([[1,1],[1,0]]),
        Q = M,
        mod = 10 ** 9 + 7;

  //Using Q^n = Q^n/2 * Q^n/2
  const power = (Q,n) => {
    if(n == 1){
        return M;
    }

    Q = power(Q,Math.floor(n/2));
    Q = math.mod(math.multiply(Q,Q),mod);
    if(n % 2 != 0){
        Q = math.mod(math.multiply(Q,M),mod);
    }

    return Q;

}
  
  const fibonacci = (Q,n) => {
      //Q^n = [[Fn+1, Fn], [Fn, Fn-1]]
      Q = power(Q,n-1);
      
      //Q:{ _data:[[],[]], _size:[m, n], _datatype: string | number}
      return Q['_data'][0][0];
  }
  
  return fibonacci(Q,n)

}
