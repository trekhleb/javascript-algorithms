# Shellsort

_Read this in other languages:_
[_Português_](README.pt-BR.md).

Shellsort, also known as Shell sort or Shell's method, 
is an in-place comparison sort. It can be seen as either a 
generalization of sorting by exchange (bubble sort) or sorting 
by insertion (insertion sort). The method starts by sorting 
pairs of elements far apart from each other, then progressively 
reducing the gap between elements to be compared. Starting 
with far apart elements, it can move some out-of-place 
elements into position faster than a simple nearest neighbor 
exchange

![Shellsort](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

## How Shell Sort Works

For our example and ease of understanding, we take the interval 
of `4`. Make a virtual sub-list of all values located at the 
interval of 4 positions. Here these values are 
`{35, 14}`, `{33, 19}`, `{42, 27}` and `{10, 44}`

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_gap_4.jpg)

We compare values in each sub-list and swap them (if necessary)
in the original array. After this step, the new array should
look like this

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_step_1.jpg)

Then, we take interval of 2 and this gap generates two sub-lists 
- `{14, 27, 35, 42}`, `{19, 10, 33, 44}`

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_gap_2.jpg)

We compare and swap the values, if required, in the original array.
After this step, the array should look like this

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_step_2.jpg)

> UPD: On the picture below there is a typo and result array is supposed to be `[14, 10, 27, 19, 35, 33, 42, 44]`.

Finally, we sort the rest of the array using interval of value 1. 
Shell sort uses insertion sort to sort the array.

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort.jpg)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |

## References

- [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm)
- [Wikipedia](https://en.wikipedia.org/wiki/Shellsort)
- [YouTube by Rob Edwards](https://www.youtube.com/watch?v=ddeLSDsYVp8&index=79&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
