# Interpolation Search

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

**Interpolation search** అనేది ఒక array లో key కోసం వెతికే algorithm — ఆ array, keys కి ఇచ్చిన
numerical values (key values) ని బట్టి order లో పెట్టి ఉంటుంది.

ఉదాహరణకి, సమానంగా పంచబడిన (uniformly distributed) `n` values ఉన్న sorted array `arr[]` మన దగ్గర
ఉంది, అందులో ఒక particular element `x` కోసం వెతికే function రాయాలి.

**Linear Search** element ని `O(n)` టైమ్ లో కనుక్కుంటుంది, **Jump Search** కి `O(√ n)` టైమ్ పడుతుంది,
**Binary Search** కి `O(Log n)` టైమ్ పడుతుంది.

Sorted array లో values _సమానంగా_ పంచబడి ఉన్నప్పుడు, **Interpolation Search** అనేది Binary Search కంటే
బెటర్. Binary Search ఎప్పుడూ మధ్యలో ఉన్న element దగ్గరికే వెళ్ళి చెక్ చేస్తుంది. కానీ interpolation
search, వెతుకుతున్న key value ని బట్టి వేరువేరు locations కి వెళ్ళొచ్చు. ఉదాహరణకి, key value చివరి
element కి దగ్గరగా ఉంటే, interpolation search చివరి వైపు నుంచే search మొదలుపెట్టే chance ఎక్కువ.

ఎక్కడ వెతకాలో position కనుక్కోవడానికి ఈ formula వాడుతుంది:

```
// The idea of formula is to return higher value of pos
// when element to be searched is closer to arr[hi]. And
// smaller value when closer to arr[lo]
pos = lo + ((x - arr[lo]) * (hi - lo) / (arr[hi] - arr[Lo]))

arr[] - Array where elements need to be searched
x - Element to be searched
lo - Starting index in arr[]
hi - Ending index in arr[]
```

(ఈ formula ఐడియా ఏంటంటే — వెతికే element `arr[hi]` కి దగ్గరగా ఉంటే `pos` కి పెద్ద value, `arr[lo]` కి
దగ్గరగా ఉంటే చిన్న value ఇవ్వడం. ఇక్కడ `arr[]` అంటే వెతకాల్సిన array, `x` అంటే వెతకాల్సిన element,
`lo` అంటే `arr[]` లో మొదటి index, `hi` అంటే `arr[]` లో చివరి index.)

## Complexity

**Time complexity**: `O(log(log(n))`

## References

- [GeeksForGeeks](https://www.geeksforgeeks.org/interpolation-search/)
- [Wikipedia](https://en.wikipedia.org/wiki/Interpolation_search)
