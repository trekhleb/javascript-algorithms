import CocktailShakerSort from '../CocktailShakerSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 19;
const NOT_SORTED_ARRAY_VISITING_COUNT = 159;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 200;
const EQUAL_ARRAY_VISITING_COUNT = 19;

describe('CocktailShakerSort', () => {
  it('should sort array', () => {
    SortTester.testSort(CocktailShakerSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(CocktailShakerSort);
  });

  it('should do stable sorting', () => {
    SortTester.testSortStability(CocktailShakerSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(CocktailShakerSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      CocktailShakerSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      CocktailShakerSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      CocktailShakerSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      CocktailShakerSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
