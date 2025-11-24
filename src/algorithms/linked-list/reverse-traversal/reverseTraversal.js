/**
 * Traversal callback function.
 * @callback traversalCallback
 * @param {*} nodeValue
 */

/**
 * @param {LinkedListNode} node
 * @param {traversalCallback} callback
 */
function reverseTraversalRecursive(node, callback) {
  if (node) {
    reverseTraversalRecursive(node.next, callback);
    callback(node.value);
  }
}

/**
 * @param {LinkedList} linkedList
 * @param {traversalCallback} callback
 */
export default function reverseTraversal(linkedList, callback) {
  // Check if the callback function is provided and is a function
  if (!callback || typeof callback !== 'function') {
    throw new Error('Callback function is required for reverseTraversal');
  }

  //  Check if the linked list is empty
  if (!linkedList || !linkedList.head) {
    throw new Error('Cannot reverse traverse an empty linked list');
  }

  reverseTraversalRecursive(linkedList.head, callback);
}
