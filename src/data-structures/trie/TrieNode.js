export default class TrieNode {
  constructor(character, isCompleteWord = false) {
    this.character = character;
    this.isCompleteWord = isCompleteWord;
    this.children = {};
  }

  getChild(character) {
    if (!Object.prototype.hasOwnProperty.call(this.children, character)) {
      return null;
    }

    return this.children[character];
  }

  addChild(character, isCompleteWord = false) {
    if (!this.children[character]) {
      this.children[character] = new TrieNode(character, isCompleteWord);
    }

    return this.children[character];
  }

  hasChild(character) {
    return !!this.children[character];
  }

  suggestChildren() {
    return Object.keys(this.children);
  }

  toString() {
    let childrenAsString = Object.keys(this.children).toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
    const isCompleteString = this.isCompleteWord ? '*' : '';

    return `${this.character}${isCompleteString}${childrenAsString}`;
  }
}
