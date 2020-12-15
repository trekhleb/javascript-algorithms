import {
  primeFactors,
  hardyRamanujan,
} from '../primeFactors';

/**
 * Calculates the error between exact and approximate prime factor counts.
 * @param {number} exactCount
 * @param {number} approximateCount
 * @returns {number} - approximation error (percentage).
 */
function approximationError(exactCount, approximateCount) {
  return (Math.abs((exactCount - approximateCount) / exactCount) * 100);
}

describe('primeFactors', () => {
  it('should find prime factors', () => {
    expect(primeFactors(1)).toEqual([]);
    expect(primeFactors(2)).toEqual([2]);
    expect(primeFactors(3)).toEqual([3]);
    expect(primeFactors(4)).toEqual([2, 2]);
    expect(primeFactors(14)).toEqual([2, 7]);
    expect(primeFactors(40)).toEqual([2, 2, 2, 5]);
    expect(primeFactors(54)).toEqual([2, 3, 3, 3]);
    expect(primeFactors(100)).toEqual([2, 2, 5, 5]);
    expect(primeFactors(156)).toEqual([2, 2, 3, 13]);
    expect(primeFactors(273)).toEqual([3, 7, 13]);
    expect(primeFactors(300)).toEqual([2, 2, 3, 5, 5]);
    expect(primeFactors(980)).toEqual([2, 2, 5, 7, 7]);
    expect(primeFactors(1000)).toEqual([2, 2, 2, 5, 5, 5]);
    expect(primeFactors(52734)).toEqual([2, 3, 11, 17, 47]);
    expect(primeFactors(343434)).toEqual([2, 3, 7, 13, 17, 37]);
    expect(primeFactors(456745)).toEqual([5, 167, 547]);
    expect(primeFactors(510510)).toEqual([2, 3, 5, 7, 11, 13, 17]);
    expect(primeFactors(8735463)).toEqual([3, 3, 11, 88237]);
    expect(primeFactors(873452453)).toEqual([149, 1637, 3581]);
  });

  it('should give approximate prime factors count using Hardy-Ramanujan theorem', () => {
    expect(hardyRamanujan(2)).toBeCloseTo(-0.366, 2);
    expect(hardyRamanujan(4)).toBeCloseTo(0.326, 2);
    expect(hardyRamanujan(40)).toBeCloseTo(1.305, 2);
    expect(hardyRamanujan(156)).toBeCloseTo(1.6193, 2);
    expect(hardyRamanujan(980)).toBeCloseTo(1.929, 2);
    expect(hardyRamanujan(52734)).toBeCloseTo(2.386, 2);
    expect(hardyRamanujan(343434)).toBeCloseTo(2.545, 2);
    expect(hardyRamanujan(456745)).toBeCloseTo(2.567, 2);
    expect(hardyRamanujan(510510)).toBeCloseTo(2.575, 2);
    expect(hardyRamanujan(8735463)).toBeCloseTo(2.771, 2);
    expect(hardyRamanujan(873452453)).toBeCloseTo(3.024, 2);
  });

  it('should give correct deviation between exact and approx counts', () => {
    expect(approximationError(primeFactors(2).length, hardyRamanujan(2)))
      .toBeCloseTo(136.651, 2);

    expect(approximationError(primeFactors(4).length, hardyRamanujan(2)))
      .toBeCloseTo(118.325, 2);

    expect(approximationError(primeFactors(40).length, hardyRamanujan(2)))
      .toBeCloseTo(109.162, 2);

    expect(approximationError(primeFactors(156).length, hardyRamanujan(2)))
      .toBeCloseTo(109.162, 2);

    expect(approximationError(primeFactors(980).length, hardyRamanujan(2)))
      .toBeCloseTo(107.330, 2);

    expect(approximationError(primeFactors(52734).length, hardyRamanujan(52734)))
      .toBeCloseTo(52.274, 2);

    expect(approximationError(primeFactors(343434).length, hardyRamanujan(343434)))
      .toBeCloseTo(57.578, 2);

    expect(approximationError(primeFactors(456745).length, hardyRamanujan(456745)))
      .toBeCloseTo(14.420, 2);

    expect(approximationError(primeFactors(510510).length, hardyRamanujan(510510)))
      .toBeCloseTo(63.201, 2);

    expect(approximationError(primeFactors(8735463).length, hardyRamanujan(8735463)))
      .toBeCloseTo(30.712, 2);

    expect(approximationError(primeFactors(873452453).length, hardyRamanujan(873452453)))
      .toBeCloseTo(0.823, 2);
  });
});
