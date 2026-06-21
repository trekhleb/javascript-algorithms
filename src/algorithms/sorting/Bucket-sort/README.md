# Bucket Sort

**Bucket sort** is a sorting algorithm that works by distributing  
elements of an array into a number of different buckets.Each bucket 
representing a number range, then the buckets are sorted individually, 
either using a different sorting algorithm, or by recursively applying 
the bucket sorting algorithm.

The average time complexity for Bucket Sort is O(n + k) (k = number of buckets). The worst time 
complexity is O(n²).

## Algorithm

**Step I**

Our first real step is to create our buckets, we make an array thats the size of our original array, and then that array into a 2D array that will represent our buckets. This array will hold all of our elements for when we sort them.

<!-- ![Counting Sort](https://3.bp.blogspot.com/-jJchly1BkTc/WLGqCFDdvCI/AAAAAAAAAHA/luljAlz2ptMndIZNH0KLTTuQMNsfzDeFQCLcB/s1600/CSortUpdatedStepI.gif) -->

**Step II**

Next step we do the sorting, we find the index of the bucket we want to add our value to by doing a small equation. We take the element we want to sort and subtract the smallest value from our original array, and thats our index, so we just push that to our buckets array.

<!-- ![Counting Sort](https://1.bp.blogspot.com/-1vFu-VIRa9Y/WLHGuZkdF3I/AAAAAAAAAHs/8jKu2dbQee4ap9xlVcNsILrclqw0UxAVACLcB/s1600/Step-II.png) -->

**Step III**

Our last and final step is to compine all of our buckets to one array so we can return the sorted array. 
 
<!-- ![Counting Sort](https://1.bp.blogspot.com/-xPqylngqASY/WLGq3p9n9vI/AAAAAAAAAHM/JHdtXAkJY8wYzDMBXxqarjmhpPhM0u8MACLcB/s1600/ResultArrayCS.gif) -->

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Counting sort**     | n               | n + k               | n^2                 | n + k     | Yes       | k - number of buckets |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Bucket_sort)
- [YouTube](https://www.youtube.com/watch?v=VuXbEb5ywrU)
- [GeeksforGeeks](https://www.geeksforgeeks.org/bucket-sort-2/)
