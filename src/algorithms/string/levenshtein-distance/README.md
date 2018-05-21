# Levenshtein Distance

The Levenshtein distance is a string metric for measuring the 
difference between two sequences. Informally, the Levenshtein 
distance between two words is the minimum number of 
single-character edits (insertions, deletions or substitutions) 
required to change one word into the other.

## Definition

Mathematically, the Levenshtein distance between two strings
`a` and `b` (of length `|a|` and `|b|` respectively) is given by
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/4cf357d8f2135035207088d2c7b890fb4b64e410)
where

![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/f0a48ecfc9852c042382fdc33c19e11a16948e85)

where 
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/52512ede08444b13838c570ba4a3fc71d54dbce9)
is the indicator function equal to `0` when
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/231fda9ee578f0328c5ca28088d01928bb0aaaec)
and equal to 1 otherwise, and
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/bdc0315678caad28648aafedb6ebafb16bd1655c)
is the distance between the first `i` characters of `a` and the first 
`j` characters of `b`.

Note that the first element in the minimum corresponds to 
deletion (from `a` to `b`), the second to insertion and 
the third to match or mismatch, depending on whether the 
respective symbols are the same.

## Example

For example, the Levenshtein distance between `kitten` and 
`sitting` is `3`, since the following three edits change one 
into the other, and there is no way to do it with fewer than 
three edits:

1. **k**itten → **s**itten (substitution of "s" for "k")
2. sitt**e**n → sitt**i**n (substitution of "i" for "e")
3. sittin → sittin**g** (insertion of "g" at the end).

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Levenshtein_distance)
- [YouTube](https://www.youtube.com/watch?v=We3YDTzNXEk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
