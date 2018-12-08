# Bogo Sort

In computer science, bogosort (also known as permutation sort, stupid sort, slowsort, shotgun sort or monkey sort) is a highly ineffective sorting function based on the generate and test paradigm. The function successively generates permutations of its input until it finds one that is sorted. It is not useful for sorting, but may be used for educational purposes, to contrast it with more efficient algorithms.

Two versions of the function exist: a deterministic version that enumerates all permutations until it hits a sorted one, and a randomized version that randomly permutes its input. An analogy for the working of the latter version is to sort a deck of cards by throwing the deck into the air, picking the cards up at random, and repeating the process until the deck is sorted. Its name is a portmanteau the words bogus and sort.

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bogo sort**         | n               | (n+1)!              | Unbounded           | 1         | No        |           |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Bogosort)
