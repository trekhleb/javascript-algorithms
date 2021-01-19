# 质数因子

_Read this in other languages:_
[english](README.md).

**质数** 是一个比 `1` 大的整数，且 **不能**由其它整数相乘得出。前几个质数是: `2`, `3`, `5`, `7`, `11`, `13`, `17`, `19`,依此类推。

如果我们**能**通过其它整数相乘得出，我们则称它为**合数**

![Composite numbers](https://www.mathsisfun.com/numbers/images/prime-composite.svg)

_Image source: [Math is Fun](https://www.mathsisfun.com/prime-factorization.html)_


**质数因子**是那些相乘得到原始数的[质数](https://en.wikipedia.org/wiki/Prime_number)。例如`39`的质数因子是`3`和`13`，`15`的质数因子是`3`和`5`。

![Factors](https://www.mathsisfun.com/numbers/images/factor-2x3.svg)

_Image source: [Math is Fun](https://www.mathsisfun.com/prime-factorization.html)_

## 正确计算所有的质数因子及其数量

这个方法将自然数`n`从`i = 2`除到`i = n`（仅按质数索引）。且每次循环后`n`的值被`(n / i)`的值替换。

在最坏的情况下，即循环从`i = 2`执行到 `i = n`，上述方法的时间复杂度为`O(n)`。时间复杂度其实可以从`O(n)`减少到`O(sqrt(n))`，通过减少循环的执行次数，从`i = 2`执行到 `i = sqrt(n)`。因为可以确认，当`i`大于`sqrt(n)`时，除了`n`本身，再没有数可以被整除了。

## Hardy-Ramanujan公式用于计算质数因子的个数

1917年，G.H Hardy和Srinivasa Ramanujan提出了一个定理，该定理指出，自然数 `n` 的不同素数的数 `ω(n)` 的正态次序是`log(log(n))`。

粗略地讲，这意味着大多数数字具有这个数量的质数因子。

## References

- [Prime numbers on Math is Fun](https://www.mathsisfun.com/prime-factorization.html)
- [Prime numbers on Wikipedia](https://en.wikipedia.org/wiki/Prime_number)
- [Hardy–Ramanujan theorem on Wikipedia](https://en.wikipedia.org/wiki/Hardy%E2%80%93Ramanujan_theorem)
- [Prime factorization of a number on Youtube](https://www.youtube.com/watch?v=6PDtgHhpCHo&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=82)
