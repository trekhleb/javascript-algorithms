import bwPowerSet from '../bwPowerSet';

describe('bwPowerSet', () => {
  it('should calculate power set of given set using bitwise approach', () => {
    expect(bwPowerSet([1])).toEqual([
      [],
      [1],
    ]);

    expect(bwPowerSet([1, 2, 3])).toEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
  });
});
