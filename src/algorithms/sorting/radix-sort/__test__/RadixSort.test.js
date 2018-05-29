import RadixSort from '../RadixSort';
import {
  stringArr,
  intArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const ARRAY_OF_STRINGS_VISIT_COUNT = 24;
const ARRAY_OF_INTEGERS_VISIT_COUNT = 77;
describe('RadixSort', () => {
  it('should sort array', () => {
    SortTester.testSort(RadixSort);
  });

  it('should visit array of strings n (number of strings) x m (length of longest element) times', () => {
    SortTester.testAlgorithmTimeComplexity(
      RadixSort,
      stringArr,
      ARRAY_OF_STRINGS_VISIT_COUNT,
    );
  });

  it('should visit array of integers n (number of elements) x m (length of longest integer) times', () => {
    SortTester.testAlgorithmTimeComplexity(
      RadixSort,
      intArr,
      ARRAY_OF_INTEGERS_VISIT_COUNT,
    );
  });
});
