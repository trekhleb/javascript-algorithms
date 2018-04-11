import Comparator from '../Comparator';

describe('Comparator', () => {
  it('should compare with default comparator function', () => {
    const comparator = new Comparator();

    expect(comparator.equal(0, 0)).toBeTruthy();
    expect(comparator.equal(0, 1)).toBeFalsy();
    expect(comparator.equal('a', 'a')).toBeTruthy();
    expect(comparator.lessThen(1, 2)).toBeTruthy();
    expect(comparator.lessThen(-1, 2)).toBeTruthy();
    expect(comparator.lessThen('a', 'b')).toBeTruthy();
    expect(comparator.lessThen('a', 'ab')).toBeTruthy();
    expect(comparator.lessThen(10, 2)).toBeFalsy();
    expect(comparator.lessThenOrEqual(10, 2)).toBeFalsy();
    expect(comparator.lessThenOrEqual(1, 1)).toBeTruthy();
    expect(comparator.lessThenOrEqual(0, 0)).toBeTruthy();
    expect(comparator.greaterThen(0, 0)).toBeFalsy();
    expect(comparator.greaterThen(10, 0)).toBeTruthy();
    expect(comparator.greaterThenOrEqual(10, 0)).toBeTruthy();
    expect(comparator.greaterThenOrEqual(10, 10)).toBeTruthy();
    expect(comparator.greaterThenOrEqual(0, 10)).toBeFalsy();
  });

  it('should compare with custom comparator function', () => {
    const comparator = new Comparator((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    expect(comparator.equal('a', 'b')).toBeTruthy();
    expect(comparator.equal('a', '')).toBeFalsy();
    expect(comparator.lessThen('b', 'aa')).toBeTruthy();
    expect(comparator.greaterThenOrEqual('a', 'aa')).toBeFalsy();
    expect(comparator.greaterThenOrEqual('aa', 'a')).toBeTruthy();
    expect(comparator.greaterThenOrEqual('a', 'a')).toBeTruthy();

    comparator.reverse();

    expect(comparator.equal('a', 'b')).toBeTruthy();
    expect(comparator.equal('a', '')).toBeFalsy();
    expect(comparator.lessThen('b', 'aa')).toBeFalsy();
    expect(comparator.greaterThenOrEqual('a', 'aa')).toBeTruthy();
    expect(comparator.greaterThenOrEqual('aa', 'a')).toBeFalsy();
    expect(comparator.greaterThenOrEqual('a', 'a')).toBeTruthy();
  });
});
