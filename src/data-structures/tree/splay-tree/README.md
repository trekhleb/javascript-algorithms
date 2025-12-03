# Splay Tree

A **splay tree** is a self-adjusting binary search tree with the additional property that recently accessed elements are quick to access again. It performs basic operations such as insertion, look-up and removal in **O(log n)** amortized time. For many sequences of operations, splay trees perform better than other search trees, even when they perform the same operations.

## How it works

The key idea behind splay trees is the **splay operation**: when a node is accessed (find, insert, or remove), it is moved to the root of the tree through a series of tree rotations. This "splaying" operation ensures that frequently accessed nodes stay near the root, making future accesses faster.

### Splay Operations

There are three types of rotations used in splaying:

1. **Zig**: When the node's parent is the root
2. **Zig-Zig**: When the node and its parent are both left or both right children
3. **Zig-Zag**: When the node is a left child and its parent is a right child (or vice versa)

```
Zig:          Zig-Zig:           Zig-Zag:
     P              G                 G
    / \            / \               / \
   X   C   =>     P   D   =>        X   P
  / \            / \               / \
 A   B          X   C             A   B C D
    / \        / \
   A   B      A   B
```

## Complexity Analysis

| Operation | Average Case | Worst Case | Amortized |
|-----------|--------------|------------|-----------|
| Access    | O(log n)     | O(n)       | O(log n)  |
| Search    | O(log n)     | O(n)       | O(log n)  |
| Insert    | O(log n)     | O(n)       | O(log n)  |
| Delete    | O(log n)     | O(n)       | O(log n)  |

## Advantages

- **Cache performance**: Frequently accessed items stay near the root
- **Simple implementation**: No need to store extra balance information
- **Practical performance**: Works well in real-world applications
- **Memory efficient**: No additional storage requirements beyond BST

## Disadvantages

- **Worst-case performance**: Can degrade to O(n) in worst case
- **Not balanced**: The tree can become unbalanced
- **Unpredictable**: Performance can vary based on access patterns

## When to Use

- **Access pattern is non-uniform**: Some items are accessed much more frequently
- **Cache-like behavior**: Recently accessed items are likely to be accessed again
- **Simple implementation**: When you want a self-adjusting tree without complex balancing

## Comparison with Other Trees

| Tree Type | Balanced | Self-Adjusting | Memory | Worst Case |
|-----------|----------|----------------|--------|------------|
| AVL Tree  | Yes      | No             | O(n)   | O(log n)   |
| Red-Black | Yes      | No             | O(n)   | O(log n)   |
| Splay Tree| No       | Yes            | O(n)   | O(n)       |

## Implementation Details

The splay tree implementation includes:

- **SplayTree class**: Main tree interface with splay operations
- **SplayTreeNode class**: Node implementation with rotation logic
- **Rotations**: Zig, zig-zig, and zig-zag operations
- **Operations**: Insert, find, remove, contains, findMin, findMax

## Usage

```javascript
import SplayTree from './src/data-structures/tree/splay-tree/SplayTree';

// Create a new splay tree
const splayTree = new SplayTree();

// Insert values
splayTree.insert(10);
splayTree.insert(5);
splayTree.insert(15);
splayTree.insert(3);
splayTree.insert(7);

// Find values (automatically splays to root)
console.log(splayTree.find(7)); // Returns 7, 7 becomes root
console.log(splayTree.root.value); // 7

// Check if value exists
console.log(splayTree.contains(5)); // Returns true, 5 becomes root

// Remove values
splayTree.remove(5);

// Find min/max
console.log(splayTree.findMin()); // Returns minimum value
console.log(splayTree.findMax()); // Returns maximum value
```

## Further Reading

- [Splay Trees - Wikipedia](https://en.wikipedia.org/wiki/Splay_tree)
- [Splay Trees Data Structure - GeeksforGeeks](https://www.geeksforgeeks.org/splay-tree-set-1-insert/)
- [Splay Tree Visualization](https://www.cs.usfca.edu/~galles/visualization/SplayTree.html)
- [Original Paper: "Splay Trees" by Sleator and Tarjan](https://www.cs.cmu.edu/~sleator/papers/Splay-Trees.pdf)
- [MIT 6.046J Lecture 12: Splay Trees](https://www.youtube.com/watch?v=O3wUbl2a3j4)

## References

- Sleator, D. D., & Tarjan, R. E. (1985). "Self-adjusting binary search trees". Journal of the ACM.
- Tarjan, R. E. (1985). "Amortized computational complexity". SIAM Journal on Algebraic and Discrete Methods.
