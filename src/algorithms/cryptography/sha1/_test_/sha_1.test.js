import sha1 from '../sha_1';

describe('sha1', () => {
  it('should return the correct SHA-1 hash for a given input string', () => {
    const input = 'hello world';
    const expectedHash = '2aae6c35c94fcfb415dbe95f408b9ce91ee846ed';
    expect(sha1.hash(input)).toBe(expectedHash);
  });

  it('should return the correct SHA-1 hash for an empty string', () => {
    const input = '';
    const expectedHash = 'da39a3ee5e6b4b0d3255bfef95601890afd80709';
    expect(sha1.hash(input)).toBe(expectedHash);
  });

  it('should return the same hash for the same input string', () => {
    const input = 'consistent hash';
    const firstHash = sha1.hash(input);
    const secondHash = sha1.hash(input);
    expect(firstHash).toBe(secondHash);
  });

  it('should return different hashes for different input strings', () => {
    const input1 = 'input one';
    const input2 = 'input two';
    const hash1 = sha1.hash(input1);
    const hash2 = sha1.hash(input2);
    expect(hash1).not.toBe(hash2);
  });

  it('should handle long input strings correctly', () => {
    const input = 'a'.repeat(1000); // A string of 1000 'a' characters
    const expectedHash = '291e9a6c66994949b57ba5e650361e98fc36b1ba';
    expect(sha1.hash(input)).toBe(expectedHash);
  });

  it('should handle long complex input strings correctly', () => {
    const input = 'the best $-percentage is below x% & ^ this one';
    const expectedHash = '90c7605658a6e7bec952c3b818285e32b79ac304';
    expect(sha1.hash(input)).toBe(expectedHash);
  });

  it('should return true while comparing the string with its corresponding hash value', () => {
    const input = 'the best $-percentage is below x% & ^ this one';
    const inputHash = '90c7605658a6e7bec952c3b818285e32b79ac304';
    const expectedOutput = true;
    expect(sha1.compare(input, inputHash)).toBe(expectedOutput);
  });

  it('should return false while comparing the string with diffrent hash value', () => {
    const input = 'the best $-percentage is below x% & ^ this one';
    const inputHash = '291e9a6c66994949b57ba5e650361e98fc36b1ba';
    const expectedOutput = false;
    expect(sha1.compare(input, inputHash)).toBe(expectedOutput);
  });
});
