function preorderTraversalRecursive(root, callback) {
  if (!root) {
    return;
  }
  // callback calling
  callback(root);

  // left branch
  preorderTraversalRecursive(root.left, callback);

  // right branch
  preorderTraversalRecursive(root.right, callback);
}

/**
   * --preorder traversal of binary tree
   * @param {BinaryTreeNode} root - Root node of binary tree
   * @param {CallableFunction} callback
   * - Callback function which calles for each node in preorder traversal
   * @returns {void}
   */

export default function preorderTraversal(root, callback) {
  preorderTraversalRecursive(root, callback);
}
