import XORWithoutXOR from '../XORWithoutXOR';

describe('XORWithoutXOR', () => {
  it('Should return xor without using xor operator', () => {
    expect(XORWithoutXOR(5, 7)).toBe(2);
    expect(XORWithoutXOR(1, 2)).toBe(3);
  });
});
