# Interpolation Search

**Interpolation search** is an algorithm for searching for a key in an array that 
has been ordered by numerical values assigned to the keys (key values).

For example we have a sorted array of `n` uniformly distributed values `arr[]`, 
and we need to write a function to search for a particular element `x` in the array.

**Linear Search** finds the element in `O(n)` time, **Jump Search** takes `O(√ n)` time 
and **Binary Search** take `O(Log n)` time.

The **Interpolation Search** is an improvement over Binary Search for instances, 
where the values in a sorted array are _uniformly_ distributed. Binary Search 
always goes to the middle element to check. On the other hand, interpolation 
search may go to different locations according to the value of the key being 
searched. For example, if the value of the key is closer to the last element, 
interpolation search is likely to start search toward the end side.

To find the position to be searched, it uses following formula:

```
// The idea of formula is to return higher value of pos
// when element to be searched is closer to arr[hi]. And
// smaller value when closer to arr[lo]
pos = lo + ((x - arr[lo]) * (hi - lo) / (arr[hi] - arr[Lo]))

arr[] - Array where elements need to be searched
x - Element to be searched
lo - Starting index in arr[]
hi - Ending index in arr[]
```

## Complexity

**Time complexity**: `O(log(log(n))`

## References

- [GeeksForGeeks](https://www.geeksforgeeks.org/interpolation-search/)
- [Wikipedia](https://en.wikipedia.org/wiki/Interpolation_search)
