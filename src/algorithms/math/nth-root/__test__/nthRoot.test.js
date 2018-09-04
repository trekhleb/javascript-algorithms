import nthRoot from '../nthRoot';

describe('nth Root', () => {
  it('should nth root of number', () => {
    expect(nthRoot(2, 2)).toBeCloseTo(1.414213562373095);
    expect(nthRoot(2, 3)).toBeCloseTo(1.259921049894873);
    expect(nthRoot(2, 4)).toBeCloseTo(1.189207115);
    expect(nthRoot(2, 5)).toBeCloseTo(1.148698354997035);
    expect(nthRoot(2, 6)).toBeCloseTo(1.122462048309373);
    expect(nthRoot(2, 7)).toBeCloseTo(1.104089513673812);
  });
});
