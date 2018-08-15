import Trie from '../Trie';

describe('Trie', () => {
  it('should create trie', () => {
    const trie = new Trie();

    expect(trie).toBeDefined();
    expect(trie.head.toString()).toBe('*');
  });

  it('should add words to trie', () => {
    const trie = new Trie();

    trie.addWord('cat');

    expect(trie.head.toString()).toBe('*:c');
    expect(trie.head.getChild('c').toString()).toBe('c:a');

    trie.addWord('car');
    expect(trie.head.toString()).toBe('*:c');
    expect(trie.head.getChild('c').toString()).toBe('c:a');
    expect(trie.head.getChild('c').getChild('a').toString()).toBe('a:t,r');
    expect(trie.head.getChild('c').getChild('a').getChild('t').toString()).toBe('t*');
  });

  it('should suggests next characters', () => {
    const trie = new Trie();

    trie.addWord('cat');
    trie.addWord('cats');
    trie.addWord('car');
    trie.addWord('caption');

    expect(trie.suggestNextCharacters('ca')).toEqual(['t', 'r', 'p']);
    expect(trie.suggestNextCharacters('cat')).toEqual(['s']);
    expect(trie.suggestNextCharacters('cab')).toBeNull();
  });

  it('should check if word exists', () => {
    const trie = new Trie();

    trie.addWord('cat');
    trie.addWord('cats');
    trie.addWord('car');
    trie.addWord('caption');

    expect(trie.doesWordExist('cat')).toBe(true);
    expect(trie.doesWordExist('cap')).toBe(true);
    expect(trie.doesWordExist('call')).toBe(false);
  });

  it('should delete words from trie', () => {
    const trie = new Trie();

    //Nothing should happen
    trie.deleteWord('a')

    //Delete word for only one key that exists in trie
    trie.addWord('cat');
    trie.deleteWord('cat')
    expect(trie.head.toString()).toBe('*')

    //Deletes word for a key that shares similar characters
    trie.addWord('cat');
    trie.addWord('car');
    trie.deleteWord('car');
    expect(trie.head.toString()).toBe('*:c');
    expect(trie.head.getChild('c').toString()).toBe('c:a');

    
  });
});
