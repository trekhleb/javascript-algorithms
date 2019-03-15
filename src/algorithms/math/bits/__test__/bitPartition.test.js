import bitPartition from '../bitPartition';

describe('bitPartition', () => {
  it('should calculate number in a base which is a power of 2', () => {
    const bits = 3;
    const base = 2 ** bits;

    expect(bitPartition(0, bits)).toEqual([0]);
    expect(bitPartition(base ** 0, bits)).toEqual([1]);
    expect(bitPartition((base ** 3) - 1, bits)).toEqual([7, 7, 7]);
    expect(bitPartition(base ** 3, bits)).toEqual([1, 0, 0, 0]);
  });
});
