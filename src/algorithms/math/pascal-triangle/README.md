# Pascal's Triangle

In mathematics, **Pascal's triangle** is a triangular array of 
the [binomial coefficients](https://en.wikipedia.org/wiki/Binomial_coefficient).

The rows of Pascal's triangle are conventionally enumerated 
starting with row `n = 0` at the top (the `0th` row). The 
entries in each row are numbered from the left beginning 
with `k = 0` and are usually staggered relative to the 
numbers in the adjacent rows. The triangle may be constructed
in the following manner: In row `0` (the topmost row), there 
is a unique nonzero entry `1`. Each entry of each subsequent
row is constructed by adding the number above and to the 
left with the number above and to the right, treating blank 
entries as `0`. For example, the initial number in the 
first (or any other) row is `1` (the sum of `0` and `1`),
whereas the numbers `1` and `3` in the third row are added 
to produce the number `4` in the fourth row.

![Pascal's Triangle](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

## Formula

The entry in the `nth` row and `kth` column of Pascal's 
triangle is denoted ![Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/206415d3742167e319b2e52c2ca7563b799abad7).
For example, the unique nonzero entry in the topmost 
row is ![Formula example](https://wikimedia.org/api/rest_v1/media/math/render/svg/b7e35f86368d5978b46c07fd6dddca86bd6e635c).

With this notation, the construction of the previous 
paragraph may be written as follows:

![Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/203b128a098e18cbb8cf36d004bd7282b28461bf)

for any non-negative integer `n` and any 
integer `k` between `0` and `n`, inclusive.

![Binomial Coefficient](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2457a7ef3c77831e34e06a1fe17a80b84a03181)

## Calculating triangle entries in O(n) time

We know that `i`-th entry in a line number `lineNumber` is 
Binomial Coefficient `C(lineNumber, i)` and all lines start 
with value `1`. The idea is to 
calculate `C(lineNumber, i)` using `C(lineNumber, i-1)`. It 
can be calculated in `O(1)` time using the following:

```
C(lineNumber, i)   = lineNumber! / ((lineNumber - i)! * i!)
C(lineNumber, i - 1) = lineNumber! / ((lineNumber - i + 1)! * (i - 1)!)
```

We can derive following expression from above two expressions:

```
C(lineNumber, i) = C(lineNumber, i - 1) * (lineNumber - i + 1) / i
```

So `C(lineNumber, i)` can be calculated 
from `C(lineNumber, i - 1)` in `O(1)` time.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Pascal%27s_triangle)
- [GeeksForGeeks](https://www.geeksforgeeks.org/pascal-triangle/)
