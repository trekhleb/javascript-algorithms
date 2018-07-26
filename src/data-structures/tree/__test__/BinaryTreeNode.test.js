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

    expect(rootNode.removeChild(rootNode.left)).toBe(true);
    expect(rootNode.traverseInOrder()).toEqual([2, 3]);

    expect(rootNode.removeChild(rootNode.right)).toBe(true);
    expect(rootNode.traverseInOrder()).toEqual([2]);

    expect(rootNode.removeChild(rootNode.right)).toBe(false);
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

    expect(rootNode.replaceChild(rootNode.right, rootNode.right.right)).toBe(true);
    expect(rootNode.right.value).toBe(5);
    expect(rootNode.right.right).toBeNull();
    expect(rootNode.traverseInOrder()).toEqual([1, 2, 5]);

    expect(rootNode.replaceChild(rootNode.right, rootNode.right.right)).toBe(false);
    expect(rootNode.traverseInOrder()).toEqual([1, 2, 5]);

    expect(rootNode.replaceChild(rootNode.right, replacementNode)).toBe(true);
    expect(rootNode.traverseInOrder()).toEqual([1, 2, 5]);

    expect(rootNode.replaceChild(rootNode.left, replacementNode)).toBe(true);
    expect(rootNode.traverseInOrder()).toEqual([5, 2, 5]);

    expect(rootNode.replaceChild(new BinaryTreeNode(), new BinaryTreeNode())).toBe(false);
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

  it('should set null for left and right node', () => {
    const root = new BinaryTreeNode(2);
    const left = new BinaryTreeNode(1);
    const right = new BinaryTreeNode(3);

    root.setLeft(left);
    root.setRight(right);

    expect(root.left.value).toBe(1);
    expect(root.right.value).toBe(3);

    root.setLeft(null);
    root.setRight(null);

    expect(root.left).toBeNull();
    expect(root.right).toBeNull();
  });

  it('should be possible to create node with object as a value', () => {
    const obj1 = { key: 'object_1', toString: () => 'object_1' };
    const obj2 = { key: 'object_2' };

    const node1 = new BinaryTreeNode(obj1);
    const node2 = new BinaryTreeNode(obj2);

    node1.setLeft(node2);

    expect(node1.value).toEqual(obj1);
    expect(node2.value).toEqual(obj2);
    expect(node1.left.value).toEqual(obj2);

    node1.removeChild(node2);

    expect(node1.value).toEqual(obj1);
    expect(node2.value).toEqual(obj2);
    expect(node1.left).toBeNull();

    expect(node1.toString()).toBe('object_1');
    expect(node2.toString()).toBe('[object Object]');
  });

  it('should be possible to attach meta information to the node', () => {
    const redNode = new BinaryTreeNode(1);
    const blackNode = new BinaryTreeNode(2);

    redNode.meta.set('color', 'red');
    blackNode.meta.set('color', 'black');

    expect(redNode.meta.get('color')).toBe('red');
    expect(blackNode.meta.get('color')).toBe('black');
  });

  it('should detect right uncle', () => {
    const grandParent = new BinaryTreeNode('grand-parent');
    const parent = new BinaryTreeNode('parent');
    const uncle = new BinaryTreeNode('uncle');
    const child = new BinaryTreeNode('child');

    expect(grandParent.uncle).not.toBeDefined();
    expect(parent.uncle).not.toBeDefined();

    grandParent.setLeft(parent);

    expect(parent.uncle).not.toBeDefined();
    expect(child.uncle).not.toBeDefined();

    parent.setLeft(child);

    expect(child.uncle).not.toBeDefined();

    grandParent.setRight(uncle);

    expect(parent.uncle).not.toBeDefined();
    expect(child.uncle).toBeDefined();
    expect(child.uncle).toEqual(uncle);
  });

  it('should detect left uncle', () => {
    const grandParent = new BinaryTreeNode('grand-parent');
    const parent = new BinaryTreeNode('parent');
    const uncle = new BinaryTreeNode('uncle');
    const child = new BinaryTreeNode('child');

    expect(grandParent.uncle).not.toBeDefined();
    expect(parent.uncle).not.toBeDefined();

    grandParent.setRight(parent);

    expect(parent.uncle).not.toBeDefined();
    expect(child.uncle).not.toBeDefined();

    parent.setRight(child);

    expect(child.uncle).not.toBeDefined();

    grandParent.setLeft(uncle);

    expect(parent.uncle).not.toBeDefined();
    expect(child.uncle).toBeDefined();
    expect(child.uncle).toEqual(uncle);
  });

  it('should be possible to set node values', () => {
    const node = new BinaryTreeNode('initial_value');

    expect(node.value).toBe('initial_value');

    node.setValue('new_value');

    expect(node.value).toBe('new_value');
  });

  it('should be possible to copy node', () => {
    const root = new BinaryTreeNode('root');
    const left = new BinaryTreeNode('left');
    const right = new BinaryTreeNode('right');

    root
      .setLeft(left)
      .setRight(right);

    expect(root.toString()).toBe('left,root,right');

    const newRoot = new BinaryTreeNode('new_root');
    const newLeft = new BinaryTreeNode('new_left');
    const newRight = new BinaryTreeNode('new_right');

    newRoot
      .setLeft(newLeft)
      .setRight(newRight);

    expect(newRoot.toString()).toBe('new_left,new_root,new_right');

    BinaryTreeNode.copyNode(root, newRoot);

    expect(root.toString()).toBe('left,root,right');
    expect(newRoot.toString()).toBe('left,root,right');
  });
});
