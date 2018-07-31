# Unique Paths Problem

A robot is located at the top-left corner of a `m x n` grid 
(marked 'Start' in the diagram below).

The robot can only move either down or right at any point in 
time. The robot is trying to reach the bottom-right corner 
of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![Unique Paths](https://leetcode.com/static/images/problemset/robot_maze.png)

## Examples

**Example #1**

```
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
```

**Example #2**

```
Input: m = 7, n = 3
Output: 28
```

## Algorithms

### Backtracking

First thought that might came to mind is that we need to build a decision tree 
where `D` means moving down and `R` means moving right. For example in case
of boars `width = 3` and `height = 2` we will have the following decision tree:

```
                START
                /   \
               D     R
             /     /   \
           R      D      R
         /      /         \
        R      R            D

       END    END          END
```

We can see three unique branches here that is the answer to our problem.

**Time Complexity**: `O(2 ^ n)` - roughly in worst case with square board
of size `n`.

**Auxiliary Space Complexity**: `O(m + n)` - since we need to store current path with
positions.

### Dynamic Programming

Let's treat `BOARD[i][j]` as our sub-problem.

Since we have restriction of moving only to the right
and down we might say that number of unique paths to the current
cell is a sum of numbers of unique paths to the cell above the
current one and to the cell to the left of current one.

```
BOARD[i][j] = BOARD[i - 1][j] + BOARD[i][j - 1]; // since we can only move down or right.
```

Base cases are:

```
BOARD[0][any] = 1; // only one way to reach any top slot.
BOARD[any][0] = 1; // only one way to reach any slot in the leftmost column.
```

For the board `3 x 2` our dynamic programming matrix will look like:

|     | 0   | 1   | 1   |
|:---:|:---:|:---:|:---:|
|**0**| 0   | 1   | 1   |
|**1**| 1   | 2   | 3   |

Each cell contains the number of unique paths to it. We need 
the bottom right one with number `3`.

**Time Complexity**: `O(m * n)` - since we're going through each cell of the DP matrix.

**Auxiliary Space Complexity**: `O(m * n)` - since we need to have DP matrix.

### Pascal's Triangle Based

This question is actually another form of Pascal Triangle.

The corner of this rectangle is at `m + n - 2` line, and 
at `min(m, n) - 1` position of the Pascal's Triangle.

## References

- [LeetCode](https://leetcode.com/problems/unique-paths/description/)
