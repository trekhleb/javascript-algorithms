# Least common multiple

In arithmetic and number theory, the least common multiple, 
lowest common multiple, or smallest common multiple of 
two integers `a` and `b`, usually denoted by `LCM(a, b)`, is 
the smallest positive integer that is divisible by 
both `a` and `b`. Since division of integers by zero is 
undefined, this definition has meaning only if `a` and `b` are 
both different from zero. However, some authors define `lcm(a,0)`
as `0` for all `a`, which is the result of taking the `lcm`
to be the least upper bound in the lattice of divisibility.

## Example

What is the LCM of 4 and 6?

Multiples of `4` are:

```
4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, ...
```

and the multiples of `6` are:

```
6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, ...
```

Common multiples of `4` and `6` are simply the numbers 
that are in both lists:

```
12, 24, 36, 48, 60, 72, ....
```

So, from this list of the first few common multiples of 
the numbers `4` and `6`, their least common multiple is `12`.

## Computing the least common multiple

The following formula reduces the problem of computing the 
least common multiple to the problem of computing the greatest 
common divisor (GCD), also known as the greatest common factor:

```
lcm(a, b) = |a * b| / gcd(a, b)
```

![LCM](https://upload.wikimedia.org/wikipedia/commons/c/c9/Symmetrical_5-set_Venn_diagram_LCM_2_3_4_5_7.svg)

A Venn diagram showing the least common multiples of 
combinations of `2`, `3`, `4`, `5` and `7` (`6` is skipped as 
it is `2 × 3`, both of which are already represented).

For example, a card game which requires its cards to be 
divided equally among up to `5` players requires at least `60`
cards, the number at the intersection of the `2`, `3`, `4`
and `5` sets, but not the `7` set.

## References

[Wikipedia](https://en.wikipedia.org/wiki/Least_common_multiple)
