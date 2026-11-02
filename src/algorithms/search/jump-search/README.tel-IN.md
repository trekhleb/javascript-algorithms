# Jump Search

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Binary Search లాగానే, **Jump Search** (లేదా **Block Search**) కూడా sort అయిన arrays కోసం వాడే
searching algorithm. బేసిక్ ఐడియా ఏంటంటే — అన్ని elements వెతకకుండా, fixed steps తో ముందుకి
దూకుతూ లేదా కొన్ని elements ని skip చేస్తూ, (linear search కంటే) తక్కువ elements చెక్ చేయడం.

ఉదాహరణకి, మన దగ్గర `n` సైజ్ ఉన్న array `arr[]`, `m` సైజ్ ఉన్న block (దూకాల్సింది) ఉన్నాయి అనుకుందాం.
అప్పుడు `arr[0]`, `arr[m]`, `arr[2 * m]`, ..., `arr[k * m]` అలా indexes దగ్గర వెతుకుతాం.
`arr[k * m] < x < arr[(k+1) * m]` అనే interval దొరికాక, element `x` కోసం index `k * m` నుంచి
linear search చేస్తాం.

**ఎంత block సైజ్ skip చేస్తే బెస్ట్?**
Worst case లో, `n/m` jumps చేయాలి, ఇంకా చివరగా చెక్ చేసిన value వెతుకుతున్న element కంటే పెద్దదైతే,
linear search కోసం ఇంకో `m - 1` comparisons చేయాలి. కాబట్టి worst case లో మొత్తం comparisons
`((n/m) + m - 1)`. `m = √n` అయినప్పుడు `((n/m) + m - 1)` function value అతి తక్కువగా ఉంటుంది.
కాబట్టి, బెస్ట్ step సైజ్ `m = √n`.

## Complexity

**Time complexity**: `O(√n)` - ఎందుకంటే `√n` సైజ్ blocks తో search చేస్తాం.

## References

- [GeeksForGeeks](https://www.geeksforgeeks.org/jump-search/)
- [Wikipedia](https://en.wikipedia.org/wiki/Jump_search)
