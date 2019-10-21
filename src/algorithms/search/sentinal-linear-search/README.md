# Sentinal Linear Search
The idea in Sentinal Linear Search is to reduce the number of comparisons required to find an element in a list. Here we replace the last element of the list with the search element itself and run a while loop to see if there exists any copy of the search element in the list and quit the loop as soon as we find the search element.

## Complexity

**Time Complexity**: `O(n)` - since we're checking each element in the array

##Reference
- [Wikipedia] (https://en.wikipedia.org/wiki/Linear_search)