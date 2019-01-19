# Bucket Sort

**Bucket sort, or bin sort**, is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm. It is a distribution sort, a generalization of pigeonhole sort, and is a cousin of radix sort in the most-to-least significant digit flavor. Bucket sort can be implemented with comparisons and therefore can also be considered a comparison sort algorithm. The computational complexity depends on the algorithm used to sort each bucket, the number of buckets to use, and whether the input is uniformly distributed.

## Algorithm

**Phase I**

1. Set up an array of initially empty "buckets".
2. Scatter: Go over the original array, putting each object in its bucket.

![Bucket Sort](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bucket_sort_1.svg/311px-Bucket_sort_1.svg.png)

**Phase II**

3. Sort each non-empty bucket.
**or**
3. recurse and BucketSort the buckets again

![Bucket Sort](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bucket_sort_2.svg/311px-Bucket_sort_2.svg.png)

**Phase 3**

4. Gather: Visit the buckets in order and put all elements back into the original array.


## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable  
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bucket Sort**     | n + k           | n + k              | n<sup>2</sup>              | n    | Yes       

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Counting_sort)
- [BigOCheatSheet](http://bigocheatsheet.com)

