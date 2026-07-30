import crypto from 'crypto';
import Block from '../BlockchainBlock';
import BlockchainTransaction from '../BlockchainTransaction';

describe('BlockchainBlock', () => {
  it('should create block with deterministic hash from its contents', () => {
    const transactions = [
      new BlockchainTransaction({
        from: 'alice',
        to: 'bob',
        amount: 25,
        description: 'Rent',
      }),
    ];
    const timestamp = '2026-01-01T12:00:00.000Z';
    const blockParams = {
      index: 1,
      timestamp,
      data: transactions,
      previousHash: 'previous-hash',
      nonce: 7,
    };
    const block = new Block(blockParams);
    const expectedHash = crypto
      .createHash('sha256')
      .update(JSON.stringify(blockParams))
      .digest('hex');
    expect(block.index).toBe(1);
    expect(block.timestamp).toBe(timestamp);
    expect(block.data).toBe(transactions);
    expect(block.previousHash).toBe('previous-hash');
    expect(block.nonce).toBe(7);
    expect(block.hash).toBe(expectedHash);
  });

  it('should use current ISO timestamp when timestamp is not provided', () => {
    const timestamp = '2026-01-01T12:00:00.000Z';
    jest.useFakeTimers().setSystemTime(new Date(timestamp));
    const block = new Block({
      index: 2,
      data: [
        new BlockchainTransaction({
          from: 'alice',
          to: 'bob',
          amount: 10,
        }),
      ],
      previousHash: 'previous-hash',
    });
    expect(block.timestamp).toBe(timestamp);
    jest.useRealTimers();
  });

  it('should mine block until hash satisfies the requested difficulty', () => {
    const block = new Block({
      index: 3,
      timestamp: '2026-05-31T12:00:00.000Z',
      data: [
        new BlockchainTransaction({
          from: 'miner',
          to: 'alice',
          amount: 5,
        }),
      ],
      previousHash: 'previous-hash',
    });
    block.mineBlock(2);
    expect(block.hash.startsWith('00')).toBe(true);
    expect(block.nonce).toBeGreaterThan(0);
    expect(block.hash).toBe(block.calculateHash());
  });
});
