# Ternary Search

Ternary search is a divide-and-conquer algorithm for finding the position of a
target value within a **sorted array**. It works by dividing the search space
into **three equal parts** and determining which part the target is likely to be
in, then recursively narrowing down the search.

## How It Works

Given a sorted array, ternary search divides it using two midpoints:
- `midLeft = start + floor((end - start) / 3)`
- `midRight = end - floor((end - start) / 3)`

It then compares the target against both midpoints:
1. If `target == array[midLeft]` → found at `midLeft`
2. If `target == array[midRight]` → found at `midRight`
3. If `target < array[midLeft]` → search in the **left third**
4. If `target > array[midRight]` → search in the **right third**
5. Otherwise → search in the **middle third**

## Complexity

| | Complexity |
|---|---|
| **Time (Best)** | O(1) |
| **Time (Average)** | O(log₃ n) |
| **Time (Worst)** | O(log₃ n) |
| **Space** | O(1) |

## Comparison with Binary Search

While ternary search makes **more comparisons per iteration** (2 vs 1), it
reduces the search space by a third each time (vs. half). In practice, binary
search is generally preferred because its constant factors are lower. Ternary
search is most useful for **unimodal functions** (finding max/min in a function
that first increases then decreases).

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Ternary_search)
