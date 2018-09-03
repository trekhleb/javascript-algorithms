# Nth Power using Binary Search

In computer science, `binary search`, also known as `half-interval search`, `logarithmic search`, or `binary chop`,is a search algorithm that finds the position of a target value within a range or sorted array. Binary search compares the target value to the middle element of the range or array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array. Even though the idea is simple, implementing binary search correctly requires attention to some subtleties about its exit conditions and midpoint calculation.

![Nth Root](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

## References
[Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)