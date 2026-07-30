import crypto from 'crypto';

export default class Block {
  /**
   * @param {Object} blockParams - The block parameters
   * @param {number} blockParams.index - The position of the block in the blockchain
   * @param {string} [blockParams.timestamp] - The creation time of the block in ISO format
   * @param {Array|String} blockParams.data - The transaction data stored in this block
   * @param {string} blockParams.previousHash - The hash of the previous block in the chain
   * @param {number} [blockParams.nonce=0] - The number used once for proof of work calculations
   */
  constructor({
    index,
    timestamp = new Date().toISOString(),
    data,
    previousHash,
    nonce = 0,
  }) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = nonce;
    this.hash = this.calculateHash();
  }

  /**
   * @private
   * @returns {string} The hexadecimal representation of the block's hash
   */
  calculateHash() {
    const blockData = JSON.stringify({
      index: this.index,
      timestamp: this.timestamp,
      data: this.data,
      previousHash: this.previousHash,
      nonce: this.nonce,
    });

    return crypto.createHash('sha256').update(blockData).digest('hex');
  }

  /**
   * @param {number} difficulty - The number of leading zeros required in the hash
   */
  mineBlock(difficulty) {
    const target = '0'.repeat(difficulty);
    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce += 1;
      this.hash = this.calculateHash();
    }
  }
}
