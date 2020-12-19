import BucketSort from '../BucketSort';
import {
  SortTester,
} from '../../SortTester';

describe('BucketSort', () => {
  it('should sort array', () => {
    SortTester.testSort(BucketSort);
  });
});
