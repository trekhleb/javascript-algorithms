import permutateWithRepetition from '../permutateWithRepetitions';

describe('permutateWithRepetition', () => {
  it('should permutate string with repetition', () => {
    const permutations0 = permutateWithRepetition('');
    expect(permutations0).toEqual([]);

    const permutations1 = permutateWithRepetition('A');
    expect(permutations1).toEqual(['A']);

    const permutations2 = permutateWithRepetition('AB');
    expect(permutations2).toEqual([
      'AA',
      'AB',
      'BA',
      'BB',
    ]);

    const permutations3 = permutateWithRepetition('ABC');
    expect(permutations3).toEqual([
      'AAA',
      'AAB',
      'AAC',
      'ABA',
      'ABB',
      'ABC',
      'ACA',
      'ACB',
      'ACC',
      'BAA',
      'BAB',
      'BAC',
      'BBA',
      'BBB',
      'BBC',
      'BCA',
      'BCB',
      'BCC',
      'CAA',
      'CAB',
      'CAC',
      'CBA',
      'CBB',
      'CBC',
      'CCA',
      'CCB',
      'CCC',
    ]);

    const permutations4 = permutateWithRepetition('ABCD');
    expect(permutations4.length).toBe(4 * 4 * 4 * 4);
  });
});
