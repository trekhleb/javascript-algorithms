# Longest Common Subsequence (LCS)

The **Longest Common Subsequence (LCS)** problem is finding the longest subsequence common to two sequences. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

## Definition

Given two sequences `X` and `Y`, a sequence `Z` is a common subsequence of `X` and `Y` if `Z` is a subsequence of both `X` and `Y`.

For example:
- If `X = "ABCDGH"` and `Y = "AEDFHR"`, then `"ADH"` is a common subsequence with length 3
- If `X = "AGGTAB"` and `Y = "GXTXAYB"`, then `"GTAB"` is a common subsequence with length 4

## Difference from Longest Common Substring

**Important distinction:**
- **Subsequence**: Characters don't need to be contiguous (can skip characters)
- **Substring**: Characters must be contiguous (no gaps allowed)

Example:
- For strings "ABCDGH" and "AEDFHR":
  - LCS (subsequence): "ADH" ✓ (can skip characters)
  - LCS (substring): "" (no common contiguous substring of length > 1)

## Algorithm

This implementation uses **dynamic programming** with a bottom-up approach:

1. Create a 2D table `dp[m+1][n+1]` where `m` and `n` are lengths of the two strings
2. Fill the table using the recurrence relation:
   ```
   dp[i][j] = dp[i-1][j-1] + 1                    if str1[i-1] == str2[j-1]
   dp[i][j] = max(dp[i-1][j], dp[i][j-1])         otherwise
   ```
3. Backtrack from `dp[m][n]` to construct the actual LCS string

## Complexity

- **Time Complexity**: `O(m * n)` where `m` and `n` are the lengths of the two strings
- **Space Complexity**: `O(m * n)` for the DP table

## Applications

The LCS algorithm has many practical applications:

1. **Version Control Systems**: Git uses LCS-based algorithms to compute diffs between file versions
2. **Bioinformatics**: DNA sequence alignment and comparison
3. **Plagiarism Detection**: Finding similar content between documents
4. **File Comparison**: Tools like `diff` use LCS to show differences
5. **Data Synchronization**: Determining minimal changes needed to sync data
6. **Spell Checkers**: Finding similar words for suggestions

## Examples

### Example 1: Basic LCS
```javascript
longestCommonSubsequence('ABCDGH', 'AEDFHR');
// Returns: 'ADH'
// Explanation: A-D-H are common in both strings in order
```

### Example 2: Programming Terms
```javascript
longestCommonSubsequence('algorithms', 'logarithm');
// Returns: 'lgrithm'
```

### Example 3: No Common Subsequence
```javascript
longestCommonSubsequence('ABC', 'DEF');
// Returns: ''
```

### Example 4: One String is Subsequence of Another
```javascript
longestCommonSubsequence('ABCDEF', 'ACE');
// Returns: 'ACE'
```

## Visualization

For strings `X = "AGGTAB"` and `Y = "GXTXAYB"`:

```
    ""  G  X  T  X  A  Y  B
""   0  0  0  0  0  0  0  0
A    0  0  0  0  0  1  1  1
G    0  1  1  1  1  1  1  1
G    0  1  1  1  1  1  1  1
T    0  1  1  2  2  2  2  2
A    0  1  1  2  2  3  3  3
B    0  1  1  2  2  3  3  4
```

The value at `dp[6][7] = 4` indicates the LCS length is 4.
Backtracking gives us: `"GTAB"`

## References

- [Wikipedia - Longest Common Subsequence](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)
- [GeeksforGeeks - LCS](https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/)
- [YouTube - Dynamic Programming LCS](https://www.youtube.com/watch?v=ASoaQq66foQ)
