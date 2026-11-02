# Hill Cipher

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

**Hill cipher** అనేది linear algebra మీద బేస్ అయిన ఒక [polygraphic substitution](https://en.wikipedia.org/wiki/Polygraphic_substitution) cipher.

ప్రతి letter ని [modulo](https://en.wikipedia.org/wiki/Modular_arithmetic) `26` లో ఒక నంబర్ గా చూపిస్తాం. ఈ cipher కి ఇది తప్పనిసరి కాదు కానీ, మామూలుగా ఈ సింపుల్ పద్ధతే వాడతారు:

| **Letter** | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Number** | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |

## Encryption

ఒక message ని encrypt చేయడానికి, ప్రతి `n` letters block ని (దాన్ని `n` components ఉన్న ఒక vector లాగా చూస్తాం) ఒక invertible `n × n` matrix తో, modulus `26` లో గుణిస్తాం.

Encryption కి వాడే ఈ matrix నే _cipher key_ అంటారు. దీన్ని invertible `n × n` matrices (modulo `26`) లో నుంచి random గా ఎంచుకోవాలి. ఎన్ని letters ఉన్న alphabet కైనా ఈ cipher ని మార్చి వాడుకోవచ్చు — లెక్కలన్నీ modulo `26` బదులు modulo (letters సంఖ్య) లో చేస్తే చాలు.

`ACT` అనే message, ఇంకా కింద ఉన్న key (letters లో అయితే `GYB/NQK/URP`) తీసుకుందాం:

```
| 6   24   1  |
| 13  16   10 |
| 20  17   15 |
```

`A` అంటే `0`, `C` అంటే `2`, `T` అంటే `19` కాబట్టి, message ఈ vector అవుతుంది:

```
|  0  |
|  2  |
|  19 |
```

అంటే, encrypt అయిన vector ఇలా వస్తుంది:

```
| 6   24   1  |  |  0  |   |  67  |   |  15 |
| 13  16   10 |  |  2  | = |  222 | ≡ |  14 | (mod 26)
| 20  17   15 |  |  19 |   |  319 |   |  7  |
```

దీనికి సరిపోయే ciphertext `POH`.

ఇప్పుడు మన message `CAT` అనుకుందాం (`ACT` లో ఉన్న letters నే వాడుతున్నాం, గమనించండి), అంటే:

```
|  2  |
|  0  |
|  19 |
```

ఈసారి encrypt అయిన vector:

```
| 6   24   1  |  |  2  |   |  31  |   |  5  |
| 13  16   10 |  |  0  | = |  216 | ≡ |  8  | (mod 26)
| 20  17   15 |  |  19 |   |  325 |   |  13 |
```

దీనికి సరిపోయే ciphertext `FIN`. చూశారా, ప్రతి letter మారిపోయింది.

## Decryption

Message ని decrypt చేయడానికి, ప్రతి block ని encryption కి వాడిన matrix యొక్క inverse తో గుణిస్తాం. ciphertext ని మళ్ళీ vector గా మార్చి, key matrix యొక్క inverse matrix (letters లో `IFK/VIV/VMI`) తో గుణిస్తే సరిపోతుంది. (Inverse matrix ఎలా కనుక్కోవాలో తెలియాలంటే [matrix inversion](https://en.wikipedia.org/wiki/Matrix_inversion) చూడండి.) పైన example లో వాడిన matrix కి modulo 26 లో inverse ఇది:

```
                -1
| 6   24   1  |                | 8   5    10 |
| 13  16   10 |    (mod 26) ≡  | 21  8    21 |
| 20  17   15 |                | 21  12   8  |
```

పైన వచ్చిన ciphertext `POH` తీసుకుంటే:

```
| 8   5    10 |  |  15 |   |  260 |   |  0  |
| 21  8    21 |  |  14 | = |  574 | ≡ |  2  | (mod 26)
| 21  12   8  |  |  7  |   |  539 |   |  19 |
```

అనుకున్నట్టే మళ్ళీ `ACT` వచ్చేసింది.

## Encrypt చేసే matrix ని ఎలా ఎంచుకోవాలి

Encrypt చేసే matrix ని ఎంచుకునేటప్పుడు రెండు చిక్కులు ఉంటాయి:

1. అన్ని matrices కి inverse ఉండదు. Matrix యొక్క [determinant](https://en.wikipedia.org/wiki/Determinant) zero కాకపోతేనే దానికి inverse ఉంటుంది.
2. Encrypt చేసే matrix యొక్క determinant కి, modular base కి common factors ఏమీ ఉండకూడదు.

అంటే పైన లాగా modulo `26` లో పని చేస్తుంటే, determinant zero కాకూడదు, ఇంకా `2` తో గానీ `13` తో గానీ భాగించబడకూడదు. Determinant `0` అయినా, లేదా modular base తో common factors ఉన్నా, ఆ matrix ని Hill cipher లో వాడలేం — వేరే matrix ఎంచుకోవాలి (లేకపోతే decrypt చేయడం కుదరదు). అదృష్టం ఏంటంటే, Hill cipher కి కావాల్సిన conditions కి సరిపోయే matrices చాలానే దొరుకుతాయి.

## References

- [Wikipedia లో Hill cipher](https://en.wikipedia.org/wiki/Hill_cipher)
- [MathIsFun లో Matrix inversion](https://www.mathsisfun.com/algebra/matrix-inverse.html)
- [GeeksForGeeks](https://www.geeksforgeeks.org/hill-cipher/)
