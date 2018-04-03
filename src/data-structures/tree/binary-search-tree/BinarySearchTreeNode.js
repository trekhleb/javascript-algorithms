import BinaryTreeNode from '../BinaryTreeNode';

export default class BinarySearchTreeNode extends BinaryTreeNode {
  insert(value) {
    if (value < this.value) {
      // Insert to the left.
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinarySearchTreeNode(value);
      }
    } else if (value > this.value) {
      // Insert to the right.
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTreeNode(value);
      }
    }

    return this;
  }

  contains(value) {
    // Check the root.
    if (this.value === value) {
      return true;
    }

    if (value < this.value && this.left) {
      // Check left nodes.
      return this.left.contains(value);
    } else if (value > this.value && this.right) {
      // Check right nodes.
      return this.right.contains(value);
    }

    return false;
  }
}
