
# Preorder Traversal Algorithm

Preorder traversal is an algorithm for traversing tree data structures.The algorithm involves visiting each node in a specific order: root node, left branch, and then the right branch. 

## Preorder Traversal Steps

1. **Start at the root node** of the tree.
2. **Visit the root node**:
    - Process the current node (e.g., print its value, apply a callback function).
3. **Recursively explore the left subtree**:
    - Move to the left child of the current node.
    - Repeat the preorder traversal on the left subtree.
4. **Recursively explore the right subtree**:
    - Move to the right child of the current node.
    - Repeat the preorder traversal on the right subtree.


## Complexities

### Time Complexity

O(N) Where N is number of nodes in Tree

### Space Complexity

O(H) Where H is height of tree

## References
-  [Wikipedia](https://en.wikipedia.org/wiki/Tree_traversal)

