import degreeToRadian from '../degreeToRadian';

describe('degreeToRadian', () => {
  it('should convert degree to radian', () => {
    expect(degreeToRadian(0)).toBe(0);
    expect(degreeToRadian(45)).toBe(Math.PI / 4);
    expect(degreeToRadian(90)).toBe(Math.PI / 2);
    expect(degreeToRadian(180)).toBe(Math.PI);
    expect(degreeToRadian(270)).toBe(3 * Math.PI / 2);
    expect(degreeToRadian(360)).toBe(2 * Math.PI);
  });
});
