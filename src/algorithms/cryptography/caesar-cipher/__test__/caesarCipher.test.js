(Sem assunto)
teo machado<teobaldomachado22@gmail.com>
Você
import { caesarCipherEncrypt, caesarCipherDecrypt } from '../caesarCipher';

describe('caesarCipher', () => {
describe('caesarCipherEncrypt', () => {
it.each([
{ input: 'abcd', shift: 0, expected: 'abcd' },
{ input: 'abcde', shift: 1, expected: 'bcdef' },
{ input: 'abcde', shift: 3, expected: 'defgh' },
{ input: 'xyz', shift: 1, expected: 'yza' },
{ input: 'z', shift: 1, expected: 'a' },
{ input: 'ABCDE', shift: 3, expected: 'defgh' },
{ input: '', shift: 3, expected: '' },
{ input: 'ab2cde', shift: 3, expected: 'de2fgh' },
{ input: 'Hello, World!', shift: 3, expected: 'khoor, zruog!' },
])(
'encrypts "

shift',
({ input, shift, expected }) => {
expect(caesarCipherEncrypt(input, shift)).toBe(expected);
},
);

it('should preserve non-alphabetic characters', () => {
expect(caesarCipherEncrypt('123 !@#', 5)).toBe('123 !@#');
});

it('should handle shifts greater than the alphabet length', () => {
expect(caesarCipherEncrypt('abc', 27)).toBe('bcd');
});

it('should handle a negative shift', () => {
expect(caesarCipherEncrypt('abc', -1)).toBe('zab');
});
});

describe('caesarCipherDecrypt', () => {
it.each([
{ input: 'abcd', shift: 0, expected: 'abcd' },
{ input: 'bcdef', shift: 1, expected: 'abcde' },
{ input: 'defgh', shift: 3, expected: 'abcde' },
{ input: 'yza', shift: 1, expected: 'xyz' },
{ input: 'a', shift: 1, expected: 'z' },
{ input: '', shift: 3, expected: '' },
{ input: 'de2fgh', shift: 3, expected: 'ab2cde' },
{
input: 'khoor, zruog!',
shift: 3,
expected: 'hello, world!',
},
])(
'decrypts "

shift',
({ input, shift, expected }) => {
expect(caesarCipherDecrypt(input, shift)).toBe(expected);
},
);

it('should handle shifts greater than the alphabet length', () => {
expect(caesarCipherDecrypt('bcd', 27)).toBe('abc');
});

it('should handle a negative shift', () => {
expect(caesarCipherDecrypt('zab', -1)).toBe('abc');
});
});

describe('encryption and decryption round trip', () => {
it.each([
{ input: 'hello world', shift: 3 },
{ input: 'the quick brown fox', shift: 23 },
{ input: 'abc xyz', shift: 26 },
{ input: 'Text with 123 symbols!', shift: 7 },
{ input: '', shift: 10 },
])(
'should recover the original text for shift $shift',
({ input, shift }) => {
const encrypted = caesarCipherEncrypt(input, shift);
const decrypted = caesarCipherDecrypt(encrypted, shift);

expect(decrypted).toBe(input.toLowerCase());
},
);
});

describe('full phrase', () => {
it('should encrypt and decrypt the pangram correctly', () => {
const original = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
const encrypted = 'qeb nrfzh yoltk clu grjmp lsbo qeb ixwv ald';

expect(caesarCipherEncrypt(original, 23)).toBe(encrypted);
expect(caesarCipherDecrypt(encrypted, 23)).toBe(
'the quick brown fox jumps over the lazy dog',
);
});
});
}); 
