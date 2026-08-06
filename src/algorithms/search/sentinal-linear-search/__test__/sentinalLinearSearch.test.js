import sentinalLinearSearch from '../sentinalLinearSearch';

describe('sentinalLinearSearch', () => {
  it('should search all numbers in array', () => {
    const array = [1, 2, 4, 6, 2, 1, 5, 2];

    expect(sentinalLinearSearch(array, 10)).toEqual([]);
    expect(sentinalLinearSearch(array, 1)).toEqual([0, 5]);
    expect(sentinalLinearSearch(array, 2)).toEqual([1, 4, 7]);
  });

  it('should search all strings in array', () => {
    const array = ['a', 'b', 'a', 'c', 'd', 'a', 'r'];

    expect(sentinalLinearSearch(array, 'c')).toEqual([3]);
    expect(sentinalLinearSearch(array, 'b')).toEqual([1]);
    expect(sentinalLinearSearch(array, 'a')).toEqual([0, 2, 5]);
  });
});
