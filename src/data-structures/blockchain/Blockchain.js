import Block from './BlockchainBlock';
import BlockchainTransaction from './BlockchainTransaction';

export default class Blockchain {
  /**
   * @param {number} [difficulty=2] The difficulty level for mining new blocks
   *                                  Higher values require more computational work
   */
  constructor(difficulty = 2) {
    this.difficulty = difficulty;
    /**
     * @type {Array<Block>}
     */
    this.chain = [];
    /**
     * @type {Array<BlockchainTransaction>}
     */
    this.pendingTransactions = [];
    /**
     * @type {number}
     */
    this.minerReward = 10;
    /**
     * @type {Map<string, number>}
     */
    this.balances = new Map();
    /**
     * @type {Map<string, Array<Object>>}
     */
    this.transactionsByAddress = new Map();
    this.createGenesisBlock();
  }

  /**
   * Creates the first block in the chain.
   * @private
   */
  createGenesisBlock() {
    const genesisBlock = new Block({
      index: 0,
      data: 'Genesis Block',
      previousHash: '0',
    });
    genesisBlock.mineBlock(this.difficulty);
    this.chain.push(genesisBlock);
  }

  /**
   * @returns {Block} The last block in the chain
   */
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  /**
   * @param {string} address The address whose balance should be adjusted
   * @param {number} amount The amount to add to the current balance
   */
  updateBalance(address, amount) {
    this.balances.set(address, (this.balances.get(address) || 0) + amount);
  }

  /**
   * @param {number} blockIndex The index of the block that stores the transaction
   * @param {BlockchainTransaction} transaction The transaction to index
   */
  indexTransaction(blockIndex, transaction) {
    const addresses = new Set([transaction.from, transaction.to]);
    for (const address of addresses) {
      const addressTransactions = this.transactionsByAddress.get(address) || [];
      addressTransactions.push({
        block: blockIndex,
        transaction,
      });
      this.transactionsByAddress.set(address, addressTransactions);
    }
  }

  /**
   * @param {BlockchainTransaction} transaction The transaction object to add
   * @returns {boolean} True if the transaction was added successfully
   */
  addTransaction(transaction) {
    // Basic validation: in production, use more robust checks
    if (!transaction.from || !transaction.to || !transaction.amount) {
      return false;
    }

    if (transaction.amount <= 0) {
      // Invalid transaction: amount must be positive
      return false;
    }

    this.pendingTransactions.push(transaction);
    this.updateBalance(transaction.from, -transaction.amount);
    this.updateBalance(transaction.to, transaction.amount);

    return true;
  }

  /**
   * Mines pending transactions into a new block and rewards the miner.
   * This method creates a new block, mines it according to the difficulty level,
   * and adds it to the blockchain.
   *
   * @param {string} minerAddress - The address of the miner who will receive the reward
   * @returns {Block|null} The newly mined block, or null if no pending transactions exist
   */
  minePendingTransactions(minerAddress) {
    // Add miner reward transaction
    const transaction = new BlockchainTransaction({
      from: 'System',
      to: minerAddress,
      amount: this.minerReward,
      description: 'Mining Reward',
    });
    this.pendingTransactions.push(transaction);
    this.updateBalance(transaction.from, -transaction.amount);
    this.updateBalance(transaction.to, transaction.amount);

    // Create new block with pending transactions
    const newBlock = new Block({
      index: this.chain.length,
      data: this.pendingTransactions,
      previousHash: this.getLatestBlock().hash,
    });

    // Mine the block
    newBlock.mineBlock(this.difficulty);

    // Add to chain
    this.chain.push(newBlock);

    for (const transaction of newBlock.data) {
      this.indexTransaction(newBlock.index, transaction);
    }

    // Clear pending transactions
    this.pendingTransactions = [];

    return newBlock;
  }

  /**
   * Validates the entire blockchain by checking:
   * 1. Each block's hash is correctly calculated
   * 2. Each block's previous hash matches the previous block's hash
   * 3. No blocks have been tampered with
   *
   * @returns {boolean} True if the blockchain is valid, false otherwise
   */
  isChainValid() {
    if (this.chain.length <= 1) {
      // An empty chain or a chain with only the genesis block is considered valid
      return true;
    }

    // Check each block starting from the second block (index 1)
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // Verify current block's hash is correct
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        // The block has been tampered with
        return false;
      }

      // Verify link to previous block
      if (currentBlock.previousHash !== previousBlock.hash) {
        // The link to the previous block is invalid
        return false;
      }
    }

    return true;
  }

  /**
   * @param {string} address The address to check balance for
   * @returns {number} The total balance of the address
   */
  getBalance(address) {
    return this.balances.get(address) || 0;
  }

  /**
   * @param {string} address The address to find transactions for
   * @returns {Array<Object>} An array of transaction objects involving the address
   */
  getTransactionsForAddress(address) {
    return (this.transactionsByAddress.get(address) || []).slice();
  }
}
