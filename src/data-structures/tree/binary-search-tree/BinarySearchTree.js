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
    return this.root.remove(value);
  }

  toString() {
    return this.root.toString();
  }
}
