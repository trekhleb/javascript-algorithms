import combineWithoutRepetitions from '../combineWithoutRepetitions';
import factorial from '../../../math/factorial/factorial';

describe('combineWithoutRepetitions', () => {
  it('should combine string without repetitions', () => {
    expect(combineWithoutRepetitions('AB', 3)).toEqual([]);
    expect(combineWithoutRepetitions('AB', 1)).toEqual(['A', 'B']);
    expect(combineWithoutRepetitions('A', 1)).toEqual(['A']);
    expect(combineWithoutRepetitions('AB', 2)).toEqual(['AB']);
    expect(combineWithoutRepetitions('ABC', 2)).toEqual(['AB', 'AC', 'BC']);
    expect(combineWithoutRepetitions('ABC', 3)).toEqual(['ABC']);
    expect(combineWithoutRepetitions('ABCD', 3)).toEqual([
      'ABC',
      'ABD',
      'ACD',
      'BCD',
    ]);
    expect(combineWithoutRepetitions('ABCDE', 3)).toEqual([
      'ABC',
      'ABD',
      'ABE',
      'ACD',
      'ACE',
      'ADE',
      'BCD',
      'BCE',
      'BDE',
      'CDE',
    ]);

    const combinationOptions = 'ABCDEFGH';
    const combinationSlotsNumber = 4;
    const combinations = combineWithoutRepetitions(combinationOptions, combinationSlotsNumber);
    const n = combinationOptions.length;
    const r = combinationSlotsNumber;
    const expectedNumberOfCombinations = factorial(n) / (factorial(r) * factorial(n - r));

    expect(combinations.length).toBe(expectedNumberOfCombinations);
  });
});
