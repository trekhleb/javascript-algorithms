# Hill Cipher

* The Hill cipher is a polygraphic substitution cipher based on linear algebra.
Each letter is represented by a number modulo 26. 

* Encryption: to encrypt a message, each block of n letters (considered as an n-component vector) is multiplied by an invertible n × n matrix, against modulus 26. 
Consider the message 'ACT', and the key below (or GYB/NQK/URP in letters):
  | 6   24   1 |
  | 13  16   10|
  | 20  17   15|
The message is the vector:
  |  0  |
  |  2  |
  |  19 |
Thus the enciphered vector is given by  
  | 6   24   1 |  |  0  |   |  67  |    |  15 |
  | 13  16   10|  |  2  | = |  222 | ≡  |  14 | (mod 26)
  | 20  17   15|  |  19 |   |  319 |    |  7  |
which corresponds to a ciphertext of 'POH'.

* Decryption: to decrypt the message, each block is multiplied by the inverse of the matrix used for encryption.


## Reference
- [Wikipedia] https://en.wikipedia.org/wiki/Hill_cipher
- [GeeksforGeeks]https://www.geeksforgeeks.org/hill-cipher/

