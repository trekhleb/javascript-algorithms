import TrieNode from './TrieNode';

// Character that we will use for trie tree root.
const HEAD_CHARACTER = '*';

const privateMethods = {
  delete(currentNode, characters, index) {
    let currentState = currentNode.toString()
    if(index === characters.length) {
      if(!currentNode.isCompleteWord) {
        return false;
      }
      currentNode.isCompleteWord = false;
      return currentNode.children.getKeys().length == 0;
    }
    let ch = characters[index];
    let node = currentNode.getChild(ch);
    if(node == null) {
      return false;
    }
    let newIndex = index + 1;
    let shouldDeleteCurrentNode = privateMethods.delete(node, characters, newIndex);

    if(shouldDeleteCurrentNode) {
      currentNode.removeChild(ch);
      return currentNode.children.getKeys().length == 0;
    }
    return false;
  }
}

export default class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER);
  }

  /**
   * @param {string} word
   * @return {Trie}
   */
  addWord(word) {
    const characters = Array.from(word);
    let currentNode = this.head;

    for (let charIndex = 0; charIndex < characters.length; charIndex += 1) {
      const isComplete = charIndex === characters.length - 1;
      currentNode = currentNode.addChild(characters[charIndex], isComplete);
    }

    return this;
  }

  /**
   * @param {string} word
   * @return {Trie}
   */
  deleteWord(word) {
    if(this.doesWordExist(word) === false) {
      return this;
    }

    const characters = Array.from(word);
    privateMethods.delete(this.head, characters, 0);

    return this;
  }

  /**
   * @param {string} word
   * @return {string[]}
   */
  suggestNextCharacters(word) {
    const lastCharacter = this.getLastCharacterNode(word);

    if (!lastCharacter) {
      return null;
    }

    return lastCharacter.suggestChildren();
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  doesWordExist(word) {
    return !!this.getLastCharacterNode(word);
  }

  /**
   * @param {string} word
   * @return {TrieNode}
   */
  getLastCharacterNode(word) {
    const characters = Array.from(word);
    let currentNode = this.head;

    for (let charIndex = 0; charIndex < characters.length; charIndex += 1) {
      if (!currentNode.hasChild(characters[charIndex])) {
        return null;
      }

      currentNode = currentNode.getChild(characters[charIndex]);
    }

    return currentNode;
  }
}
