# Inorder Traversal

Inorder traversal is an algorithm for traversing a tree 
data structures. One starts at 
the root and explores left branch of tree, root node and then right branch of tree


# Inorder Traversal Algorithm

Inorder traversal is an algorithm for traversing tree data structures.The algorithm involves visiting each node in a specific order: left branch, root node, and then the right branch. This ensures that the nodes are visited in ascending order for Binary Search Trees (BST).

## Inorder Traversal Steps

1. **Start at the root node** of the tree.
2. **Recursively explore the left subtree**:
    - Move to the left child of the current node.
    - Repeat the inorder traversal on the left subtree.
3. **Visit the root node**:
    - Process the current node (e.g., print its value, apply a callback function).
4. **Recursively explore the right subtree**:
    - Move to the right child of the current node.
    - Repeat the inorder traversal on the right subtree.


## Complexities

### Time Complexity

O(N) Where N is number of nodes in Tree

### Space Complexity

O(H) Where H is height of tree

## References
-  [Wikipedia](https://en.wikipedia.org/wiki/Tree_traversal)

