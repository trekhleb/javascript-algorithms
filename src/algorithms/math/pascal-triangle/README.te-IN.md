# Pascal's Triangle

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Mathematics లో **Pascal's triangle** అంటే [binomial coefficients](https://en.wikipedia.org/wiki/Binomial_coefficient)
ని త్రిభుజాకారంలో పెట్టిన array.

Pascal's triangle rows ని మామూలుగా పైన row `n = 0` (`0th` row) నుంచి నంబర్ చేస్తారు. ప్రతి
row లో entries ని ఎడమ నుంచి `k = 0` తో మొదలుపెట్టి నంబర్ చేస్తారు, పక్కన ఉన్న rows లోని నంబర్లతో
పోలిస్తే ఇవి కొంచెం జరిపి (staggered) ఉంటాయి. Triangle ని ఇలా కట్టొచ్చు: row `0` (అన్నిటికంటే పైన
ఉన్న row) లో ఒకే ఒక్క nonzero entry `1` ఉంటుంది. తర్వాత ప్రతి row లో ప్రతి entry ని, దానికి పైన
ఎడమ వైపు ఉన్న నంబర్ ని, పైన కుడి వైపు ఉన్న నంబర్ తో కలిపి తయారుచేస్తాం — ఖాళీ entries ని `0` గా
తీసుకుంటాం. ఉదాహరణకి, మొదటి (లేదా ఏ) row లోనైనా మొదటి నంబర్ `1` (`0`, `1` మొత్తం), అలాగే మూడో
row లో ఉన్న `1`, `3` నంబర్లని కలిపితే నాలుగో row లో `4` వస్తుంది.

![Pascal's Triangle](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

## Formula

Pascal's triangle లో `nth` row, `kth` column లో ఉన్న entry ని
![Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/206415d3742167e319b2e52c2ca7563b799abad7) అని రాస్తారు.
ఉదాహరణకి, అన్నిటికంటే పై row లో ఉన్న ఒకే ఒక్క nonzero entry
![Formula example](https://wikimedia.org/api/rest_v1/media/math/render/svg/b7e35f86368d5978b46c07fd6dddca86bd6e635c).

ఈ notation తో, పైన paragraph లో చెప్పిన పద్ధతిని ఇలా రాయొచ్చు:

![Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/203b128a098e18cbb8cf36d004bd7282b28461bf)

ఇది negative కాని ఏ integer `n` కైనా, `0` నుంచి `n` మధ్య (రెండూ కలిపి) ఉన్న ఏ integer `k` కైనా
వర్తిస్తుంది.

![Binomial Coefficient](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2457a7ef3c77831e34e06a1fe17a80b84a03181)

## Triangle entries ని O(n) టైమ్ లో లెక్కపెట్టడం

`lineNumber` అనే line లో `i`-th entry అంటే Binomial Coefficient `C(lineNumber, i)` అని మనకి
తెలుసు, ఇంకా అన్ని lines `1` value తో మొదలవుతాయి. ఐడియా ఏంటంటే `C(lineNumber, i-1)` వాడి
`C(lineNumber, i)` లెక్కపెట్టడం. దీన్ని ఇలా `O(1)` టైమ్ లో లెక్కపెట్టొచ్చు:

```
C(lineNumber, i)   = lineNumber! / ((lineNumber - i)! * i!)
C(lineNumber, i - 1) = lineNumber! / ((lineNumber - i + 1)! * (i - 1)!)
```

పైన రెండు expressions నుంచి ఈ expression తీసుకురావచ్చు:

```
C(lineNumber, i) = C(lineNumber, i - 1) * (lineNumber - i + 1) / i
```

కాబట్టి `C(lineNumber, i)` ని `C(lineNumber, i - 1)` నుంచి `O(1)` టైమ్ లో లెక్కపెట్టొచ్చు.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Pascal%27s_triangle)
- [GeeksForGeeks](https://www.geeksforgeeks.org/pascal-triangle/)
