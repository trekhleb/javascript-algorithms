function postorderTraversalRecursive(root, callback) {
  if (!root) {
    return;
  }

  // left branch
  postorderTraversalRecursive(root.left, callback);

  // right branch
  postorderTraversalRecursive(root.right, callback);

  // callback calling
  callback(root);
}

/**
     * --postorder traversal of binary tree
     * @param {BinaryTreeNode} root - Root node of binary tree
     * @param {CallableFunction} callback
     * - Callback function which calles for each node in postorder traversal
     * @returns {void}
     */

export default function postorderTraversal(root, callback) {
  postorderTraversalRecursive(root, callback);
}
