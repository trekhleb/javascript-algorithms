The problem for find the largest sum of a subarray of an array 
has been around for a long time.  But no one was able to develop
an efficient algorithm for the problem for a long time until 
Joseph Kadane, a statistician put forth an algorithm which runs 
in one time linear pass or O(n) and constant or O(1) space.

It works by splitting the array into two different disjoint sets, 
one of which calculates the max of the array upto the i position 
and the other one keeps the global max.

Since the array may contain negative values, skewing the overall
max subarray, this algorithm checks if each individual item is 
larger than all of the previously added items.  If the single item
is larger than the sum of elements from 0 to i inclusive, then that 
will be the new temporary max.

array = [-1,5,-4,9]

The algorithm starts by initialzing variables a and b, storing the
first element of the array.

// step 1

a = -1,
b = -1

Starting the loop from the first index, it then checks if 5 is 
larger than a or sum of the all elements from 0 to i inclusive.

// step 2

a = 5

Then checks if a is larger than b, if it is, b then become a. 
This process repeats for the entire array.

b = 5

// step 3

a = 1,
b = 5

// step 4

a = 10,
b = 10

return 10
