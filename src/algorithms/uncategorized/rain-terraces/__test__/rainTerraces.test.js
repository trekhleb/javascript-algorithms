import rainTerraces from '../rainTerraces';

describe('rainTerraces', () => {
  it('should find the amount of water collected after raining', () => {
    expect(rainTerraces([1])).toBe(0);
    expect(rainTerraces([1, 0])).toBe(0);
    expect(rainTerraces([0, 1])).toBe(0);
    expect(rainTerraces([0, 1, 0])).toBe(0);
    expect(rainTerraces([0, 1, 0, 0])).toBe(0);
    expect(rainTerraces([0, 1, 0, 0, 1, 0])).toBe(2);
    expect(rainTerraces([0, 2, 0, 0, 1, 0])).toBe(2);
    expect(rainTerraces([2, 0, 2])).toBe(2);
    expect(rainTerraces([2, 0, 5])).toBe(2);
    expect(rainTerraces([3, 0, 0, 2, 0, 4])).toBe(10);
    expect(rainTerraces([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    expect(rainTerraces([1, 1, 1, 1, 1])).toBe(0);
    expect(rainTerraces([1, 2, 3, 4, 5])).toBe(0);
    expect(rainTerraces([4, 1, 3, 1, 2, 1, 2, 1])).toBe(4);
    expect(rainTerraces([0, 2, 4, 3, 4, 2, 4, 0, 8, 7, 0])).toBe(7);
  });
});
