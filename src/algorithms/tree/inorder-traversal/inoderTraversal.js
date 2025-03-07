function inorderTraversalRecursive(root, callback) {
  if (!root) {
    return;
  }
  // left branch
  inorderTraversalRecursive(root.left, callback);

  // callback calling
  callback(root);

  // right branch

  inorderTraversalRecursive(root.right, callback);
}

/**
 * --Inorder traversal of binary tree
 * @param {BinaryTreeNode} root - Root node of binary tree
 * @param {CallableFunction} callback
 * - Callback function which calles for each node in inorder traversal
 * @returns {void}
 */

export default function inorderTraversal(root, callback) {
  inorderTraversalRecursive(root, callback);
}
