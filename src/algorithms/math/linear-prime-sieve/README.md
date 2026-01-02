# Linear Prime Sieve

Linear Prime Sieve is an algorithm for finding all prime numbers up to some limit `n` in linear time.



## How it works

1. Create an array `leastPrimeFactor` of `n + 1` positions filled with `0`(to represent the least prime factors of numbers `0` through `n`)
2. Start at position `i = 2` (the first prime number)
3. If the least prime factor of `i` is `0` it means `i` is a prime number, so we add it to our list of `primes`.
4. We start setting the least prime factor for numbers `x`, where x = `p` * `i`, `p` is `x`'s least prime factor and `p` <= `leastPrimeFactor(i)`, we do 
   this by traversing the list of primes accumulated till now.
5. Increment the value of `i`.
6. We repeat steps 3 through 5 until `i` exceeds `n`.   


When the algorithm terminates, all the prime numbers from `0` through `n` will be added to our primes list



## Complexity

The algorithm has a complexity of `O(n)`.



## Proof Of Correctness

In order to prove the time complexity, we need to show that the alogrithm sets all leastPrimeFactor[] correctly, and that every value will be set only once.
If so the algorithm will have linear time complexity, since all the remaining work of the algorithm is of `O(n)`.
We Observe that every number `i` has exactly one representation of form:
 `i = leastPrimeFactor[i] * x`, where leastPrimeFactor[i] <= leastPrimeFactor[x].
 
In our Alogrith, for every `x`, it goes through all prime numbers it could be multiplied by, i.e. all prime numbers up to leastPrimeFactor[x] inclusive,
in order to get the numbers in the form given above.
Hence, the algorithm will go through every composite number exactly once, setting the correct values for leastPrimeFactor[] there.



## References

- David Gries, Jayadev Misra. A Linear Sieve Algorithm for Finding Prime Numbers [1978].
- [CP-Algorithms/Linear-Sieve](https://cp-algorithms.com/algebra/prime-sieve-linear.html).