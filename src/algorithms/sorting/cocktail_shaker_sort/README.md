# Counting Sort

_Read this in other languages:_
[_Português_](README.pt-BR.md)

Cocktail shaker sort also known as bidirectional bubble sort cocktail sort, shaker sort 
(which can also refer to a variant of selection sort) is an extension of bubble sort. The algorithm extends bubble sort by operating in two directions. While it improves on bubble sort by more quickly moving items to the beginning of the list, it provides only marginal performance improvements.

Because counting sort uses key values as indexes into an array, 
it is not a comparison sort, and the `Ω(n log n)` lower bound for 
comparison sorting does not apply to it. Bucket sort may be used 
for many of the same tasks as counting sort, with a similar time 
analysis; however, compared to counting sort, bucket sort requires 
linked lists, dynamic arrays or a large amount of preallocated 
memory to hold the sets of items within each bucket, whereas 
counting sort instead stores a single number (the count of items) 
per bucket.

Counting sorting works best when the range of numbers for each array
element is very small.

## Algorithm
**STAGE 1**
The first stage loops through the array from left to right, just like the Bubble Sort. During the loop, adjacent items are compared and if the value on the left is greater than the value on the right, then values are swapped. At the end of the first iteration, the largest number will reside at the end of the array.
**STAGE 2**
The second stage loops through the array in opposite direction- starting from the item just before the most recently sorted item, and moving back to the start of the array. Here also, adjacent items are compared and are swapped if required.
## Example
Example : 

Let us consider an example array (5 1 4 2 8 0 2)

## First Forward Pass: 
(5 1 4 2 8 0 2) ? (1 5 4 2 8 0 2), Swap since 5 > 1 
(1 5 4 2 8 0 2) ? (1 4 5 2 8 0 2), Swap since 5 > 4 
(1 4 5 2 8 0 2) ? (1 4 2 5 8 0 2), Swap since 5 > 2 
(1 4 2 5 8 0 2) ? (1 4 2 5 8 0 2) 
(1 4 2 5 8 0 2) ? (1 4 2 5 0 8 2), Swap since 8 > 0 
(1 4 2 5 0 8 2) ? (1 4 2 5 0 2 8), Swap since 8 > 2
After the first forward pass, the greatest element of the array will be present at the last index of the array.

## First Backward Pass: 
(1 4 2 5 0 2 8) ? (1 4 2 5 0 2 8) 
(1 4 2 5 0 2 8) ? (1 4 2 0 5 2 8), Swap since 5 > 0 
(1 4 2 0 5 2 8) ? (1 4 0 2 5 2 8), Swap since 2 > 0 
(1 4 0 2 5 2 8) ? (1 0 4 2 5 2 8), Swap since 4 > 0 
(1 0 4 2 5 2 8) ? (0 1 4 2 5 2 8), Swap since 1 > 0
After the first backward pass, the smallest element of the array will be present at the first index of the array.

## Second Forward Pass: 
(0 1 4 2 5 2 8) ? (0 1 4 2 5 2 8) 
(0 1 4 2 5 2 8) ? (0 1 2 4 5 2 8), Swap since 4 > 2 
(0 1 2 4 5 2 8) ? (0 1 2 4 5 2 8) 
(0 1 2 4 5 2 8) ? (0 1 2 4 2 5 8), Swap since 5 > 2

## Second Backward Pass: 
(0 1 2 4 2 5 8) ? (0 1 2 2 4 5 8), Swap since 4 > 2
Now, the array is already sorted, but our algorithm doesn’t know if it is completed. The algorithm needs to complete this whole pass without any swap to know it is sorted. 
(0 1 2 2 4 5 8) ? (0 1 2 2 4 5 8) 
(0 1 2 2 4 5 8) ? (0 1 2 2 4 5 8)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Counting sort**     | n               | n ^ 2               | n ^ 2               | 1         | Yes       | n - array length |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Cocktail_shaker_sort)
- [GeeksForGeeks](https://www.geeksforgeeks.org/cocktail-sort/)
## explaining sort algorithm
-[GeeksForGeeks](https://www.geeksforgeeks.org/sorting-algorithms/)