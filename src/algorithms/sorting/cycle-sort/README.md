# Cycle Sort

Cycle sort is an in-place, unstable sorting algorithm that minimizes the number of writes to the array. It is theoretically optimal in terms of total number of memory writes.

![Cycle Sort Visualization](https://upload.wikimedia.org/wikipedia/commons/5/5e/Cycle_sort_animation.gif)

## How It Works

Cycle Sort works by determining the correct position of each element and rotating elements in cycles until each element is placed in its correct position.

Unlike traditional sorting algorithms, Cycle Sort is optimal when memory writes are expensive.

## Complexity

| Name        | Best   | Average | Worst  | Memory | Stable |
|------------|--------|---------|--------|--------|--------|
| Cycle Sort | O(n²)  | O(n²)   | O(n²)  | O(1)   | No     |

## Characteristics

- In-place sorting
- Minimizes memory writes
- Not stable
- Useful when write operations are costly

## References

- https://en.wikipedia.org/wiki/Cycle_sort
