# Pancake Sort

Pancake sorting is the mathematical problem of sorting a disordered stack of pancakes in order of size when a spatula can be inserted at any point in the stack and used to flip all pancakes above it. A pancake number is the minimum number of flips required for a given number of pancakes.

Following are the detailed steps. Let given array be arr[] and size of array be n.

- Start from current size equal to n and reduce current size by one while it’s greater than 1. Let the current size be curr_size. Do following for every curr_size
  - Find index of the maximum element in arr [0..curr_szie-1]. Let the index be ‘mi’
  - Call flip(arr, mi)
  - Call flip(arr, curr_size-1)

## Complexity

| Name             |     Best      |    Average    |     Worst     | Memory | Stable | Comments |
| ---------------- | :-----------: | :-----------: | :-----------: | :----: | :----: | :------- |
| **Pancake sort** | n<sup>2</sup> | n<sup>2</sup> | n<sup>2</sup> |   1    |   No   |          |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Pancake_sorting)
[GeeksforGeeks](https://www.geeksforgeeks.org/pancake-sorting)
