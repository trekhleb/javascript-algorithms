import caPowerSet from '../caPowerSet';

describe('caPowerSet', () => {
  it('should calculate power set of given set using cascading approach', () => {
    expect(caPowerSet([1])).toEqual([
      [],
      [1],
    ]);

    expect(caPowerSet([1, 2])).toEqual([
      [],
      [1],
      [2],
      [1, 2],
    ]);

    expect(caPowerSet([1, 2, 3])).toEqual([
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
