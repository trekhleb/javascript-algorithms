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
