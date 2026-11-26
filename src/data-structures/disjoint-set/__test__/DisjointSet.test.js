import DisjointSet from '../DisjointSet';

describe('DisjointSet', () => {
  const prototypeKeys = ['__proto__', 'constructor', 'toString', 'hasOwnProperty', 'valueOf'];

  it.each(prototypeKeys)('should treat an absent prototype-named key %s as missing', (key) => {
    const disjointSet = new DisjointSet();

    expect(disjointSet.find(key)).toBeNull();
    expect(() => disjointSet.union(key, 'other')).toThrow('One or two values are not in sets');
    expect(() => disjointSet.inSameSet(key, 'other')).toThrow('One or two values are not in sets');
  });

  it.each(prototypeKeys)('should register and merge a prototype-named root %s', (key) => {
    const disjointSet = new DisjointSet();
    disjointSet.makeSet(key).makeSet('other');

    expect(disjointSet.find(key)).toBe(key);
    expect(disjointSet.inSameSet(key, 'other')).toBe(false);

    disjointSet.union(key, 'other');

    expect(disjointSet.find('other')).toBe(key);
    expect(disjointSet.inSameSet(key, 'other')).toBe(true);
  });

  it.each(prototypeKeys)('should preserve membership when re-adding merged key %s', (key) => {
    const disjointSet = new DisjointSet();
    disjointSet.makeSet('root').makeSet(key).union('root', key);
    disjointSet.makeSet(key);

    expect(disjointSet.find(key)).toBe('root');
    expect(disjointSet.inSameSet('root', key)).toBe(true);
  });

  it.each(prototypeKeys)('should support custom key extractors returning %s', (key) => {
    const keyCallback = (value) => value.key;
    const disjointSet = new DisjointSet(keyCallback);
    const item = { key };
    const other = { key: 'other' };

    expect(disjointSet.find(item)).toBeNull();
    disjointSet.makeSet(item).makeSet(other).union(other, item);

    expect(disjointSet.find({ key })).toBe('other');
    expect(disjointSet.inSameSet(item, other)).toBe(true);
  });

  it('should throw error when trying to union and check not existing sets', () => {
    function mergeNotExistingSets() {
      const disjointSet = new DisjointSet();

      disjointSet.union('A', 'B');
    }

    function checkNotExistingSets() {
      const disjointSet = new DisjointSet();

      disjointSet.inSameSet('A', 'B');
    }

    expect(mergeNotExistingSets).toThrow();
    expect(checkNotExistingSets).toThrow();
  });

  it('should do basic manipulations on disjoint set', () => {
    const disjointSet = new DisjointSet();

    expect(disjointSet.find('A')).toBeNull();
    expect(disjointSet.find('B')).toBeNull();

    disjointSet.makeSet('A');

    expect(disjointSet.find('A')).toBe('A');
    expect(disjointSet.find('B')).toBeNull();

    disjointSet.makeSet('B');

    expect(disjointSet.find('A')).toBe('A');
    expect(disjointSet.find('B')).toBe('B');

    disjointSet.makeSet('C');

    expect(disjointSet.inSameSet('A', 'B')).toBe(false);

    disjointSet.union('A', 'B');

    expect(disjointSet.find('A')).toBe('A');
    expect(disjointSet.find('B')).toBe('A');
    expect(disjointSet.inSameSet('A', 'B')).toBe(true);
    expect(disjointSet.inSameSet('B', 'A')).toBe(true);
    expect(disjointSet.inSameSet('A', 'C')).toBe(false);

    disjointSet.union('A', 'A');

    disjointSet.union('B', 'C');

    expect(disjointSet.find('A')).toBe('A');
    expect(disjointSet.find('B')).toBe('A');
    expect(disjointSet.find('C')).toBe('A');

    expect(disjointSet.inSameSet('A', 'B')).toBe(true);
    expect(disjointSet.inSameSet('B', 'C')).toBe(true);
    expect(disjointSet.inSameSet('A', 'C')).toBe(true);

    disjointSet
      .makeSet('E')
      .makeSet('F')
      .makeSet('G')
      .makeSet('H')
      .makeSet('I');

    disjointSet
      .union('E', 'F')
      .union('F', 'G')
      .union('G', 'H')
      .union('H', 'I');

    expect(disjointSet.inSameSet('A', 'I')).toBe(false);
    expect(disjointSet.inSameSet('E', 'I')).toBe(true);

    disjointSet.union('I', 'C');

    expect(disjointSet.find('I')).toBe('E');
    expect(disjointSet.inSameSet('A', 'I')).toBe(true);
  });

  it('should union smaller set with bigger one making bigger one to be new root', () => {
    const disjointSet = new DisjointSet();

    disjointSet
      .makeSet('A')
      .makeSet('B')
      .makeSet('C')
      .union('B', 'C')
      .union('A', 'C');

    expect(disjointSet.find('A')).toBe('B');
  });

  it('should do basic manipulations on disjoint set with custom key extractor', () => {
    const keyExtractor = (value) => value.key;

    const disjointSet = new DisjointSet(keyExtractor);

    const itemA = { key: 'A', value: 1 };
    const itemB = { key: 'B', value: 2 };
    const itemC = { key: 'C', value: 3 };

    expect(disjointSet.find(itemA)).toBeNull();
    expect(disjointSet.find(itemB)).toBeNull();

    disjointSet.makeSet(itemA);

    expect(disjointSet.find(itemA)).toBe('A');
    expect(disjointSet.find(itemB)).toBeNull();

    disjointSet.makeSet(itemB);

    expect(disjointSet.find(itemA)).toBe('A');
    expect(disjointSet.find(itemB)).toBe('B');

    disjointSet.makeSet(itemC);

    expect(disjointSet.inSameSet(itemA, itemB)).toBe(false);

    disjointSet.union(itemA, itemB);

    expect(disjointSet.find(itemA)).toBe('A');
    expect(disjointSet.find(itemB)).toBe('A');
    expect(disjointSet.inSameSet(itemA, itemB)).toBe(true);
    expect(disjointSet.inSameSet(itemB, itemA)).toBe(true);
    expect(disjointSet.inSameSet(itemA, itemC)).toBe(false);

    disjointSet.union(itemA, itemC);

    expect(disjointSet.find(itemA)).toBe('A');
    expect(disjointSet.find(itemB)).toBe('A');
    expect(disjointSet.find(itemC)).toBe('A');

    expect(disjointSet.inSameSet(itemA, itemB)).toBe(true);
    expect(disjointSet.inSameSet(itemB, itemC)).toBe(true);
    expect(disjointSet.inSameSet(itemA, itemC)).toBe(true);
  });
});
