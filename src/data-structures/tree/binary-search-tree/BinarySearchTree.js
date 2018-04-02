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

  toString() {
    this.root.toString();
  }
}
