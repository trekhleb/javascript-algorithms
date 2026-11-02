# Longest Increasing Subsequence

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Longest increasing subsequence problem అంటే — ఇచ్చిన sequence లో ఒక subsequence కనుక్కోవాలి,
అందులో elements చిన్న నుంచి పెద్ద వరకు sort అయిన order లో ఉండాలి, ఇంకా ఆ subsequence వీలైనంత
పొడవుగా ఉండాలి. ఈ subsequence వరుసగా పక్కపక్కనే ఉండాల్సిన అవసరం లేదు, ఒక్కటే ఉండాల్సిన అవసరం కూడా లేదు.

## Complexity

Longest increasing subsequence problem ని `O(n log n)` టైమ్ లో solve చేయొచ్చు, ఇక్కడ `n` అంటే
input sequence పొడవు.

Dynamic programming approach complexity `O(n * n)`.

## Example

Binary Van der Corput sequence లో మొదటి 16 terms

```
0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15
```

లో ఒక longest increasing subsequence ఇది

```
0, 2, 6, 9, 11, 15.
```

ఈ subsequence పొడవు ఆరు; input sequence లో ఏడు elements ఉన్న increasing subsequence ఏదీ లేదు.
ఈ example లో longest increasing subsequence ఒక్కటే కాదు: ఉదాహరణకి,

```
0, 4, 6, 9, 11, 15 or
0, 2, 6, 9, 13, 15 or
0, 4, 6, 9, 13, 15
```

ఇవి కూడా అదే input sequence లో అంతే పొడవు ఉన్న increasing subsequences.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Longest_increasing_subsequence)
- [YouTube లో Dynamic Programming Approach](https://www.youtube.com/watch?v=CE2b_-XfVDk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
