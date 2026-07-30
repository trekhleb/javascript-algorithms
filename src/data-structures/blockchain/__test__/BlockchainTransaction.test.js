import BlockchainTransaction from '../BlockchainTransaction';

describe('BlockchainTransaction', () => {
  it('should create transaction with all provided fields', () => {
    const transaction = new BlockchainTransaction({
      from: 'alice',
      to: 'bob',
      amount: 50,
      description: 'Dinner split',
    });
    expect(transaction.from).toBe('alice');
    expect(transaction.to).toBe('bob');
    expect(transaction.amount).toBe(50);
    expect(transaction.description).toBe('Dinner split');
  });

  it('should default description to an empty string', () => {
    const transaction = new BlockchainTransaction({
      from: 'alice',
      to: 'bob',
      amount: 50,
    });
    expect(transaction.description).toBe('');
  });
});
