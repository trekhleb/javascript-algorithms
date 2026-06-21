import GraphVertex from '../../../../data-structures/graph/GraphVertex';
import GraphEdge from '../../../../data-structures/graph/GraphEdge';
import Graph from '../../../../data-structures/graph/Graph';
import breadthFirstSearch from '../../breadth-first-search/breadthFirstSearch';
import Queue from '../../../../data-structures/queue/Queue';

/**
 * Edmonds-Karp implementation
 *
 * @param {Graph} graph
 * @param {GraphVertex} source
 * @param {GraphVertex} sink
 * @param {object} capacities
 * @return {object}
 *
 * NB: capacities is a mapping from: GraphEdge.getKey() to number
 *   & return is {graph:graph,maxflow:f} of types {Graph, Number}
 *
 */
export default function edmondsKarp(graph, source, sink, capacities) {
  // variable to hold the max flow
  // f gets incremented in 'augment(path)'
  let f = 0;

  // variable to hold the flow network
  // the weights of the edges of g are the flow on those edges
  const g = graph;

  // set capacities where not defined to be infinity
  const cs = capacities;
  g.getAllEdges().forEach((edge) => {
    if (!(edge.getKey() in capacities)) cs[edge.getKey()] = Number.POSITIVE_INFINITY;
  });

  // the network flow is defined as the weights of g
  // assert the edges have 0 weight initally so that flow can be set to 0
  g.getAllEdges().forEach((edge) => {
    if (edge.weight !== 0) throw Error('ASSERT: the edges of g should have 0 weight – the edges represent the flow – FordFulkerson asserts 0 inital flow in network');
  });

  // initialise residual graph
  // build is done in function buildResidualGraph
  let residualGraph;

  // FLOW HELPER functions
  const getFlow = (edgeKey) => g.edges[edgeKey].weight;
  const updateFlow = (edgeKey, value) => { g.edges[edgeKey].weight += value; };

  // RESIDUAL CAPACITY HELPER function
  const getResidualCapacity = (edgeKey) => residualGraph.edges[edgeKey].weight;

  // FUNCTION for building Residual Graph
  // -> And hence determining residual capacities
  function buildResidualGraph() {
    // the weights of the residualGraph are the residual capacities
    residualGraph = new Graph(true);
    // add to the residualGraph all the vertices in g
    Object.keys(g.getVerticesIndices()).forEach((key) => {
      residualGraph.addVertex(new GraphVertex(key));
    });

    // compute residual capacities and assign as weights to residualGraph
    g.getAllEdges().forEach((edge) => {
      // edge is an edge in g
      // get edgeKey for extracting edge capacity from capacities
      const edgeKey = edge.getKey();

      // get the residualGraph start and end vertices (from edge in g)
      const startVertex = residualGraph.getVertexByKey(edge.startVertex.getKey());
      const endVertex = residualGraph.getVertexByKey(edge.endVertex.getKey());

      // if the flow is less than the capacity:
      if (getFlow(edgeKey) < cs[edgeKey]) {
        // compute the residual capacity
        const capMinusFlow = cs[edgeKey] - getFlow(edgeKey);
        // add a forward edge to residualGraph of the difference (cap-flow)
        // -> because (cap-flow) units of flow can still be pushed down the edge
        residualGraph.addEdge(new GraphEdge(startVertex, endVertex, capMinusFlow));
      }
      // if the flow is non zero
      if (getFlow(edgeKey) > 0) {
        // add a backwards edge to residualGraph with weight of flow
        // -> so that all of the flow along edge can be undone
        residualGraph.addEdge(new GraphEdge(endVertex, startVertex, getFlow(edgeKey)));
      }
    });
    // return residualGraph;
  }

  /**
   * Augment: augments the flow network given a path of edges in residualGraph
   * @param {GraphEdge[]} edgePath
   *
   * Considers the path in ResidualCap
   */
  function augment(edgePath) {
    // compute the bottleneck capacity of the path in residualGraph
    let bottleneck = Number.POSITIVE_INFINITY;
    edgePath.forEach((edge) => {
      // get the residual capacity of an edge
      const resCap = getResidualCapacity(edge.getKey());
      // if the residual capacity is less than bottleneck than set bottleneck
      if (resCap < bottleneck) bottleneck = resCap;
    });

    edgePath.forEach((edgeResidualGraph) => {
      // get the vertices in g corresponding to the edge in residualGraph
      const startVertex = g.getVertexByKey(edgeResidualGraph.startVertex.getKey());
      const endVertex = g.getVertexByKey(edgeResidualGraph.endVertex.getKey());

      // if it contains a forward edge, update the flow by adding bottleneck
      const forwardEdge = g.findEdge(startVertex, endVertex);
      if (forwardEdge !== null) updateFlow(forwardEdge.getKey(), bottleneck);

      // if it contains a backward edge, update the flow by adding -bottleneck
      const backwardEdge = g.findEdge(endVertex, startVertex);
      if (backwardEdge !== null) updateFlow(backwardEdge.getKey(), -bottleneck);
    });
    // increase the value of flow by bottleneck
    f += bottleneck;
  }

  // intialise the variable augmentingPath
  let augmentingPath;

  /**
   * findAugmentingPath: finds an augmenting path in residualGraph
   * Uses BFS to determine the path (Edmonds-Karp specification)
   */
  function findAugmentingPath() {
    // intialise augmentingPath
    augmentingPath = [];
    // get the source and sink keys
    const s = source.getKey();
    const t = sink.getKey();
    // initialise a queue of vertices visited
    const vertexPathQ = new Queue();
    vertexPathQ.enqueue([s]);
    // initialise the currentPath array and seen object
    let currentPath = [];
    const seen = {};
    // initialise variable found – has sink been found
    let found = false;
    // Specify BFS traversal callbacks.
    const bfsCallbacks = {
      enterVertex: () => {
        // on entering vertex dequeue from vertex queue
        currentPath = vertexPathQ.dequeue();
      },
      allowTraversal: ({ nextVertex }) => {
        // if sink has been found
        if (found) return false;
        // if the next vertex has been seen stop traversing branch
        if (seen[nextVertex.getKey()]) return false;
        // otherwise add next vertex to the seen object (if it is not sink)
        if (nextVertex.getKey() !== t) seen[nextVertex.getKey()] = true;
        // compute thisPath from currentPath and nextVertex
        const thisPath = [];
        currentPath.forEach((v) => thisPath.push(v));
        thisPath.push(nextVertex.getKey());
        // enqueue thisPath to vertexPathQ
        vertexPathQ.enqueue(thisPath);
        // if nextVertex is the sink then found is true
        if (nextVertex.getKey() === t) found = true;
        // continue traversal if not found
        return !found;
      },
    };

    // perform breadth first search to find a vertex path from s to t
    breadthFirstSearch(residualGraph, residualGraph.getVertexByKey(s), bfsCallbacks);

    // the search path is the next of vertexPathQ to dequeue
    const vertexPath = vertexPathQ.dequeue();
    // check that vertexPath exists and ends with the sink
    if (vertexPath !== null && vertexPath[vertexPath.length - 1] === t) {
      // reset augmentingPath
      augmentingPath = [];

      for (let i = 0; i < vertexPath.length - 1; i += 1) {
        // get the start and end vertices for next edge in path in residualGraph
        const startVertex = residualGraph.getVertexByKey(vertexPath[i]);
        const endVertex = residualGraph.getVertexByKey(vertexPath[i + 1]);
        // find the edge in residualGraph
        const edge = residualGraph.findEdge(startVertex, endVertex);
        // add the edge to the augmentingPath
        augmentingPath.push(edge);
      }

      // an augmenting path has been found so return true
      return true;
    }

    // otherwise no augmenting path found so return false
    return false;
  }

  /// --- MAIN EXECUTION LOOP ---

  // build an inital residual graph
  buildResidualGraph();

  // while there is still an augmenting path in residualGraph
  while (findAugmentingPath()) {
    // augment the flow network along that graph
    augment(augmentingPath);
    // then build the updated residual graph
    buildResidualGraph();
  }
  // g is the final graph with flow values as weights on the edges.
  // f is the max flow.
  return { graph: g, maxflow: f };
}
