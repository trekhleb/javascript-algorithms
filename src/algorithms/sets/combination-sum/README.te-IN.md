# Combination Sum Problem

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Candidate numbers ఉన్న ఒక **set** (`candidates`) **(duplicates లేకుండా)**, ఇంకా ఒక target number
(`target`) ఇస్తే — `candidates` లో ఏ numbers కలిపితే `target` వస్తుందో, అలాంటి అన్ని unique
combinations కనుక్కోవాలి.

`candidates` నుంచి **ఒకే** number ని ఎన్నిసార్లైనా ఎంచుకోవచ్చు.

**Note:**

- అన్ని numbers (`target` తో సహా) positive integers.
- Solution set లో ఒకే combination రెండుసార్లు ఉండకూడదు.

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

ఈ problem లో బెస్ట్ result గానీ, results సంఖ్య గానీ కాదు — possible అయిన అన్ని results కావాలి.
కాబట్టి DP (dynamic programming) గురించి ఆలోచించాల్సిన అవసరం లేదు, దీన్ని handle చేయడానికి
recursion వాడే backtracking approach కావాలి.

`candidates = [2, 3]`, `target = 6` అయినప్పుడు decision tree example ఇది:

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
