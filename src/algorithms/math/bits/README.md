# Bit Manipulation

#### Get Bit

This method shifts the relevant bit to the zeroth position.
Then we perform `AND` operation with one which has bit
pattern like `0001`.  This clears all bits from the original
number except the relevant one. If the relevant bit is one,
the result is `1`, otherwise the result is `0`.

> See `getBit` function for further details.

#### Set Bit

This method shifts `1` over by `bitPosition` bits, creating a
value that looks like `00100`. Then we perform `OR` operation
that sets specific bit into `1` but it does not affect on
other bits of the number.

> See `setBit` function for further details.

#### Clear Bit

This method shifts `1` over by `bitPosition` bits, creating a
value that looks like `00100`. Than it inverts this mask to get
the number that looks like `11011`. Then `AND` operation is
being applied to both the number and the mask. That operation
unsets the bit.

> See `clearBit` function for further details.

#### Update Bit

This method is a combination of "Clear Bit" and "Set Bit" methods.

> See `updateBit` function for further details.

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

> See `multiplyByTwo` function for further details.

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

> See `divideByTwo` function for further details.

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

> See `switchSign` function for further details.

#### Count Set Bits

This method counts the number of set bits in a number using bitwise operators.

```
Number: 5 = (0101)_2
Count Set Bits = 2
```

> See `countSetBits` function for further details.

#### XOR Output Without Using XOR operator

This method outputs the XOR of two numbers without using the XOR operator.

```
Number A : 5 = (0101)_2
Number B : 1 = (0001)_2
A XOR B  : 4 = (0100)_2
```

> See `XORWithoutXOR` function for further details.

#### Count Bits to Flip One Number to Another

This methods outputs the number of bits required to convert a number to another. This
makes use of property when numbers are XORed and `countSetBits`.

```
Number A : 5 = (0101)_2
Number B : 1 = (0001)_2
Count Bits to be Flipped: 1
```

> See `countFlipAToB` function for further details.

#### Multiply By 7

This method multiplies a number by 7 using bitwise operator. It uses the property that
`8*n - n` would be `7n` multiplied by the number.

```
Muliplier : 5
Multiplied by 7 : 35
```

> See `multiplyBy7` function for further details.

#### Power of 2

This method checks if a number provided is power of two. It uses the property that when
a power of 2 is `&` with power of 2 minus 1, it would return 0 implying that the provided
number is power of 2.

```
Number: 4
Power of 2: True

Number: 1
Power of 2: False
```

> See `ifPowerof2` function for further details.

#### Pandigital Concatenation

This method checks if pair of strings when concatenation consists of all digits from
(0-9) in any order at least once. Given an array of such numbers it returns the count
of number of possible pandigital concatenation. This uses the propery that when two
masks(all 1's) be i and j with frequencies freq_i and freq_j have 


i | j = Mask_pandigitalconcatenation

Then,
Number of pairs = freq_i * freq_j

Using bitwise operators and with this approach the complexity of the method reduces to
`O(N * |s| + 1023 * 1023)` where `|s|` is the length of strings in the array.

> See `pandigitalConcatenation` function for further details

#### Booth's Multiplication

This is the known algorithm where two signed binary numbers are multplied using 2's
complement notation. This algorithm primarily works on shifting than adding. The alorithm
works as

Put multiplicant in A and multiplied in B
1. if C_n  and C_n+1 are same i.e., 00 or 11 perform arithmetic shift by 1 bit.
2. If C_nC_n+1 = 10 do R += A and perform arithmetic shift by 1 bit.
3. if C_nC_n+1 = 01 do R -= A and peform arithmetic shift by 1 bit.

```
Number A : 2
Number B : 3

Output : 6
```

> See `boothsMultiplication` function for further details

#### Alternating OR and XOR Operations in Segment Tree

A segment tree can be implemented such that at every level the operations OR and XOR
alternates. This is an extension to the classical segment tree where every node is
represented as an integer and the parent node is built after building left and right
subtrees and then combining the results i.e., bottom up order.

The number of levels would be `O(log n)` and T.C to update a node would be `O(log n)`.

```
Array : [6, 1, 4, 3, 7, 8, 9, 2]
Old Value at Root Node : 3
New Value at Root Node : 11

```

> See `orXorSegmentTree` function for futher details.


#### Karatsuba Multiplication

Given two numbers in binary representation, karatsuba algorithm find the multiplication
in O(n^1.59) T.C.

This uses the fact that

```
AB = 22ceil(num / 2) A_1B_1 + 2ceil(num / 2) * [(A_1 + A_r)(B_1 + B_r) - A_1B_1 - A_rB_r] + A_rB_r
```

> See `karasubaMultiplication` function for further details.


## References

- [Bit Manipulation on YouTube](https://www.youtube.com/watch?v=NLKQEOgBAnw&t=0s&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Negative Numbers in binary on YouTube](https://www.youtube.com/watch?v=4qH4unVtJkE&t=0s&index=30&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Bit Hacks on stanford.edu](https://graphics.stanford.edu/~seander/bithacks.html)
