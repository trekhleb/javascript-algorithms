import BinaryTreeNode from '../BinaryTreeNode';

export default class BinarySearchTreeNode extends BinaryTreeNode {
  insert(value) {
    if (this.value === null) {
      this.value = value;
      return this;
    }

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

  find(value) {
    // Check the root.
    if (this.value === value) {
      return this;
    }

    if (value < this.value && this.left) {
      // Check left nodes.
      return this.left.find(value);
    } else if (value > this.value && this.right) {
      // Check right nodes.
      return this.right.find(value);
    }

    return null;
  }

  contains(value) {
    return !!this.find(value);
  }

  findMin() {
    if (!this.left) {
      return this;
    }

    return this.left.findMin();
  }
}
