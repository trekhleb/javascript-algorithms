import longestNonRepeatingSubstring from '../longestNonRepeatingSubstring';

describe('longestNonRepeatingSubstring', () => {
  it('should find longest non repeating substring', () => {
    expect(longestNonRepeatingSubstring('')).toBe(0);
    expect(longestNonRepeatingSubstring('ABCAB')).toBe(3);
    expect(longestNonRepeatingSubstring("黑化肥发灰挥发会发黑灰化肥发黑")).toBe(6);
  });
});
