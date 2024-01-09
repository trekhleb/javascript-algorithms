# Twin Pointers

The twin pointers method, also known as the two pointers method, is a searching algorithm 
that can be used on both sorted and unsorted numerical arrays/lists, depending on the intent of the function. 
At its simplest form the twin pointer method employes two "pointers" that either move at different 
speeds/from different starting positions in order to draw comparisons between values in order to 
find some specified target. In the case that the array/list being searched through is sorted, 
a common usage of the twin pointers is to have one at the starting and one at the ending position; 
in this manner, moving the left pointer to the right can be assumed to increase its value while moving 
the right pointer to the left can be assumed to do vice versa. In the case of an unsorted arrays/list, 
the usage methods are generally much more varied based on what the characteristics of the intended 
target of the search are.

Note that any array can be sorted to easily use the twin pointer method by using the Array.sort method.
However, the Array.sort method inherently has a time complexity of O(n log n), which can be undesirable
in many cases when the desired time complexity of your solution is simply O(n).

## Complexity

**Time Complexity**: `O(n)` - since we only need to look over every element of our array a single time when comparing, time complexity is O(n).

## References

- [GeeksForGeeks](https://www.geeksforgeeks.org/two-pointers-technique/)
- [YouTube](https://youtu.be/VEPCm3BCtik?si=rH9O1My7Ym_83FrR)
