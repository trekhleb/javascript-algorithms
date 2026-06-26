import sha256 from '../sha256';

describe('sha256', () => {
  it('should calculate the hash of an empty string correctly', () => {
    // Test vector for an empty string from the NIST specification.
    const input = '';
    const expectedHash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    expect(sha256(input)).toBe(expectedHash);
  });

  it('should calculate the hash of a short string correctly', () => {
    // Standard "abc" test vector.
    const input = 'abc';
    const expectedHash = 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad';
    expect(sha256(input)).toBe(expectedHash);
  });

  it('should calculate the hash of a longer string correctly', () => {
    // This string is longer than a single 512-bit block, testing the padding and chunking logic.
    const input = 'The quick brown fox jumps over the lazy dog';
    const expectedHash = 'd7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592';
    expect(sha256(input)).toBe(expectedHash);
  });

  it('should demonstrate the avalanche effect', () => {
    // A minor change to the input (adding a period) should result in a completely different hash.
    const input1 = 'The quick brown fox jumps over the lazy dog';
    const input2 = 'The quick brown fox jumps over the lazy dog.';

    const hash1 = sha256(input1);
    const hash2 = sha256(input2);

    expect(hash1).not.toBe(hash2);

    // Known correct hash for the second input string.
    const expectedHash2 = 'ef537f25c895bfa782526529a9b63d97aa631564d5d789c2b765448c8635fb6c';
    expect(hash2).toBe(expectedHash2);
  });

  it('should calculate the hash of a very long string correctly', () => {
    // A string that requires multiple blocks.
    const input = 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq';
    const expectedHash = '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1';
    expect(sha256(input)).toBe(expectedHash);
  });
});
