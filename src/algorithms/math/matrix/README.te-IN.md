# Matrices

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Mathematics లో **matrix** (బహువచనం **matrices**) అంటే rows, columns లో పెట్టిన నంబర్లు, symbols, లేదా expressions ఉన్న ఒక దీర్ఘచతురస్రాకార array లేదా table. ఉదాహరణకి, కింద ఉన్న matrix dimension `2 × 3` ("two by three" అని చదువుతారు), ఎందుకంటే అందులో రెండు rows, మూడు columns ఉన్నాయి:

```
| 1  9 -13 |
| 20 5 -6  |
```

![An `m × n` matrix](https://upload.wikimedia.org/wikipedia/commons/b/bf/Matris.png)

ఒక `m × n` matrix: `m` rows అడ్డంగా (horizontal), `n` columns నిలువుగా (vertical) ఉంటాయి. Matrix లో ప్రతి element ని మామూలుగా రెండు subscripts ఉన్న variable తో చూపిస్తారు. ఉదాహరణకి, <i>a<sub>2,1</sub></i> అంటే matrix లో రెండో row, మొదటి column లో ఉన్న element

## Matrices మీద operations

### కూడిక (Addition)

రెండు matrices ని కలపడానికి: ఒకే position లో ఉన్న నంబర్లని కలపండి:

![Matrices addition](https://www.mathsisfun.com/algebra/images/matrix-addition.gif)

రెండు matrices ఒకే సైజ్ లో ఉండాలి, అంటే rows సంఖ్య సమానంగా ఉండాలి, columns సంఖ్య కూడా సమానంగా ఉండాలి.

### తీసివేత (Subtracting)

రెండు matrices ని తీసివేయడానికి: ఒకే position లో ఉన్న నంబర్లని తీసివేయండి:

![Matrices subtraction](https://www.mathsisfun.com/algebra/images/matrix-subtraction.gif)

### Constant తో గుణించడం

ఒక matrix ని ఒక constant తో గుణించొచ్చు (ఇక్కడ value 2):

![Matrices multiplication be a constant](https://www.mathsisfun.com/algebra/images/matrix-multiply-constant.gif)

### ఇంకో Matrix తో గుణించడం

ఒక matrix ని ఇంకో matrix తో గుణించాలంటే rows, columns యొక్క [dot product](https://www.mathsisfun.com/algebra/vectors-dot-product.html) చేయాలి.

**1st row**, **1st column** కి answer కనుక్కోవడానికి:

![Matrices multiplication - 1st step](https://www.mathsisfun.com/algebra/images/matrix-multiply-a.svg)

1st row, 2nd column కి ఇలా:

![Matrices multiplication - 2st step](https://www.mathsisfun.com/algebra/images/matrix-multiply-b.svg)

మిగతా rows, columns కి కూడా ఇలాగే చేస్తే, ఈ result matrix వస్తుంది:

![Matrices multiplication - Result](https://www.mathsisfun.com/algebra/images/matrix-multiply-c.svg)

### Transposing

Matrix ని "transpose" చేయడానికి, rows ని columns గా, columns ని rows గా మార్చండి.

Transpose అని చెప్పడానికి కుడి వైపు పైన ఒక "T" పెడతాం:

![Transposing](https://www.mathsisfun.com/algebra/images/matrix-transpose.gif)

## References

- [MathIsFun లో Matrices](https://www.mathsisfun.com/algebra/matrix-introduction.html)
- [Wikipedia లో Matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics))
