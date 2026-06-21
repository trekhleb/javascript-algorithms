# Gnome sort

Gnome sort (dubbed stupid sort) is a sorting algorithm originally 
proposed by an Iranian computer scientist Hamid Sarbazi-Azad 
(professor of Computer Engineering at Sharif University of Technology)
in 2000. The sort was first called stupid sort (not to be confused 
with bogosort), and then later described by Dick Grune and named gnome sort.

The gnome sort is a sorting algorithm which is similar to insertion 
sort in that it works with one item at a time but gets the item to 
the proper place by a series of swaps, similar to a bubble sort. 
It is conceptually simple, requiring no nested loops. The average 
running time is O(n2) but tends towards O(n) if the list is initially 
almost sorted.

The algorithm finds the first place where two adjacent elements are 
in the wrong order and swaps them. It takes advantage of the fact that 
performing a swap can introduce a new out-of-order adjacent pair 
next to the previously swapped elements. It does not assume that elements 
forward of the current position are sorted, so it only needs to check 
the position directly previous to the swapped elements.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Gnome_sort)
