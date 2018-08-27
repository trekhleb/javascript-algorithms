import TrieNode from './TrieNode';

// Character that we will use for trie tree root.
const HEAD_CHARACTER = '*';
//Don't want to expose this function to the public, so I encapsulated it here to make it private
const privateMethods = {
  delete(currentNode, characters, index) {
    //Check if node is leaf node
    if(index === characters.length) {
      //If the worse is not a complete word set shouldDeleteCurrentNode to false
      if(!currentNode.isCompleteWord) {
        return false;
      }
      currentNode.isCompleteWord = false;
      //Otherwise, set shouldDeleteCurrentNode to true
      return currentNode.children.getKeys().length == 0;
    }
    let ch = characters[index];
    let node = currentNode.getChild(ch);
    if(node == null) {
      return false;
    }
    let newIndex = index + 1;
    let shouldDeleteCurrentNode = privateMethods.delete(node, characters, newIndex);
    //Removes the child of the current node after making sure the node is not apart of another key
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
   * @description Uses recursion to delete a given word from a trie
   * @return {Trie}
   */
  deleteWord(word) {
    //Handles the case where word provided is not in the trie
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
   * Check if complete word exists in Trie.
   *
   * @param {string} word
   * @return {boolean}
   */
  doesWordExist(word) {
    const lastCharacter = this.getLastCharacterNode(word);

    return !!lastCharacter && lastCharacter.isCompleteWord;
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
