# Complex Number

_Read this in other languages:_
[français](README.fr-FR.md).

A **complex number** is a number that can be expressed in the
form `a + b * i`, where `a` and `b` are real numbers, and `i` is a solution of
the equation `x^2 = −1`. Because no _real number_ satisfies this
equation, `i` is called an _imaginary number_. For the complex
number `a + b * i`, `a` is called the _real part_, and `b` is called
the _imaginary part_.

![Complex Number](https://www.mathsisfun.com/numbers/images/complex-example.svg)

A Complex Number is a combination of a Real Number and an Imaginary Number:

![Complex Number](https://www.mathsisfun.com/numbers/images/complex-number.svg)

Geometrically, complex numbers extend the concept of the one-dimensional number
line to the _two-dimensional complex plane_ by using the horizontal axis for the
real part and the vertical axis for the imaginary part. The complex
number `a + b * i` can be identified with the point `(a, b)` in the complex plane.

A complex number whose real part is zero is said to be _purely imaginary_; the
points for these numbers lie on the vertical axis of the complex plane. A complex
number whose imaginary part is zero can be viewed as a _real number_; its point
lies on the horizontal axis of the complex plane.

| Complex Number | Real Part | Imaginary Part |                  |
| :------------- | :-------: | :------------: | ---------------- |
| 3 + 2i         |     3     |       2        |                  |
| 5              |     5     |     **0**      | Purely Real      |
| −6i            |   **0**   |       -6       | Purely Imaginary |

A complex number can be visually represented as a pair of numbers `(a, b)` forming
a vector on a diagram called an _Argand diagram_, representing the _complex plane_.
`Re` is the real axis, `Im` is the imaginary axis, and `i` satisfies `i^2 = −1`.

![Complex Number](https://upload.wikimedia.org/wikipedia/commons/a/af/Complex_number_illustration.svg)

> Complex does not mean complicated. It means the two types of numbers, real and
> imaginary, together form a complex, just like a building complex (buildings
> joined together).

## Polar Form

An alternative way of defining a point `P` in the complex plane, other than using
the x- and y-coordinates, is to use the distance of the point from `O`, the point
whose coordinates are `(0, 0)` (the origin), together with the angle subtended
between the positive real axis and the line segment `OP` in a counterclockwise
direction. This idea leads to the polar form of complex numbers.

![Polar Form](https://upload.wikimedia.org/wikipedia/commons/7/7a/Complex_number_illustration_modarg.svg)

The _absolute value_ (or modulus or magnitude) of a complex number `z = x + yi` is:

![Radius](https://wikimedia.org/api/rest_v1/media/math/render/svg/b59629c801aa0ddcdf17ee489e028fb9f8d4ea75)

The argument of `z` (in many applications referred to as the "phase") is the angle
of the radius `OP` with the positive real axis, and is written as `arg(z)`. As
with the modulus, the argument can be found from the rectangular form `x+yi`:

![Phase](https://wikimedia.org/api/rest_v1/media/math/render/svg/7cbbdd9bb1dd5df86dd2b820b20f82995023e566)

Together, `r` and `φ` give another way of representing complex numbers, the
polar form, as the combination of modulus and argument fully specify the
position of a point on the plane. Recovering the original rectangular
co-ordinates from the polar form is done by the formula called trigonometric
form:

![Polar Form](https://wikimedia.org/api/rest_v1/media/math/render/svg/b03de1e1b7b049880b5e4870b68a57bc180ff6ce)

Using Euler's formula this can be written as:

![Euler's Form](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a087c772212e7375cb321d83fc1fcc715cd0ed2)

## Basic Operations

### Adding

To add two complex numbers we add each part separately:

```text
(a + b * i) + (c + d * i) = (a + c) + (b + d) * i
```

**Example**

```text
(3 + 5i) + (4 − 3i) = (3 + 4) + (5 − 3)i = 7 + 2i
```

On complex plane the adding operation will look like the following:

![Complex Addition](https://www.mathsisfun.com/algebra/images/complex-plane-vector-add.svg)

### Subtracting

To subtract two complex numbers we subtract each part separately:

```text
(a + b * i) - (c + d * i) = (a - c) + (b - d) * i
```

**Example**

```text
(3 + 5i) - (4 − 3i) = (3 - 4) + (5 + 3)i = -1 + 8i
```

### Multiplying

To multiply complex numbers each part of the first complex number gets multiplied
by each part of the second complex number:

Just use "FOIL", which stands for "**F**irsts, **O**uters, **I**nners, **L**asts" (
see [Binomial Multiplication](ttps://www.mathsisfun.com/algebra/polynomials-multiplying.html) for
more details):

![Complex Multiplication](https://www.mathsisfun.com/algebra/images/foil-complex.svg)

- Firsts: `a × c`
- Outers: `a × di`
- Inners: `bi × c`
- Lasts: `bi × di`

In general it looks like this:

```text
(a + bi)(c + di) = ac + adi + bci + bdi^2
```

But there is also a quicker way!

Use this rule:

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

We will need to know about conjugates in a minute!

A conjugate is where we change the sign in the middle like this:

![Complex Conjugate](https://www.mathsisfun.com/numbers/images/complex-conjugate.svg)

A conjugate is often written with a bar over it:

```text
______
5 − 3i   =   5 + 3i
```

On the complex plane the conjugate number will be mirrored against real axes.

![Complex Conjugate](https://upload.wikimedia.org/wikipedia/commons/6/69/Complex_conjugate_picture.svg)

### Dividing

The conjugate is used to help complex division.

The trick is to _multiply both top and bottom by the conjugate of the bottom_.

**Example**

```text
2 + 3i
------
4 − 5i
```

Multiply top and bottom by the conjugate of `4 − 5i`:

```text
  (2 + 3i) * (4 + 5i)   8 + 10i + 12i + 15i^2
= ------------------- = ----------------------
  (4 − 5i) * (4 + 5i)   16 + 20i − 20i − 25i^2
```

Now remember that `i^2 = −1`, so:

```text
  8 + 10i + 12i − 15    −7 + 22i   −7   22
= ------------------- = -------- = -- + -- * i
  16 + 20i − 20i + 25      41      41   41

```

There is a faster way though.

In the previous example, what happened on the bottom was interesting:

```text
(4 − 5i)(4 + 5i) = 16 + 20i − 20i − 25i
```

The middle terms `(20i − 20i)` cancel out! Also `i^2 = −1` so we end up with this:

```text
(4 − 5i)(4 + 5i) = 4^2 + 5^2
```

Which is really quite a simple result. The general rule is:

```text
(a + bi)(a − bi) = a^2 + b^2
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Complex_number)
- [Math is Fun](https://www.mathsisfun.com/numbers/complex-numbers.html)
