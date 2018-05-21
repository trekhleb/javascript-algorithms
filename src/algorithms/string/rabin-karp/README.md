# Rabin Karp Algorithm

In computer science, the Rabin–Karp algorithm or Karp–Rabin algorithm 
is a string searching algorithm created by Richard M. Karp and 
Michael O. Rabin (1987) that uses hashing to find any one of a set 
of pattern strings in a text. 

## Complexity

For text of length `n` and `p` patterns 
of combined length `m`, its average and best case running time is 
`O(n + m)` in space `O(p)`, but its worst-case time is `O(n * m)`. 

## Application

A practical application of the algorithm is detecting plagiarism. 
Given source material, the algorithm can rapidly search through a paper 
for instances of sentences from the source material, ignoring details 
such as case and punctuation. Because of the abundance of the sought 
strings, single-string searching algorithms are impractical.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm)
- [YouTube](https://www.youtube.com/watch?v=H4VrKHVG5qI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
