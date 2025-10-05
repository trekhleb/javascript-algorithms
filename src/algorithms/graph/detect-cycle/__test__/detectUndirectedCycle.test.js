import GraphVertex from '../../../../data-structures/graph/GraphVertex';
import GraphEdge from '../../../../data-structures/graph/GraphEdge';
import Graph from '../../../../data-structures/graph/Graph';
import detectUndirectedCycle from '../detectUndirectedCycle';

describe('detectUndirectedCycle', () => {
  it('should detect undirected cycle', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');
    const vertexF = new GraphVertex('F');

    const edgeAF = new GraphEdge(vertexA, vertexF);
    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBE = new GraphEdge(vertexB, vertexE);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCD = new GraphEdge(vertexC, vertexD);
    const edgeDE = new GraphEdge(vertexD, vertexE);

    const graph = new Graph();
    graph
      .addEdge(edgeAF)
      .addEdge(edgeAB)
      .addEdge(edgeBE)
      .addEdge(edgeBC)
      .addEdge(edgeCD);

    // no cycle yet
    expect(detectUndirectedCycle(graph)).toBeNull();

    // add the final edge that closes cycle B-C-D-E-B
    graph.addEdge(edgeDE);

    const cycle = detectUndirectedCycle(graph);

    // should return ordered array of vertices representing cycle (first === last)
    expect(Array.isArray(cycle)).toBe(true);
    expect(cycle.length).toBeGreaterThanOrEqual(3);
    expect(cycle[0].getKey()).toBe(cycle[cycle.length - 1].getKey());

    // Extract keys for easier assertions
    const keys = cycle.map((v) => v.getKey());

    // The expected cycle is B -> C -> D -> E -> B (but the returned cycle may be a rotation),
    // so accept any rotation of that sequence.
    const allowedRotations = [
      ['B', 'C', 'D', 'E', 'B'],
      ['C', 'D', 'E', 'B', 'C'],
      ['D', 'E', 'B', 'C', 'D'],
      ['E', 'B', 'C', 'D', 'E'],
    ];

    // Check that keys match one of the allowed rotations
    const matchesRotation = allowedRotations.some((rot) => {
      if (rot.length !== keys.length) return false;
      for (let i = 0; i < rot.length; i += 1) {
        if (rot[i] !== keys[i]) return false;
      }
      return true;
    });

    expect(matchesRotation).toBe(true);
  });
});
