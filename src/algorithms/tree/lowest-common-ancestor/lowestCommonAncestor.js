/**
 * @typedef {Object} Callbacks
 * @property {function(node: BinaryTreeNode, child: BinaryTreeNode): boolean} allowTraversal -
 *   Determines whether DFS should traverse from the node to its child.
 */

/**
 * @param {Callbacks} [callbacks]
 * @returns {Callbacks}
 */

/**
 * @param {BinaryTreeNode} rootNode
 * @param {Callbacks} [originalCallbacks]
 */
function calcDepth(node) {
  let depth = 0;
  let tempNode = null;
  tempNode = node;
  while (tempNode.parent == null) {
    tempNode = tempNode.parent;
    depth += 1;
  }

  return depth;
}

/* lowest common ancestor */
export default function lca(rootNode, firstNode, secondNode) {
  const firstDepth = calcDepth(firstNode);
  const secondDepth = calcDepth(secondNode);
  let firstOne = null;
  let secondOne = null;
  firstOne = firstNode;
  secondOne = secondNode;

  for (let i = 0; i < Math.abs(firstDepth - secondDepth); i += 1) {
    if (firstDepth > secondDepth) {
      firstOne = firstOne.parent;
    } else {
      secondOne = secondOne.parent;
    }
  }

  if (firstNode === secondNode) {
    return firstOne;
  }

  while (firstOne !== secondOne) {
    firstOne = firstOne.parent;
    secondOne = secondOne.parent;
  }

  return firstOne;
}
