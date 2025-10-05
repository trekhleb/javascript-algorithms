import BloomFilter from '../BloomFilter';

describe('BloomFilter', () => {
  let bloomFilter;
  const people = [
    'Bruce Wayne',
    'Clark Kent',
    'Barry Allen',
  ];

  beforeEach(() => {
    bloomFilter = new BloomFilter();
  });

  it('should have methods named "insert" and "mayContain"', () => {
    expect(typeof bloomFilter.insert).toBe('function');
    expect(typeof bloomFilter.mayContain).toBe('function');
  });

  it('should create a new filter store with the appropriate methods', () => {
    const store = bloomFilter.createStore(18);
    expect(typeof store.getValue).toBe('function');
    expect(typeof store.setValue).toBe('function');
  });

  it('should hash deterministically with all 3 hash functions', () => {
    const str1 = 'apple';

    expect(bloomFilter.hash1(str1)).toEqual(bloomFilter.hash1(str1));
    expect(bloomFilter.hash2(str1)).toEqual(bloomFilter.hash2(str1));
    expect(bloomFilter.hash3(str1)).toEqual(bloomFilter.hash3(str1));

    expect(bloomFilter.hash1(str1)).toBe(14);
    expect(bloomFilter.hash2(str1)).toBe(43);
    expect(bloomFilter.hash3(str1)).toBe(10);

    const str2 = 'orange';

    expect(bloomFilter.hash1(str2)).toEqual(bloomFilter.hash1(str2));
    expect(bloomFilter.hash2(str2)).toEqual(bloomFilter.hash2(str2));
    expect(bloomFilter.hash3(str2)).toEqual(bloomFilter.hash3(str2));

    expect(bloomFilter.hash1(str2)).toBe(0);
    expect(bloomFilter.hash2(str2)).toBe(61);
    expect(bloomFilter.hash3(str2)).toBe(10);
  });

  it('should create an array with 3 hash values', () => {
    expect(bloomFilter.getHashValues('abc').length).toBe(3);
    expect(bloomFilter.getHashValues('abc')).toEqual([66, 63, 54]);
  });

  it('should insert strings correctly and return true when checking for inserted values', () => {
    people.forEach((person) => bloomFilter.insert(person));

    expect(bloomFilter.mayContain('Bruce Wayne')).toBe(true);
    expect(bloomFilter.mayContain('Clark Kent')).toBe(true);
    expect(bloomFilter.mayContain('Barry Allen')).toBe(true);

    expect(bloomFilter.mayContain('Tony Stark')).toBe(false);
  });
});
