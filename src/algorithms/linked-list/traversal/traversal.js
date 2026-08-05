/**
 * Traversal callback function.
 * @callback traversalCallback
 * @param {*} nodeValue
 */

/**
 * @param {LinkedList} linkedList
 * @param {traversalCallback} callback
 */
export default function traversal(linkedList, callback) {
  const iterator = linkedList.getIterator();

  for (const nodeValue of iterator) {
    callback(nodeValue);
  }
}
