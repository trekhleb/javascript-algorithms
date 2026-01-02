import Sort from '../Sort';

export default class QuickDeclarativeSort extends Sort {
  /**
   * @param {*[]} originalArray
   * @return {*[]}
   */
  sort(originalArray) {
    if (originalArray.length < 1) {
      return originalArray;
    }
    const array = [...originalArray];
    const currentElement = array.shift();

    this.callbacks.visitingCallback(currentElement);

    return [
      ...this.sort(array.filter(element => this.comparator.lessThan(element, currentElement))),
      currentElement,
      ...this.sort(array.filter(element => !this.comparator.lessThan(element, currentElement))),
    ];
  }
}
