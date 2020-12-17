import hillCipherEncrypt from '../hillCipher';

describe('hillCipher', () => {
  it('should throw an error when the length of the keyString does not equal to the power of length of the message ', () => {
    const invalidLenghOfkeyString = () => {
      hillCipherEncrypt('hello', 'helloworld');
    };

    expect(invalidLenghOfkeyString).toThrowError();
  });
  it('should throw an error when message or keyString contains none letter character', () => {
    const invalidCharacterInMessage = () => {
      hillCipherEncrypt('hell3', 'helloworld');
    };
    const invalidCharacterInKeyString = () => {
      hillCipherEncrypt('hello', 'hel12world');
    };
    expect(invalidCharacterInMessage).toThrowError();
    expect(invalidCharacterInKeyString).toThrowError();
  });
  it('should encrypt passed message using Hill Cipher', () => {
    expect(hillCipherEncrypt('ACT', 'GYBNQKURP')).toBe('POH');
    expect(hillCipherEncrypt('GFG', 'HILLMAGIC')).toBe('SWK');
  });
});
