import bfRainTerraces from '../bfRainTerraces';

describe('bfRainTerraces', () => {
  it('should find the amount of water collected after raining', () => {
    expect(bfRainTerraces([1])).toBe(0);
    expect(bfRainTerraces([1, 0])).toBe(0);
    expect(bfRainTerraces([0, 1])).toBe(0);
    expect(bfRainTerraces([0, 1, 0])).toBe(0);
    expect(bfRainTerraces([0, 1, 0, 0])).toBe(0);
    expect(bfRainTerraces([0, 1, 0, 0, 1, 0])).toBe(2);
    expect(bfRainTerraces([0, 2, 0, 0, 1, 0])).toBe(2);
    expect(bfRainTerraces([2, 0, 2])).toBe(2);
    expect(bfRainTerraces([2, 0, 5])).toBe(2);
    expect(bfRainTerraces([3, 0, 0, 2, 0, 4])).toBe(10);
    expect(bfRainTerraces([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    expect(bfRainTerraces([1, 1, 1, 1, 1])).toBe(0);
    expect(bfRainTerraces([1, 2, 3, 4, 5])).toBe(0);
    expect(bfRainTerraces([4, 1, 3, 1, 2, 1, 2, 1])).toBe(4);
    expect(bfRainTerraces([0, 2, 4, 3, 4, 2, 4, 0, 8, 7, 0])).toBe(7);
  });
});
