import { vigenereCipherEncrypt, vigenereCipherDecrypt } from '../vigenereCipher';

// Test cases for vigenereCipherEncrypt function
describe('Vigenère Cipher Encryption', () => {
  it('should encrypt a message with a key', () => {
    const message = 'hello world';
    const key = 'key';
    const expectedOutput = 'riijvs utetm';
    expect(vigenereCipherEncrypt(message, key)).toEqual(expectedOutput);
  });

  it('should encrypt a message with a longer key', () => {
    const message = 'the quick brown fox';
    const key = 'jump';
    const expectedOutput = 'ymh xnvlk grpxc psx';
    expect(vigenereCipherEncrypt(message, key)).toEqual(expectedOutput);
  });

  it('should handle uppercase letters in the message and key', () => {
    const message = 'HELLO';
    const key = 'KEY';
    const expectedOutput = 'RIJVS';
    expect(vigenereCipherEncrypt(message, key)).toEqual(expectedOutput);
  });
});

// Test cases for vigenereCipherDecrypt function
describe('Vigenère Cipher Decryption', () => {
  it('should decrypt a message with a key', () => {
    const encryptedMessage = 'riijvs utetm';
    const key = 'key';
    const expectedOutput = 'hello world';
    expect(vigenereCipherDecrypt(encryptedMessage, key)).toEqual(expectedOutput);
  });

  it('should decrypt a message with a longer key', () => {
    const encryptedMessage = 'ymh xnvlk grpxc psx';
    const key = 'jump';
    const expectedOutput = 'the quick brown fox';
    expect(vigenereCipherDecrypt(encryptedMessage, key)).toEqual(expectedOutput);
  });

  it('should handle uppercase letters in the encrypted message and key', () => {
    const encryptedMessage = 'RIJVS';
    const key = 'KEY';
    const expectedOutput = 'HELLO';
    expect(vigenereCipherDecrypt(encryptedMessage, key)).toEqual(expectedOutput);
  });
});
