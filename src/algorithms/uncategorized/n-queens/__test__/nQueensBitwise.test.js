import nQueensBitwise from '../nQueensBitwise';

describe('nQueensBitwise', () => {
  it('should have solutions for 4 to N queens', () => {
    expect(nQueensBitwise(4)).toBe(2);
    expect(nQueensBitwise(5)).toBe(10);
    expect(nQueensBitwise(6)).toBe(4);
    expect(nQueensBitwise(7)).toBe(40);
    expect(nQueensBitwise(8)).toBe(92);
    expect(nQueensBitwise(9)).toBe(352);
    expect(nQueensBitwise(10)).toBe(724);
    expect(nQueensBitwise(11)).toBe(2680);
  });
});
