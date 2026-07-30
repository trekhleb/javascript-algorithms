# Catalan Number

In combinatorial mathematics, the **Catalan numbers** form a sequence of natural numbers that occur in various counting problems, often involving recursively-defined objects.

The Catalan numbers on nonnegative integers `n` are a sequence `Cn` which begins:

```
C0=1, C1=1, C2=2, C3=5, C4=14, C5=42, C6=132, C7=429, C8=1430, C9=4862, C10=16796, ...
```

## Formula

The nth Catalan number can be expressed directly in terms of binomial coefficients:

![Catalan Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/2d9f0d0d64c8b5e8f8f8c8f8f8f8f8f8f8f8f8f8)

```
C(n) = (2n)! / ((n + 1)! * n!)
```

Or using the recursive formula:

```
C(0) = 1
C(n) = sum of C(i) * C(n-1-i) for i = 0 to n-1
```

## Applications

Catalan numbers have many applications in combinatorics:

1. **Binary Search Trees**: `Cn` is the number of different binary search trees with `n` keys
2. **Parentheses**: `Cn` is the number of expressions containing `n` pairs of correctly matched parentheses
3. **Polygon Triangulation**: `Cn` is the number of ways to triangulate a convex polygon with `n+2` sides
4. **Path Counting**: `Cn` is the number of paths in a grid from `(0,0)` to `(n,n)` that don't cross the diagonal
5. **Dyck Words**: `Cn` is the number of Dyck words of length `2n`
6. **Mountain Ranges**: `Cn` is the number of "mountain ranges" you can draw using `n` upstrokes and `n` downstrokes

## Examples

### Binary Search Trees
With 3 keys (1, 2, 3), there are `C3 = 5` different BSTs:

```
  1      1        2        3      3
   \      \      / \      /      /
    2      3    1   3    1      2
     \    /              \     /
      3  2                2   1
```

### Parentheses
With 3 pairs of parentheses, there are `C3 = 5` valid combinations:

```
((()))
(()())
(())()
()(())
()()()
```

### Polygon Triangulation
A hexagon (6 sides = n+2, so n=4) can be triangulated in `C4 = 14` different ways.

## Complexity

- **Time Complexity**: `O(n²)` - Using dynamic programming approach
- **Space Complexity**: `O(n)` - To store intermediate results

## References

- [Wikipedia - Catalan Number](https://en.wikipedia.org/wiki/Catalan_number)
- [OEIS - Catalan Numbers](https://oeis.org/A000108)
- [YouTube - Catalan Numbers](https://www.youtube.com/watch?v=GlI17WaMrtw)
