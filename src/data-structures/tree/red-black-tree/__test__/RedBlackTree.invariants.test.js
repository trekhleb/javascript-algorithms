import RedBlackTree from '../RedBlackTree';

// Verify membership and every red-black invariant after each insertion, rather
// than assuming a particular (non-unique) valid tree shape.
const verifyTree = (tree, values) => {
  expect(tree.root.parent).toBeNull();
  expect(tree.isNodeBlack(tree.root)).toBe(true);
  expect(tree.root.traverseInOrder()).toEqual([...values].sort((a, b) => a - b));

  const blackHeight = (node, parent) => {
    if (!node) {
      return 1;
    }

    expect(node.parent).toBe(parent);
    expect(tree.isNodeColored(node)).toBe(true);
    if (tree.isNodeRed(node)) {
      expect(!node.left || tree.isNodeBlack(node.left)).toBe(true);
      expect(!node.right || tree.isNodeBlack(node.right)).toBe(true);
    }

    const leftHeight = blackHeight(node.left, node);
    const rightHeight = blackHeight(node.right, node);
    expect(leftHeight).toBe(rightHeight);
    return leftHeight + Number(tree.isNodeBlack(node));
  };

  blackHeight(tree.root, null);
};

describe('RedBlackTree insertion invariants', () => {
  it.each([
    [[1, 3, 2, 4, 5]],
    [[1, 4, 2, 3, 5, 6]],
    [[6, 2, 1, 3, 7, 4, 5]],
    [[5, 3, 4, 2, 1]],
    [[6, 3, 5, 4, 2, 1]],
    [[2, 6, 7, 5, 1, 4, 3]],
  ])('should retain all nodes and colors for %j', (values) => {
    const tree = new RedBlackTree();
    values.forEach((value, index) => {
      tree.insert(value);
      verifyTree(tree, values.slice(0, index + 1));
    });
  });

  it('should preserve the invariants for every permutation of six keys', () => {
    const checkPermutations = (prefix, remaining) => {
      if (!remaining.length) {
        const tree = new RedBlackTree();
        prefix.forEach((value, index) => {
          tree.insert(value);
          verifyTree(tree, prefix.slice(0, index + 1));
        });
        return;
      }

      remaining.forEach((value, index) => {
        checkPermutations([...prefix, value], remaining.filter((_, i) => i !== index));
      });
    };

    checkPermutations([], [1, 2, 3, 4, 5, 6]);
  });
});
