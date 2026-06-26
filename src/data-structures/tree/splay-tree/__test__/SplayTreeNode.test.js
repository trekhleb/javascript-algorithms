import SplayTreeNode from '../SplayTreeNode';

describe('SplayTreeNode', () => {
  it('should create node with value', () => {
    const node = new SplayTreeNode(10);
    expect(node.value).toBe(10);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
    expect(node.parent).toBeNull();
  });

  it('should create empty node', () => {
    const node = new SplayTreeNode();
    expect(node.value).toBeNull();
  });

  it('should create node with custom comparator', () => {
    const compareFunction = (a, b) => {
      if (a === b) return 0;
      return a < b ? 1 : -1; // Reverse order
    };
    const node = new SplayTreeNode(10, compareFunction);
    expect(node.value).toBe(10);
    expect(node.compareFunction).toBe(compareFunction);
  });

  it('should insert values correctly', () => {
    const root = new SplayTreeNode(10);
    
    const leftNode = root.insert(5);
    expect(leftNode.value).toBe(5);
    expect(root.left.value).toBe(5);
    expect(root.left.parent).toBe(root);
    
    const rightNode = root.insert(15);
    expect(rightNode.value).toBe(15);
    expect(root.right.value).toBe(15);
    expect(root.right.parent).toBe(root);
  });

  it('should insert into null node', () => {
    const node = new SplayTreeNode();
    const inserted = node.insert(10);
    expect(inserted.value).toBe(10);
    expect(node.value).toBe(10);
  });

  it('should handle duplicate insertions', () => {
    const root = new SplayTreeNode(10);
    root.insert(5);
    root.insert(15);
    
    const duplicate = root.insert(10);
    expect(duplicate.value).toBe(10);
    expect(root.value).toBe(10);
  });

  it('should find existing values', () => {
    const root = new SplayTreeNode(10);
    root.insert(5);
    root.insert(15);
    root.insert(3);
    root.insert(7);
    
    expect(root.find(10).value).toBe(10);
    expect(root.find(5).value).toBe(5);
    expect(root.find(15).value).toBe(15);
    expect(root.find(3).value).toBe(3);
    expect(root.find(7).value).toBe(7);
  });

  it('should return null for non-existing values', () => {
    const root = new SplayTreeNode(10);
    root.insert(5);
    root.insert(15);
    
    expect(root.find(20)).toBeNull();
    expect(root.find(0)).toBeNull();
  });

  it('should check if values exist', () => {
    const root = new SplayTreeNode(10);
    root.insert(5);
    root.insert(15);
    
    expect(root.contains(10)).toBe(true);
    expect(root.contains(5)).toBe(true);
    expect(root.contains(15)).toBe(true);
    expect(root.contains(20)).toBe(false);
  });

  it('should remove leaf nodes', () => {
    const root = new SplayTreeNode(10);
    root.insert(5);
    root.insert(15);
    
    expect(root.remove(5)).toBe(true);
    expect(root.contains(5)).toBe(false);
    expect(root.left).toBeNull();
  });

  it('should remove nodes with one child', () => {
    const root = new SplayTreeNode(10);
    root.insert(5);
    root.insert(3); // 5 now has left child 3
    
    expect(root.remove(5)).toBe(true);
    expect(root.contains(5)).toBe(false);
    expect(root.left.value).toBe(3);
    expect(root.left.parent).toBe(root);
  });

  it('should remove nodes with two children', () => {
    const root = new SplayTreeNode(10);
    root.insert(5);
    root.insert(15);
    root.insert(3);
    root.insert(7);
    
    expect(root.remove(5)).toBe(true);
    expect(root.contains(5)).toBe(false);
    // 3 (predecessor) should replace 5
    expect(root.left.value).toBe(3);
  });

  it('should return false when removing non-existent value', () => {
    const root = new SplayTreeNode(10);
    root.insert(5);
    
    expect(root.remove(20)).toBe(false);
  });

  it('should find minimum value', () => {
    const root = new SplayTreeNode(10);
    root.insert(5);
    root.insert(15);
    root.insert(3);
    root.insert(7);
    
    expect(root.findMin().value).toBe(3);
  });

  it('should find maximum value', () => {
    const root = new SplayTreeNode(10);
    root.insert(5);
    root.insert(15);
    root.insert(3);
    root.insert(7);
    
    expect(root.findMax().value).toBe(15);
  });

  it('should handle zig rotation', () => {
    const root = new SplayTreeNode(10);
    const child = new SplayTreeNode(5);
    root.setLeft(child);
    
    // Perform zig rotation
    root.splay(child);
    
    expect(child.parent).toBeNull();
    expect(child.right.value).toBe(10);
    expect(child.right.parent).toBe(child);
  });

  it('should handle zig-zig rotation', () => {
    const root = new SplayTreeNode(20);
    const middle = new SplayTreeNode(10);
    const leaf = new SplayTreeNode(5);
    
    root.setLeft(middle);
    middle.setLeft(leaf);
    
    // Perform zig-zig rotation
    root.splay(leaf);
    
    expect(leaf.parent).toBeNull();
    expect(leaf.right.value).toBe(10);
    expect(leaf.right.right.value).toBe(20);
  });

  it('should handle zig-zag rotation', () => {
    const root = new SplayTreeNode(20);
    const middle = new SplayTreeNode(10);
    const leaf = new SplayTreeNode(15);
    
    root.setLeft(middle);
    middle.setRight(leaf);
    
    // Perform zig-zag rotation
    root.splay(leaf);
    
    expect(leaf.parent).toBeNull();
    expect(leaf.left.value).toBe(10);
    expect(leaf.right.value).toBe(20);
  });

  it('should handle rotate right correctly', () => {
    const root = new SplayTreeNode(10);
    const leftChild = new SplayTreeNode(5);
    root.setLeft(leftChild);
    
    root.rotateRight(root);
    
    expect(leftChild.parent).toBeNull();
    expect(leftChild.right.value).toBe(10);
    expect(root.parent).toBe(leftChild);
  });

  it('should handle rotate left correctly', () => {
    const root = new SplayTreeNode(10);
    const rightChild = new SplayTreeNode(15);
    root.setRight(rightChild);
    
    root.rotateLeft(root);
    
    expect(rightChild.parent).toBeNull();
    expect(rightChild.left.value).toBe(10);
    expect(root.parent).toBe(rightChild);
  });

  it('should handle rotation with missing children', () => {
    const node = new SplayTreeNode(10);
    
    // Should not crash when trying to rotate with missing children
    node.rotateRight(node);
    node.rotateLeft(node);
    
    expect(node.value).toBe(10);
  });

  it('should replace node correctly', () => {
    const root = new SplayTreeNode(10);
    const leftChild = new SplayTreeNode(5);
    const replacement = new SplayTreeNode(7);
    
    root.setLeft(leftChild);
    root.replaceNode(leftChild, replacement);
    
    expect(root.left.value).toBe(7);
    expect(root.left.parent).toBe(root);
  });

  it('should replace node with null', () => {
    const root = new SplayTreeNode(10);
    const leftChild = new SplayTreeNode(5);
    
    root.setLeft(leftChild);
    root.replaceNode(leftChild, null);
    
    expect(root.left).toBeNull();
  });

  it('should handle toString method', () => {
    const root = new SplayTreeNode(10);
    root.insert(5);
    root.insert(15);
    root.insert(3);
    root.insert(7);
    
    const result = root.toString();
    expect(result).toContain('3');
    expect(result).toContain('5');
    expect(result).toContain('7');
    expect(result).toContain('10');
    expect(result).toContain('15');
  });

  it('should handle string values', () => {
    const root = new SplayTreeNode('apple');
    root.insert('banana');
    root.insert('cherry');
    
    expect(root.contains('apple')).toBe(true);
    expect(root.contains('banana')).toBe(true);
    expect(root.contains('cherry')).toBe(true);
    expect(root.contains('date')).toBe(false);
  });

  it('should work with custom comparator', () => {
    const compareFunction = (a, b) => {
      if (a === b) return 0;
      return a < b ? 1 : -1; // Reverse order
    };
    
    const root = new SplayTreeNode(10, compareFunction);
    root.insert(5);
    root.insert(15);
    
    // With reverse comparator, smaller values go to right
    expect(root.right.value).toBe(5);
    expect(root.left.value).toBe(15);
  });
});
