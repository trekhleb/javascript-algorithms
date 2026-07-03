import AvlTree from '../AvlTree';

describe('AvlTree', () => {
  it('should do simple left-left rotation', () => {
    const tree = new AvlTree();

    tree.insert(4);
    tree.insert(3);
    tree.insert(2);

    expect(tree.toString()).toBe('2,3,4');
    expect(tree.root.value).toBe(3);
    expect(tree.root.height).toBe(1);

    tree.insert(1);

    expect(tree.toString()).toBe('1,2,3,4');
    expect(tree.root.value).toBe(3);
    expect(tree.root.height).toBe(2);

    tree.insert(0);

    expect(tree.toString()).toBe('0,1,2,3,4');
    expect(tree.root.value).toBe(3);
    expect(tree.root.left.value).toBe(1);
    expect(tree.root.height).toBe(2);
  });

  it('should do complex left-left rotation', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(20);
    tree.insert(40);
    tree.insert(10);

    expect(tree.root.value).toBe(30);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('10,20,30,40');

    tree.insert(25);
    expect(tree.root.value).toBe(30);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('10,20,25,30,40');

    tree.insert(5);
    expect(tree.root.value).toBe(20);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('5,10,20,25,30,40');
  });

  it('should do simple right-right rotation', () => {
    const tree = new AvlTree();

    tree.insert(2);
    tree.insert(3);
    tree.insert(4);

    expect(tree.toString()).toBe('2,3,4');
    expect(tree.root.value).toBe(3);
    expect(tree.root.height).toBe(1);

    tree.insert(5);

    expect(tree.toString()).toBe('2,3,4,5');
    expect(tree.root.value).toBe(3);
    expect(tree.root.height).toBe(2);

    tree.insert(6);

    expect(tree.toString()).toBe('2,3,4,5,6');
    expect(tree.root.value).toBe(3);
    expect(tree.root.right.value).toBe(5);
    expect(tree.root.height).toBe(2);
  });

  it('should do complex right-right rotation', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(20);
    tree.insert(40);
    tree.insert(50);

    expect(tree.root.value).toBe(30);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('20,30,40,50');

    tree.insert(35);
    expect(tree.root.value).toBe(30);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('20,30,35,40,50');

    tree.insert(55);
    expect(tree.root.value).toBe(40);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('20,30,35,40,50,55');
  });

  it('should do left-right rotation', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(20);
    tree.insert(25);

    expect(tree.root.height).toBe(1);
    expect(tree.root.value).toBe(25);
    expect(tree.toString()).toBe('20,25,30');
  });

  it('should do right-left rotation', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(40);
    tree.insert(35);

    expect(tree.root.height).toBe(1);
    expect(tree.root.value).toBe(35);
    expect(tree.toString()).toBe('30,35,40');
  });

  it('should create balanced tree: case #1', () => {
    // @see: https://www.youtube.com/watch?v=rbg7Qf8GkQ4&t=839s
    const tree = new AvlTree();

    tree.insert(1);
    tree.insert(2);
    tree.insert(3);

    expect(tree.root.value).toBe(2);
    expect(tree.root.height).toBe(1);
    expect(tree.toString()).toBe('1,2,3');

    tree.insert(6);

    expect(tree.root.value).toBe(2);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('1,2,3,6');

    tree.insert(15);

    expect(tree.root.value).toBe(2);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('1,2,3,6,15');

    tree.insert(-2);

    expect(tree.root.value).toBe(2);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('-2,1,2,3,6,15');

    tree.insert(-5);

    expect(tree.root.value).toBe(2);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('-5,-2,1,2,3,6,15');

    tree.insert(-8);

    expect(tree.root.value).toBe(2);
    expect(tree.root.height).toBe(3);
    expect(tree.toString()).toBe('-8,-5,-2,1,2,3,6,15');
  });

  it('should create balanced tree: case #2', () => {
    // @see https://www.youtube.com/watch?v=7m94k2Qhg68
    const tree = new AvlTree();

    tree.insert(43);
    tree.insert(18);
    tree.insert(22);
    tree.insert(9);
    tree.insert(21);
    tree.insert(6);

    expect(tree.root.value).toBe(18);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('6,9,18,21,22,43');

    tree.insert(8);

    expect(tree.root.value).toBe(18);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe('6,8,9,18,21,22,43');
  });

  it('should do left right rotation and keeping left right node safe', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(15);
    tree.insert(40);
    tree.insert(10);
    tree.insert(18);
    tree.insert(35);
    tree.insert(45);
    tree.insert(5);
    tree.insert(12);

    expect(tree.toString()).toBe('5,10,12,15,18,30,35,40,45');
    expect(tree.root.height).toBe(3);

    tree.insert(11);

    expect(tree.toString()).toBe('5,10,11,12,15,18,30,35,40,45');
    expect(tree.root.height).toBe(3);
  });

  it('should do left right rotation and keeping left right node safe', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(15);
    tree.insert(40);
    tree.insert(10);
    tree.insert(18);
    tree.insert(35);
    tree.insert(45);
    tree.insert(42);
    tree.insert(47);

    expect(tree.toString()).toBe('10,15,18,30,35,40,42,45,47');
    expect(tree.root.height).toBe(3);

    tree.insert(43);

    expect(tree.toString()).toBe('10,15,18,30,35,40,42,43,45,47');
    expect(tree.root.height).toBe(3);
  });

  it('should remove values from the tree with right-right rotation', () => {
    const tree = new AvlTree();

    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(40);

    expect(tree.toString()).toBe('10,20,30,40');

    tree.remove(10);

    expect(tree.toString()).toBe('20,30,40');
    expect(tree.root.value).toBe(30);
    expect(tree.root.left.value).toBe(20);
    expect(tree.root.right.value).toBe(40);
    expect(tree.root.balanceFactor).toBe(0);
  });

  it('should remove values from the tree with left-left rotation', () => {
    const tree = new AvlTree();

    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(5);

    expect(tree.toString()).toBe('5,10,20,30');

    tree.remove(30);

    expect(tree.toString()).toBe('5,10,20');
    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(20);
    expect(tree.root.balanceFactor).toBe(0);
  });

  it('should keep balance after removal', () => {
    const tree = new AvlTree();

    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);
    tree.insert(6);
    tree.insert(7);
    tree.insert(8);
    tree.insert(9);

    expect(tree.toString()).toBe('1,2,3,4,5,6,7,8,9');
    expect(tree.root.value).toBe(4);
    expect(tree.root.height).toBe(3);
    expect(tree.root.balanceFactor).toBe(-1);

    tree.remove(8);

    expect(tree.root.value).toBe(4);
    expect(tree.root.balanceFactor).toBe(-1);

    tree.remove(9);

    expect(tree.contains(8)).toBeFalsy();
    expect(tree.contains(9)).toBeFalsy();
    expect(tree.toString()).toBe('1,2,3,4,5,6,7');
    expect(tree.root.value).toBe(4);
    expect(tree.root.height).toBe(2);
    expect(tree.root.balanceFactor).toBe(0);
  });

  it('should not lose subtrees when rotating a node that is a right child', () => {
    // A left-left rotation is needed at node 70, which is the RIGHT child
    // of the root. The rotated-up node must be attached to the same side
    // of the parent where the unbalanced node used to be.
    const tree = new AvlTree();
    [50, 30, 70, 65, 60].forEach((value) => tree.insert(value));

    expect(tree.toString()).toBe('30,50,60,65,70');
    expect(tree.contains(30)).toBe(true);
  });

  it('should rebalance interior nodes after removal', () => {
    const tree = new AvlTree();
    [30, 20, 40, 10, 25, 50, 5].forEach((value) => tree.insert(value));

    tree.remove(25);

    expect(tree.toString()).toBe('5,10,20,30,40,50');

    // Every node must satisfy the AVL invariant.
    const checkBalance = (node) => {
      if (!node) {
        return;
      }
      expect(Math.abs(node.balanceFactor)).toBeLessThanOrEqual(1);
      checkBalance(node.left);
      checkBalance(node.right);
    };
    checkBalance(tree.root);
  });

  it('should keep the AVL invariant under a mixed insert/remove workload', () => {
    const tree = new AvlTree();
    const values = [];

    // Deterministic pseudo-random sequence (linear congruential generator).
    let seed = 42;
    const nextRandom = () => {
      seed = (seed * 1103515245 + 12345) % 2147483648;
      return seed;
    };

    for (let i = 0; i < 200; i += 1) {
      const value = nextRandom() % 1000;
      if (!values.includes(value)) {
        values.push(value);
        tree.insert(value);
      }
    }

    // Remove half of the values in pseudo-random order.
    const removedCount = Math.floor(values.length / 2);
    for (let i = 0; i < removedCount; i += 1) {
      const removeIndex = nextRandom() % values.length;
      const [value] = values.splice(removeIndex, 1);
      tree.remove(value);
    }

    const expectedString = [...values].sort((a, b) => a - b).join(',');
    expect(tree.toString()).toBe(expectedString);

    // Every node must satisfy the AVL invariant.
    const checkBalance = (node) => {
      if (!node) {
        return;
      }
      expect(Math.abs(node.balanceFactor)).toBeLessThanOrEqual(1);
      checkBalance(node.left);
      checkBalance(node.right);
    };
    checkBalance(tree.root);
  });
});
