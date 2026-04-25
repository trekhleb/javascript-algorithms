# Exponential Search

Exponential search (also called **doubling search** or **galloping search**) is
an algorithm designed to find an element in a **sorted array**. It works in two
phases:

1. **Finding a Range**: Start at index `1`, then keep doubling the index
   (`1, 2, 4, 8, 16, ...`) until the element at that index is greater than or
   equal to the target. This gives us a range `[i/2, i]` where the target must
   reside.

2. **Binary Search**: Apply Binary Search within the identified range.

## Advantage Over Binary Search

Exponential search is particularly useful when:
- The **array is unbounded** (size is unknown).
- The **target element is near the beginning** of the array. In this case,
  exponential search runs in O(log i) time (where `i` is the target's index),
  which can be much faster than O(log n).

## Complexity

| | Complexity |
|---|---|
| **Time (Best)** | O(1) |
| **Time (Average)** | O(log i) where i is the target index |
| **Time (Worst)** | O(log n) |
| **Space** | O(1) |

## Example

![Exponential Search](https://upload.wikimedia.org/wikipedia/commons/4/45/Exponential_search.svg)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Exponential_search)
- [GeeksforGeeks](https://www.geeksforgeeks.org/exponential-search/)
