export default class BinaryTreeNode {
  constructor(value = null, parent = null) {
    this.left = null;
    this.right = null;
    this.parent = parent;
    this.value = value;
  }

  setLeft(node) {
    this.left = node;
    this.left.parent = this;
    return this;
  }

  setRight(node) {
    this.right = node;
    this.right.parent = this;
    return this;
  }

  traverseInOrder() {
    let traverse = [];

    // Add left node.
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    // Add root.
    traverse.push(this.value);

    // Add right node.
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  toString() {
    return this.traverseInOrder().toString();
  }
}
