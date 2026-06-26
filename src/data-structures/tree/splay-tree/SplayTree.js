import SplayTreeNode from './SplayTreeNode';
import Comparator from '../../../utils/comparator/Comparator';

export default class SplayTree {
  /**
   * @param {function} [compareFunction] - comparator function for node values.
   */
  constructor(compareFunction = undefined) {
    this.root = new SplayTreeNode(null, compareFunction);

    // This comparator is used to compare node values with each other.
    this.nodeComparator = new Comparator(compareFunction);
  }

  /**
   * @param {*} value
   * @return {SplayTreeNode}
   */
  insert(value) {
    const insertedNode = this.root.insert(value);
    
    // Splay the inserted node to the root
    if (insertedNode) {
      this.splay(insertedNode);
      this.root = this.findRoot(insertedNode);
    }
    
    return insertedNode;
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {
    if (this.isEmpty()) {
      return false;
    }
    
    const foundNode = this.root.find(value);
    
    if (foundNode) {
      // Splay the found node to the root
      this.splay(foundNode);
      this.root = this.findRoot(foundNode);
    }
    
    return !!foundNode;
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    if (this.isEmpty()) {
      return false;
    }

    // Find the node to remove
    const nodeToRemove = this.root.find(value);
    
    if (!nodeToRemove) {
      return false;
    }

    // If the node has no left child, replace it with its right child
    if (!nodeToRemove.left) {
      this.replaceNodeInTree(nodeToRemove, nodeToRemove.right);
    } else if (!nodeToRemove.right) {
      // If the node has no right child, replace it with its left child
      this.replaceNodeInTree(nodeToRemove, nodeToRemove.left);
    } else {
      const successor = nodeToRemove.right.findMin();

      // If successor is not the nodeToRemove itself
      if (successor !== nodeToRemove) {
        // Remove successor from its original position
        this.replaceNodeInTree(successor, successor.right);

        // Replace nodeToRemove with successor
        successor.left = nodeToRemove.left;
        successor.right = nodeToRemove.right;
        if (successor.left) {
          successor.left.parent = successor;
        }
        if (successor.right) {
          successor.right.parent = successor;
        }
      }

      this.replaceNodeInTree(nodeToRemove, successor);
    }
    
    // Update the root reference
    this.root = this.findRoot(this.root);
    
    // If tree is empty, create a new empty root
    if (this.root && this.nodeComparator.equal(this.root.value, null) && 
        this.root.left === null && this.root.right === null) {
      this.root = new SplayTreeNode(null, this.root.compareFunction);
    }
    
    return true;
  }

  /**
   * Replace one node with another in the tree
   * @param {SplayTreeNode} nodeToReplace
   * @param {SplayTreeNode} replacementNode
   */
  replaceNodeInTree(nodeToReplace, replacementNode) {
    if (!nodeToReplace.parent) {
      // nodeToReplace is root, update this.root
      if (replacementNode) {
        replacementNode.parent = null;
        this.root = replacementNode;
      } else {
        this.root = new SplayTreeNode(null, this.root.compareFunction);
      }
    } else if (nodeToReplace.parent.left === nodeToReplace) {
      nodeToReplace.parent.left = replacementNode;
      if (replacementNode) {
        replacementNode.parent = nodeToReplace.parent;
      }
    } else {
      nodeToReplace.parent.right = replacementNode;
      if (replacementNode) {
        replacementNode.parent = nodeToReplace.parent;
      }
    }
  }

  /**
   * @param {*} value
   * @return {*}
   */
  find(value) {
    const foundNode = this.root.find(value);
    
    if (foundNode) {
      // Splay the found node to the root
      this.splay(foundNode);
      this.root = this.findRoot(foundNode);
    }
    
    return foundNode ? foundNode.value : null;
  }

  /**
   * @return {*}
   */
  findMin() {
    if (this.nodeComparator.equal(this.root.value, null)) {
      return null;
    }
    
    const minNode = this.root.findMin();
    
    // Splay the min node to the root
    this.splay(minNode);
    this.root = this.findRoot(minNode);
    
    return minNode.value;
  }

  /**
   * @return {*}
   */
  findMax() {
    if (this.nodeComparator.equal(this.root.value, null)) {
      return null;
    }
    
    const maxNode = this.root.findMax();
    
    // Splay the max node to the root
    this.splay(maxNode);
    this.root = this.findRoot(maxNode);
    
    return maxNode.value;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.nodeComparator.equal(this.root.value, null) && !this.root.left && !this.root.right;
  }

  /**
   * @return {number}
   */
  getHeight() {
    if (this.isEmpty()) {
      return 0;
    }

    const getHeightRecursive = (node) => {
      if (!node) {
        return 0;
      }

      const leftHeight = node.left ? getHeightRecursive(node.left) : 0;
      const rightHeight = node.right ? getHeightRecursive(node.right) : 0;

      return Math.max(leftHeight, rightHeight) + 1;
    };

    return getHeightRecursive(this.root);
  }

  /**
   * Perform splay operation to bring the accessed node to the root
   * @param {SplayTreeNode} node - the node to splay to root
   */
  splay(node) {
    if (!node || node === this.root) {
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
      // node is root, update this.root
      this.root = leftChild;
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
      // node is root, update this.root
      this.root = rightChild;
    } else if (node.parent.right === node) {
      node.parent.right = rightChild;
    } else {
      node.parent.left = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  /**
   * Find the root of the tree starting from any node
   * @param {SplayTreeNode} node
   * @return {SplayTreeNode}
   */
  findRoot(node) {
    if (!node) {
      return new SplayTreeNode(null, this.root.compareFunction);
    }

    let current = node;
    while (current.parent) {
      current = current.parent;
    }
    return current;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.root.toString();
  }
}
