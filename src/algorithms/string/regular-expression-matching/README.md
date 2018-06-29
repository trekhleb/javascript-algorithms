# Regular Expression Matching

Given an input string `s` and a pattern `p`, implement regular 
expression matching with support for `.` and `*`.

- `.` Matches any single character.
- `*` Matches zero or more of the preceding element.

The matching should cover the **entire** input string (not partial).

**Note**

- `s` could be empty and contains only lowercase letters `a-z`.
- `p` could be empty and contains only lowercase letters `a-z`, and characters like `.` or `*`.

## Examples

**Example #1**

Input:
```
s = 'aa'
p = 'a'
```

Output: `false`

Explanation: `a` does not match the entire string `aa`.

**Example #2**

Input:
```
s = 'aa'
p = 'a*'
```

Output: `true`

Explanation: `*` means zero or more of the preceding element, `a`. 
Therefore, by repeating `a` once, it becomes `aa`.

**Example #3**

Input:

```
s = 'ab'
p = '.*'
```

Output: `true`

Explanation: `.*` means "zero or more (`*`) of any character (`.`)".

**Example #4**

Input:

```
s = 'aab'
p = 'c*a*b'
```

Output: `true`

Explanation: `c` can be repeated 0 times, `a` can be repeated 
1 time. Therefore it matches `aab`.

## References

- [YouTube](https://www.youtube.com/watch?v=l3hda49XcDE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=71&t=0s)
- [LeetCode](https://leetcode.com/problems/regular-expression-matching/description/)
