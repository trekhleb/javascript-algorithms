# Prime Factors

Prime factors are basically those prime numbers which multiply together to give the orignal number. For ex: 39 will have prime factors as 3 and 13 which are also prime numbers. Another example is 15 whose prime factors are 3 and 5.

#### Method for finding the prime factors and their count accurately

The approach is to basically keep on dividing the  natural number 'n' by indexes from i = 2 to i = n by prime indexes only. This is ensured by an 'if' check. Then value of 'n' keeps on overriding by (n/i).
The time complexity till now is O(n) in worst case since the loop run from index i = 2 to i = n even when no index 'i' is left to be divided by 'n' other than n itself. This time complexity can be reduced  to O(sqrt(n)) from O(n). This optimisation is acheivable when loop is ran from i = 2 to i = sqrt(n). Now, we go only till O(sqrt(n)) because when 'i' becomes greater than sqrt(n), we now have the confirmation there is no index 'i' left which can divide 'n' completely other than n itself.

##### Optimised Time Complexity: O(sqrt(n))


#### Hardy-Ramanujan formula for approximate calculation of prime-factor count

In 1917, a theorem was formulated by G.H Hardy and Srinivasa Ramanujan which approximately tells the total count of distinct prime factors of most 'n' natural numbers.
The fomula is given by ln(ln(n)).

#### Code Explaiation

There are on 4 functions used:

- getPrimeFactors : returns array containing all distinct prime factors for given input n.

- getPrimeFactorsCount: returns accurate total count of distinct prime factors of given input n.

- hardyRamanujanApprox:  returns approximate total count of distinct prime factors of given input n using Hardy-Ramanujan formula.

- errorPercent : returns %age of error in approximation using formula to that of accurate result. The formula used is:   **[Modulus(accurate_val - approximate_val) / accurate_val ] * 100**. This shows deviation from accurate result.
 

## References

- [Youtube](https://www.youtube.com/watch?v=6PDtgHhpCHo)
- [Wikipedia](https://en.wikipedia.org/wiki/Hardy%E2%80%93Ramanujan_theorem)