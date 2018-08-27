import ifPowerOf2 from '../ifPowerOf2';

describe('ifPowerOf2', () => {
  it('Should return if the number is power of 2 or not', () => {
    expect(ifPowerOf2(5)).toBe(false);
    expect(ifPowerOf2(4)).toBe(true);
  });
});
