# Vigenère Cipher

The **Vigenère Cipher**, invented by the French cryptographer Blaise de Vigenère in the 16th century. A kind of [polyalphabetic substitution cipher](https://en.wikipedia.org/wiki/Polyalphabetic_cipher), which means that it uses multiple ceasar ciphers to encrypt the plaintext.The Vigenère Cipher encrypts messages using a keyword, which is usually a word or phrase. The keyword is repeated to match the length of the plaintext message. Each letter in the keyword determines the shift value for the corresponding letter in the plaintext, resulting in the encrypted message.

## Vigenere Cipher Table

The **Vigenere Cipher Table** consists of all the alphabets written 26 times in different rows. Each alphabet in every subsequent row and column is shifted cyclically to the left. This generates 26 Caesar Ciphers.

![Vigenere Cipher table](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vigen%C3%A8re_square_shading.svg/2048px-Vigen%C3%A8re_square_shading.svg.png)

## Encryption and Decryption
The key idea behind the **Vigenère cipher** is the use of a keyword or keyphrase to determine the shift value for each character in the plaintext. The keyword is repeated as necessary to match the length of the plaintext. Each letter in the keyword corresponds to a shift value (A=0, B=1, C=2, etc.).

| **TEXT** | **KEY** | **KEYSTREAM** | **CIPHERTEXT** |
|:--------:|:-------:|:-------------:|:--------------:|
| ATTACKATDAWN | LEMON | LEMONLEMONLE | LXVOPVEFRNHR |
| THANKYOU | COVER | COVERCOV | VVVRBACP |

Here are the steps to encrypt using the Vigenère cipher:

1. **Choose a key**: Select a keyword or keyphrase to be used for encryption.

2. **Align keyword with plaintext**: Repeatedly write the keyword above the plaintext message, aligning the first letter of the keyword with the first letter of the plaintext. If the keyword does not perfectly match the length of the plaintext, repeat it until it does.

3. **Convert letters to numbers**: Assign numerical values to the letters of both the keyword and the plaintext. A=0, B=1, C=2, ..., Z=25. User the Vegenere Cipher Table to easily visualize the sifting process.

4. **Encrypt each letter**: For each letter in the plaintext, find the corresponding letter in the keyword row and the plaintext column of the Vigenère square (a tabular representation of the Caesar ciphers). The intersection of the row and column gives the ciphertext letter.

To **decrypt** a message encrypted using the Vigenère cipher, the recipient uses the same keyword to reverse the process and recover the original plaintext.

## References

- [Vigenère Cipher on Wikipedia](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)
- [Polyalphabetic cipher on Wikipedia](https://en.wikipedia.org/wiki/Polyalphabetic_cipher)
- [Intellipat Vigenère Cipher Page](https://intellipaat.com/blog/vigenere-cipher/?US)