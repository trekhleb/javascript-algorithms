# Z Algorithm

The Z-algorithm finds occurrences of a "word" `W` 
within a main "text string" `T` in linear time `O(|W| + |T|)`.

Given a string `S` of length `n`, the algorithm produces 
an array, `Z` where `Z[i]` represents the longest substring 
starting from `S[i]` which is also a prefix of `S`. Finding
`Z` for the string obtained by concatenating the word, `W` 
with a nonce character, say `$` followed by the text, `T`,
helps with pattern matching, for if there is some index `i`
such that `Z[i]` equals the pattern length, then the pattern
must be present at that point.

While the `Z` array can be computed with two nested loops in `O(|W| * |T|)` time, the
following strategy shows how to obtain it in linear time, based 
on the idea that as we iterate over the letters in the string 
(index `i` from `1` to `n - 1`), we maintain an interval `[L, R]`
which is the interval with maximum `R` such that `1 ≤ L ≤ i ≤ R` 
and `S[L...R]` is a prefix that is also a substring (if no such 
interval exists, just let `L = R =  - 1`). For `i = 1`, we can 
simply compute `L` and `R` by comparing `S[0...]` to `S[1...]`.

**Example of Z array**

```
Index            0   1   2   3   4   5   6   7   8   9  10  11 
Text             a   a   b   c   a   a   b   x   a   a   a   z
Z values         X   1   0   0   3   1   0   0   2   2   1   0 
```

Other examples

```
str =  a a a a a a
Z[] =  x 5 4 3 2 1
```

```
str =  a a b a a c d
Z[] =  x 1 0 2 1 0 0
```

```
str =  a b a b a b a b
Z[] =  x 0 6 0 4 0 2 0
```

**Example of Z box**

![z-box](https://ivanyu.me/wp-content/uploads/2014/09/zalg1.png)

## Complexity

- **Time:** `O(|W| + |T|)`
- **Space:** `O(|W|)`

## References

- [GeeksForGeeks](https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/)
- [YouTube](https://www.youtube.com/watch?v=CpZh4eF8QBw&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=70)
- [Z Algorithm by Ivan Yurchenko](https://ivanyu.me/blog/2013/10/15/z-algorithm/)
