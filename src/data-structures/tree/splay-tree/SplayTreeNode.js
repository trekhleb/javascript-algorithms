import BinaryTreeNode from '../BinaryTreeNode';
import Comparator from '../../../utils/comparator/Comparator';

export default class SplayTreeNode extends BinaryTreeNode {
  /**
   * @param {*} [value] - node value.
   * @param {function} [compareFunction] - comparator function for node values.
   */
  constructor(value = null, compareFunction = undefined) {
    super(value);

    // This comparator is used to compare node values with each other.
    this.compareFunction = compareFunction;
    this.nodeValueComparator = new Comparator(compareFunction);
  }

  /**
   * @param {*} value
   * @return {SplayTreeNode}
   */
  insert(value) {
    if (this.nodeValueComparator.equal(this.value, null)) {
      this.value = value;
      return this;
    }

    if (this.nodeValueComparator.lessThan(value, this.value)) {
      // Insert to the left.
      if (this.left) {
        return this.left.insert(value);
      }

      const newNode = new SplayTreeNode(value, this.compareFunction);
      this.setLeft(newNode);
      return newNode;
    }

    if (this.nodeValueComparator.greaterThan(value, this.value)) {
      // Insert to the right.
      if (this.right) {
        return this.right.insert(value);
      }

      const newNode = new SplayTreeNode(value, this.compareFunction);
      this.setRight(newNode);
      return newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {SplayTreeNode}
   */
  find(value) {
    // Check the root.
    if (this.nodeValueComparator.equal(this.value, value)) {
      return this;
    }

    if (this.nodeValueComparator.lessThan(value, this.value) && this.left) {
      // Check left nodes.
      return this.left.find(value);
    }

    if (this.nodeValueComparator.greaterThan(value, this.value) && this.right) {
      // Check right nodes.
      return this.right.find(value);
    }

    return null;
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {
    return !!this.find(value);
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      return false;
    }

    // If the node has no left child, replace it with its right child
    if (!nodeToRemove.left) {
      this.replaceNode(nodeToRemove, nodeToRemove.right);
    }
    // If the node has no right child, replace it with its left child
    else if (!nodeToRemove.right) {
      this.replaceNode(nodeToRemove, nodeToRemove.left);
    }
    // If the node has both children, find the predecessor and replace
    else {
      const predecessor = nodeToRemove.left.findMax();

      // If predecessor is not the nodeToRemove itself
      if (predecessor !== nodeToRemove) {
        // Remove predecessor from its original position
        this.replaceNode(predecessor, predecessor.left);

        // Replace nodeToRemove with predecessor
        predecessor.left = nodeToRemove.left;
        predecessor.right = nodeToRemove.right;
        if (predecessor.left) {
          predecessor.left.parent = predecessor;
        }
        if (predecessor.right) {
          predecessor.right.parent = predecessor;
        }
      }

      this.replaceNode(nodeToRemove, predecessor);
    }

    return true;
  }

  /**
   * @return {SplayTreeNode}
   */
  findMin() {
    if (!this.left) {
      return this;
    }

    return this.left.findMin();
  }

  /**
   * @return {SplayTreeNode}
   */
  findMax() {
    if (!this.right) {
      return this;
    }

    return this.right.findMax();
  }

  /**
   * Perform splay operation to bring the accessed node to the root
   * @param {SplayTreeNode} node - the node to splay to root
   */
  splay(node) {
    if (!node || node === this) {
      return;
    }

    while (node.parent) {
      if (!node.parent.parent) {
        // Zig - node is child of root
        if (node.parent.left === node) {
          this.rotateRight(node.parent);
        } else {
          this.rotateLeft(node.parent);
        }
      } else if (node.parent.left === node && node.parent.parent.left === node.parent) {
        // Zig-zig (left-left)
        this.rotateRight(node.parent.parent);
        this.rotateRight(node.parent);
      } else if (node.parent.right === node && node.parent.parent.right === node.parent) {
        // Zig-zig (right-right)
        this.rotateLeft(node.parent.parent);
        this.rotateLeft(node.parent);
      } else if (node.parent.left === node && node.parent.parent.right === node.parent) {
        // Zig-zag (left-right)
        this.rotateRight(node.parent);
        this.rotateLeft(node.parent);
      } else {
        // Zig-zag (right-left)
        this.rotateLeft(node.parent);
        this.rotateRight(node.parent);
      }
    }
  }

  /**
   * Rotate the tree to the right
   * @param {SplayTreeNode} node - the node to rotate
   */
  rotateRight(node) {
    const leftChild = node.left;
    if (!leftChild) return;

    node.left = leftChild.right;
    if (leftChild.right) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;
    if (!node.parent) {
      // node is root
      // In a real implementation, we'd update the tree's root reference
    } else if (node.parent.left === node) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  /**
   * Rotate the tree to the left
   * @param {SplayTreeNode} node - the node to rotate
   */
  rotateLeft(node) {
    const rightChild = node.right;
    if (!rightChild) return;

    node.right = rightChild.left;
    if (rightChild.left) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;
    if (!node.parent) {
      // node is root
      // In a real implementation, we'd update the tree's root reference
    } else if (node.parent.right === node) {
      node.parent.right = rightChild;
    } else {
      node.parent.left = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  /**
   * Replace one node with another
   * @param {SplayTreeNode} nodeToReplace
   * @param {SplayTreeNode} replacementNode
   */
  replaceNode(nodeToReplace, replacementNode) {
    if (!nodeToReplace.parent) {
      // Node is root
      // In a real implementation, we'd update the tree's root reference
    } else if (nodeToReplace.parent.left === nodeToReplace) {
      nodeToReplace.parent.left = replacementNode;
    } else {
      nodeToReplace.parent.right = replacementNode;
    }

    if (replacementNode) {
      replacementNode.parent = nodeToReplace.parent;
    }
  }

  /**
   * @return {string}
   */
  toString() {
    return this.traverseInOrder().toString();
  }
}
