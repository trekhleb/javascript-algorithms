import permutateWithoutRepetitions from '../permutateWithoutRepetitions';

describe('permutateString', () => {
  it('should permutate string', () => {
    const permutations0 = permutateWithoutRepetitions('');
    expect(permutations0).toEqual([]);

    const permutations1 = permutateWithoutRepetitions('A');
    expect(permutations1).toEqual(['A']);

    const permutations2 = permutateWithoutRepetitions('AB');
    expect(permutations2.length).toBe(2);
    expect(permutations2).toEqual([
      'BA',
      'AB',
    ]);

    const permutations6 = permutateWithoutRepetitions('AA');
    expect(permutations6.length).toBe(2);
    expect(permutations6).toEqual([
      'AA',
      'AA',
    ]);

    const permutations3 = permutateWithoutRepetitions('ABC');
    expect(permutations3.length).toBe(2 * 3);
    expect(permutations3).toEqual([
      'CBA',
      'BCA',
      'BAC',
      'CAB',
      'ACB',
      'ABC',
    ]);

    const permutations4 = permutateWithoutRepetitions('ABCD');
    expect(permutations4.length).toBe(2 * 3 * 4);
    expect(permutations4).toEqual([
      'DCBA',
      'CDBA',
      'CBDA',
      'CBAD',
      'DBCA',
      'BDCA',
      'BCDA',
      'BCAD',
      'DBAC',
      'BDAC',
      'BADC',
      'BACD',
      'DCAB',
      'CDAB',
      'CADB',
      'CABD',
      'DACB',
      'ADCB',
      'ACDB',
      'ACBD',
      'DABC',
      'ADBC',
      'ABDC',
      'ABCD',
    ]);

    const permutations5 = permutateWithoutRepetitions('ABCDEF');
    expect(permutations5.length).toBe(2 * 3 * 4 * 5 * 6);
  });
});
