import DisjointSet from '../DisjointSet';

describe('DisjointSet', () => {
  it('should initialize sets as singletons', () => {
    const len = 100;
    const set = new DisjointSet(len);
    for (let i = 0; i < len; i += 1) {
      expect(set.find(i)).toBe(i);
    }
  });

  it('should handle invalid input appropriately', () => {
    const set = new DisjointSet(0);
    expect(set.find(0)).toBeNull();
    expect(set.find(-1)).toBeNull();
    expect(set.find(null)).toBeNull();
    expect(set.find(undefined)).toBeNull();
    expect(set.find('')).toBeNull();
    expect(set.find(NaN)).toBeNull();
  });

  it('should perform unions appropriately', () => {
    const set = new DisjointSet(3);

    set.union(0, 1);
    expect(set.find(0)).toBe(set.find(1));
    expect(set.find(0)).not.toBe(set.find(2));

    set.union(1, 2);
    expect(set.find(0)).toBe(set.find(1));
    expect(set.find(0)).toBe(set.find(2));
  });

  it('should ignore invalid unions', () => {
    const invalidEntries = [0, -1, null, undefined, '', NaN];

    const len = 100;
    const set = new DisjointSet(len);

    for (let i = 0; i < invalidEntries.length; i += 1) {
      for (let j = 0; j < invalidEntries.length; j += 1) {
        set.union(invalidEntries[i], invalidEntries[j]);
      }
    }

    for (let i = 0; i < len; i += 1) {
      expect(set.find(i)).toBe(i);
    }
  });
});
