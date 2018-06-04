import FenwickTree from '../FenwickTree';

describe('FenwickTree', () => {
  it('should create empty fenwick tree of correct size', () => {
    const tree1 = new FenwickTree(5);
    expect(tree1.arr.length).toBe(5 + 1);

    for (let i = 0; i < 5; i += 1) {
      expect(tree1.arr[i]).toBe(0);
    }

    const tree2 = new FenwickTree(50);
    expect(tree2.arr.length).toBe(50 + 1);
  });

  it('should correctly execute queries', () => {
    const tree = new FenwickTree(5);

    tree.update(1, 4);
    tree.update(3, 7);

    expect(tree.query(1)).toBe(4);
    expect(tree.query(3)).toBe(11);
    expect(tree.query(5)).toBe(11);
    expect(tree.queryRange(2, 3)).toBe(7);

    tree.update(2, 5);
    expect(tree.query(5)).toBe(16);

    tree.update(1, 3);
    expect(tree.queryRange(1, 1)).toBe(7);
    expect(tree.query(5)).toBe(19);
    expect(tree.queryRange(1, 5)).toBe(19);

    expect(tree.queryRange(5, 1)).toBe(0); // invalid test
  });
});
