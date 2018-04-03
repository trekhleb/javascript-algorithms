import BinarySearchTreeNode from '../BinarySearchTreeNode';

describe('BinarySearchTreeNode', () => {
  it('should create binary search tree', () => {
    const bstNode = new BinarySearchTreeNode(2);

    expect(bstNode.value).toBe(2);
    expect(bstNode.left).toBeNull();
    expect(bstNode.right).toBeNull();
  });

  it('should insert in itself if it is empty', () => {
    const bstNode = new BinarySearchTreeNode();
    bstNode.insert(1);

    expect(bstNode.value).toBe(1);
    expect(bstNode.left).toBeNull();
    expect(bstNode.right).toBeNull();
  });

  it('should insert nodes in correct order', () => {
    const bstNode = new BinarySearchTreeNode(2);
    bstNode.insert(1);

    expect(bstNode.toString()).toBe('1,2');
    expect(bstNode.contains(1)).toBeTruthy();
    expect(bstNode.contains(3)).toBeFalsy();

    bstNode.insert(3);

    expect(bstNode.toString()).toBe('1,2,3');
    expect(bstNode.contains(3)).toBeTruthy();
    expect(bstNode.contains(4)).toBeFalsy();

    bstNode.insert(7);

    expect(bstNode.toString()).toBe('1,2,3,7');
    expect(bstNode.contains(7)).toBeTruthy();
    expect(bstNode.contains(8)).toBeFalsy();

    bstNode.insert(4);

    expect(bstNode.toString()).toBe('1,2,3,4,7');
    expect(bstNode.contains(4)).toBeTruthy();
    expect(bstNode.contains(8)).toBeFalsy();

    bstNode.insert(6);

    expect(bstNode.toString()).toBe('1,2,3,4,6,7');
    expect(bstNode.contains(6)).toBeTruthy();
    expect(bstNode.contains(8)).toBeFalsy();
  });

  it('should not insert duplicates', () => {
    const bstNode = new BinarySearchTreeNode(2);
    bstNode.insert(1);

    expect(bstNode.toString()).toBe('1,2');
    expect(bstNode.contains(1)).toBeTruthy();
    expect(bstNode.contains(3)).toBeFalsy();

    bstNode.insert(1);

    expect(bstNode.toString()).toBe('1,2');
    expect(bstNode.contains(1)).toBeTruthy();
    expect(bstNode.contains(3)).toBeFalsy();
  });

  it('should find min node', () => {
    const node = new BinarySearchTreeNode(10);

    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.findMin()).not.toBeNull();
    expect(node.findMin().value).toBe(1);
  });

  it('should find node', () => {
    const node = new BinarySearchTreeNode(10);

    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.find(6)).toBeNull();
    expect(node.find(5)).not.toBeNull();
    expect(node.find(5).value).toBe(5);
  });
});
