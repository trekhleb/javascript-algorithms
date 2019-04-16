# Disjoint Set

_Read this in other languages:_
[_Русский_](README.ru-RU.md),
[_Português_](README.pt-BR.md)


**Disjoint-set** data structure (also called a union–find data structure or merge–find set) is a data 
structure that tracks a set of elements partitioned into a number of disjoint (non-overlapping) subsets. 
It provides near-constant-time operations (bounded by the inverse Ackermann function) to *add new sets*, 
to *merge existing sets*, and to *determine whether elements are in the same set*. 
In addition to many other uses (see the Applications section), disjoint-sets play a key role in Kruskal's algorithm for finding the minimum spanning tree of a graph.

![disjoint set](https://upload.wikimedia.org/wikipedia/commons/6/67/Dsu_disjoint_sets_init.svg)

*MakeSet* creates 8 singletons.

![disjoint set](https://upload.wikimedia.org/wikipedia/commons/a/ac/Dsu_disjoint_sets_final.svg)

After some operations of *Union*, some sets are grouped together.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)
- [By Abdul Bari on YouTube](https://www.youtube.com/watch?v=wU6udHRIkcc&index=14&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
