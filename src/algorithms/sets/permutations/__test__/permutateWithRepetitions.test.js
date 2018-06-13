import permutateWithRepetitions from '../permutateWithRepetitions';
import testPermutateWithRepetitionsFn from './testPermutateWithRepetitionsFn';

describe('permutateWithRepetitions', () => {
  it('should permutate string with repetition', () => {
    testPermutateWithRepetitionsFn(permutateWithRepetitions);
  });
});
