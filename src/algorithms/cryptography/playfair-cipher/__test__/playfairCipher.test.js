import { playfairEncrypt, playfairDecrypt, generateKeyMatrix } from '../playfairCipher';

describe('playfairCipher', () => {
  it('should generate a correct 5x5 matrix', () => {
    const matrix = generateKeyMatrix('monarchy');
    expect(matrix.length).toBe(5);
    expect(matrix[0].length).toBe(5);
  });

  it('should encrypt text correctly with given key', () => {
    const encrypted = playfairEncrypt('instruments', 'monarchy');
    // Example known output for Playfair cipher with key "monarchy"
    expect(encrypted).toBe('gatlmzclrqxa');
  });

  it('should decrypt text correctly with given key', () => {
    const decrypted = playfairDecrypt('gatlmzclrqtx', 'monarchy');
    expect(decrypted).toBe('instrumentsz');
  });

  it('should handle repeated letters correctly (insert x)', () => {
    const encrypted = playfairEncrypt('balloon', 'playfair example');
    expect(encrypted).toBeDefined();
    const decrypted = playfairDecrypt(encrypted, 'playfair example');
    expect(decrypted).toBe('balxloon');
  });

  it('should ignore non-alphabet characters', () => {
    const encrypted = playfairEncrypt('HELLO WORLD!', 'keyword');
    const decrypted = playfairDecrypt(encrypted, 'keyword');
    expect(typeof encrypted).toBe('string');
    expect(decrypted.replace(/x/g, '').startsWith('hello')).toBe(true);
  });
});
