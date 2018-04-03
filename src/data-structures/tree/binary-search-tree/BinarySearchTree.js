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
    const nodeToRemove = this.findNode(value);

    if (!nodeToRemove) {
      throw new Error('Item not found in the tree');
    }

    if (!nodeToRemove.left && !nodeToRemove.right) {
      // Node is a leaf and thus has no children.
      // Just remove the pointer to this node from the parent node.
    } else if (nodeToRemove.left && nodeToRemove.right) {
      // Node has two children.
      // Find the next biggest value (minimum value in the right branch)
      // and replace current value node with that next biggest value.
    } else {
      // Node has only one child.
      // Make this child to be a direct child of current node's parent.
    }
  }

  toString() {
    return this.root.toString();
  }
}
