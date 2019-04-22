# Odd-Even Sort

Odd–Even sort (also known as brick sort) is a relatively simple sorting algorithm. Developed originally for use on parallel processors with local interconnections. It is a comparison sort related to bubble sort, with which it shares many characteristics. It functions by comparing all odd/even indexed pairs of adjacent elements in the list and, if a pair is in the wrong order (the first is larger than the second) the elements are switched. The next step repeats this for even/odd indexed pairs (of adjacent elements). Then it alternates between odd/even and even/odd steps until the list is sorted.


![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/1/1b/Odd_even_sort_animation.gif)

## Complexity

| Name                    | Best            | Average             | Worst               | Memory    | Stable    | Comments                                  |
| ----------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :---------------------------------------- |
| **Odd-Even sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       | Can be run on parallel processors easily. |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Odd–even_sort)
<!-- - [YouTube](https://www.youtube.com/watch?v=6Gv8vg0kcHc&index=27&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8) -->
