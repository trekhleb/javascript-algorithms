# Timsort


Timsort is a sorting algorithm based on insertion sort and merge sort.
it was invented by Peter Tim in 2002 and this sort is used in the
Java's Array.sort() method as well as Python language's sorted() and sort() method,
in this algorithm first we make the chunks of the array and sort
them using Insertion Sort and then we merge those sorted chunks using
merge of Merge Sort.

The steps are:

1. We divide the array into the blocks of Run
2. Those divided blocks are then sorted using the insertion
sort one by one
3. Once these are sorted we merge the sorted array chunks and combine
them using the merge sort.

The size of the run can be 32 or 64 based on the array size, if those are power of two that
will help us in the performance in the insertion sort

Animated visualization of the timesort algorithm.

![TimSort](https://www.youtube.com/watch?v=NVIjHj-lrT4)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Tim sort**        | n&nbsp;O(n)   | n&nbsp;n*log(n)       | n&nbsp; n*log(n)       | log(n)    | Yes        |  Timsort requires space of O(n) |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Timsort)
- [YouTube] [Part1](https://www.youtube.com/watch?v=emeME__917E)
            [Part2](https://www.youtube.com/watch?v=6DOhQyqAAvU)
            [Part3](https://www.youtube.com/watch?v=Yk4CBisILaw)
