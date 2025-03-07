import Sort from '../Sort';

describe('Sort', () => {
  it('should throw an error when trying to call Sort.sort() method directly', () => {
    function doForbiddenSort() {
      const sorter = new Sort();
      sorter.sort();
    }

    expect(doForbiddenSort).toThrow();
  });
});
