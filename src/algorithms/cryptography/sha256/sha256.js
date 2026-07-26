/**
 * @fileoverview A pure JavaScript implementation of the SHA-256 cryptographic
 * hash function, as defined in the FIPS 180-4 standard.
 *
 * NOTE: This implementation is for educational purposes to demonstrate the
 * underlying algorithm. For production applications, it is strongly recommended
 * to use the native Web Crypto API (`crypto.subtle.digest`) in browsers or the
 * `crypto` module in Node.js, as they are faster and hardened against
 * side-channel attacks.
 */

/**
 * Hashes a string message using the SHA-256 algorithm.
 *
 * @param {string} message The message to hash.
 * @returns {string} The 64-character hexadecimal representation of the hash.
 */
export default function sha256(message) {
  // --- SHA-256 Constants (as defined in the FIPS 180-4 standard) ---
  const K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
  ];

  const H_INITIAL = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
  ];

  // --- SHA-256 Helper Functions ---
  const rotR = (x, n) => (x >>> n) | (x << (32 - n));
  const Ch = (x, y, z) => (x & y) ^ (~x & z);
  const Maj = (x, y, z) => (x & y) ^ (x & z) ^ (y & z);
  const Sigma0 = (x) => rotR(x, 2) ^ rotR(x, 13) ^ rotR(x, 22);
  const Sigma1 = (x) => rotR(x, 6) ^ rotR(x, 11) ^ rotR(x, 25);
  const sigma0 = (x) => rotR(x, 7) ^ rotR(x, 18) ^ (x >>> 3);
  const sigma1 = (x) => rotR(x, 17) ^ rotR(x, 19) ^ (x >>> 10);

  // --- Pre-processing and Padding ---
  const msgBytes = new TextEncoder().encode(message);

  const msgLenBits = msgBytes.length * 8;
  // Use two 32-bit integers to represent the 64-bit message length.
  const highBits = Math.floor(msgLenBits / 0x100000000);
  const lowBits = msgLenBits;

  const k = (448 - ((msgBytes.length * 8 + 1) % 512) + 512) % 512;
  const paddedLength = msgBytes.length + 1 + k / 8 + 8;
  const M = new Uint8Array(paddedLength);
  const view = new DataView(M.buffer);

  M.set(msgBytes);
  M[msgBytes.length] = 0x80;
  view.setUint32(paddedLength - 8, highBits, false);
  view.setUint32(paddedLength - 4, lowBits, false);

  // --- Hash Computation ---
  const hash = [...H_INITIAL];

  for (let i = 0; i < M.length; i += 64) {
    const chunkView = new DataView(M.buffer, i, 64);
    const W = new Uint32Array(64);

    for (let t = 0; t < 16; t += 1) {
      W[t] = chunkView.getUint32(t * 4, false);
    }
    for (let t = 16; t < 64; t += 1) {
      W[t] = (sigma1(W[t - 2]) + W[t - 7] + sigma0(W[t - 15]) + W[t - 16]) | 0;
    }

    let [a, b, c, d, e, f, g, h] = hash;

    for (let t = 0; t < 64; t += 1) {
      const T1 = (h + Sigma1(e) + Ch(e, f, g) + K[t] + W[t]) | 0;
      const T2 = (Sigma0(a) + Maj(a, b, c)) | 0;
      h = g; g = f; f = e; e = (d + T1) | 0;
      d = c; c = b; b = a; a = (T1 + T2) | 0;
    }

    hash[0] = (hash[0] + a) | 0;
    hash[1] = (hash[1] + b) | 0;
    hash[2] = (hash[2] + c) | 0;
    hash[3] = (hash[3] + d) | 0;
    hash[4] = (hash[4] + e) | 0;
    hash[5] = (hash[5] + f) | 0;
    hash[6] = (hash[6] + g) | 0;
    hash[7] = (hash[7] + h) | 0;
  }

  return hash.map((val) => (val >>> 0).toString(16).padStart(8, '0')).join('');
}
