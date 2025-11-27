/**
 * Encodes the input string into the format required by the SHA-1 algorithm,
 * preparing it as a series of 512-bit (64-byte) blocks, each consisting of
 * sixteen 32-bit words. This preprocessing step includes padding the input
 * to the correct length, which is necessary for SHA-1 to process the data
 * correctly.
 *
 * The encoding process includes:
 *
 * 1. **Breaking the Input into 512-bit Chunks**:
 *    - The input string is divided into 512-bit (64-byte) chunks. Each chunk
 *      is represented as an array of sixteen 32-bit words (Uint32Array).
 *
 * 2. **Converting Characters to 32-bit Words**:
 *    - The characters of the input string are converted to their character
 *      codes and then arranged into 32-bit words. The bit-shifting ensures
 *      the correct positioning within each 32-bit word.
 *
 * 3. **Padding the Input**:
 *    - If the total length is not a multiple of 512 bits, the input is padded
 *      to make it so. Padding consists of a '1' bit followed by '0' bits,
 *      and the original message length (in bits) is appended as a 64-bit
 *      integer in the final 512-bit block.
 *    - The `handlePadding` function manages this padding step:
 *      - It calculates the appropriate bit to set in the padding.
 *      - Adds the original message length (in bits) as the last 32-bit word
 *        if necessary.
 *
 * 4. **Handling Multiple Blocks**:
 *    - If the current block becomes full or the message ends, it is added to
 *      the list of chunks, and a new chunk is started.
 *
 * @param {string} inputData - The input string to be preprocessed for SHA-1.
 * @returns {Array<Uint32Array>} - An array of 512-bit chunks, each represented
 *                                 as a Uint32Array of sixteen 32-bit words.
 */
const getInputDataEncodings = (inputData) => {
  const inputDataInChunk = [];
  let subChunks = new Uint32Array(16);
  let count = 0;
  let placeHolder = 0;
  let rotateCount = 0;

  const handlePadding = () => {
    const rotateIndex = (3 - rotateCount) * 8 + 7;

    const paddingValue = (1 << rotateIndex) >>> 0;

    placeHolder |= paddingValue;

    const index = Math.floor(count / 4);

    subChunks[index] = placeHolder;

    if (index >= 14) {
      inputDataInChunk.push(subChunks);
      subChunks = new Uint32Array(16);
    }

    subChunks[15] = inputData.length * 8;

    inputDataInChunk.push(subChunks);
  };

  for (let i = 0; i < inputData.length; i += 1) {
    let c = inputData.charCodeAt(i);

    c = (c << ((3 - rotateCount) * 8)) >>> 0;

    placeHolder = (placeHolder | c) >>> 0;

    count += 1;

    rotateCount = (rotateCount + 1) % 4;

    if (rotateCount === 0) {
      subChunks[count / 4 - 1] = placeHolder;
      placeHolder = 0;
    }

    count %= 64;

    if (count === 0) {
      inputDataInChunk.push(subChunks);
      subChunks = new Uint32Array(16);
    }
  }

  handlePadding();
  return inputDataInChunk;
};

/**
 * Funtion to left rotate a value
 *
 * @param {Unsigned int32} x - range from 0 to 2^32 - 1 ,this is the number which have to be rotated
 * @param {Integer} n -range from 0 to 32 , this represent the number of times
 * @return {Integer}  - return the value of x after left rotating it by n times
 */
const rotateToLeft = (x, n) => (x << n) | (x >>> (32 - n));

/**
 * Funtion to conver the final encodings to hexadecimal form
 *
 * @param {Uint32Array} inputArry - holds the value of the 5 encoding in a 32bit formate
 * @return {stringr}  - return the string of hexadecimal values
 */
const bitsToString = (inputArry) => {
  let outputString = '';
  inputArry.map((data32Bit) => {
    outputString += data32Bit.toString(16).padStart(8, '0');
    return 0;
  });

  return outputString;
};

/**
 * Performs a specific bitwise operation on the inputs b, c, and d,
 * depending on the current iteration count (t) in the SHA-1 algorithm.
 *
 * In the SHA-1 algorithm, the processing function varies for different
 * ranges of t (0-79) to ensure non-linearity and complexity in the
 * message digest calculation:
 *
 * - 0 <= t <= 19: Returns the result of the majority function: (b & c) | (~b & d)
 *   - This emphasizes the bits where b and c match or where b is not set.
 *
 * - 20 <= t <= 39: Returns the result of the XOR function: b ^ c ^ d
 *   - This introduces more randomness by performing an XOR of b, c, and d.
 *
 * - 40 <= t <= 59: Returns the result of the majority function: (b & c) | (b & d) | (c & d)
 *   - This emphasizes the bits where the majority of b, c, and d match.
 *
 * - 60 <= t <= 79: Returns the result of the XOR function: b ^ c ^ d
 *   - The same XOR function is used again to increase mixing in the final stages.
 *
 * @param {number} b - The first input word for the operation.
 * @param {number} c - The second input word for the operation.
 * @param {number} d - The third input word for the operation.
 * @param {number} count - The current iteration count (t) ranging from 0 to 79.
 * @returns {number} - The result of the bitwise operation based on the value of count.
 */
const processingFunction = (b, c, d, count) => {
  if (count >= 0 && count <= 19) {
    return ((b & c) | (~b & d)) >>> 0;
  }

  if (count >= 20 && count <= 39) {
    return (b ^ c ^ d) >>> 0;
  }

  if (count >= 40 && count <= 59) {
    return ((b & c) | (b & d) | (c & d)) >>> 0;
  }

  if (count >= 60 && count <= 79) {
    return (b ^ c ^ d) >>> 0;
  }

  return 0;
};

/**
 * Returns a specific constant value used in the SHA-1 algorithm,
 * depending on the current iteration count (t).
 *
 * In the SHA-1 algorithm, the processing constants vary across different
 * ranges of t (0-79). These constants are used in each round to add
 * further non-linearity and mixing into the message digest calculation:
 *
 * - 0 <= t <= 19: Returns 1518500249 (0x5A827999)
 *   - This constant is used during the first 20 rounds.
 *
 * - 20 <= t <= 39: Returns 1859775393 (0x6ED9EBA1)
 *   - This constant is used during the next 20 rounds.
 *
 * - 40 <= t <= 59: Returns 2400959708 (0x8F1BBCDC)
 *   - This constant is used during the middle 20 rounds.
 *
 * - 60 <= t <= 79: Returns 3395469782 (0xCA62C1D6)
 *   - This constant is used during the final 20 rounds.
 *
 * The purpose of these constants is to introduce additional bit-level
 * randomness and complexity into the hash function, making it more
 * resistant to cryptographic attacks.
 *
 * @param {number} count - The current iteration count (t) ranging from 0 to 79.
 * @returns {number} - The corresponding constant value for the specified range.
 */
const processingConstants = (count) => {
  if (count >= 0 && count <= 19) {
    return 1518500249;
  }

  if (count >= 20 && count <= 39) {
    return 1859775393;
  }

  if (count >= 40 && count <= 59) {
    return 2400959708;
  }

  if (count >= 60 && count <= 79) {
    return 3395469782;
  }

  return 0;
};

/**
 * Computes the SHA-1 hash for the given input string by processing it through
 * the SHA-1 compression function. This function implements the main steps
 * of the SHA-1 algorithm, including message scheduling, buffer initialization,
 * and iterative rounds of compression.
 *
 * Steps in the SHA-1 algorithm:
 *
 * 1. **Preprocessing**:
 *    - The input string is converted into an array of encoded data blocks.
 *      Each block is 512 bits (64 bytes) in length, represented as an array of
 *      32-bit words (16 words per block).
 *
 * 2. **Initialize the buffer**:
 *    - A 160-bit buffer (five 32-bit words) is initialized with specific
 *      constants. These constants are defined by the SHA-1 standard:
 *      H0 = 0x67452301, H1 = 0xEFCDAB89, H2 = 0x98BADCFE,
 *      H3 = 0x10325476, H4 = 0xC3D2E1F0.
 *
 * 3. **Message Schedule Expansion**:
 *    - For each 512-bit block, a message schedule of 80 32-bit words is
 *      created. The first 16 words come from the input block, and the
 *      remaining 64 words are generated by XORing earlier schedule values
 *      and rotating them to the left.
 *
 * 4. **Main Loop (80 rounds)**:
 *    - For each of the 80 iterations, the buffer values are updated using:
 *      - A bitwise rotation of the first buffer value.
 *      - The output of the `processingFunction`, which varies based on the
 *        iteration count `t` to introduce non-linearity.
 *      - The message schedule value for the current round.
 *      - A constant value from `processingConstants`, which also depends on `t`.
 *    - The buffer is updated in a circular manner, mimicking a simple
 *      feedback mechanism.
 *
 * 5. **Update the Hash Values**:
 *    - After processing each block, the buffer values are added to the
 *      original hash values (H0, H1, H2, H3, H4), producing the intermediate
 *      hash values for the next block.
 *
 * 6. **Final Output**:
 *    - After all blocks have been processed, the 160-bit buffer (now
 *      representing H0, H1, H2, H3, and H4) is converted to its final
 *      hexadecimal string representation, which is the SHA-1 hash.
 *
 * @param {string} inputString - The input string to be hashed using the SHA-1 algorithm.
 * @returns {string} - The SHA-1 hash of the input string, represented as a
 *                     40-character hexadecimal string.
 */
const compressFunction = (inputString) => {
  const inputEncodings = getInputDataEncodings(inputString);
  const innitialBuffer = new Uint32Array(5);

  innitialBuffer[0] = 1732584193;
  innitialBuffer[1] = 4023233417;
  innitialBuffer[2] = 2562383102;
  innitialBuffer[3] = 271733878;
  innitialBuffer[4] = 3285377520;

  for (let i = 0; i < inputEncodings.length; i += 1) {
    const messageScheduleArray = new Uint32Array(80);

    messageScheduleArray.set(inputEncodings[i]);

    const currentBuffer = new Uint32Array(5);
    currentBuffer.set(innitialBuffer);

    for (let t = 16; t <= 79; t += 1) {
      const currentVariable = messageScheduleArray[t - 3]
      ^ messageScheduleArray[t - 8]
      ^ messageScheduleArray[t - 14]
      ^ messageScheduleArray[t - 16];
      messageScheduleArray[t] = rotateToLeft(currentVariable, 1) >>> 0;
    }

    for (let k = 0; k <= 79; k += 1) {
      const temp = (rotateToLeft(currentBuffer[0], 5)
        + processingFunction(currentBuffer[1], currentBuffer[2], currentBuffer[3], k)
        + currentBuffer[4] + messageScheduleArray[k] + processingConstants(k)) & 0xffffffff;

      [currentBuffer[4], currentBuffer[3]] = [
        currentBuffer[3],
        currentBuffer[2],
      ];
      currentBuffer[2] = rotateToLeft(currentBuffer[1], 30);
      [currentBuffer[1]] = [currentBuffer[0]];
      currentBuffer[0] = temp;
    }

    innitialBuffer[0] = (innitialBuffer[0] + currentBuffer[0]) & 0xffffffff;
    innitialBuffer[1] = (innitialBuffer[1] + currentBuffer[1]) & 0xffffffff;
    innitialBuffer[2] = (innitialBuffer[2] + currentBuffer[2]) & 0xffffffff;
    innitialBuffer[3] = (innitialBuffer[3] + currentBuffer[3]) & 0xffffffff;
    innitialBuffer[4] = (innitialBuffer[4] + currentBuffer[4]) & 0xffffffff;
  }

  return bitsToString(innitialBuffer);
};

/**
 * The `sha1` object provides methods for hashing a string using the SHA-1
 * algorithm and comparing an input string's hash with a given SHA-1 encoding.
 *
 * This object contains two methods:
 *
 * 1. **hash(inputString)**:
 *    - Takes an input string and returns its SHA-1 hash.
 *    - Performs input validation:
 *      - Throws an error if the input is not a string.
 *      - Throws an error if the input is too large to encode
 *        (exceeding 4,294,967,295 bits).
 *    - Uses the `compressFunction` to compute the SHA-1 hash for the given input.
 *
 *    @param {string} inputString - The string to be hashed using the SHA-1 algorithm.
 *    @returns {string} - The 40-character hexadecimal representation of the SHA-1 hash.
 *    @throws {Error} - Throws an error if the input is not a string or if the
 *                      input size exceeds the allowable length for SHA-1.
 *
 * 2. **compare(inputString, inputEncoding)**:
 *    - Compares the SHA-1 hash of the input string with the provided SHA-1 encoding.
 *    - Performs input validation:
 *      - Throws an error if either the input string or the input encoding is not a string.
 *      - Returns `false` if the input string's length in bits exceeds 4,294,967,295 or
 *        if the input encoding is not a valid 40-character hexadecimal string.
 *    - Uses the `compressFunction` to compute the SHA-1 hash of the input string
 *      and checks for equality with the given SHA-1 encoding.
 *
 *    @param {string} inputString - The string whose SHA-1 hash is to be compared.
 *    @param {string} inputEncoding - The SHA-1 hash string to compare against.
 *    @returns {boolean} - Returns `true` if the SHA-1 hash of the input string matches
 *                         the given encoding, otherwise returns `false`.
 *    @throws {Error} - Throws an error if the input parameters are not valid strings.
 */
const sha1 = {
  hash: (inputString) => {
    if (typeof inputString !== 'string') {
      throw new Error('provide a valid string input');
    }

    if (inputString.length * 8 > 4294967295) {
      throw new Error('The string is too large to encode');
    }

    return compressFunction(inputString);
  },

  compare: (inputString, inputEncoding) => {
    if (typeof inputString !== 'string' || typeof inputEncoding !== 'string') {
      throw new Error('provide a valid string inputs');
    }

    if (inputString.length * 8 > 4294967295 || inputEncoding.length > 40) {
      return false;
    }

    return compressFunction(inputString) === inputEncoding;
  },
};

export default sha1;
