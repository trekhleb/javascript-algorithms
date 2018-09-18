import allPermuations from '../allPermuations';

describe('allPermuations', () => {
  it('should find all unique permuations of a string', () => {
    expect(allPermuations('a')).toBe(['a']);
    expect(allPermuations('aa')).toBe(['aa']);
    expect(allPermuations('abc')).toBe(["abc", "acb", "bac", "bca", "cab", "cba"]);
    expect(allPermuations('dfk')).toBe(["dfk", "dkf", "fdk", "fkd", "kdf", "kfd"]);
    expect(allPermuations('bzbt')).toBe(["bzbt", "bztb", "bbzt", "bbtz", "btzb", "btbz", "zbbt", "zbtb", "ztbb", "tbzb", "tbbz", "tzbb"]);
  });
});