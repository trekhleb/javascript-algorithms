import integerPartition from '../integerPartition';

describe('integerPartition', () => {
  it('should partition the number', () => {
    expect(integerPartition(1)).toBe(1);
    expect(integerPartition(2)).toBe(2);
    expect(integerPartition(3)).toBe(3);
    expect(integerPartition(4)).toBe(5);
    expect(integerPartition(8)).toBe(22);
  });
});
