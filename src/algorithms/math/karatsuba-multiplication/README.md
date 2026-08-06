# Karatsuba Multiplication

Karatsuba is a fast multiplication algorithm discovered by Anatoly Karatsuba in 1960. Given two n-digit numbers, the "grade-school" method of long multiplication has a time complexity of O(n<sup>2</sup>), whereas the karatsuba algorithm has a time complexity of O(n<sup>1.59</sup>).

## Recursive Formula

```
x = 1234
y = 5678

karatsuba(x, y)
```

1. Split each number into numbers with half as many digits
```
a = 12
b = 34

c = 56
d = 78
```

2. Compute 3 subexpressions from the smaller numbers
  - `ac = a * c`
  - `bd = b * d`
  - `abcd = (a + b) * (c + d)`

3. Combine subexpressions to calculate the product
```
A = ac * 10000
B = (abcd - ac - bd) * 100
C = bd

x * y = A + B + C
```

_**Note:**_ *The karatsuba algorithm can be applied recursively to calculate each product in the subexpressions.* (`a * c = karatsuba(a, c)`*). When the numbers get smaller than some arbitrary threshold, they are multiplied in the traditional way.*

## References
[Stanford Algorithms (YouTube)](https://www.youtube.com/watch?v=JCbZayFr9RE)
[Wikipedia](https://en.wikipedia.org/wiki/Karatsuba_algorithm)
