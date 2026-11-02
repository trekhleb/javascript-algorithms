# Least common multiple

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Arithmetic, number theory లో, `a`, `b` అనే రెండు integers యొక్క least common multiple
(lowest common multiple, లేదా smallest common multiple అని కూడా అంటారు) ని మామూలుగా
`LCM(a, b)` అని రాస్తారు. అంటే `a`, `b` రెండిటితోనూ భాగించబడే అతి చిన్న positive integer.
Integers ని zero తో భాగించడం కుదరదు కాబట్టి, `a`, `b` రెండూ zero కాకపోతేనే ఈ definition కి
అర్థం ఉంటుంది. కానీ కొంతమంది authors అన్ని `a` లకి `lcm(a,0)` ని `0` గా define చేస్తారు —
divisibility lattice లో `lcm` ని least upper bound గా తీసుకుంటే అదే వస్తుంది.

## Example

4, 6 కి LCM ఎంత?

`4` యొక్క multiples:

```
4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, ...
```

`6` యొక్క multiples:

```
6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, ...
```

`4`, `6` యొక్క common multiples అంటే రెండు lists లోనూ ఉన్న నంబర్లు:

```
12, 24, 36, 48, 60, 72, ....
```

కాబట్టి, `4`, `6` నంబర్ల మొదటి కొన్ని common multiples ఉన్న ఈ list నుంచి, వాటి least
common multiple `12`.

## Least common multiple లెక్కపెట్టడం

కింద ఉన్న formula తో least common multiple లెక్కని greatest common divisor (GCD) లెక్కగా
మార్చేయొచ్చు (GCD ని greatest common factor అని కూడా అంటారు):

```
lcm(a, b) = |a * b| / gcd(a, b)
```

![LCM](https://upload.wikimedia.org/wikipedia/commons/c/c9/Symmetrical_5-set_Venn_diagram_LCM_2_3_4_5_7.svg)

`2`, `3`, `4`, `5`, `7` యొక్క combinations కి least common multiples చూపించే Venn diagram
(`6` ని వదిలేశారు, ఎందుకంటే అది `2 × 3`, ఆ రెండూ ఇప్పటికే ఉన్నాయి).

ఉదాహరణకి, ఒక card game లో cards ని `5` మంది players వరకు సమానంగా పంచాలంటే కనీసం `60`
cards కావాలి — `2`, `3`, `4`, `5` sets కలిసే చోట ఉన్న నంబర్ అది, `7` set లో మాత్రం కాదు.

## References

[Wikipedia](https://en.wikipedia.org/wiki/Least_common_multiple)
