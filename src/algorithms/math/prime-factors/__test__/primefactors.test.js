import primefactors from '../primefactors';

describe('prime-factors', () => {
      it('should give prime factors', () => {
        expect(primefactors.getPrimeFactors(510510)).toEqual([2, 3, 5, 7, 11, 13, 17]);
        expect(primefactors.getPrimeFactors(343434)).toEqual([2, 3, 7, 13, 17, 37]);
        expect(primefactors.getPrimeFactors(456745)).toEqual([5, 167, 547]);
        expect(primefactors.getPrimeFactors(8735463)).toEqual([3, 11, 88237]);
        expect(primefactors.getPrimeFactors(873452453)).toEqual([149, 1637, 3581]);
        expect(primefactors.getPrimeFactors(52734)).toEqual([2, 3, 11, 17, 47]);
    });

    it('should give prime factors count accurately', () => {
        expect(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(510510))).toEqual(7);
        expect(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(343434))).toEqual(6);
        expect(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(456745))).toEqual(3);
        expect(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(8735463))).toEqual(3);
        expect(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(873452453))).toEqual(3);
        expect(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(52734))).toEqual(5);
    });

    it('should give prime factors count approximately using Hardy-Ramanujan-Approx', () => {
        expect(primefactors.hardyRamanujanApprox(510510)).toBeCloseTo(2.5759018900,5);
        expect(primefactors.hardyRamanujanApprox(343434)).toBeCloseTo(2.54527635538,5);
        expect(primefactors.hardyRamanujanApprox(456745)).toBeCloseTo(2.5673987036,5);
        expect(primefactors.hardyRamanujanApprox(8735463)).toBeCloseTo(2.771519494900,5);
        expect(primefactors.hardyRamanujanApprox(873452453)).toBeCloseTo(3.0247066455016,5);
        expect(primefactors.hardyRamanujanApprox(52734)).toBeCloseTo(2.386284094835,5);
    });

    it('should give error percentage of deviation of Hardy-Ramanujan-Approx prime-factors count from accurate prime-factors count', () => {
        expect(primefactors.errorPercent(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(510510)),primefactors.hardyRamanujanApprox(510510))).toBeCloseTo(63.20140157059997,5);
        expect(primefactors.errorPercent(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(343434)),primefactors.hardyRamanujanApprox(343434))).toBeCloseTo(57.5787274,5);
        expect(primefactors.errorPercent(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(456745)),primefactors.hardyRamanujanApprox(456745))).toBeCloseTo(14.420043212851,5);
        expect(primefactors.errorPercent(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(8735463)),primefactors.hardyRamanujanApprox(8735463))).toBeCloseTo(7.61601683663378,5);
        expect(primefactors.errorPercent(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(873452453)),primefactors.hardyRamanujanApprox(873452453))).toBeCloseTo(0.8235548500,5);
        expect(primefactors.errorPercent(primefactors.getPrimeFactorsCount(primefactors.getPrimeFactors(52734)),primefactors.hardyRamanujanApprox(52734))).toBeCloseTo(52.27431810328,5);
    });
});

