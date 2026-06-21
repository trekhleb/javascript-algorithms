# Exponential Search

In computer science, an exponential search is an algorithm.There are numerous ways to implement this with the most common being to determine a range that the search key
resides in and performing a binary search within that range. This takes O(log i) where i is the position of the search key in the list, if the search key is in the list,
or the position where the search key should be, if the search key is not in the list.Exponential search can also be used to search in bounded lists. Exponential search 
can even out-perform more traditional searches for bounded lists, such as binary search, when the element being searched for is near the beginning of the array.

![Exponential Search](https://upload.wikimedia.org/wikipedia/commons/4/45/Exponential_search.svg)

## Complexity

**Time Complexity**: `O(log i)` -  i is the index of the element being searched for in the list

## References

-[Wikipedia](https://en.wikipedia.org/wiki/Exponential_search)
