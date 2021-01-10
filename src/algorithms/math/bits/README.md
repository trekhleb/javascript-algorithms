# Bit Manipulation

_Read this in other languages:_
[français](README.fr-FR.md),
[简体中文](README.zh-CN.md).

#### Get Bit

This method shifts the relevant bit to the zeroth position.
Then we perform `AND` operation with one which has bit
pattern like `0001`. This clears all bits from the original
number except the relevant one. If the relevant bit is one,
the result is `1`, otherwise the result is `0`.

> See [getBit.js](getBit.js) for further details.

#### Set Bit

This method shifts `1` over by `bitPosition` bits, creating a
value that looks like `00100`. Then we perform `OR` operation
that sets specific bit into `1` but it does not affect on
other bits of the number.

> See [setBit.js](setBit.js) for further details.

#### Clear Bit

This method shifts `1` over by `bitPosition` bits, creating a
value that looks like `00100`. Than it inverts this mask to get
the number that looks like `11011`. Then `AND` operation is
being applied to both the number and the mask. That operation
unsets the bit.

> See [clearBit.js](clearBit.js) for further details.

#### Update Bit

This method is a combination of "Clear Bit" and "Set Bit" methods.

> See [updateBit.js](updateBit.js) for further details.

#### isEven

This method determines if the number provided is even.
It is based on the fact that odd numbers have their last
right bit to be set to 1.

```text
Number: 5 = 0b0101
isEven: false

Number: 4 = 0b0100
isEven: true
```

> See [isEven.js](isEven.js) for further details.

#### isPositive

This method determines if the number is positive. It is based on the fact that all positive
numbers have their leftmost bit to be set to `0`. However, if the number provided is zero
or negative zero, it should still return `false`.

```text
Number: 1 = 0b0001
isPositive: true

Number: -1 = -0b0001
isPositive: false
```

> See [isPositive.js](isPositive.js) for further details.

#### Multiply By Two

This method shifts original number by one bit to the left.
Thus all binary number components (powers of two) are being
multiplying by two and thus the number itself is being
multiplied by two.

```
Before the shift
Number: 0b0101 = 5
Powers of two: 0 + 2^2 + 0 + 2^0

After the shift
Number: 0b1010 = 10
Powers of two: 2^3 + 0 + 2^1 + 0
```

> See [multiplyByTwo.js](multiplyByTwo.js) for further details.

#### Divide By Two

This method shifts original number by one bit to the right.
Thus all binary number components (powers of two) are being
divided by two and thus the number itself is being
divided by two without remainder.

```
Before the shift
Number: 0b0101 = 5
Powers of two: 0 + 2^2 + 0 + 2^0

After the shift
Number: 0b0010 = 2
Powers of two: 0 + 0 + 2^1 + 0
```

> See [divideByTwo.js](divideByTwo.js) for further details.

#### Switch Sign

This method make positive numbers to be negative and backwards.
To do so it uses "Twos Complement" approach which does it by
inverting all of the bits of the number and adding 1 to it.

```
1101 -3
1110 -2
1111 -1
0000  0
0001  1
0010  2
0011  3
```

> See [switchSign.js](switchSign.js) for further details.

#### Multiply Two Signed Numbers

This method multiplies two signed integer numbers using bitwise operators.
This method is based on the following facts:

```text
a * b can be written in the below formats:
  0                     if a is zero or b is zero or both a and b are zeroes
  2a * (b/2)            if b is even
  2a * (b - 1)/2 + a    if b is odd and positive
  2a * (b + 1)/2 - a    if b is odd and negative
```

The advantage of this approach is that in each recursive step one of the operands
reduces to half its original value. Hence, the run time complexity is `O(log(b))` where `b` is
the operand that reduces to half on each recursive step.

> See [multiply.js](multiply.js) for further details.

#### Multiply Two Unsigned Numbers

This method multiplies two integer numbers using bitwise operators.
This method is based on that "Every number can be denoted as the sum of powers of 2".

The main idea of bitwise multiplication is that every number may be split
to the sum of powers of two:

I.e.

```text
19 = 2^4 + 2^1 + 2^0
```

Then multiplying number `x` by `19` is equivalent of:

```text
x * 19 = x * 2^4 + x * 2^1 + x * 2^0
```

Now we need to remember that `x * 2^4` is equivalent of shifting `x` left
by `4` bits (`x << 4`).

> See [multiplyUnsigned.js](multiplyUnsigned.js) for further details.

#### Count Set Bits

This method counts the number of set bits in a number using bitwise operators.
The main idea is that we shift the number right by one bit at a time and check
the result of `&` operation that is `1` if bit is set and `0` otherwise.

```text
Number: 5 = 0b0101
Count of set bits = 2
```

> See [countSetBits.js](countSetBits.js) for further details.

#### Count Bits to Flip One Number to Another

This methods outputs the number of bits required to convert one number to another.
This makes use of property that when numbers are `XOR`-ed the result will be number
of different bits.

```
5 = 0b0101
1 = 0b0001
Count of Bits to be Flipped: 1
```

> See [bitsDiff.js](bitsDiff.js) for further details.

#### Count Bits of a Number

To calculate the number of valuable bits we need to shift `1` one bit left each
time and see if shifted number is bigger than the input number.

```
5 = 0b0101
Count of valuable bits is: 3
When we shift 1 four times it will become bigger than 5.
```

> See [bitLength.js](bitLength.js) for further details.

#### Is Power of Two

This method checks if a number provided is power of two. It uses the following
property. Let's say that `powerNumber` is a number that has been formed as a power
of two (i.e. 2, 4, 8, 16 etc.). Then if we'll do `&` operation between `powerNumber`
and `powerNumber - 1` it will return `0` (in case if number is power of two).

```
Number: 4 = 0b0100
Number: 3 = (4 - 1) = 0b0011
4 & 3 = 0b0100 & 0b0011 = 0b0000 <-- Equal to zero, is power of two.

Number: 10 = 0b01010
Number: 9 = (10 - 1) = 0b01001
10 & 9 = 0b01010 & 0b01001 = 0b01000 <-- Not equal to zero, not a power of two.
```

> See [isPowerOfTwo.js](isPowerOfTwo.js) for further details.

#### Full Adder

This method adds up two integer numbers using bitwise operators.

It implements [full adder](<https://en.wikipedia.org/wiki/Adder_(electronics)>)
electronics circuit logic to sum two 32-bit integers in two's complement format.
It's using the boolean logic to cover all possible cases of adding two input bits:
with and without a "carry bit" from adding the previous less-significant stage.

Legend:

- `A`: Number `A`
- `B`: Number `B`
- `ai`: ith bit of number `A`
- `bi`: ith bit of number `B`
- `carryIn`: a bit carried in from the previous less-significant stage
- `carryOut`: a bit to carry to the next most-significant stage
- `bitSum`: The sum of `ai`, `bi`, and `carryIn`
- `resultBin`: The full result of adding current stage with all less-significant stages (in binary)
- `resultDec`: The full result of adding current stage with all less-significant stages (in decimal)

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

> See [fullAdder.js](fullAdder.js) for further details.
> See [Full Adder on YouTube](https://www.youtube.com/watch?v=wvJc9CZcvBc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8).

## References

- [Bit Manipulation on YouTube](https://www.youtube.com/watch?v=NLKQEOgBAnw&t=0s&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Negative Numbers in binary on YouTube](https://www.youtube.com/watch?v=4qH4unVtJkE&t=0s&index=30&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Bit Hacks on stanford.edu](https://graphics.stanford.edu/~seander/bithacks.html)
