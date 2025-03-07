# Jump Game

## The Problem

Given an array of non-negative integers, you are initially positioned at 
the first index of the array. Each element in the array represents your maximum 
jump length at that position.

Determine if you are able to reach the last index.

**Example #1**

```
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example #2**

```
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
```

## Naming

We call a position in the array a **"good index"** if starting at that position,
we can reach the last index. Otherwise, that index is called a **"bad index"**.
The problem then reduces to whether or not index 0 is a "good index".

## Solutions

### Approach 1: Backtracking

This is the inefficient solution where we try every single jump pattern that 
takes us from the first position to the last. We start from the first position 
and jump to every index that is reachable. We repeat the process until last 
index is reached. When stuck, backtrack.

> See [backtrackingJumpGame.js](backtrackingJumpGame.js) file

**Time complexity:**: `O(2^n)`.
There are 2<sup>n</sup> (upper bound) ways of jumping from 
the first position to the last, where `n` is the length of 
array `nums`.

**Auxiliary Space Complexity**: `O(n)`.
Recursion requires additional memory for the stack frames.

### Approach 2: Dynamic Programming Top-down

Top-down Dynamic Programming can be thought of as optimized 
backtracking. It relies on the observation that once we determine 
that a certain index is good / bad, this result will never change.
This means that we can store the result and not need to recompute
it every time.

Therefore, for each position in the array, we remember whether the 
index is good or bad. Let's call this array memo and let its values
be either one of: GOOD, BAD, UNKNOWN. This technique is 
called memoization.

> See [dpTopDownJumpGame.js](dpTopDownJumpGame.js) file

**Time complexity:**: `O(n^2)`.
For every element in the array, say `i`, we are looking at the 
next `nums[i]` elements to its right aiming to find a GOOD
index. `nums[i]` can be at most `n`, where `n` is the length 
of array `nums`.

**Auxiliary Space Complexity**: `O(2 * n) = O(n)`.
First `n` originates from recursion. Second `n` comes from the 
usage of the memo table.

### Approach 3: Dynamic Programming Bottom-up

Top-down to bottom-up conversion is done by eliminating recursion. 
In practice, this achieves better performance as we no longer have the 
method stack overhead and might even benefit from some caching. More 
importantly, this step opens up possibilities for future optimization.
The recursion is usually eliminated by trying to reverse the order of 
the steps from the top-down approach.

The observation to make here is that we only ever jump to the right.
This means that if we start from the right of the array, every time 
we will query a position to our right, that position has already be
determined as being GOOD or BAD. This means we don't need to recurse
anymore, as we will always hit the memo table.

> See [dpBottomUpJumpGame.js](dpBottomUpJumpGame.js) file

**Time complexity:**: `O(n^2)`.
For every element in the array, say `i`, we are looking at the 
next `nums[i]` elements to its right aiming to find a GOOD
index. `nums[i]` can be at most `n`, where `n` is the length 
of array `nums`.

**Auxiliary Space Complexity**: `O(n)`.
This comes from the usage of the memo table.
 
### Approach 4: Greedy

Once we have our code in the bottom-up state, we can make one final,
important observation. From a given position, when we try to see if
we can jump to a GOOD position, we only ever use one - the first one.
In other words, the left-most one. If we keep track of this left-most
GOOD position as a separate variable, we can avoid searching for it in
the array. Not only that, but we can stop using the array altogether.

> See [greedyJumpGame.js](greedyJumpGame.js) file

**Time complexity:**: `O(n)`.
We are doing a single pass through the `nums` array, hence `n` steps,
where `n` is the length of array `nums`.

**Auxiliary Space Complexity**: `O(1)`.
We are not using any extra memory.

## References

- [Jump Game Fully Explained on LeetCode](https://leetcode.com/articles/jump-game/)
- [Dynamic Programming vs Divide and Conquer](https://itnext.io/dynamic-programming-vs-divide-and-conquer-2fea680becbe)
- [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming)
- [Memoization on Wikipedia](https://en.wikipedia.org/wiki/Memoization)
- [Top-Down and Bottom-Up Design on Wikipedia](https://en.wikipedia.org/wiki/Top-down_and_bottom-up_design)
