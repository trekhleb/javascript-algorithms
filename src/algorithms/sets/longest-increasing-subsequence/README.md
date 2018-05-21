# Longest Increasing Subsequence

The longest increasing subsequence problem is to find a subsequence of a 
given sequence in which the subsequence's elements are in sorted order, 
lowest to highest, and in which the subsequence is as long as possible. 
This subsequence is not necessarily contiguous, or unique. 

## Complexity

The longest increasing subsequence problem is solvable in 
time `O(n log n)`, where `n` denotes the length of the input sequence.

Dynamic programming approach has complexity `O(n * n)`.

## Example

In the first 16 terms of the binary Van der Corput sequence

```
0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15
```

a longest increasing subsequence is

```
0, 2, 6, 9, 11, 15.
```

This subsequence has length six; 
the input sequence has no seven-member increasing subsequences. 
The longest increasing subsequence in this example is not unique: for 
instance,

```
0, 4, 6, 9, 11, 15 or
0, 2, 6, 9, 13, 15 or
0, 4, 6, 9, 13, 15
```

are other increasing subsequences of equal length in the same 
input sequence.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Longest_increasing_subsequence)
- [Dynamic Programming Approach on YouTube](https://www.youtube.com/watch?v=CE2b_-XfVDk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
