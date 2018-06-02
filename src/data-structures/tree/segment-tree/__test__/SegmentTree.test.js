import SegmentTree from '../SegmentTree';

describe('SegmentTree', () => {
  it('create RMQ SegmentTree', () => {
    const array = [1, 2, 5, 3, 4, 6, 2];
    const segTree = new SegmentTree(array, Math.min, Infinity);

    expect(segTree.array.sort()).toEqual(array.sort());
    expect(segTree.n).toBe(7);
  });

  it('check specific tree indices', () => {
    const array = [1, 2, 5, 3, 4, 6, 2];
    const segTree = new SegmentTree(array, Math.min, Infinity);

    // 1 - [0,6]
    // 2 - [0,3] 3 - [4,6]
    // 4 - [0,1] 5 - [2,3] 6 - [4,5] 7 - [6,6]
    // 8 - [0,0] 9 - [1,1] 10 - [2,2] 11 - [3,3] 12 - [4,4] 13 - [5,5]
    expect(segTree.tree.slice(8, 14)).toEqual(array.slice(0, 6));
    expect(segTree.tree[7]).toBe(array[6]);
    expect(segTree.tree[1]).toBe(Math.min(...array));
    expect(segTree.tree[2]).toBe(Math.min(...array.slice(0, 4)));
    expect(segTree.tree[6]).toBe(Math.min(...array.slice(4, 6)));
  });

  it('check another tree for n=8', () => {
    const array = [5, 4, 2, 1, 4, 1, 3, 1];
    const segTree = new SegmentTree(array, Math.min, Infinity);

    // 1 - [0,7]
    // 2 - [0,3] 3 - [4,7]
    // 4 - [0,1] 5 - [2,3] 6 - [4,5] 7 - [6,7]
    // 8 - [0,0] 9 - [1,1] 10 - [2,2] 11 - [3,3] 12 - [4,4] 13 - [5,5] 14 - [6,6] 15 - [7,7]
    expect(segTree.tree.slice(8, 16)).toEqual(array.slice(0, 8));
    expect(segTree.tree[7]).toBe(Math.min(...array.slice(6, 8)));
    expect(segTree.tree[1]).toBe(Math.min(...array));
    expect(segTree.tree[2]).toBe(Math.min(...array.slice(0, 4)));
    expect(segTree.tree[6]).toBe(Math.min(...array.slice(4, 6)));
  });

  it('check query', () => {
    const array = [1, 2, 5, 3, 4, 6, 2];
    const segTree = new SegmentTree(array, Math.min, Infinity);

    const testRanges = [[0, 6], [0, 4], [2, 6], [3, 3], [4, 5], [6, 6], [1, 5], [1, 4]];
    for (let i = 0; i < testRanges.length; i += 1) {
      const range = testRanges[i];
      expect(segTree.query(range[0], range[1]))
        .toBe(Math.min(...array.slice(range[0], range[1] + 1)));
    }
    expect(segTree.query(0, 0)).toBe(1);
  });

  it('check update using queries', () => {
    const array = [1, 2, 5, 3, 4, 6, 2];
    const segTree = new SegmentTree(array, Math.min, Infinity);

    const testRanges = [[0, 6], [0, 4], [2, 6], [3, 3], [4, 5], [6, 6], [1, 5], [1, 4]];

    expect(segTree.array[0]).toBe(1);
    for (let i = 0; i < testRanges.length; i += 1) {
      const range = testRanges[i];
      expect(segTree.query(range[0], range[1]))
        .toBe(Math.min(...array.slice(range[0], range[1] + 1)));
    }

    segTree.update(0, 3);
    array[0] = 3;

    expect(segTree.array[0]).toBe(3);
    for (let i = 0; i < testRanges.length; i += 1) {
      const range = testRanges[i];
      expect(segTree.query(range[0], range[1]))
        .toBe(Math.min(...array.slice(range[0], range[1] + 1)));
    }

    segTree.update(2, 2);
    array[2] = 2;

    expect(segTree.array[2]).toBe(2);
    for (let i = 0; i < testRanges.length; i += 1) {
      const range = testRanges[i];
      expect(segTree.query(range[0], range[1]))
        .toBe(Math.min(...array.slice(range[0], range[1] + 1)));
    }
  });

  it('check range sum query SegmentTree', () => {
    const array = [1, 2, 5, 3, 4, 6, 2];
    const sum = (a, b) => a + b;
    const segTree = new SegmentTree(array, sum, 0);

    const testRanges = [[0, 6], [0, 4], [2, 6], [3, 3], [4, 5], [6, 6], [1, 5], [1, 4]];

    expect(segTree.array[0]).toBe(1);
    for (let i = 0; i < testRanges.length; i += 1) {
      const range = testRanges[i];
      expect(segTree.query(range[0], range[1]))
        .toBe(array.slice(range[0], range[1] + 1).reduce(sum));
    }

    segTree.update(0, 3);
    array[0] = 3;

    expect(segTree.array[0]).toBe(3);
    for (let i = 0; i < testRanges.length; i += 1) {
      const range = testRanges[i];
      expect(segTree.query(range[0], range[1]))
        .toBe(array.slice(range[0], range[1] + 1).reduce(sum));
    }
  });

  it('check default is rmq', () => {
    const array = [3, 7, 2, 5, 4, 3, 8, 1];
    const segTree = new SegmentTree(array);

    const testRanges = [[0, 7], [3, 7], [2, 5], [4, 4]];

    for (let i = 0; i < testRanges.length; i += 1) {
      const range = testRanges[i];
      expect(segTree.query(range[0], range[1]))
        .toBe(Math.min(...array.slice(range[0], range[1] + 1)));
    }

    segTree.update(0, 1);
    array[0] = 1;

    expect(segTree.array[0]).toBe(1);
    for (let i = 0; i < testRanges.length; i += 1) {
      const range = testRanges[i];
      expect(segTree.query(range[0], range[1]))
        .toBe(Math.min(...array.slice(range[0], range[1] + 1)));
    }
  });
});
