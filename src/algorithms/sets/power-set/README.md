# Power Set

Power set of a set `S` is the set of all of the subsets of `S`, including the
empty set and `S` itself. Power set of set `S` is denoted as `P(S)`.

For example for `{x, y, z}`, the subsets
are:

```text
{
  {}, // (also denoted empty set ∅ or the null set)
  {x},
  {y},
  {z},
  {x, y},
  {x, z},
  {y, z},
  {x, y, z}
}
```

![Power Set](https://www.mathsisfun.com/sets/images/power-set.svg)

Here is how we may illustrate the elements of the power set of the set `{x, y, z}` ordered with respect to
inclusion:

![](https://upload.wikimedia.org/wikipedia/commons/e/ea/Hasse_diagram_of_powerset_of_3.svg)

**Number of Subsets**

If `S` is a finite set with `|S| = n` elements, then the number of subsets
of `S` is `|P(S)| = 2^n`. This fact, which is the motivation for the
notation `2^S`, may be demonstrated simply as follows:

> First, order the elements of `S` in any manner. We write any subset of `S` in
the format `{γ1, γ2, ..., γn}` where `γi , 1 ≤ i ≤ n`, can take the value
of `0` or `1`. If `γi = 1`, the `i`-th element of `S` is in the subset;
otherwise, the `i`-th element is not in the subset. Clearly the number of
distinct subsets that can be constructed this way is `2^n` as `γi ∈ {0, 1}`.

## Algorithms

### Bitwise Solution

Each number in binary representation in a range from `0` to `2^n` does exactly
what we need: it shows by its bits (`0` or `1`) whether to include related
element from the set or not. For example, for the set `{1, 2, 3}` the binary
number of `0b010` would mean that we need to include only `2` to the current set.

|       | `abc` | Subset        |
| :---: | :---: | :-----------: |
| `0`   | `000` | `{}`          |
| `1`   | `001` | `{c}`         |
| `2`   | `010` | `{b}`         |
| `3`   | `011` | `{c, b}`      |
| `4`   | `100` | `{a}`         |
| `5`   | `101` | `{a, c}`      |
| `6`   | `110` | `{a, b}`      |
| `7`   | `111` | `{a, b, c}`   |

> See [bwPowerSet.js](./bwPowerSet.js) file for bitwise solution.

### Backtracking Solution

In backtracking approach we're constantly trying to add next element of the set
to the subset, memorizing it and then removing it and try the same with the next
element.

> See [btPowerSet.js](./btPowerSet.js) file for backtracking solution.

### Cascading Solution

This is, arguably, the simplest solution to generate a Power Set.

We start with an empty set:

```text
powerSets = [[]]
```

Now, let's say:

```text
originalSet = [1, 2, 3]
```

Let's add the 1st element from the originalSet to all existing sets:

```text
[[]] ← 1 = [[], [1]]
```

Adding the 2nd element to all existing sets:

```text
[[], [1]] ← 2 = [[], [1], [2], [1, 2]]
```

Adding the 3nd element to all existing sets:

```
[[], [1], [2], [1, 2]] ← 3 = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```

And so on, for the rest of the elements from the `originalSet`. On every iteration the number of sets is doubled, so we'll get `2^n` sets.

> See [caPowerSet.js](./caPowerSet.js) file for cascading solution.

## References

* [Wikipedia](https://en.wikipedia.org/wiki/Power_set)
* [Math is Fun](https://www.mathsisfun.com/sets/power-set.html)
