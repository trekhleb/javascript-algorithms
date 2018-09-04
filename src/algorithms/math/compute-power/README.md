# Power(a,b)

This computes power of (a,b)
eg: power(2,3) = 8
power(10,0) = 1

The algorithm uses divide and conquer approach to compute power.
Currently the algorithm work for two positive integers X and Y
Lets say there are two numbers X and Y.
At each step of the algorithm:
  1. if Y is even
      then power(X, Y/2) * power(X, Y/2) is computed
  2. if Y is odd  
      then X * power(X, Y/2) * power(X, Y/2) is computed

At each step since power(X,Y/2) is called twice, this is optimised by saving the result of power(X, Y/2) in a variable (lets say res).
And then res is multiplied by self.

Illustration through example
power (2,5)
  - 2 * power(2,2) * power(2,2)
  power(2,2)
    - power(2,1) * power(2,1)
    power(2,1)
      - return 2

Going up the tree once the end values are computed
    power(2,1) = 2
  power(2,2) = power(2,1) * power(2,1) = 2 * 2 = 4  
power(2,5) = 2 * power(2,2) * power(2,2) = 2 * 4 * 4 = 32


Complexity relation: T(n) = T(n/2) + 1

Time complexity of the algorithm: O(logn)
