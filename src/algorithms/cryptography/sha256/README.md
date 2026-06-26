# SHA-256 Hash Function

In cryptography, **SHA-256** (Secure Hash Algorithm 256-bit) is a patented cryptographic hash function that outputs a value that is 256 bits long. It is a member of the SHA-2 family of algorithms, designed by the NSA, and published in 2001 by the NIST as a U.S. Federal Information Processing Standard (FIPS).

## What is a Cryptographic Hash Function?

A cryptographic hash function is a mathematical algorithm that maps data of arbitrary size to a bit string of a fixed size (a "hash"). It is a one-way function, that is, a function which is practically infeasible to invert.

The ideal cryptographic hash function has five main properties:
* **Deterministic:** The same message always results in the same hash.
* **Pre-image resistant (one-way):** It should be computationally hard to reverse the process, i.e., to find any input that produces a given output hash.
* **Second pre-image resistant:** Given an input, it should be hard to find a different input with the same hash.
* **Collision resistant:** It should be hard to find two different messages with the same hash.
* **Avalanche effect:** A small change to the message (e.g., changing a single bit) should change the hash value so extensively that the new hash value appears uncorrelated with the old hash value.

## The Algorithm Explained

SHA-256 transforms a message of any length into a fixed-size 256-bit (32-byte) hash. This process involves several steps:

1.  **Pre-processing (Padding):** The input message is padded to ensure its total length is a multiple of 512 bits. This involves appending a '1' bit, followed by a sequence of '0' bits, and finally, a 64-bit integer representing the original message's length. 

2.  **Initialization:** The algorithm starts with eight initial 32-bit integer hash values, labeled `H[0]` through `H[7]`. These are standard, pre-defined constants derived from the fractional parts of the square roots of the first eight prime numbers.

3.  **Processing in Chunks:** The padded message is processed in 512-bit (64-byte) chunks. Each chunk is put through 64 rounds of computation.

4.  **Compression Function:** For each chunk, the algorithm performs a series of complex logical operations. This includes creating a "message schedule" (`W`) from the chunk and then using it to manipulate a set of eight working variables (initialized with the current hash values). After 64 rounds, the working variables are added to the initial hash values to produce the new intermediate hash values.

5.  **Final Hash:** After the last chunk has been processed, the final 256-bit hash value is the concatenation of the eight 32-bit hash values.

## Complexity

* **Time Complexity:** $O(L)$, where $L$ is the length of the message. The algorithm processes the input message in a single pass.
* **Space Complexity:** $O(1)$. The amount of memory required is constant and does not depend on the size of the input message.

## References

* [SHA-2 (SHA-256 Pseudocode Section) on Wikipedia](https://en.wikipedia.org/wiki/SHA-2#Pseudocode)
* [FIPS 180-4 Secure Hash Standard (Official PDF)](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf)