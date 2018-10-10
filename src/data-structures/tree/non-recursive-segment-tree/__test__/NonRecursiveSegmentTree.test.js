import NonRecursiveSegmentTree from '../NonRecursiveSegmentTree';

describe('IterativeSegmentTree', () => {
  it('should build tree for input array #0 with length of power of two', () => {
    const array = [-1, 2];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.min, Infinity);

    expect(segmentTree.segmentTree).toEqual([null, -1, -1, 2]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length);
  });

  it('should build tree for input array #1 with length of power of two', () => {
    const array = [-1, 2, 4, 0];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.min, Infinity);

    expect(segmentTree.segmentTree).toEqual([null, -1, -1, 0, -1, 2, 4, 0]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length);
  });

  it('should build tree for input array #0 with length not of power of two', () => {
    const array = [0, 1, 2];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.min, Infinity);

    expect(segmentTree.segmentTree).toEqual([null, 0, 1, 0, 1, 2]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length);
  });

  it('should build tree for input array #1 with length not of power of two', () => {
    const array = [-1, 3, 4, 0, 2, 1];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.min, Infinity);

    expect(segmentTree.segmentTree).toEqual([
      null, -1, 0, -1, 0, 1, -1, 3, 4, 0, 2, 1,
    ]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length);
  });

  it('should build max array #0', () => {
    const array = [-1, 2, 4, 0];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.max, -Infinity);

    expect(segmentTree.segmentTree).toEqual([null, 4, 2, 4, -1, 2, 4, 0]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length);
  });

  it('should build max array #1', () => {
    const array = [-1, 6, 4, 0, 1];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.max, -Infinity);

    expect(segmentTree.segmentTree).toEqual([null, 6, 1, 6, 1, -1, 6, 4, 0, 1]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length);
  });

  it('should build sum array #0', () => {
    const array = [-1, 2, 4, 0];
    const segmentTree = new NonRecursiveSegmentTree(array, (a, b) => (a + b), 0);

    expect(segmentTree.segmentTree).toEqual([null, 5, 1, 4, -1, 2, 4, 0]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length);
  });

  it('should build sum array #1', () => {
    const array = [-1, 6, 4, 0, 1];
    const segmentTree = new NonRecursiveSegmentTree(array, (a, b) => (a + b), 0);

    expect(segmentTree.segmentTree).toEqual([null, 10, 0, 10, 1, -1, 6, 4, 0, 1]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length);
  });

  it('should do min range query on power of two length array', () => {
    const array = [-1, 2, 4, 0];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.min, Infinity);

    expect(segmentTree.rangeQuery(0, 3)).toBe(-1);
    expect(segmentTree.rangeQuery(0, 1)).toBe(-1);
    expect(segmentTree.rangeQuery(1, 3)).toBe(0);
    expect(segmentTree.rangeQuery(1, 2)).toBe(2);
    expect(segmentTree.rangeQuery(2, 3)).toBe(0);
    expect(segmentTree.rangeQuery(2, 2)).toBe(4);
  });

  it('should do min range query on not power of two length array', () => {
    const array = [-1, 3, 4, 0, 2, 1];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.min, Infinity);

    expect(segmentTree.rangeQuery(0, 5)).toBe(-1);
    expect(segmentTree.rangeQuery(0, 2)).toBe(-1);
    expect(segmentTree.rangeQuery(1, 3)).toBe(0);
    expect(segmentTree.rangeQuery(2, 4)).toBe(0);
    expect(segmentTree.rangeQuery(4, 5)).toBe(1);
    expect(segmentTree.rangeQuery(2, 2)).toBe(4);
  });

  it('should do max range query', () => {
    const array = [-1, 3, 4, 0, 2, 1];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.max, -Infinity);

    expect(segmentTree.rangeQuery(0, 5)).toBe(4);
    expect(segmentTree.rangeQuery(0, 1)).toBe(3);
    expect(segmentTree.rangeQuery(1, 3)).toBe(4);
    expect(segmentTree.rangeQuery(2, 4)).toBe(4);
    expect(segmentTree.rangeQuery(4, 5)).toBe(2);
    expect(segmentTree.rangeQuery(3, 3)).toBe(0);
  });

  it('should do sum range query', () => {
    const array = [-1, 3, 4, 0, 2, 1];
    const segmentTree = new NonRecursiveSegmentTree(array, (a, b) => (a + b), 0);

    expect(segmentTree.rangeQuery(0, 5)).toBe(9);
    expect(segmentTree.rangeQuery(0, 1)).toBe(2);
    expect(segmentTree.rangeQuery(1, 3)).toBe(7);
    expect(segmentTree.rangeQuery(2, 4)).toBe(6);
    expect(segmentTree.rangeQuery(4, 5)).toBe(3);
    expect(segmentTree.rangeQuery(3, 3)).toBe(0);
  });

  it('should update a position on power of two length array', () => {
    const array = [-1, 3, 4, 0];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.min, Infinity);

    segmentTree.positionUpdate(3, -2);
    expect(segmentTree.segmentTree).toEqual([null, -2, -1, -2, -1, 3, 4, -2]);
    expect(segmentTree.inputArray).toEqual([-1, 3, 4, -2]);
  });

  it('should update a position on not power of two length array', () => {
    const array = [-1, 3, 4, 0, 2, 1];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.min, Infinity);

    segmentTree.positionUpdate(4, -2);
    expect(segmentTree.segmentTree).toEqual([null, -2, -2, -1, 0, -2, -1, 3, 4, 0, -2, 1]);
    expect(segmentTree.inputArray).toEqual([-1, 3, 4, 0, -2, 1]);
  });

  it('should update and do range max query', () => {
    const array = [-1, 3, 4, 0, 2, 1];
    const segmentTree = new NonRecursiveSegmentTree(array, Math.max, -Infinity);

    segmentTree.positionUpdate(3, 3);
    expect(segmentTree.rangeQuery(0, 5)).toEqual(4);
    expect(segmentTree.rangeQuery(3, 4)).toEqual(3);
    expect(segmentTree.rangeQuery(3, 5)).toEqual(3);
    expect(segmentTree.rangeQuery(0, 2)).toEqual(4);
    expect(segmentTree.rangeQuery(3, 3)).toEqual(3);
    expect(segmentTree.rangeQuery(4, 4)).toEqual(2);
    expect(segmentTree.rangeQuery(2, 2)).toEqual(4);
  });

  it('should update and do range sum query', () => {
    const array = [-1, 3, 4, 0, 2, 1];
    const segmentTree = new NonRecursiveSegmentTree(array, (a, b) => (a + b), 0);

    segmentTree.positionUpdate(3, 3);
    expect(segmentTree.rangeQuery(0, 5)).toEqual(12);
    expect(segmentTree.rangeQuery(3, 4)).toEqual(5);
    expect(segmentTree.rangeQuery(3, 5)).toEqual(6);
    expect(segmentTree.rangeQuery(0, 2)).toEqual(6);
    expect(segmentTree.rangeQuery(3, 3)).toEqual(3);
    expect(segmentTree.rangeQuery(4, 4)).toEqual(2);
    expect(segmentTree.rangeQuery(2, 2)).toEqual(4);
  });
});
