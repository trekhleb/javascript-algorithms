import permutateString from '../permutateString';

describe('permutateString', () => {
  it('should permutate string', () => {
    const permutations0 = permutateString('');
    expect(permutations0).toEqual([]);

    const permutations1 = permutateString('A');
    expect(permutations1).toEqual(['A']);

    const permutations2 = permutateString('AB');
    expect(permutations2.length).toBe(2);
    expect(permutations2).toEqual([
      'BA',
      'AB',
    ]);

    const permutations6 = permutateString('AA');
    expect(permutations6.length).toBe(2);
    expect(permutations6).toEqual([
      'AA',
      'AA',
    ]);

    const permutations3 = permutateString('ABC');
    expect(permutations3.length).toBe(2 * 3);
    expect(permutations3).toEqual([
      'CBA',
      'BCA',
      'BAC',
      'CAB',
      'ACB',
      'ABC',
    ]);

    const permutations4 = permutateString('ABCD');
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

    const permutations5 = permutateString('ABCDEF');
    expect(permutations5.length).toBe(2 * 3 * 4 * 5 * 6);
  });
});
