import BinaryTreeNode from '../BinaryTreeNode';

describe('BinaryTreeNode', () => {
  it('should create node', () => {
    const node = new BinaryTreeNode();

    expect(node).toBeDefined();

    expect(node.value).toBeNull();
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();

    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.value).toBe(2);
    expect(rootNode.left.value).toBe(1);
    expect(rootNode.right.value).toBe(3);
  });

  it('should set parent', () => {
    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.parent).toBeNull();
    expect(rootNode.left.parent.value).toBe(2);
    expect(rootNode.right.parent.value).toBe(2);
    expect(rootNode.right.parent).toEqual(rootNode);
  });

  it('should traverse node', () => {
    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3]);

    expect(rootNode.toString()).toBe('1,2,3');
  });

  it('should remove child node', () => {
    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3]);

    expect(rootNode.removeChild(rootNode.left)).toBeTruthy();
    expect(rootNode.traverseInOrder()).toEqual([2, 3]);

    expect(rootNode.removeChild(rootNode.right)).toBeTruthy();
    expect(rootNode.traverseInOrder()).toEqual([2]);

    expect(rootNode.removeChild(rootNode.right)).toBeFalsy();
    expect(rootNode.traverseInOrder()).toEqual([2]);
  });

  it('should replace child node', () => {
    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3]);

    const replacementNode = new BinaryTreeNode(5);
    rightNode.setRight(replacementNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3, 5]);

    expect(rootNode.replaceChild(rootNode.right, rootNode.right.right)).toBeTruthy();
    expect(rootNode.right.value).toBe(5);
    expect(rootNode.right.right).toBeNull();
    expect(rootNode.traverseInOrder()).toEqual([1, 2, 5]);

    expect(rootNode.replaceChild(rootNode.right, rootNode.right.right)).toBeFalsy();
    expect(rootNode.traverseInOrder()).toEqual([1, 2, 5]);

    expect(rootNode.replaceChild(rootNode.right, replacementNode)).toBeTruthy();
    expect(rootNode.traverseInOrder()).toEqual([1, 2, 5]);
  });
});
