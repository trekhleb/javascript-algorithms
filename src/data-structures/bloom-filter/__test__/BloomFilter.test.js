import BloomFilter from '../BloomFilter';

describe('Bloom Filter', () => {
  let bloomFilter;
  const people = ['Bruce Wayne', 'Clark Kent', 'Barry Allen'];

  beforeEach(() => {
    bloomFilter = new BloomFilter();
  });

  it('Should have methods named "insert" and "mayContain"', () => {
    expect(typeof bloomFilter.insert).toBe('function');
    expect(typeof bloomFilter.mayContain).toBe('function');
  });

  it('Should create a new filter store with the appropriate methods', () => {
    const store = bloomFilter.createStore(18);
    expect(typeof store.getValue).toBe('function');
    expect(typeof store.setValue).toBe('function');
  });

  it('Should hash deterministically with all 3 hash functions', () => {
    const str = 'abc';
    expect(bloomFilter.hash1(str)).toEqual(bloomFilter.hash1(str));
    expect(bloomFilter.hash2(str)).toEqual(bloomFilter.hash2(str));
    expect(bloomFilter.hash3(str)).toEqual(bloomFilter.hash3(str));
  });

  it('Should create an array with 3 hash values', () => {
    expect(bloomFilter.getHashValues('abc').length).toEqual(3);
  });

  it('Should insert strings correctly and return true when checking for inserted values', () => {
    people.forEach(person => bloomFilter.insert(person));
    expect(bloomFilter.mayContain('Bruce Wayne')).toBe(true);
    expect(bloomFilter.mayContain('Clark Kent')).toBe(true);
    expect(bloomFilter.mayContain('Barry Allen')).toBe(true);
  });
});
