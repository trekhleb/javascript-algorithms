# Comb Sort

_Read this in other languages:_
[_português_](README.pt-BR.md)

## Description

Comb Sort improves on Bubble Sort by using a gap larger than 1.
The gap starts at the length of the list and shrinks by a factor
of 1.3 each iteration until it reaches 1. At that point, Comb Sort
becomes equivalent to Bubble Sort, but by that time most of the
work has been done and the list is nearly sorted.

The shrink factor of 1.3 has been empirically shown to be the best
value for the shrink factor for Comb Sort.

## Complexity

| Name              | Best      | Average        | Worst           | Memory  | Stable |
| ----------------- | --------- | -------------- | --------------- | ------- | ------ |
| Comb sort         | n log(n)  | n²/2ᵈ (n log²n) | n²             | 1       | No     |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Comb_sort)
- [GeeksForGeeks](https://www.geeksforgeeks.org/comb-sort/)
- [YouTube](https://www.youtube.com/watch?v=J4_1A6lxfFQ)
