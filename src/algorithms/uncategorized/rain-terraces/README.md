# Rain Terraces (Trapping Rain Water) Problem

Given an array of non-negative integers representing terraces in an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

![Rain Terraces](https://www.geeksforgeeks.org/wp-content/uploads/watertrap.png)

## Examples

**Example #1**

```
Input: arr[]   = [2, 0, 2]
Output: 2
Structure is like below
| |
|_|
We can trap 2 units of water in the middle gap.
```

**Example #2**

```
Input: arr[]   = [3, 0, 0, 2, 0, 4]
Output: 10
Structure is like below
     |
|    |
|  | |
|__|_| 
We can trap "3*2 units" of water between 3 an 2,
"1 unit" on top of bar 2 and "3 units" between 2 
and 4.  See below diagram also.
```

**Example #3**

```
Input: arr[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
       | 
   |   || |
_|_||_||||||
Trap "1 unit" between first 1 and 2, "4 units" between
first 2 and 3 and "1 unit" between second last 1 and last 2 
```

## Algorithms



## References

- [GeeksForGeeks](https://www.geeksforgeeks.org/trapping-rain-water/)
