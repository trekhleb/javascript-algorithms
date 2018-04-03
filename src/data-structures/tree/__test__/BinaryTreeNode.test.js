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
});
