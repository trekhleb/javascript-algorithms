# Bit Manipulation

#### Get Bit

This method shifts `1` over by `bitPosition` bits, creating a 
value that looks like `00100`. Then we perform `AND` operation
that clears all bits from the original number except the
`bitPosition` one. Then we compare the result with zero. If 
result is zero that would mean that original number has `0` at
position `bitPosition`.

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
