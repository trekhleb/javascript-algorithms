import CaesarCipher from '../CaesarCipher';

describe('ceasarCipher', () => {
  it('ciphers and decyphers the text', () => {
    const cipher = new CaesarCipher();

    expect(cipher.encrypt('ABC', 3)).toBe('DEF');
    expect(cipher.decrypt('DEF', 3)).toBe('ABC');
  });
});
