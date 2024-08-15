import DisjointSetAdhoc from '../DisjointSetAdhoc';

describe('DisjointSetAdhoc', () => {
  it('should create unions and find connected elements', () => {
    const set = new DisjointSetAdhoc(10);

    // 1-2-5-6-7 3-8-9 4
    set.union(1, 2);
    set.union(2, 5);
    set.union(5, 6);
    set.union(6, 7);

    set.union(3, 8);
    set.union(8, 9);

    expect(set.connected(1, 5)).toBe(true);
    expect(set.connected(5, 7)).toBe(true);
    expect(set.connected(3, 8)).toBe(true);

    expect(set.connected(4, 9)).toBe(false);
    expect(set.connected(4, 7)).toBe(false);

    // 1-2-5-6-7 3-8-9-4
    set.union(9, 4);

    expect(set.connected(4, 9)).toBe(true);
    expect(set.connected(4, 3)).toBe(true);
    expect(set.connected(8, 4)).toBe(true);

    expect(set.connected(8, 7)).toBe(false);
    expect(set.connected(2, 3)).toBe(false);
  });

  it('should keep the height of the tree small', () => {
    const set = new DisjointSetAdhoc(10);

    // 1-2-6-7-9 1 3 4 5
    set.union(7, 6);
    set.union(1, 2);
    set.union(2, 6);
    set.union(1, 7);
    set.union(9, 1);

    expect(set.connected(1, 7)).toBe(true);
    expect(set.connected(6, 9)).toBe(true);
    expect(set.connected(4, 9)).toBe(false);

    expect(Math.max(...set.heights)).toBe(3);
  });
});
