import Queue from '../../../data-structures/queue/Queue';

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
 * @param {GraphVertex} startVertex
 * @param {Callbacks} [rawCallbacks]
 */
export default function breadthFirstSearch(graph, startVertex, rawCallbacks) {
  const callbacks = initCallbacks(rawCallbacks);
  const vertexQueue = new Queue();

  // Do initial queue setup.
  vertexQueue.enqueue(startVertex);

  // Traverse all vertices from the queue.
  while (!vertexQueue.isEmpty()) {
    const currentVertex = vertexQueue.dequeue();
    callbacks.enterVertex(currentVertex);

    // Add all neighbors to the queue for future traversals.
    graph.getNeighbors(currentVertex).forEach((neighbor) => {
      if (callbacks.allowTraversal(currentVertex, neighbor)) {
        vertexQueue.enqueue(neighbor);
      }
    });

    callbacks.leaveVertex(currentVertex);
  }
}
