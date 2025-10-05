import switchSign from '../switchSign';

describe('switchSign', () => {
  it('should switch the sign of the number using twos complement approach', () => {
    expect(switchSign(0)).toBe(0);
    expect(switchSign(1)).toBe(-1);
    expect(switchSign(-1)).toBe(1);
    expect(switchSign(32)).toBe(-32);
    expect(switchSign(-32)).toBe(32);
    expect(switchSign(23)).toBe(-23);
    expect(switchSign(-23)).toBe(23);
  });
});
