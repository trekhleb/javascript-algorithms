import CaesarCipher from '../CaesarCipher';

describe('ceasarCipher', () => {
  it('shifts the character by a particular amount as specified by the user', () => {
    const cipher = new CaesarCipher();
    const encText = cipher.encrypt('ABC', 3);
    const decText = cipher.decrypt('DEF', 3);

    expect(encText).toEqual('XYZ');
    expect(decText).toEqual('ABC');
  });
});
