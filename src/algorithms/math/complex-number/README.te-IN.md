# Complex Number

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Français_](README.fr-FR.md)

**Complex number** అంటే `a + b * i` రూపంలో రాయగలిగే నంబర్ — ఇక్కడ `a`, `b` real numbers,
`i` అనేది `x^2 = −1` equation కి solution. ఏ _real number_ కూడా ఈ equation కి సరిపోదు కాబట్టి,
`i` ని _imaginary number_ అంటారు. Complex number `a + b * i` లో `a` ని _real part_ అని,
`b` ని _imaginary part_ అని అంటారు.

![Complex Number](https://www.mathsisfun.com/numbers/images/complex-example.svg)

Complex Number అంటే ఒక Real Number, ఒక Imaginary Number కలిస్తే వచ్చేది:

![Complex Number](https://www.mathsisfun.com/numbers/images/complex-number.svg)

Geometry పరంగా చూస్తే, complex numbers ఒక dimension ఉన్న number line ఐడియాని _రెండు dimensions
ఉన్న complex plane_ కి పెంచుతాయి — అడ్డం axis ని real part కి, నిలువు axis ని imaginary part కి
వాడతాయి. Complex number `a + b * i` ని complex plane లో `(a, b)` point గా చూడొచ్చు.

Real part zero గా ఉన్న complex number ని _purely imaginary_ అంటారు; ఈ నంబర్ల points complex
plane లో నిలువు axis మీద ఉంటాయి. Imaginary part zero గా ఉన్న complex number ని _real number_ గా
చూడొచ్చు; దాని point complex plane లో అడ్డం axis మీద ఉంటుంది.

| Complex Number | Real Part | Imaginary Part |                  |
| :------------- | :-------: | :------------: | ---------------- |
| 3 + 2i         |     3     |       2        |                  |
| 5              |     5     |     **0**      | Purely Real      |
| −6i            |   **0**   |       -6       | Purely Imaginary |

Complex number ని _Argand diagram_ అనే diagram మీద vector ఏర్పరిచే `(a, b)` నంబర్ల జంటగా బొమ్మలో
చూపించొచ్చు — ఆ diagram _complex plane_ ని సూచిస్తుంది. `Re` అంటే real axis, `Im` అంటే imaginary
axis, ఇంకా `i` కి `i^2 = −1`.

![Complex Number](https://upload.wikimedia.org/wikipedia/commons/a/af/Complex_number_illustration.svg)

> Complex అంటే complicated (కష్టమైనది) అని కాదు. Real, imaginary అనే రెండు రకాల నంబర్లు కలిసి
> ఒక complex ని ఏర్పరుస్తాయి అని అర్థం — building complex (buildings అన్నీ కలిసి ఉండేది) లాగా.

## Polar Form

Complex plane లో ఒక point `P` ని x, y coordinates తో కాకుండా ఇంకో రకంగా కూడా చెప్పొచ్చు —
coordinates `(0, 0)` ఉన్న point `O` (origin) నుంచి ఆ point ఎంత దూరంలో ఉంది, ఇంకా positive real axis కి,
line segment `OP` కి మధ్య counterclockwise direction లో ఏర్పడే angle ఎంత — ఈ రెండిటితో.
ఈ ఐడియా నుంచే complex numbers polar form వచ్చింది.

![Polar Form](https://upload.wikimedia.org/wikipedia/commons/7/7a/Complex_number_illustration_modarg.svg)

Complex number `z = x + yi` యొక్క _absolute value_ (లేదా modulus లేదా magnitude):

![Radius](https://wikimedia.org/api/rest_v1/media/math/render/svg/b59629c801aa0ddcdf17ee489e028fb9f8d4ea75)

`z` యొక్క argument (చాలా applications లో దీన్ని "phase" అంటారు) అంటే radius `OP` కి positive
real axis కి మధ్య ఉన్న angle, దాన్ని `arg(z)` అని రాస్తారు. Modulus లాగానే, argument ని కూడా
rectangular form `x+yi` నుంచి కనుక్కోవచ్చు:

![Phase](https://wikimedia.org/api/rest_v1/media/math/render/svg/7cbbdd9bb1dd5df86dd2b820b20f82995023e566)

`r`, `φ` కలిపి complex numbers ని చూపించడానికి ఇంకో పద్ధతి ఇస్తాయి — అదే polar form. ఎందుకంటే
modulus, argument కలిస్తే plane మీద point position పూర్తిగా తెలిసిపోతుంది. Polar form నుంచి మళ్ళీ
original rectangular coordinates తెచ్చుకోవడానికి trigonometric form అనే formula వాడతారు:

![Polar Form](https://wikimedia.org/api/rest_v1/media/math/render/svg/b03de1e1b7b049880b5e4870b68a57bc180ff6ce)

Euler's formula వాడితే దీన్ని ఇలా రాయొచ్చు:

![Euler's Form](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a087c772212e7375cb321d83fc1fcc715cd0ed2)

## Basic Operations

### కూడిక (Adding)

రెండు complex numbers కలపడానికి, ప్రతి part ని విడిగా కలుపుతాం:

```text
(a + b * i) + (c + d * i) = (a + c) + (b + d) * i
```

**Example**

```text
(3 + 5i) + (4 − 3i) = (3 + 4) + (5 − 3)i = 7 + 2i
```

Complex plane మీద కూడిక ఇలా కనిపిస్తుంది:

![Complex Addition](https://www.mathsisfun.com/algebra/images/complex-plane-vector-add.svg)

### తీసివేత (Subtracting)

రెండు complex numbers తీసివేయడానికి, ప్రతి part ని విడిగా తీసివేస్తాం:

```text
(a + b * i) - (c + d * i) = (a - c) + (b - d) * i
```

**Example**

```text
(3 + 5i) - (4 − 3i) = (3 - 4) + (5 + 3)i = -1 + 8i
```

### గుణకారం (Multiplying)

Complex numbers ని గుణించడానికి, మొదటి complex number లో ప్రతి part ని రెండో complex number లో
ప్రతి part తో గుణిస్తాం:

"FOIL" వాడండి చాలు — అంటే "**F**irsts, **O**uters, **I**nners, **L**asts" (ఇంకా details కోసం
[Binomial Multiplication](https://www.mathsisfun.com/algebra/polynomials-multiplying.html) చూడండి):

![Complex Multiplication](https://www.mathsisfun.com/algebra/images/foil-complex.svg)

- Firsts: `a × c`
- Outers: `a × di`
- Inners: `bi × c`
- Lasts: `bi × di`

జనరల్ గా ఇలా ఉంటుంది:

```text
(a + bi)(c + di) = ac + adi + bci + bdi^2
```

కానీ ఇంకా ఫాస్ట్ పద్ధతి కూడా ఉంది!

ఈ rule వాడండి:

```text
(a + bi)(c + di) = (ac − bd) + (ad + bc)i
```

**Example**

```text
(3 + 2i)(1 + 7i)
= 3×1 + 3×7i + 2i×1+ 2i×7i
= 3 + 21i + 2i + 14i^2
= 3 + 21i + 2i − 14   (because i^2 = −1)
= −11 + 23i
```

```text
(3 + 2i)(1 + 7i) = (3×1 − 2×7) + (3×7 + 2×1)i = −11 + 23i
```

### Conjugates

ఇంకో నిమిషంలో conjugates గురించి తెలియాల్సి వస్తుంది!

Conjugate అంటే మధ్యలో ఉన్న sign ని ఇలా మార్చడం:

![Complex Conjugate](https://www.mathsisfun.com/numbers/images/complex-conjugate.svg)

Conjugate ని మామూలుగా దాని పైన ఒక గీత (bar) పెట్టి రాస్తారు:

```text
______
5 − 3i   =   5 + 3i
```

Complex plane మీద conjugate నంబర్ real axis దగ్గర అద్దంలో చూసినట్టు (mirror) కనిపిస్తుంది.

![Complex Conjugate](https://upload.wikimedia.org/wikipedia/commons/6/69/Complex_conjugate_picture.svg)

### భాగహారం (Dividing)

Complex భాగహారం లో conjugate ఉపయోగపడుతుంది.

Trick ఏంటంటే — _పైన, కింద రెండిటినీ కింద ఉన్నదాని conjugate తో గుణించడం_.

**Example**

```text
2 + 3i
------
4 − 5i
```

పైన, కింద రెండిటినీ `4 − 5i` యొక్క conjugate తో గుణించండి:

```text
  (2 + 3i) * (4 + 5i)   8 + 10i + 12i + 15i^2
= ------------------- = ----------------------
  (4 − 5i) * (4 + 5i)   16 + 20i − 20i − 25i^2
```

ఇప్పుడు `i^2 = −1` అని గుర్తుపెట్టుకోండి, కాబట్టి:

```text
  8 + 10i + 12i − 15    −7 + 22i   −7   22
= ------------------- = -------- = -- + -- * i
  16 + 20i − 20i + 25      41      41   41

```

కానీ ఇంకా ఫాస్ట్ పద్ధతి కూడా ఉంది.

పైన example లో, కింద (denominator లో) జరిగింది interesting గా ఉంది:

```text
(4 − 5i)(4 + 5i) = 16 + 20i − 20i − 25i
```

మధ్యలో ఉన్న terms `(20i − 20i)` ఒకదాన్నొకటి cancel చేసుకుంటాయి! ఇంకా `i^2 = −1` కాబట్టి ఇది వస్తుంది:

```text
(4 − 5i)(4 + 5i) = 4^2 + 5^2
```

ఇది నిజంగా చాలా సింపుల్ result. జనరల్ rule ఇది:

```text
(a + bi)(a − bi) = a^2 + b^2
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Complex_number)
- [Math is Fun](https://www.mathsisfun.com/numbers/complex-numbers.html)
