# Bucket Sort
Bucket sort, or bin sort, is a sorting algorithm that works by distributing the elements of an array into a number of
buckets. Bucket sort perform well on uniformly distributed lists.

Note that due to the need for arithmetic operations, this type of sorting can only be used for numeric arrays. so comparator will be ignored.

## Complexity

Consider n as array size and k as buckets count.

You can pass bucketCounts as a parameter to this function, but it has a default value, and it is n.

| Name                  | Best            | Average                   | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------------: | :-----------------: | :-------: | :-------: | :-------- |
| **BucketSort**        | n               | n + n<sup>2</sup> / k + k | n<sup>2</sup>       | n         | undefined |           |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Bucket_sort)

[GeeksForGeeks](https://www.geeksforgeeks.org/bucket-sort-2/)
