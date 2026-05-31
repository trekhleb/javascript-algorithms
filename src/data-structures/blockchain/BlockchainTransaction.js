export default class BlockchainTransaction {
  /**
   * @param {Object} transactionParams - The transaction parameters
   * @param {string} transactionParams.from - The sender's address
   * @param {string} transactionParams.to - The recipient's address
   * @param {number} transactionParams.amount - The transaction amount
   * @param {string} [transactionParams.description=''] - Optional description of the transaction
   */
  constructor({
    from,
    to,
    amount,
    description = '',
  }) {
    this.from = from;
    this.to = to;
    this.amount = amount;
    this.description = description;
  }
}
