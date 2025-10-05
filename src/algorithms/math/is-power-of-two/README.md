# Is a power of two

Given a positive integer, write a function to find if it is
a power of two or not.

**Naive solution**

In naive solution we just keep dividing the number by two
unless the number becomes `1` and every time we do so, we
check that remainder after division is always `0`. Otherwise, the number can't be a power of two.

**Bitwise solution**

Powers of two in binary form always have just one bit set.
The only exception is with a signed integer (e.g. an 8-bit
signed integer with a value of -128 looks like: `10000000`)

```
1: 0001
2: 0010
4: 0100
8: 1000
```

So after checking that the number is greater than zero,
we can use a bitwise hack to test that one and only one
bit is set.

```
number & (number - 1)
```

For example for number `8` that operations will look like:

```
  1000
- 0001
  ----
  0111

  1000
& 0111
  ----
  0000
```

## References

- [GeeksForGeeks](https://www.geeksforgeeks.org/program-to-find-whether-a-no-is-power-of-two/)
- [Bitwise Solution on Stanford](http://www.graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2)
- [Binary number subtraction on YouTube](https://www.youtube.com/watch?v=S9LJknZTyos&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=66)
