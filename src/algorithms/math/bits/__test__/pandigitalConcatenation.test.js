import pandigitalConcatenation from '../pandigitalConcatenation';

describe('pandigitalConcatenation', () => {
  it('should calculate number of pairs on concatenation result in Pandigital Concatenations', () => {
    const args = ['1234567', '098234', '145'];
    expect(pandigitalConcatenation(args)).toBe(1);
  });
});
