# Z-algorithm

The Z-algorithm finds occurrences of a "word" `W` 
within a main "text string" `T` in linear time.

Given a string `S` of length `n`, the algorithm produces 
an array, `Z` where `Z[i]` represents the ongest substring 
starting from `S[i]` which is also a prefix of `S`. Finding
`Z` for the string obtained by concatenating the word, `W` 
with a nonce character, say `$` followed by the text, `T`,
helps with pattern matching, for if there is some index `i`
such that `Z[i]` equals the pattern length, then the pattern
must be present at that point.

While the `Z` array can be computed with two nested loops, the
following strategy shows how to obtain it in linear time, based 
on the idea that as we iterate over the letters in the string 
(index `i` from `1` to `n - 1`), we maintain an interval `[L, R]`
which is the interval with maximum `R` such that `1 ≤ L ≤ i ≤ R` 
and `S[L...R]` is a prefix that is also a substring (if no such 
interval exists, just let `L = R =  - 1`). For `i = 1`, we can 
simply compute `L` and `R` by comparing `S[0...]` to `S[1...]`.

## Complexity

- **Time:** `O(|W| + |T|)`
- **Space:** `O(|W|)`