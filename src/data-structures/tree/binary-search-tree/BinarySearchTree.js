import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode();
  }

  insert(value) {
    this.root.insert(value);
  }

  contains(value) {
    return this.root.contains(value);
  }

  remove(value) {
    const nodeToRemove = this.root.find(value);

    if (!nodeToRemove) {
      throw new Error('Item not found in the tree');
    }

    const { parent } = nodeToRemove;

    if (!nodeToRemove.left && !nodeToRemove.right) {
      // Node is a leaf and thus has no children.
      // Just remove the pointer to this node from the parent node.
      parent.removeChild(nodeToRemove);
    } else if (nodeToRemove.left && nodeToRemove.right) {
      // Node has two children.
      // Find the next biggest value (minimum value in the right branch)
      // and replace current value node with that next biggest value.
      const nextBiggerNode = nodeToRemove.right.findMin();
      if (nextBiggerNode !== nodeToRemove.right) {
        this.remove(nextBiggerNode.value);
        nodeToRemove.value = nextBiggerNode.value;
      } else {
        // In case if next right value is the next bigger one and it doesn't have left child
        // then just replace node that is going to be deleted with the right node.
        nodeToRemove.value = nodeToRemove.right.value;
        nodeToRemove.right = nodeToRemove.right.right;
      }
    } else {
      // Node has only one child.
      // Make this child to be a direct child of current node's parent.
      if (nodeToRemove.left) {
        parent.replaceChild(nodeToRemove, nodeToRemove.left);
      } else {
        parent.replaceChild(nodeToRemove, nodeToRemove.right);
      }
    }
  }

  toString() {
    return this.root.toString();
  }
}
