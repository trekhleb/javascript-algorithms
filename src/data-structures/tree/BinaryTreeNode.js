export default class BinaryTreeNode {
  constructor(value = null, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }

  addLeft(node) {
    this.left = node;
    return this;
  }

  addRight(node) {
    this.right = node;
    return this;
  }

  hasLeft() {
    return !!this.left;
  }

  hasRight() {
    return !!this.right;
  }

  traverseInOrder() {
    return Array.prototype.concat(
      this.left ? this.left.traverseInOrder() : [null],
      [this.value],
      this.right ? this.right.traverseInOrder() : [null],
    );
  }

  toString() {
    return this.traverseInOrder().filter(value => !!value).toString();
  }
}
