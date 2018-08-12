import countSetBits from '../countSetBits';

describe('countSetBits', () => {
  it('Should return number of set bits', () => {
      expect(countSetBits(5)).toBe(2);
      expect(countSetBits(1)).toBe(1);
    });
});
