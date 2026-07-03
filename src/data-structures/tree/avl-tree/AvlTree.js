import BinarySearchTree from '../binary-search-tree/BinarySearchTree';

export default class AvlTree extends BinarySearchTree {
  /**
   * @param {*} value
   */
  insert(value) {
    // Do the normal BST insert.
    super.insert(value);

    // Let's move up to the root and check balance factors along the way.
    let currentNode = this.root.find(value);
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    // Find the node that is going to be removed and remember the deepest
    // node from which the tree may become unbalanced — that is the parent
    // of the node that will be physically detached from the tree.
    const nodeToRemove = this.root.find(value);

    let retraceStartNode = null;
    if (nodeToRemove) {
      if (nodeToRemove.left && nodeToRemove.right) {
        // The node's value will be replaced with the next bigger value and
        // the next bigger node itself will be detached from its parent.
        const nextBiggerNode = nodeToRemove.right.findMin();
        retraceStartNode = nextBiggerNode !== nodeToRemove.right
          ? nextBiggerNode.parent
          : nodeToRemove;
      } else {
        retraceStartNode = nodeToRemove.parent;
      }
    }

    // Do standard BST removal.
    const result = super.remove(value);

    // Let's move up to the root and restore the balance along the way.
    let currentNode = retraceStartNode || this.root;
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }

    return result;
  }

  /**
   * @param {BinarySearchTreeNode} node
   */
  balance(node) {
    // If balance factor is not OK then try to balance the node.
    // The zero balance factor of a child (possible after removals)
    // is handled with a single rotation.
    if (node.balanceFactor > 1) {
      // Left rotation.
      if (node.left.balanceFactor >= 0) {
        // Left-Left rotation
        this.rotateLeftLeft(node);
      } else {
        // Left-Right rotation.
        this.rotateLeftRight(node);
      }
    } else if (node.balanceFactor < -1) {
      // Right rotation.
      if (node.right.balanceFactor <= 0) {
        // Right-Right rotation
        this.rotateRightRight(node);
      } else {
        // Right-Left rotation.
        this.rotateRightLeft(node);
      }
    }
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftLeft(rootNode) {
    // Detach left node from root node.
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    // Make left node to be a child of rootNode's parent
    // (on the same side where rootNode used to be).
    if (rootNode.parent) {
      if (rootNode.parent.left === rootNode) {
        rootNode.parent.setLeft(leftNode);
      } else {
        rootNode.parent.setRight(leftNode);
      }
    } else if (rootNode === this.root) {
      // If root node is root then make left node to be a new root.
      this.root = leftNode;
    }

    // If left node has a right child then detach it first and
    // then attach it as a left child for rootNode. The detach must
    // happen first, otherwise the child's fresh parent reference
    // would be erased by the detachment.
    if (leftNode.right) {
      const leftRightNode = leftNode.right;
      leftNode.setRight(null);
      rootNode.setLeft(leftRightNode);
    }

    // Attach rootNode to the right of leftNode.
    leftNode.setRight(rootNode);
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftRight(rootNode) {
    // Detach left node from rootNode since it is going to be replaced.
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    // Detach right node from leftNode.
    const leftRightNode = leftNode.right;
    leftNode.setRight(null);

    // Preserve leftRightNode's left subtree. Detach it first so that
    // its fresh parent reference isn't erased by the detachment.
    if (leftRightNode.left) {
      const leftRightLeftNode = leftRightNode.left;
      leftRightNode.setLeft(null);
      leftNode.setRight(leftRightLeftNode);
    }

    // Attach leftRightNode to the rootNode.
    rootNode.setLeft(leftRightNode);

    // Attach leftNode as left node for leftRight node.
    leftRightNode.setLeft(leftNode);

    // Do left-left rotation.
    this.rotateLeftLeft(rootNode);
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightLeft(rootNode) {
    // Detach right node from rootNode since it is going to be replaced.
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    // Detach left node from rightNode.
    const rightLeftNode = rightNode.left;
    rightNode.setLeft(null);

    // Preserve rightLeftNode's right subtree. Detach it first so that
    // its fresh parent reference isn't erased by the detachment.
    if (rightLeftNode.right) {
      const rightLeftRightNode = rightLeftNode.right;
      rightLeftNode.setRight(null);
      rightNode.setLeft(rightLeftRightNode);
    }

    // Attach rightLeftNode to the rootNode.
    rootNode.setRight(rightLeftNode);

    // Attach rightNode as right node for rightLeft node.
    rightLeftNode.setRight(rightNode);

    // Do right-right rotation.
    this.rotateRightRight(rootNode);
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightRight(rootNode) {
    // Detach right node from root node.
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    // Make right node to be a child of rootNode's parent
    // (on the same side where rootNode used to be).
    if (rootNode.parent) {
      if (rootNode.parent.right === rootNode) {
        rootNode.parent.setRight(rightNode);
      } else {
        rootNode.parent.setLeft(rightNode);
      }
    } else if (rootNode === this.root) {
      // If root node is root then make right node to be a new root.
      this.root = rightNode;
    }

    // If right node has a left child then detach it first and
    // then attach it as a right child for rootNode. The detach must
    // happen first, otherwise the child's fresh parent reference
    // would be erased by the detachment.
    if (rightNode.left) {
      const rightLeftNode = rightNode.left;
      rightNode.setLeft(null);
      rootNode.setRight(rightLeftNode);
    }

    // Attach rootNode to the left of rightNode.
    rightNode.setLeft(rootNode);
  }
}
