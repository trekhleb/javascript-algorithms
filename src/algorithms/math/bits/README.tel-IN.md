# Bit Manipulation

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Français_](README.fr-FR.md),
[_简体中文_](README.zh-CN.md)

#### Get Bit

ఈ method మనకి కావాల్సిన bit ని zeroth position కి జరుపుతుంది.
తర్వాత `0001` లాంటి bit pattern ఉన్న one తో `AND` operation చేస్తాం.
దాంతో original నంబర్ లో మనకి కావాల్సిన bit తప్ప మిగతా bits అన్నీ clear అయిపోతాయి.
ఆ bit one అయితే result `1`, లేకపోతే result `0`.

> ఇంకా details కోసం [getBit.js](getBit.js) చూడండి.

#### Set Bit

ఈ method `1` ని `bitPosition` bits జరిపి, `00100` లాంటి ఒక value తయారుచేస్తుంది.
తర్వాత `OR` operation చేస్తాం — అది ఆ specific bit ని `1` గా set చేస్తుంది, కానీ
నంబర్ లో మిగతా bits మీద ఏ ఎఫెక్ట్ ఉండదు.

> ఇంకా details కోసం [setBit.js](setBit.js) చూడండి.

#### Clear Bit

ఈ method `1` ని `bitPosition` bits జరిపి, `00100` లాంటి ఒక value తయారుచేస్తుంది.
తర్వాత ఈ mask ని తిరగేసి (invert చేసి) `11011` లాంటి నంబర్ తెచ్చుకుంటుంది.
తర్వాత నంబర్ కి, mask కి `AND` operation చేస్తాం. ఆ operation ఆ bit ని unset చేస్తుంది.

> ఇంకా details కోసం [clearBit.js](clearBit.js) చూడండి.

#### Update Bit

ఈ method "Clear Bit", "Set Bit" methods రెండూ కలిపినది.

> ఇంకా details కోసం [updateBit.js](updateBit.js) చూడండి.

#### isEven

ఇచ్చిన నంబర్ even ఆ కాదా అని ఈ method చెప్తుంది.
Odd numbers కి చివరి (కుడి వైపు) bit ఎప్పుడూ 1 గా set అయి ఉంటుంది అనే విషయం మీద ఇది పనిచేస్తుంది.

```text
Number: 5 = 0b0101
isEven: false

Number: 4 = 0b0100
isEven: true
```

> ఇంకా details కోసం [isEven.js](isEven.js) చూడండి.

#### isPositive

నంబర్ positive ఆ కాదా అని ఈ method చెప్తుంది. అన్ని positive నంబర్లకి ఎడమ వైపు చివరి bit
`0` గా set అయి ఉంటుంది అనే విషయం మీద ఇది పనిచేస్తుంది. కానీ ఇచ్చిన నంబర్ zero లేదా negative zero
అయితే, అప్పుడు కూడా `false` నే return చేయాలి.

```text
Number: 1 = 0b0001
isPositive: true

Number: -1 = -0b0001
isPositive: false
```

> ఇంకా details కోసం [isPositive.js](isPositive.js) చూడండి.

#### Multiply By Two

ఈ method original నంబర్ ని ఒక bit ఎడమకి జరుపుతుంది.
దాంతో binary నంబర్ లో ఉన్న అన్ని భాగాలు (రెండు యొక్క powers) రెండుతో గుణించబడతాయి,
కాబట్టి నంబర్ కూడా రెండుతో గుణించబడుతుంది.

```
Before the shift
Number: 0b0101 = 5
Powers of two: 0 + 2^2 + 0 + 2^0

After the shift
Number: 0b1010 = 10
Powers of two: 2^3 + 0 + 2^1 + 0
```

> ఇంకా details కోసం [multiplyByTwo.js](multiplyByTwo.js) చూడండి.

#### Divide By Two

ఈ method original నంబర్ ని ఒక bit కుడికి జరుపుతుంది.
దాంతో binary నంబర్ లో ఉన్న అన్ని భాగాలు (రెండు యొక్క powers) రెండుతో భాగించబడతాయి,
కాబట్టి నంబర్ కూడా శేషం లేకుండా రెండుతో భాగించబడుతుంది.

```
Before the shift
Number: 0b0101 = 5
Powers of two: 0 + 2^2 + 0 + 2^0

After the shift
Number: 0b0010 = 2
Powers of two: 0 + 0 + 2^1 + 0
```

> ఇంకా details కోసం [divideByTwo.js](divideByTwo.js) చూడండి.

#### Switch Sign

ఈ method positive నంబర్లని negative గా, negative నంబర్లని positive గా మారుస్తుంది.
దీనికి "Twos Complement" పద్ధతి వాడుతుంది — నంబర్ లో అన్ని bits ని తిరగేసి (invert చేసి)
దానికి 1 కలుపుతుంది.

```
1101 -3
1110 -2
1111 -1
0000  0
0001  1
0010  2
0011  3
```

> ఇంకా details కోసం [switchSign.js](switchSign.js) చూడండి.

#### రెండు Signed Numbers ని గుణించడం

ఈ method bitwise operators వాడి రెండు signed integer నంబర్లని గుణిస్తుంది.
ఇది ఈ విషయాల మీద పనిచేస్తుంది:

```text
a * b can be written in the below formats:
  0                     if a is zero or b is zero or both a and b are zeroes
  2a * (b/2)            if b is even
  2a * (b - 1)/2 + a    if b is odd and positive
  2a * (b + 1)/2 - a    if b is odd and negative
```

(అంటే: `a` గానీ `b` గానీ రెండూ గానీ zero అయితే `0`; `b` even అయితే `2a * (b/2)`;
`b` odd, positive అయితే `2a * (b - 1)/2 + a`; `b` odd, negative అయితే `2a * (b + 1)/2 - a`.)

ఈ పద్ధతిలో advantage ఏంటంటే, ప్రతి recursive step లో operands లో ఒకటి దాని original value లో
సగానికి తగ్గుతుంది. కాబట్టి run time complexity `O(log(b))`, ఇక్కడ `b` అంటే ప్రతి recursive step లో
సగానికి తగ్గే operand.

> ఇంకా details కోసం [multiply.js](multiply.js) చూడండి.

#### రెండు Unsigned Numbers ని గుణించడం

ఈ method bitwise operators వాడి రెండు integer నంబర్లని గుణిస్తుంది.
"ప్రతి నంబర్ ని 2 యొక్క powers మొత్తంగా రాయొచ్చు" అనే విషయం మీద ఇది పనిచేస్తుంది.

Bitwise గుణకారం వెనక ముఖ్య ఐడియా ఏంటంటే, ప్రతి నంబర్ ని రెండు యొక్క powers మొత్తంగా
విడగొట్టొచ్చు:

అంటే

```text
19 = 2^4 + 2^1 + 2^0
```

అప్పుడు నంబర్ `x` ని `19` తో గుణించడం అంటే ఇదే:

```text
x * 19 = x * 2^4 + x * 2^1 + x * 2^0
```

ఇప్పుడు గుర్తుపెట్టుకోవాల్సింది ఏంటంటే, `x * 2^4` అంటే `x` ని `4` bits ఎడమకి జరపడమే (`x << 4`).

> ఇంకా details కోసం [multiplyUnsigned.js](multiplyUnsigned.js) చూడండి.

#### Set Bits లెక్కపెట్టడం

ఈ method bitwise operators వాడి నంబర్ లో ఎన్ని bits set అయి ఉన్నాయో లెక్కపెడుతుంది.
ముఖ్య ఐడియా ఏంటంటే, నంబర్ ని ఒక్కోసారి ఒక bit కుడికి జరుపుతూ, `&` operation result చెక్ చేస్తాం —
bit set అయి ఉంటే అది `1`, లేకపోతే `0`.

```text
Number: 5 = 0b0101
Count of set bits = 2
```

> ఇంకా details కోసం [countSetBits.js](countSetBits.js) చూడండి.

#### ఒక నంబర్ ని ఇంకో నంబర్ గా మార్చడానికి ఎన్ని Bits Flip చేయాలి

ఒక నంబర్ ని ఇంకో నంబర్ గా మార్చడానికి ఎన్ని bits మార్చాలో ఈ method చెప్తుంది.
నంబర్లని `XOR` చేస్తే, result లో వేరువేరుగా ఉన్న bits మాత్రమే set అవుతాయి అనే property ని ఇది వాడుకుంటుంది.

```
5 = 0b0101
1 = 0b0001
Count of Bits to be Flipped: 1
```

> ఇంకా details కోసం [bitsDiff.js](bitsDiff.js) చూడండి.

#### ఒక నంబర్ లో ఎన్ని Bits ఉన్నాయి

విలువైన bits ఎన్ని ఉన్నాయో లెక్కపెట్టడానికి, ప్రతిసారి `1` ని ఒక bit ఎడమకి జరుపుతూ, జరిపిన నంబర్
input నంబర్ కంటే పెద్దదైందా అని చూడాలి.

```
5 = 0b0101
Count of valuable bits is: 3
When we shift 1 four times it will become bigger than 5.
```

(అంటే: `5` లో విలువైన bits 3. `1` ని నాలుగుసార్లు జరిపితే అది `5` కంటే పెద్దదవుతుంది.)

> ఇంకా details కోసం [bitLength.js](bitLength.js) చూడండి.

#### Is Power of Two

ఇచ్చిన నంబర్ రెండు యొక్క power ఆ కాదా అని ఈ method చెక్ చేస్తుంది. ఇది ఈ property వాడుతుంది.
`powerNumber` అనేది రెండు యొక్క power గా వచ్చిన నంబర్ అనుకుందాం (అంటే 2, 4, 8, 16 లాంటివి).
అప్పుడు `powerNumber`, `powerNumber - 1` మధ్య `&` operation చేస్తే `0` వస్తుంది (నంబర్ రెండు
యొక్క power అయితే).

```
Number: 4 = 0b0100
Number: 3 = (4 - 1) = 0b0011
4 & 3 = 0b0100 & 0b0011 = 0b0000 <-- Equal to zero, is power of two.

Number: 10 = 0b01010
Number: 9 = (10 - 1) = 0b01001
10 & 9 = 0b01010 & 0b01001 = 0b01000 <-- Not equal to zero, not a power of two.
```

(పైన: `4 & 3` zero కి సమానం, కాబట్టి రెండు యొక్క power. `10 & 9` zero కాదు, కాబట్టి రెండు యొక్క power కాదు.)

> ఇంకా details కోసం [isPowerOfTwo.js](isPowerOfTwo.js) చూడండి.

#### Full Adder

ఈ method bitwise operators వాడి రెండు integer నంబర్లని కలుపుతుంది.

Two's complement format లో ఉన్న రెండు 32-bit integers ని కలపడానికి ఇది [full adder](<https://en.wikipedia.org/wiki/Adder_(electronics)>)
electronics circuit logic ని implement చేస్తుంది. రెండు input bits ని కలిపేటప్పుడు వచ్చే అన్ని possible
cases ని cover చేయడానికి boolean logic వాడుతుంది: ముందు ఉన్న less-significant stage నుంచి వచ్చే
"carry bit" ఉన్నప్పుడు, లేనప్పుడు.

Legend (అర్థాలు):

- `A`: నంబర్ `A`
- `B`: నంబర్ `B`
- `ai`: నంబర్ `A` యొక్క ith bit
- `bi`: నంబర్ `B` యొక్క ith bit
- `carryIn`: ముందు ఉన్న less-significant stage నుంచి వచ్చిన carry bit
- `carryOut`: తర్వాత ఉన్న most-significant stage కి పంపే carry bit
- `bitSum`: `ai`, `bi`, `carryIn` మొత్తం
- `resultBin`: ఇప్పటి stage ని, ముందు ఉన్న అన్ని less-significant stages తో కలిపితే వచ్చే పూర్తి result (binary లో)
- `resultDec`: ఇప్పటి stage ని, ముందు ఉన్న అన్ని less-significant stages తో కలిపితే వచ్చే పూర్తి result (decimal లో)

```
A = 3: 011
B = 6: 110
┌──────┬────┬────┬─────────┬──────────┬─────────┬───────────┬───────────┐
│  bit │ ai │ bi │ carryIn │ carryOut │  bitSum │ resultBin │ resultDec │
├──────┼────┼────┼─────────┼──────────┼─────────┼───────────┼───────────┤
│   0  │ 1  │ 0  │    0    │    0     │     1   │       1   │     1     │
│   1  │ 1  │ 1  │    0    │    1     │     0   │      01   │     1     │
│   2  │ 0  │ 1  │    1    │    1     │     0   │     001   │     1     │
│   3  │ 0  │ 0  │    1    │    0     │     1   │    1001   │     9     │
└──────┴────┴────┴─────────┴──────────┴─────────┴───────────┴───────────┘
```

> ఇంకా details కోసం [fullAdder.js](fullAdder.js) చూడండి.
> [YouTube లో Full Adder](https://www.youtube.com/watch?v=wvJc9CZcvBc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8) చూడండి.

## References

- [YouTube లో Bit Manipulation](https://www.youtube.com/watch?v=NLKQEOgBAnw&t=0s&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube లో Binary లో Negative Numbers](https://www.youtube.com/watch?v=4qH4unVtJkE&t=0s&index=30&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [stanford.edu లో Bit Hacks](https://graphics.stanford.edu/~seander/bithacks.html)
