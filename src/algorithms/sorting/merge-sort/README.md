# Merge Sort

_Read this in other languages:_
[_한국어_](README.ko-KR.md)

In computer science, merge sort (also commonly spelled
mergesort) is an efficient, general-purpose,
comparison-based sorting algorithm. Most implementations
produce a stable sort, which means that the implementation
preserves the input order of equal elements in the sorted
output. Mergesort is a divide and conquer algorithm that
was invented by John von Neumann in 1945.

An example of merge sort. First divide the list into
the smallest unit (1 element), then compare each
element with the adjacent list to sort and merge the
two adjacent lists. Finally all the elements are sorted
and merged.

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

A recursive merge sort algorithm used to sort an array of 7
integer values. These are the steps a human would take to
emulate merge sort (top-down).

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
- [YouTube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
