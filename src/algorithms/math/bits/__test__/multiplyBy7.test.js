import multiplyBy7 from '../multiplyBy7';

describe('multiplyBy7', () => {
  it('Should return result multiplied by 7', () => {
    expect(multiplyBy7(1)).toBe(7);
    expect(multiplyBy7(2)).toBe(14);
  });
});
