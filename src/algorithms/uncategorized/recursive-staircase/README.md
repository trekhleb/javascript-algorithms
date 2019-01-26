# Recursive Staircase Problem

## The Problem

There are `n` stairs, a person standing at the bottom wants to reach the top. The person can climb either `1` or `2` stairs at a time. _Count the number of ways, the person can reach the top._

![](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/nth-stair.png)

## The Solution

This is an interesting problem because there are several ways of how it may be solved that illustrate different programming paradigms.

- [Brute Force Recursive Solution](./recursiveStaircaseBF.js) - Time: `O(2^n)`; Space: `O(1)`
- [Recursive Solution With Memoization](./recursiveStaircaseMEM.js) - Time: `O(n)`; Space: `O(n)`
- [Dynamic Programming Solution](./recursiveStaircaseDP.js) - Time: `O(n)`; Space: `O(n)`
- [Iterative Solution](./recursiveStaircaseIT.js) - Time: `O(n)`; Space: `O(1)` 

## References

- [On YouTube by Gayle Laakmann McDowell](https://www.youtube.com/watch?v=eREiwuvzaUM&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=81&t=0s)
- [GeeksForGeeks](https://www.geeksforgeeks.org/count-ways-reach-nth-stair/)
