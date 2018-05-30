import Comparator from '../../utils/comparator/Comparator';

export default class BinaryTreeNode {
  /**
   * @param {*} [value]
   */
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;

    // This comparator is used to compare binary tree nodes with each other.
    this.nodeComparator = new Comparator();
  }

  /**
   * @return {number}
   */
  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  /**
   * @return {number}
   */
  get rightHeight() {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  /**
   * @return {number}
   */
  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  /**
   * @return {number}
   */
  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setLeft(node) {
    // Reset parent for left node since it is going to be detached.
    if (this.left) {
      this.left.parent = null;
    }

    // Attach new node to the left.
    this.left = node;

    // Make current node to be a parent for new left one.
    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setRight(node) {
    // Reset parent for right node since it is going to be detached.
    if (this.right) {
      this.right.parent = null;
    }

    // Attach new node to the right.
    this.right = node;

    // Make current node to be a parent for new right one.
    if (node) {
      this.right.parent = this;
    }

    return this;
  }

  /**
   * @param {BinaryTreeNode} nodeToRemove
   * @return {boolean}
   */
  removeChild(nodeToRemove) {
    if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
      this.left = null;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
      this.right = null;
      return true;
    }

    return false;
  }

  /**
   * @param {BinaryTreeNode} nodeToReplace
   * @param {BinaryTreeNode} replacementNode
   * @return {boolean}
   */
  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }

  /**
   * @return {*[]}
   */
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

  /**
   * @return {string}
   */
  toString() {
    return this.traverseInOrder().toString();
  }
}
