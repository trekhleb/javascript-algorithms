import permutateWithRepetitionsRecursive from '../permutateWithRepetitionsRecursive';
import testPermutateWithRepetitionsFn from './testPermutateWithRepetitionsFn';

describe('permutateWithRepetitionsRecursive', () => {
  it('should permutate string with repetition', () => {
    testPermutateWithRepetitionsFn(permutateWithRepetitionsRecursive);
  });
});
