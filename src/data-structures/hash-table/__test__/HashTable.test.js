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

  it('should set, read and delete data with collisions', () => {
    const hashTable = new HashTable(3);

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('c')).toBe(0);
    expect(hashTable.hash('d')).toBe(1);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth');
    hashTable.set('d', 'ocean');

    expect(hashTable.has('x')).toBe(false);
    expect(hashTable.has('b')).toBe(true);
    expect(hashTable.has('c')).toBe(true);

    const stringifier = (value) => `${value.key}:${value.value}`;

    expect(hashTable.buckets[0].toString(stringifier)).toBe('c:earth');
    expect(hashTable.buckets[1].toString(stringifier)).toBe('a:sky,d:ocean');
    expect(hashTable.buckets[2].toString(stringifier)).toBe('b:sea');

    expect(hashTable.get('a')).toBe('sky');
    expect(hashTable.get('d')).toBe('ocean');
    expect(hashTable.get('x')).not.toBeDefined();

    hashTable.delete('a');

    expect(hashTable.delete('not-existing')).toBeNull();

    expect(hashTable.get('a')).not.toBeDefined();
    expect(hashTable.get('d')).toBe('ocean');

    hashTable.set('d', 'ocean-new');
    expect(hashTable.get('d')).toBe('ocean-new');
  });

  it('should be possible to add objects to hash table', () => {
    const hashTable = new HashTable();

    hashTable.set('objectKey', { prop1: 'a', prop2: 'b' });

    const object = hashTable.get('objectKey');
    expect(object).toBeDefined();
    expect(object.prop1).toBe('a');
    expect(object.prop2).toBe('b');
  });

  it('should track actual keys', () => {
    const hashTable = new HashTable(3);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth');
    hashTable.set('d', 'ocean');

    expect(hashTable.getKeys()).toEqual(['a', 'b', 'c', 'd']);
    expect(hashTable.has('a')).toBe(true);
    expect(hashTable.has('x')).toBe(false);

    hashTable.delete('a');

    expect(hashTable.has('a')).toBe(false);
    expect(hashTable.has('b')).toBe(true);
    expect(hashTable.has('x')).toBe(false);
  });

  it('should get all the values', () => {
    const hashTable = new HashTable(3);

    hashTable.set('a', 'alpha');
    hashTable.set('b', 'beta');
    hashTable.set('c', 'gamma');

    expect(hashTable.getValues()).toEqual(['gamma', 'alpha', 'beta']);
  });

  it('should get all the values from empty hash table', () => {
    const hashTable = new HashTable();
    expect(hashTable.getValues()).toEqual([]);
  });

  it('should get all the values in case of hash collision', () => {
    const hashTable = new HashTable(3);

    // Keys `ab` and `ba` in current implementation should result in one hash (one bucket).
    // We need to make sure that several items from one bucket will be serialized.
    hashTable.set('ab', 'one');
    hashTable.set('ba', 'two');

    hashTable.set('ac', 'three');

    expect(hashTable.getValues()).toEqual(['one', 'two', 'three']);
  });
});
