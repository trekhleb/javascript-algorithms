import FenwickTree from '../FenwickTree';

describe('FenwickTree', () => {
  it('should create empty fenwick tree of correct size', () => {
    const tree1 = new FenwickTree(5);
    expect(tree1.treeArray.length).toBe(5 + 1);

    for (let i = 0; i < 5; i += 1) {
      expect(tree1.treeArray[i]).toBe(0);
    }

    const tree2 = new FenwickTree(50);
    expect(tree2.treeArray.length).toBe(50 + 1);
  });

  it('should create correct fenwick tree', () => {
    const inputArray = [3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3];

    const tree = new FenwickTree(inputArray.length);
    expect(tree.treeArray.length).toBe(inputArray.length + 1);

    inputArray.forEach((value, index) => {
      tree.increase(index + 1, value);
    });

    expect(tree.treeArray).toEqual([0, 3, 5, -1, 10, 5, 9, -3, 19, 7, 9, 3]);

    expect(tree.query(1)).toBe(3);
    expect(tree.query(2)).toBe(5);
    expect(tree.query(3)).toBe(4);
    expect(tree.query(4)).toBe(10);
    expect(tree.query(5)).toBe(15);
    expect(tree.query(6)).toBe(19);
    expect(tree.query(7)).toBe(16);
    expect(tree.query(8)).toBe(19);
    expect(tree.query(9)).toBe(26);
    expect(tree.query(10)).toBe(28);
    expect(tree.query(11)).toBe(31);

    expect(tree.queryRange(1, 1)).toBe(3);
    expect(tree.queryRange(1, 2)).toBe(5);
    expect(tree.queryRange(2, 4)).toBe(7);
    expect(tree.queryRange(6, 9)).toBe(11);

    tree.increase(3, 1);

    expect(tree.query(1)).toBe(3);
    expect(tree.query(2)).toBe(5);
    expect(tree.query(3)).toBe(5);
    expect(tree.query(4)).toBe(11);
    expect(tree.query(5)).toBe(16);
    expect(tree.query(6)).toBe(20);
    expect(tree.query(7)).toBe(17);
    expect(tree.query(8)).toBe(20);
    expect(tree.query(9)).toBe(27);
    expect(tree.query(10)).toBe(29);
    expect(tree.query(11)).toBe(32);

    expect(tree.queryRange(1, 1)).toBe(3);
    expect(tree.queryRange(1, 2)).toBe(5);
    expect(tree.queryRange(2, 4)).toBe(8);
    expect(tree.queryRange(6, 9)).toBe(11);
  });

  it('should correctly execute queries', () => {
    const tree = new FenwickTree(5);

    tree.increase(1, 4);
    tree.increase(3, 7);

    expect(tree.query(1)).toBe(4);
    expect(tree.query(3)).toBe(11);
    expect(tree.query(5)).toBe(11);
    expect(tree.queryRange(2, 3)).toBe(7);

    tree.increase(2, 5);
    expect(tree.query(5)).toBe(16);

    tree.increase(1, 3);
    expect(tree.queryRange(1, 1)).toBe(7);
    expect(tree.query(5)).toBe(19);
    expect(tree.queryRange(1, 5)).toBe(19);
  });

  it('should throw exceptions', () => {
    const tree = new FenwickTree(5);

    const increaseAtInvalidLowIndex = () => {
      tree.increase(0, 1);
    };

    const increaseAtInvalidHighIndex = () => {
      tree.increase(10, 1);
    };

    const queryInvalidLowIndex = () => {
      tree.query(0);
    };

    const queryInvalidHighIndex = () => {
      tree.query(10);
    };

    const rangeQueryInvalidIndex = () => {
      tree.queryRange(3, 2);
    };

    expect(increaseAtInvalidLowIndex).toThrowError();
    expect(increaseAtInvalidHighIndex).toThrowError();
    expect(queryInvalidLowIndex).toThrowError();
    expect(queryInvalidHighIndex).toThrowError();
    expect(rangeQueryInvalidIndex).toThrowError();
  });
});
