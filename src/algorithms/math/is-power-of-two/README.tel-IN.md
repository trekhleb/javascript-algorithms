# Is a power of two

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

ఒక positive integer ఇస్తే, అది రెండు యొక్క power ఆ కాదా కనుక్కునే function రాయాలి.

**Naive solution**

Naive solution లో, నంబర్ `1` అయ్యేదాకా దాన్ని రెండుతో భాగిస్తూనే ఉంటాం, ప్రతిసారి
భాగించాక శేషం `0` వస్తుందా అని చెక్ చేస్తాం. రాకపోతే, ఆ నంబర్ రెండు యొక్క power కాదు.

**Bitwise solution**

Binary రూపంలో రెండు యొక్క powers కి ఎప్పుడూ ఒకే ఒక్క bit set అయి ఉంటుంది.
ఒక్క signed integer మాత్రమే దీనికి మినహాయింపు (ఉదాహరణకి -128 value ఉన్న 8-bit
signed integer ఇలా ఉంటుంది: `10000000`)

```
1: 0001
2: 0010
4: 0100
8: 1000
```

కాబట్టి నంబర్ zero కంటే పెద్దదా అని చెక్ చేశాక, ఒకే ఒక్క bit set అయి ఉందా అని test
చేయడానికి ఒక bitwise trick వాడొచ్చు.

```
number & (number - 1)
```

ఉదాహరణకి, నంబర్ `8` కి ఆ operations ఇలా ఉంటాయి:

```
  1000
- 0001
  ----
  0111

  1000
& 0111
  ----
  0000
```

## References

- [GeeksForGeeks](https://www.geeksforgeeks.org/program-to-find-whether-a-no-is-power-of-two/)
- [Stanford లో Bitwise Solution](http://www.graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2)
- [YouTube లో Binary number తీసివేత](https://www.youtube.com/watch?v=S9LJknZTyos&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=66)
