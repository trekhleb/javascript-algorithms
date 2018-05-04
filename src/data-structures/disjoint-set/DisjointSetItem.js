export default class DisjointSetItem {
  /**
   * @param {*} value
   * @param {function(value: *)} [keyCallback]
   */
  constructor(value, keyCallback) {
    this.value = value;
    this.keyCallback = keyCallback;
    /** @var {DisjointSetItem} this.parent */
    this.parent = null;
    this.children = {};
  }

  /**
   * @return {*}
   */
  getKey() {
    // Allow user to define custom key generator.
    if (this.keyCallback) {
      return this.keyCallback(this.value);
    }

    // Otherwise use value as a key by default.
    return this.value;
  }

  /**
   * @return {DisjointSetItem}
   */
  getRoot() {
    return this.isRoot() ? this : this.parent.getRoot();
  }

  /**
   * @return {boolean}
   */
  isRoot() {
    return this.parent === null;
  }

  /**
   * Rank basically means the number of all ancestors.
   *
   * @return {number}
   */
  getRank() {
    if (this.getChildren().length === 0) {
      return 0;
    }

    let rank = 0;

    /** @var {DisjointSetItem} child */
    this.getChildren().forEach((child) => {
      // Count child itself.
      rank += 1;

      // Also add all children of current child.
      rank += child.getRank();
    });

    return rank;
  }

  /**
   * @return {DisjointSetItem[]}
   */
  getChildren() {
    return Object.values(this.children);
  }

  /**
   * @param {DisjointSetItem} parentItem
   * @param {boolean} forceSettingParentChild
   * @return {DisjointSetItem}
   */
  setParent(parentItem, forceSettingParentChild = true) {
    this.parent = parentItem;
    if (forceSettingParentChild) {
      parentItem.addChild(this);
    }

    return this;
  }

  /**
   * @param {DisjointSetItem} childItem
   * @return {DisjointSetItem}
   */
  addChild(childItem) {
    this.children[childItem.getKey()] = childItem;
    childItem.setParent(this, false);

    return this;
  }
}
