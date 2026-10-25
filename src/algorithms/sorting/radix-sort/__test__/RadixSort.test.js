import RadixSort from '../RadixSort';
import { SortTester } from '../../SortTester';

// Complexity constants.
const ARRAY_OF_STRINGS_VISIT_COUNT = 24;
const ARRAY_OF_INTEGERS_VISIT_COUNT = 77;
describe('RadixSort', () => {
  it('should sort array', () => {
    SortTester.testSort(RadixSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(RadixSort);

    const sorter = new RadixSort();
    expect(sorter.sort([2, -1, -3])).toEqual([-3, -1, 2]);
    expect(sorter.sort([-5, -10])).toEqual([-10, -5]);
  });

  it('should sort strings of different lengths lexicographically', () => {
    const sorter = new RadixSort();

    // Shorter strings must go before longer strings with the same prefix.
    expect(sorter.sort(['b', 'ba'])).toEqual(['b', 'ba']);
    expect(sorter.sort(['zzz', 'bb', 'a', 'rr', 'rrb', 'rrba'])).toEqual(
      ['a', 'bb', 'rr', 'rrb', 'rrba', 'zzz'],
    );
  });

  it('should visit array of strings n (number of strings) x m (length of longest element) times', () => {
    SortTester.testAlgorithmTimeComplexity(
      RadixSort,
      ['zzz', 'bb', 'a', 'rr', 'rrb', 'rrba'],
      ARRAY_OF_STRINGS_VISIT_COUNT,
    );
  });

  it('should visit array of integers n (number of elements) x m (length of longest integer) times', () => {
    SortTester.testAlgorithmTimeComplexity(
      RadixSort,
      [3, 1, 75, 32, 884, 523, 4343456, 232, 123, 656, 343],
      ARRAY_OF_INTEGERS_VISIT_COUNT,
    );
  });
});
