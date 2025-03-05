import GnomeSort from '../GnomeSort';
import {
  SortTester,
} from '../../SortTester';

describe('GnomeSort', () => {
  it('should sort array', () => {
    SortTester.testSort(GnomeSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(GnomeSort);
  });
});
