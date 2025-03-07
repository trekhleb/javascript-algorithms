import nQueens from '../nQueens';

describe('nQueens', () => {
  it('should not hae solution for 3 queens', () => {
    const solutions = nQueens(3);
    expect(solutions.length).toBe(0);
  });

  it('should solve n-queens problem for 4 queens', () => {
    const solutions = nQueens(4);
    expect(solutions.length).toBe(2);

    // First solution.
    expect(solutions[0][0].toString()).toBe('0,1');
    expect(solutions[0][1].toString()).toBe('1,3');
    expect(solutions[0][2].toString()).toBe('2,0');
    expect(solutions[0][3].toString()).toBe('3,2');

    // Second solution (mirrored).
    expect(solutions[1][0].toString()).toBe('0,2');
    expect(solutions[1][1].toString()).toBe('1,0');
    expect(solutions[1][2].toString()).toBe('2,3');
    expect(solutions[1][3].toString()).toBe('3,1');
  });

  it('should solve n-queens problem for 6 queens', () => {
    const solutions = nQueens(6);
    expect(solutions.length).toBe(4);

    // First solution.
    expect(solutions[0][0].toString()).toBe('0,1');
    expect(solutions[0][1].toString()).toBe('1,3');
    expect(solutions[0][2].toString()).toBe('2,5');
    expect(solutions[0][3].toString()).toBe('3,0');
    expect(solutions[0][4].toString()).toBe('4,2');
    expect(solutions[0][5].toString()).toBe('5,4');
  });
});
