# Hill Cipher

The **Hill cipher** is a [polygraphic substitution](https://en.wikipedia.org/wiki/Polygraphic_substitution) cipher based on linear algebra.

Each letter is represented by a number [modulo](https://en.wikipedia.org/wiki/Modular_arithmetic) `26`. Though this is not an essential feature of the cipher, this simple scheme is often used:

| **Letter** | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Number** | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |

## Encryption

To encrypt a message, each block of `n` letters (considered as an `n`-component vector) is multiplied by an invertible `n × n` matrix, against modulus `26`.

The matrix used for encryption is the _cipher key_, and it should be chosen randomly from the set of invertible `n × n` matrices (modulo `26`). The cipher can, of course, be adapted to an alphabet with any number of letters; all arithmetic just needs to be done modulo the number of letters instead of modulo `26`.

Consider the message `ACT`, and the key below (or `GYB/NQK/URP` in letters):

```
| 6   24   1  |
| 13  16   10 |
| 20  17   15 |
```

Since `A` is`0`, `C` is `2` and `T` is `19`, the message is the vector:

```
|  0  |
|  2  |
|  19 |
```

Thus, the enciphered vector is given by:

```
| 6   24   1  |  |  0  |   |  67  |   |  15 |
| 13  16   10 |  |  2  | = |  222 | ≡ |  14 | (mod 26)
| 20  17   15 |  |  19 |   |  319 |   |  7  |
```

which corresponds to a ciphertext of `POH`.

Now, suppose that our message is instead `CAT` (notice how we're using the same letters as in `ACT` here), or:

```
|  2  |
|  0  |
|  19 |
```

This time, the enciphered vector is given by:

```
| 6   24   1  |  |  2  |   |  31  |   |  5  |
| 13  16   10 |  |  0  | = |  216 | ≡ |  8  | (mod 26)
| 20  17   15 |  |  19 |   |  325 |   |  13 |
```

which corresponds to a ciphertext of `FIN`. Every letter has changed.

## Decryption

To decrypt the message, each block is multiplied by the inverse of the matrix used for encryption. We turn the ciphertext back into a vector, then simply multiply by the inverse matrix of the key matrix (`IFK/VIV/VMI` in letters). (See [matrix inversion](https://en.wikipedia.org/wiki/Matrix_inversion) for methods to calculate the inverse matrix.) We find that, modulo 26, the inverse of the matrix used in the previous example is:

```
                -1
| 6   24   1  |                | 8   5    10 |
| 13  16   10 |    (mod 26) ≡  | 21  8    21 |
| 20  17   15 |                | 21  12   8  |
```

Taking the previous example ciphertext of `POH`, we get:

```
| 8   5    10 |  |  15 |   |  260 |   |  0  |
| 21  8    21 |  |  14 | = |  574 | ≡ |  2  | (mod 26)
| 21  12   8  |  |  7  |   |  539 |   |  19 |
```

which gets us back to `ACT`, as expected.

## Defining the encrypting matrix

Two complications exist in picking the encrypting matrix:

1. Not all matrices have an inverse. The matrix will have an inverse if and only if its [determinant](https://en.wikipedia.org/wiki/Determinant) is not zero.
2. The determinant of the encrypting matrix must not have any common factors with the modular base.

Thus, if we work modulo `26` as above, the determinant must be nonzero, and must not be divisible by `2` or `13`. If the determinant is `0`, or has common factors with the modular base, then the matrix cannot be used in the Hill cipher, and another matrix must be chosen (otherwise it will not be possible to decrypt). Fortunately, matrices which satisfy the conditions to be used in the Hill cipher are fairly common.

## References

- [Hill cipher on Wikipedia](https://en.wikipedia.org/wiki/Hill_cipher)
- [Matrix inversion on MathIsFun](https://www.mathsisfun.com/algebra/matrix-inverse.html)
- [GeeksForGeeks](https://www.geeksforgeeks.org/hill-cipher/)

