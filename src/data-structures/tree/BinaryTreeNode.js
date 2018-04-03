export default class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  setLeft(node) {
    this.left = node;
    return this;
  }

  setRight(node) {
    this.right = node;
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
