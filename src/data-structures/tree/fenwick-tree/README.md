# Fenwick Tree / Binary Indexed Tree

A simple data structure that supports fast range queries 
in an array. However, it is usually only valid for reversible 
operations, like addition and subtraction

Binary Indexed Tree is represented as an array. Each node of Binary Indexed Tree 
stores sum of some elements of given array. Size of Binary Indexed Tree is equal 
to `n` where `n` is size of input array. In current implementation we have used 
size as `n+1` for ease of implementation. All the indexes are 1-based.

![Binary Indexed Tree](https://www.geeksforgeeks.org/wp-content/uploads/BITSum.png)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Fenwick_tree)
- [GeeksForGeeks](https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/)
- [YouTube](https://www.youtube.com/watch?v=CWDQJGaN1gY&index=18&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
