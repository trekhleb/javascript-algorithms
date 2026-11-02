# Square Matrix In-Place Rotation

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

## Problem

మీకు ఒక `n x n` 2D matrix (ఒక image ని సూచించేది) ఇస్తారు. ఆ matrix ని `90` degrees (clockwise —
గడియారం ముల్లు తిరిగే వైపు) తిప్పాలి.

**Note**

Image ని **in-place** గా తిప్పాలి — అంటే input 2D matrix నే డైరెక్ట్ గా మార్చాలి. ఇంకో 2D matrix
తీసుకుని rotation చేయడం **చేయకూడదు**.

## Examples

**Example #1**

ఇచ్చిన input matrix:

```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
```

Input matrix ని in-place గా తిప్పితే ఇలా అవ్వాలి:

```
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
]
```

**Example #2**

ఇచ్చిన input matrix:

```
[
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]
```

Input matrix ని in-place గా తిప్పితే ఇలా అవ్వాలి:

```
[
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
]
```

## Algorithm

Matrix ని రెండుసార్లు reflect (అద్దంలో చూసినట్టు తిప్పడం) చేయాలి:

- నిలువుగా reflect చేయండి
- కింద-ఎడమ నుంచి పై-కుడి వరకు diagonal గా reflect చేయండి

లేదా పై-ఎడమ/కింద-కుడి diagonal గా reflect చేసి, తర్వాత అడ్డంగా reflect చేయొచ్చు.

ఎక్కువమంది అడిగే ప్రశ్న — అసలు ఏ రకం reflections చేయాలో ఎలా కనుక్కోవాలి? సింపుల్ — ఒక square
పేపర్ ముక్క చింపి, దాని మీద ఏదో ఒక word రాయండి, దాంతో అది ఎటు తిరిగిందో తెలుస్తుంది. తర్వాత solution
ఎలా వస్తుందో అర్థమయ్యేదాకా ఆ పేపర్ ని అటూ ఇటూ తిప్పి చూడండి.
 
పై-కుడి/కింద-ఎడమ diagonal rotation, అడ్డం rotation వాడి మొదటి line ని ఎలా తిప్పొచ్చో example ఇది.

```
Let's say we have a string at the top of the matrix:

A B C
• • •
• • •

Let's do top-right/bottom-left diagonal reflection:

A B C
/ / •
/ • •  

And now let's do horizontal reflection:

A → →
B → →
C → →

The string has been rotated to 90 degree:

• • A
• • B
• • C
```

(పైన: matrix పైన ఒక string ఉంది అనుకుందాం. ముందు పై-కుడి/కింద-ఎడమ diagonal reflection చేస్తాం, తర్వాత
అడ్డం reflection చేస్తాం. దాంతో string 90 degrees తిరుగుతుంది.)

## References

- [LeetCode](https://leetcode.com/problems/rotate-image/description/)
