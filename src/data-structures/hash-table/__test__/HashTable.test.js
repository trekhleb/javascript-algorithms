import HashTable from '../HashTable';

describe('HashTable', () => {
  it('should create hash table of certain size', () => {
    const defaultHashTable = new HashTable();
    expect(defaultHashTable.buckets.length).toBe(32);

    const biggerHashTable = new HashTable(64);
    expect(biggerHashTable.buckets.length).toBe(64);
  });

  it('should generate proper hash for specified keys', () => {
    const hashTable = new HashTable();

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('abc')).toBe(6);
  });

  it('should insert, read and delete data with collisions', () => {
    const hashTable = new HashTable(3);

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('c')).toBe(0);
    expect(hashTable.hash('d')).toBe(1);

    hashTable.insert('a', 'sky-old');
    hashTable.insert('a', 'sky');
    hashTable.insert('b', 'sea');
    hashTable.insert('c', 'earth');
    hashTable.insert('d', 'ocean');

    expect(hashTable.buckets[0].toString()).toBe('c:earth');
    expect(hashTable.buckets[1].toString()).toBe('a:sky,d:ocean');
    expect(hashTable.buckets[2].toString()).toBe('b:sea');

    expect(hashTable.get('a').value).toBe('sky');
    expect(hashTable.get('d').value).toBe('ocean');

    hashTable.delete('a');

    expect(hashTable.get('a')).toBeNull();
    expect(hashTable.get('d').value).toBe('ocean');

    hashTable.insert('d', 'ocean-new');
    expect(hashTable.get('d').value).toBe('ocean-new');
  });
});
