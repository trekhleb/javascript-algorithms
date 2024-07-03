# Permutations

When the order doesn't matter, it is a **Combination**.

When the order **does** matter it is a **Permutation**.

**"The combination to the safe is 472"**. We do care about the order. `724` won't work, nor will `247`.
It has to be exactly `4-7-2`.

## Permutations without repetitions

A permutation, also called an “arrangement number” or “order”, is a rearrangement of
the elements of an ordered list `S` into a one-to-one correspondence with `S` itself.

Below are the permutations of string `ABC`.

`ABC ACB BAC BCA CBA CAB`

Or for example the first three people in a running race: you can't be first and second.

**Number of combinations**

```
n * (n-1) * (n -2) * ... * 1 = n!
```

## Permutations with repetitions

When repetition is allowed we have permutations with repetitions.
For example the the lock below: it could be `333`.

![Permutation Lock](https://www.mathsisfun.com/combinatorics/images/combination-lock.jpg)

**Number of combinations**

```
n * n * n ... (r times) = n^r
```

## Cheatsheet

![Permutations and Combinations Overview](./images/overview.png)

![Permutations overview](./images/permutations-overview.jpeg)

| | |
| --- | --- |
|![Permutations with repetition](./images/permutations-with-repetitions.jpg) | ![Permutations without repetition](./images/permutations-without-repetitions.jpg) |

*Made with [okso.app](https://okso.app)*

## References

- [Math Is Fun](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
- [Permutations/combinations cheat sheets](https://medium.com/@trekhleb/permutations-combinations-algorithms-cheat-sheet-68c14879aba5)
