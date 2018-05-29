export default class TrieNode {
  constructor(character, isCompleteWord = false) {
    this.character = character;
    this.isCompleteWord = isCompleteWord;
    this.children = new Map();
  }

  getChild(character) {
    return this.children.get(character);
  }

  addChild(character, isCompleteWord = false) {
    if (!this.children.has(character)) {
      this.children.set(character, new TrieNode(character, isCompleteWord));
    }

    return this.children.get(character);
  }

  hasChild(character) {
    return this.children.has(character);
  }

  suggestChildren() {
    return [...this.children.keys()];
  }

  toString() {
    let childrenAsString = this.suggestChildren().toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
    const isCompleteString = this.isCompleteWord ? '*' : '';

    return `${this.character}${isCompleteString}${childrenAsString}`;
  }
}
