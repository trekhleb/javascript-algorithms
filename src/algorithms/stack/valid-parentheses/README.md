# Valid Parentheses Problem

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

`Input: s = "()"`

Output: true

Example 2:

`Input: s = "()[]{}"`

Output: true

Example 3:

`Input: s = "(]"`

Output: false

This is actually a very common interview question and a very good example of how to use a stack data structure to solve problems. 

## Solution
The problem can be solved in two ways

### Bruteforce Approach
We can iterate through the string and then, for each opening character in the string, search for its matching closing character. Once we find the matching closing character, we remove both characters and then repeat the iteration. If we don't find a closing character for an opening character, then the string is invalid. The time complexity of this would be O(n^2), which is not so efficient.

### Using a Stack
We can use a hashtable to store all opening characters as keys, with the respective closing character as the value. We can then iterate through the string, and if we encounter an opening parenthesis, we push its closing character to the stack. If we encounter a closing parenthesis, then we pop the stack and confirm that the popped element is equal to the current closing parenthesis character. If it is not, then the string is invalid. At the end of the iteration, we also need to check that the stack is empty. If it is not, then the string is invalid. If it is, then the string is valid (note that this makes an empty string valid — there are no brackets to mismatch). This is a more efficient approach with a time complexity and space complexity of O(n).


## References

- [Leetcode](https://leetcode.com/problems/valid-parentheses/)
