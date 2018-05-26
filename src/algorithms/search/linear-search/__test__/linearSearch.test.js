import linearSearch from '../linearSearch';

describe('linearSearch', () => {
  it('should search all numbers in array', () => {
    const array = [1, 2, 4, 6, 2];

    expect(linearSearch(array, 10)).toEqual([]);
    expect(linearSearch(array, 1)).toEqual([0]);
    expect(linearSearch(array, 2)).toEqual([1, 4]);
  });

  it('should search all strings in array', () => {
    const array = ['a', 'b', 'a'];

    expect(linearSearch(array, 'c')).toEqual([]);
    expect(linearSearch(array, 'b')).toEqual([1]);
    expect(linearSearch(array, 'a')).toEqual([0, 2]);
  });

  it('should search through objects as well', () => {
    const comparatorCallback = (a, b) => {
      if (a.key === b.key) {
        return 0;
      }

      return a.key <= b.key ? -1 : 1;
    };

    const array = [
      { key: 5 },
      { key: 6 },
      { key: 7 },
      { key: 6 },
    ];

    expect(linearSearch(array, { key: 10 }, comparatorCallback)).toEqual([]);
    expect(linearSearch(array, { key: 5 }, comparatorCallback)).toEqual([0]);
    expect(linearSearch(array, { key: 6 }, comparatorCallback)).toEqual([1, 3]);
  });
});
