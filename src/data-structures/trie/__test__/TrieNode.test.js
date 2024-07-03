import TrieNode from '../TrieNode';

describe('TrieNode', () => {
  it('should create trie node', () => {
    const trieNode = new TrieNode('c', true);

    expect(trieNode.character).toBe('c');
    expect(trieNode.isCompleteWord).toBe(true);
    expect(trieNode.toString()).toBe('c*');
  });

  it('should add child nodes', () => {
    const trieNode = new TrieNode('c');

    trieNode.addChild('a', true);
    trieNode.addChild('o');

    expect(trieNode.toString()).toBe('c:a,o');
  });

  it('should get child nodes', () => {
    const trieNode = new TrieNode('c');

    trieNode.addChild('a');
    trieNode.addChild('o');

    expect(trieNode.getChild('a').toString()).toBe('a');
    expect(trieNode.getChild('a').character).toBe('a');
    expect(trieNode.getChild('o').toString()).toBe('o');
    expect(trieNode.getChild('b')).toBeUndefined();
  });

  it('should check if node has children', () => {
    const trieNode = new TrieNode('c');

    expect(trieNode.hasChildren()).toBe(false);

    trieNode.addChild('a');

    expect(trieNode.hasChildren()).toBe(true);
  });

  it('should check if node has specific child', () => {
    const trieNode = new TrieNode('c');

    trieNode.addChild('a');
    trieNode.addChild('o');

    expect(trieNode.hasChild('a')).toBe(true);
    expect(trieNode.hasChild('o')).toBe(true);
    expect(trieNode.hasChild('b')).toBe(false);
  });

  it('should suggest next children', () => {
    const trieNode = new TrieNode('c');

    trieNode.addChild('a');
    trieNode.addChild('o');

    expect(trieNode.suggestChildren()).toEqual(['a', 'o']);
  });

  it('should delete child node if the child node has NO children', () => {
    const trieNode = new TrieNode('c');
    trieNode.addChild('a');
    expect(trieNode.hasChild('a')).toBe(true);

    trieNode.removeChild('a');
    expect(trieNode.hasChild('a')).toBe(false);
  });

  it('should NOT delete child node if the child node has children', () => {
    const trieNode = new TrieNode('c');
    trieNode.addChild('a');
    const childNode = trieNode.getChild('a');
    childNode.addChild('r');

    trieNode.removeChild('a');
    expect(trieNode.hasChild('a')).toEqual(true);
  });

  it('should NOT delete child node if the child node completes a word', () => {
    const trieNode = new TrieNode('c');
    const IS_COMPLETE_WORD = true;
    trieNode.addChild('a', IS_COMPLETE_WORD);

    trieNode.removeChild('a');
    expect(trieNode.hasChild('a')).toEqual(true);
  });
});
