# Tree-Sort

A **tree sort** is a sort algorithm that builds a binary search tree from the elements to be sorted, and then traverses the tree in-order so that the elements come out in sorted order. Its typical use is sorting elements online: after each insertion, the set of elements seen so far is available in sorted order. Tree sort can be used as a one-time sort, but it is equivalent to quicksort as both recursively partition the elements based on a pivot, and since quicksort is in-place and has lower overhead, tree sort has few advantages over quicksort. It has better worst case complexity when a self-balancing tree is used, but even more overhead.

## Efficiency

Adding one item to a binary search tree is on average an `O(log n)` process (in big O notation). Adding n items is an O(n log n) process, making tree sorting a 'fast sort' process. Adding an item to an unbalanced binary tree requires `O(n)` time in the worst-case: When the tree resembles a linked list (degenerate tree). This results in a worst case of `O(n²)` time for this sorting algorithm. This worst case occurs when the algorithm operates on an already sorted set, or one that is nearly sorted, reversed or nearly reversed. Expected `O(n log n)` time can however be achieved by shuffling the array, but this does not help for equal items.

The worst-case behaviour can be improved by using a self-balancing binary search tree. Using such a tree, the algorithm has an `O(n log n)` worst-case performance, thus being degree-optimal for a comparison sort. However, tree sort algorithms require separate memory to be allocated for the tree, as opposed to in-place algorithms such as quicksort or heapsort. On most common platforms, this means that heap memory has to be used, which is a significant performance hit when compared to quicksort and heapsort[citation needed]. When using a splay tree as the binary search tree, the resulting algorithm (called splaysort) has the additional property that it is an adaptive sort, meaning that its running time is faster than `O(n log n)` for inputs that are nearly sorted.

![Tree Sort Image](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Binary_tree_sort%282%29.png/200px-Binary_tree_sort%282%29.png)

## Pseudocode

````
STRUCTURE BinaryTree
     BinaryTree:LeftSubTree
     Object:Node
     BinaryTree:RightSubTree
 
 PROCEDURE Insert(BinaryTree:searchTree, Object:item)
     IF searchTree.Node IS NULL THEN
         SET searchTree.Node TO item
     ELSE
         IF item IS LESS THAN searchTree.Node THEN
             Insert(searchTree.LeftSubTree, item)
         ELSE
             Insert(searchTree.RightSubTree, item)
 
 PROCEDURE InOrder(BinaryTree:searchTree)
     IF searchTree.Node IS NULL THEN
         EXIT PROCEDURE
     ELSE
         InOrder(searchTree.LeftSubTree)
         EMIT searchTree.Node
         InOrder(searchTree.RightSubTree)
 
 PROCEDURE TreeSort(Collection:items)
     BinaryTree:searchTree
    
     FOR EACH individualItem IN items
         Insert(searchTree, individualItem)
    
     InOrder(searchTree)
````

## Complexity

| Name                  | Best            | Average             | Worst               | Stable    |     | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Tree Sort**        | n * log(n)           | n * log(n)               | n * log(n)(balanced)              | Yes       |  |
