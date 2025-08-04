# Quick Sort

**Quick Sort** is a divide-and-conquer sorting algorithm. It selects a "pivot" element and partitions the array into two sub-arrays: elements less than the pivot and elements greater than the pivot. The process is recursively repeated for the sub-arrays until the entire array is sorted.

## Complexity

| Case        | Time Complexity |
| ----------- | -------------- |
| Best        | O(n log n)     |
| Average     | O(n log n)     |
| Worst       | O(n²)          |
| Space       | O(log n)       |
| Stable      | No             |

## How it works

1. Pick a pivot element from the array.
2. Partition the array so that elements less than the pivot are on the left, and those greater are on the right.
3. Recursively apply the above steps to the sub-arrays.

## Example in JavaScript

```javascript
function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x <= pivot);
  const right = arr.slice(1).filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

## References

- [Wikipedia: Quick Sort](https://en.wikipedia.org/wiki/Quicksort)
- [Quick Sort Tutorial (YouTube)](https://www.youtube.com/watch?v=Hoixgm4-P4M)