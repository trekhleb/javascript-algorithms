# Pancake Sort

Pancake sorting is a sorting algorithm in which the only allowed operation is to "flip" one end of the list. The goal is to sort the array by repeatedly flipping portions of it.

The algorithm is inspired by the real-world problem of sorting a stack of pancakes by size using a spatula. A flip operation reverses the order of elements from the beginning of the array up to a specified index.

![Pancake Sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Pancake_sort_operation.png)

## Algorithm

The algorithm works by repeatedly finding the maximum element and moving it to its correct position at the end of the array through a series of flips:

1. Find the maximum element in the unsorted portion of the array
2. If it's not at the beginning, flip it to the beginning
3. Flip it to its correct position at the end
4. Reduce the size of the unsorted portion and repeat

## Example

Given an array: `[3, 6, 2, 8, 4, 5]`

**Step 1:** Find max (8) at index 3
- Flip to beginning: `[8, 6, 3, 2, 4, 5]`
- Flip to end: `[5, 4, 2, 3, 6, 8]`

**Step 2:** Find max (6) at index 4
- Flip to beginning: `[6, 4, 2, 3, 5, 8]`
- Flip to position 4: `[5, 3, 2, 4, 6, 8]`

**Step 3:** Continue until sorted: `[2, 3, 4, 5, 6, 8]`

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Pancake sort**      | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Pancake_sorting)
- [GeeksforGeeks](https://www.geeksforgeeks.org/pancake-sorting/)
- [YouTube](https://www.youtube.com/watch?v=kk-_DDgoXfg)
