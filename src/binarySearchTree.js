// Simple Binary Search Tree in JavaScript

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }

    return false;
  }

  inOrderTraversal(node = this.root, result = []) {
    if (!node) return result;

    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);

    return result;
  }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log('Search 10:', bst.search(10)); // true
console.log('In-order:', bst.inOrderTraversal()); // [5,10,15]
