import lcg from '../lcg';

describe('Linear Congruential Generator', () => {
  it('should throw an error when a is less than 0', () => {
    expect(() => {
      lcg(-1, 0, 251, 3);
    }).toThrow('a must be between 0 and m-1');
  });

  it('should throw an error when a is greater than or equal to m', () => {
    expect(() => {
      lcg(251, 0, 251, 3);
    }).toThrow('a must be between 0 and m-1');
  });

  it('should throw an error when c is less than 0', () => {
    expect(() => {
      lcg(33, -1, 251, 3);
    }).toThrow('c must be between 0 and m-1');
  });
  it('should throw an error when c is greater than or equal to m', () => {
    expect(() => {
      lcg(33, 251, 251, 3);
    }).toThrow('c must be between 0 and m-1');
  });
  it('should throw an error when m is less than 2', () => {
    expect(() => {
      lcg(33, 0, 1, 3);
    }).toThrow('m must be greater than 1');
  });

  it('should generate a sequence of random numbers between 0 and 1', () => {
    const seed = 1234;
    const a = 246049789;
    const c = 0;
    const m = 268435399;
    let generatedNumbers = lcg(a, c, m, seed, 10);
    generatedNumbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThanOrEqual(1);
    });
    expect(new Set(generatedNumbers).size).toBe(generatedNumbers.length);
  });
});
