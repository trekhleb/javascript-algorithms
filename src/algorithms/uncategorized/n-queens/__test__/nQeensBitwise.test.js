import nQueensBitwise from '../nQueensBitwise';

describe('nQueensBitwise', () => {
  it('should have solutions for 4 to N queens', () => {
    const solutionFor4 = nQueensBitwise(4);
    expect(solutionFor4).toBe(2);

    const solutionFor5 = nQueensBitwise(5);
    expect(solutionFor5).toBe(10);

    const solutionFor6 = nQueensBitwise(6);
    expect(solutionFor6).toBe(4);

    const solutionFor7 = nQueensBitwise(7);
    expect(solutionFor7).toBe(40);

    const solutionFor8 = nQueensBitwise(8);
    expect(solutionFor8).toBe(92);

    const solutionFor9 = nQueensBitwise(9);
    expect(solutionFor9).toBe(352);

    const solutionFor10 = nQueensBitwise(10);
    expect(solutionFor10).toBe(724);
  });
});
