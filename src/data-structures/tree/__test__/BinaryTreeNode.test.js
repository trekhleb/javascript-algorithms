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

    expect(rootNode.replaceChild(rootNode.left, replacementNode)).toBeTruthy();
    expect(rootNode.traverseInOrder()).toEqual([5, 2, 5]);

    expect(rootNode.replaceChild(new BinaryTreeNode(), new BinaryTreeNode())).toBeFalsy();
  });

  it('should calculate node height', () => {
    const root = new BinaryTreeNode(1);
    const left = new BinaryTreeNode(3);
    const right = new BinaryTreeNode(2);
    const grandLeft = new BinaryTreeNode(5);
    const grandRight = new BinaryTreeNode(6);
    const grandGrandLeft = new BinaryTreeNode(7);

    expect(root.height).toBe(0);
    expect(root.balanceFactor).toBe(0);

    root
      .setLeft(left)
      .setRight(right);

    expect(root.height).toBe(1);
    expect(left.height).toBe(0);
    expect(root.balanceFactor).toBe(0);

    left
      .setLeft(grandLeft)
      .setRight(grandRight);

    expect(root.height).toBe(2);
    expect(left.height).toBe(1);
    expect(grandLeft.height).toBe(0);
    expect(grandRight.height).toBe(0);
    expect(root.balanceFactor).toBe(1);

    grandLeft.setLeft(grandGrandLeft);

    expect(root.height).toBe(3);
    expect(left.height).toBe(2);
    expect(grandLeft.height).toBe(1);
    expect(grandRight.height).toBe(0);
    expect(grandGrandLeft.height).toBe(0);
    expect(root.balanceFactor).toBe(2);
  });

  it('should calculate node height for right nodes as well', () => {
    const root = new BinaryTreeNode(1);
    const right = new BinaryTreeNode(2);

    root.setRight(right);

    expect(root.height).toBe(1);
    expect(right.height).toBe(0);
    expect(root.balanceFactor).toBe(-1);
  });
});
