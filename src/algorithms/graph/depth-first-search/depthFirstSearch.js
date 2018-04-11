/**
 * @typedef {Object} Callbacks
 * @property {function(vertex: GraphVertex, neighbor: GraphVertex): boolean} allowTraversal -
 *   Determines whether DFS should traverse from the vertex to its neighbor
 *   (along the edge). By default prohibits visiting the same vertex again.
 * @property {function(vertex: GraphVertex)} enterVertex - Called when DFS enters the vertex.
 * @property {function(vertex: GraphVertex)} leaveVertex - Called when DFS leaves the vertex.
 */

/**
 * @param {Callbacks} [callbacks]
 * @returns {Callbacks}
 */
function initCallbacks(callbacks = {}) {
  const initiatedCallback = callbacks;

  const stubCallback = () => {};

  const allowTraversalCallback = (
    () => {
      const seen = {};
      return (vertex, neighbor) => {
        if (!seen[neighbor.getKey()]) {
          seen[neighbor.getKey()] = true;
          return true;
        }
        return false;
      };
    }
  )();

  initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversalCallback;
  initiatedCallback.enterVertex = callbacks.enterVertex || stubCallback;
  initiatedCallback.leaveVertex = callbacks.leaveVertex || stubCallback;

  return initiatedCallback;
}

/**
 * @param {Graph} graph
 * @param {GraphVertex} vertex
 * @param {Callbacks} callbacks
 */
function depthFirstSearchRecursive(graph, vertex, callbacks) {
  callbacks.enterVertex(vertex);

  graph.getNeighbors(vertex).forEach((neighbor) => {
    if (callbacks.allowTraversal(vertex, neighbor)) {
      depthFirstSearchRecursive(graph, neighbor, callbacks);
    }
  });

  callbacks.leaveVertex(vertex);
}

/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @param {Callbacks} [callbacks]
 */
export default function depthFirstSearch(graph, startVertex, callbacks) {
  depthFirstSearchRecursive(graph, startVertex, initCallbacks(callbacks));
}
