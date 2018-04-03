import BinarySearchTree from '../BinarySearchTree';

describe('BinarySearchTree', () => {
  it('should create binary search tree', () => {
    const bst = new BinarySearchTree();

    expect(bst).toBeDefined();
    expect(bst.root).toBeDefined();
    expect(bst.root.value).toBeNull();
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
  });

  it('should insert values', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe('5,10,20');
  });

  it('should check if value exists', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.contains(20)).toBeTruthy();
    expect(bst.contains(40)).toBeFalsy();
  });

  it('should remove leaf nodes', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe('5,10,20');

    bst.remove(5);
    expect(bst.toString()).toBe('10,20');
    bst.remove(20);
    expect(bst.toString()).toBe('10');
  });

  it('should remove nodes with one child', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);
    bst.insert(30);

    expect(bst.toString()).toBe('5,10,20,30');

    bst.remove(20);
    expect(bst.toString()).toBe('5,10,30');

    bst.insert(1);
    expect(bst.toString()).toBe('1,5,10,30');

    bst.remove(5);
    expect(bst.toString()).toBe('1,10,30');
  });

  it('should remove nodes with two children', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);
    bst.insert(30);
    bst.insert(15);
    bst.insert(25);

    expect(bst.toString()).toBe('5,10,15,20,25,30');
    expect(bst.root.find(20).left.value).toBe(15);
    expect(bst.root.find(20).right.value).toBe(30);

    bst.remove(20);
    expect(bst.toString()).toBe('5,10,15,25,30');

    bst.remove(15);
    expect(bst.toString()).toBe('5,10,25,30');

    bst.remove(10);
    expect(bst.toString()).toBe('5,25,30');
    expect(bst.root.value).toBe(25);

    bst.remove(25);
    expect(bst.toString()).toBe('5,30');

    bst.remove(5);
    expect(bst.toString()).toBe('30');
  });

  it('should throw error when trying to remove not existing node', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);

    function removeNotExistingElementFromTree() {
      bst.remove(30);
    }

    expect(removeNotExistingElementFromTree).toThrow();
  });
});
