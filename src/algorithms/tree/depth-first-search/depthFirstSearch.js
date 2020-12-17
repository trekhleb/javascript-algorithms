/**
 * @typedef {Object} TraversalCallbacks
 *
 * @property {function(node: BinaryTreeNode, child: BinaryTreeNode): boolean} allowTraversal
 * - Determines whether DFS should traverse from the node to its child.
 *
 * @property {function(node: BinaryTreeNode)} enterNode - Called when DFS enters the node.
 *
 * @property {function(node: BinaryTreeNode)} leaveNode - Called when DFS leaves the node.
 */

/**
 * Extend missing traversal callbacks with default callbacks.
 *
 * @param {TraversalCallbacks} [callbacks] - The object that contains traversal callbacks.
 * @returns {TraversalCallbacks} - Traversal callbacks extended with defaults callbacks.
 */
function initCallbacks(callbacks = {}) {
  // Init empty callbacks object.
  const initiatedCallbacks = {};

  // Empty callback that we will use in case if user didn't provide real callback function.
  const stubCallback = () => {};
  // By default we will allow traversal of every node
  // in case if user didn't provide a callback for that.
  const defaultAllowTraversalCallback = () => true;

  // Copy original callbacks to our initiatedCallbacks object or use default callbacks instead.
  initiatedCallbacks.allowTraversal = callbacks.allowTraversal || defaultAllowTraversalCallback;
  initiatedCallbacks.enterNode = callbacks.enterNode || stubCallback;
  initiatedCallbacks.leaveNode = callbacks.leaveNode || stubCallback;

  // Returned processed list of callbacks.
  return initiatedCallbacks;
}

/**
 * Recursive depth-first-search traversal for binary.
 *
 * @param {BinaryTreeNode} node - binary tree node that we will start traversal from.
 * @param {TraversalCallbacks} callbacks - the object that contains traversal callbacks.
 */
export function depthFirstSearchRecursive(node, callbacks) {
  // Call the "enterNode" callback to notify that the node is going to be entered.
  callbacks.enterNode(node);

  // Traverse left branch only if case if traversal of the left node is allowed.
  if (node.left && callbacks.allowTraversal(node, node.left)) {
    depthFirstSearchRecursive(node.left, callbacks);
  }

  // Traverse right branch only if case if traversal of the right node is allowed.
  if (node.right && callbacks.allowTraversal(node, node.right)) {
    depthFirstSearchRecursive(node.right, callbacks);
  }

  // Call the "leaveNode" callback to notify that traversal
  // of the current node and its children is finished.
  callbacks.leaveNode(node);
}

/**
 * Perform depth-first-search traversal of the rootNode.
 * For every traversal step call "allowTraversal", "enterNode" and "leaveNode" callbacks.
 * See TraversalCallbacks type definition for more details about the shape of callbacks object.
 *
 * @param {BinaryTreeNode} rootNode - The node from which we start traversing.
 * @param {TraversalCallbacks} [callbacks] - Traversal callbacks.
 */
export default function depthFirstSearch(rootNode, callbacks) {
  // In case if user didn't provide some callback we need to replace them with default ones.
  const processedCallbacks = initCallbacks(callbacks);

  // Now, when we have all necessary callbacks we may proceed to recursive traversal.
  depthFirstSearchRecursive(rootNode, processedCallbacks);
}
