import Blockchain from '../Blockchain';
import BlockchainTransaction from '../BlockchainTransaction';

describe('Blockchain', () => {
  it('should initialize with a mined genesis block', () => {
    const blockchain = new Blockchain(1);
    const [genesisBlock] = blockchain.chain;
    expect(blockchain.difficulty).toBe(1);
    expect(blockchain.chain).toHaveLength(1);
    expect(blockchain.balances).toEqual(new Map());
    expect(blockchain.transactionsByAddress).toEqual(new Map());
    expect(genesisBlock.index).toBe(0);
    expect(genesisBlock.data).toBe('Genesis Block');
    expect(genesisBlock.previousHash).toBe('0');
    expect(genesisBlock.hash.startsWith('0')).toBe(true);
    expect(blockchain.getLatestBlock()).toBe(genesisBlock);
  });

  it('should validate and reject pending transactions based on required fields and amount', () => {
    const blockchain = new Blockchain(0);
    const validTransaction = new BlockchainTransaction({
      from: 'alice',
      to: 'bob',
      amount: 15,
      description: 'Invoice',
    });
    const invalidTransaction1 = new BlockchainTransaction({
      from: '',
      to: 'bob',
      amount: 15,
    });
    const invalidTransaction2 = new BlockchainTransaction({
      from: 'alice',
      to: '',
      amount: 15,
    });
    const invalidTransaction3 = new BlockchainTransaction({
      from: 'alice',
      to: 'bob',
      amount: 0,
    });
    const invalidTransaction4 = new BlockchainTransaction({
      from: 'alice',
      to: 'bob',
      amount: -5,
    });
    expect(blockchain.addTransaction(validTransaction)).toBe(true);
    expect(blockchain.addTransaction(invalidTransaction1)).toBe(false);
    expect(blockchain.addTransaction(invalidTransaction2)).toBe(false);
    expect(blockchain.addTransaction(invalidTransaction3)).toBe(false);
    expect(blockchain.addTransaction(invalidTransaction4)).toBe(false);
    expect(blockchain.pendingTransactions).toEqual([validTransaction]);
    expect(blockchain.getBalance('alice')).toBe(-15);
    expect(blockchain.getBalance('bob')).toBe(15);
    expect(blockchain.getTransactionsForAddress('alice')).toEqual([]);
    blockchain.minePendingTransactions('miner-address');
    expect(blockchain.getTransactionsForAddress('alice')).toEqual([
      { block: 1, transaction: validTransaction },
    ]);
  });

  it('should mine pending transactions, reward miner, and update balances and transaction history', () => {
    const blockchain = new Blockchain(1);
    const firstTransaction = new BlockchainTransaction({
      from: 'alice',
      to: 'bob',
      amount: 25,
      description: 'Payment',
    });
    const secondTransaction = new BlockchainTransaction({
      from: 'bob',
      to: 'carol',
      amount: 5,
      description: 'Refund',
    });
    const minerAddress = 'miner-address';
    blockchain.addTransaction(firstTransaction);
    blockchain.addTransaction(secondTransaction);
    const minedBlock = blockchain.minePendingTransactions(minerAddress);
    expect(blockchain.chain).toHaveLength(2);
    expect(minedBlock.index).toBe(1);
    expect(minedBlock.previousHash).toBe(blockchain.chain[0].hash);
    expect(minedBlock.hash.startsWith('0')).toBe(true);
    expect(minedBlock.data).toEqual([
      firstTransaction,
      secondTransaction,
      // miner reward transaction
      new BlockchainTransaction({
        from: 'System',
        to: minerAddress,
        amount: 10,
        description: 'Mining Reward',
      }),
    ]);
    expect(blockchain.pendingTransactions).toEqual([]);
    expect(blockchain.getBalance('alice')).toBe(-25);
    expect(blockchain.getBalance('bob')).toBe(20);
    expect(blockchain.getBalance('carol')).toBe(5);
    expect(blockchain.getBalance(minerAddress)).toBe(10);
    expect(blockchain.getTransactionsForAddress('bob')).toEqual([
      { block: 1, transaction: firstTransaction },
      { block: 1, transaction: secondTransaction },
    ]);
    expect(blockchain.isChainValid()).toBe(true);
    minedBlock.data[0].amount = 100;
    expect(blockchain.isChainValid()).toBe(false);
  });
});
