# Playfair Cipher Algorithm
---

In cryptography, the **Playfair cipher** is a manual symmetric encryption technique and one of the earliest known digraph substitution ciphers. It was invented in **1854 by Charles Wheatstone**, but it became widely known through **Lord Playfair**, who promoted its use.

Unlike simple substitution ciphers such as the **Caesar cipher**, the Playfair cipher encrypts **pairs of letters (digraphs)** instead of single letters, making frequency analysis significantly more difficult.

---

## Example

To encrypt a message, a **5×5 table (key matrix)** of letters is created using a **keyword**.  
The letters **I and J** are usually combined into one cell.

For example, with the keyword **MONARCHY**, the key matrix becomes:
M O N A R
C H Y B D
E F G I K
L P Q S T
U V W X Z


When encrypting, the plaintext is first split into **pairs of letters (called digraphs)**.  
If both letters in a pair are the same, an **X** is inserted between them.  
If the plaintext has an **odd number of letters**, an **X** is added to the end.

**Example:**
Plaintext: INSTRUMENTS
Prepared: IN ST RU ME NT SX


---

### Encryption Rules

1. **Same Row:**  
   Replace each letter with the letter to its **right** (wrapping around to the start if needed).

2. **Same Column:**  
   Replace each letter with the letter **below** it (wrapping around to the top if needed).

3. **Rectangle Rule:**  
   If the letters form a **rectangle**, replace each letter with the letter in the same row but in the **column of the other letter**.

**Example:**
Plaintext: IN ST RU ME NT SX
Ciphertext: GA TL MZ CL RQ TX


---

## Decryption

Decryption uses the same key matrix and **reverses the encryption rules**:

- **Same Row:** Replace each letter with the letter to its **left**.  
- **Same Column:** Replace each letter with the letter **above** it.  
- **Rectangle Rule:** Swap the columns back to their original positions.

Ciphertext: GATLMZCLRQTX
Plaintext: INSTRUMENTSX (Discard X)


---

## Complexity

- **Time:** O(|n|)  
- **Space:** O(1)

---

## References

- [Playfair cipher on Wikipedia](https://en.wikipedia.org/wiki/Playfair_cipher)  
- [Crypto Corner: Playfair Cipher Explained](https://cryptocorner.com/playfair-cipher)



