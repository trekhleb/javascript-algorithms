# Combination Sum Problem

Given a **set** of candidate numbers (`candidates`) **(without duplicates)** and 
a target number (`target`), find all unique combinations in `candidates` where 
the candidate numbers sums to `target`.

The **same** repeated number may be chosen from `candidates` unlimited number 
of times.

**Note:**

- All numbers (including `target`) will be positive integers.
- The solution set must not contain duplicate combinations.

## Examples

```
Input: candidates = [2,3,6,7], target = 7,

A solution set is:
[
  [7],
  [2,2,3]
]
```

```
Input: candidates = [2,3,5], target = 8,

A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

## Explanations

Since the problem is to get all the possible results, not the best or the 
number of result, thus we don’t need to consider DP (dynamic programming),
backtracking approach using recursion is needed to handle it.

Here is an example of decision tree for the situation when `candidates = [2, 3]` and `target = 6`:

```
                0
              /   \
           +2      +3
          /   \      \
       +2       +3    +3
      /  \     /  \     \
    +2    ✘   ✘   ✘     ✓
   /  \
  ✓    ✘    
```

## References

- [LeetCode](https://leetcode.com/problems/combination-sum/description/)
