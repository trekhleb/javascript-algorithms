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
function calcDepth(node){
	let depth = 0;
	while (node.parent == null) {
		node = node.parent;
		depth += 1;
	}

	return depth;
}

/*lowest common ancestor*/
export default function lca(rootNode, firstNode, secondNode) {
	const firstDepth = calcDepth(firstNode);
	const secondDepth = calcDepth(secondNode);
	
	for (int i = 0; i < Math.abs(firstDepth - secondDepth); i++) {
		if (firstDepth > secondDepth) 
			firstNode = firstNode.parent;
		else
			secondNode = secondNode.parent;
	}
	
	if (firstNode == secondNode)
		resultNode = firstNode;

	while (firstNode != secondNode) {
		firstNode = firstNode.parent;
		secondNode = secondNode.parent;
	}

	return firstNode;
}

