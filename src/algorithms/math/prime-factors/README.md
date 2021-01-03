# Prime Factors

_Read this in other languages:_
[简体中文](README.zh-CN.md).

**Prime number** is a whole number greater than `1` that **cannot** be made by multiplying other whole numbers. The first few prime numbers are: `2`, `3`, `5`, `7`, `11`, `13`, `17`, `19` and so on.

If we **can** make it by multiplying other whole numbers it is a **Composite Number**.

![Composite numbers](https://www.mathsisfun.com/numbers/images/prime-composite.svg)

_Image source: [Math is Fun](https://www.mathsisfun.com/prime-factorization.html)_

**Prime factors** are those [prime numbers](https://en.wikipedia.org/wiki/Prime_number) which multiply together to give the original number. For example `39` will have prime factors of `3` and `13` which are also prime numbers. Another example is `15` whose prime factors are `3` and `5`.

![Factors](https://www.mathsisfun.com/numbers/images/factor-2x3.svg)

_Image source: [Math is Fun](https://www.mathsisfun.com/prime-factorization.html)_

## Finding the prime factors and their count accurately

The approach is to keep on dividing the natural number `n` by indexes from `i = 2` to `i = n` (by prime indexes only). The value of `n` is being overridden by `(n / i)` on each iteration.

The time complexity till now is `O(n)` in the worst case scenario since the loop runs from index `i = 2` to `i = n`. This time complexity can be reduced from `O(n)` to `O(sqrt(n))`. The optimisation is achievable when loop runs from `i = 2` to `i = sqrt(n)`. Now, we go only till `O(sqrt(n))` because when `i` becomes greater than `sqrt(n)`, we have the confirmation that there is no index `i` left which can divide `n` completely other than `n` itself.

## Hardy-Ramanujan formula for approximate calculation of prime-factor count

In 1917, a theorem was formulated by G.H Hardy and Srinivasa Ramanujan which states that the normal order of the number `ω(n)` of distinct prime factors of a number `n` is `log(log(n))`.

Roughly speaking, this means that most numbers have about this number of distinct prime factors.

## References

- [Prime numbers on Math is Fun](https://www.mathsisfun.com/prime-factorization.html)
- [Prime numbers on Wikipedia](https://en.wikipedia.org/wiki/Prime_number)
- [Hardy–Ramanujan theorem on Wikipedia](https://en.wikipedia.org/wiki/Hardy%E2%80%93Ramanujan_theorem)
- [Prime factorization of a number on Youtube](https://www.youtube.com/watch?v=6PDtgHhpCHo&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=82)
