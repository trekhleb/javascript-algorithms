# Square Matrix In-Place Rotation

## The Problem

You are given an `n x n` 2D matrix (representing an image). 
Rotate the matrix by `90` degrees (clockwise).

**Note**

You have to rotate the image **in-place**, which means you 
have to modify the input 2D matrix directly. **DO NOT** allocate
another 2D matrix and do the rotation.

## Examples

**Example #1**

Given input matrix:

```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
```

Rotate the input matrix in-place such that it becomes:

```
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
]
```

**Example #2**

Given input matrix:

```
[
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]
```

Rotate the input matrix in-place such that it becomes:

```
[
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
]
```

## Algorithm

We would need to do two reflections of the matrix: 

- reflect vertically
- reflect diagonally from bottom-left to top-right

Or we also could Furthermore, you can reflect diagonally 
top-left/bottom-right and reflect horizontally.

A common question is how do you even figure out what kind 
of reflections to do? Simply rip a square piece of paper,
write a random word on it so you know its rotation. Then,
flip the square piece of paper around until you figure out
how to come to the solution.
 
Here is an example of how first line may be rotated using
diagonal top-right/bottom-left rotation along with horizontal
rotation.

```
Let's say we have a string at the top of the matrix:

A B C
• • •
• • •

Let's do top-right/bottom-left diagonal reflection:

A B C
/ / •
/ • •  

And now let's do horizontal reflection:

A → →
B → →
C → →

The string has been rotated to 90 degree:

• • A
• • B
• • C
```

## References

- [LeetCode](https://leetcode.com/problems/rotate-image/description/)
