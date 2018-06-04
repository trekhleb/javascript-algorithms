import permutateWithRepetitionsRecursive from '../permutateWithRepetitionsRecursive';
import testPermutateWithRepetitionsFn from './testPermutateWithRepetitionsFn';

describe('permutateWithRepetitions', () => {
  it('should permutate string with repetition', () => {
    testPermutateWithRepetitionsFn(permutateWithRepetitionsRecursive);
  });
});
