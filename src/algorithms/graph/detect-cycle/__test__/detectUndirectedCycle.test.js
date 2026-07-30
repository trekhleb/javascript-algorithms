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

    expect(detectUndirectedCycle(graph)).toBeNull();

    graph.addEdge(edgeDE);

    expect(detectUndirectedCycle(graph)).toEqual({
      B: vertexC,
      C: vertexD,
      D: vertexE,
      E: vertexB,
    });
  });

  it('should detect cycle that is hidden in the second graph component', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');

    // First component "A - B" has no cycles.
    const edgeAB = new GraphEdge(vertexA, vertexB);

    // Second component "C - D - E - C" forms a cycle.
    const edgeCD = new GraphEdge(vertexC, vertexD);
    const edgeDE = new GraphEdge(vertexD, vertexE);
    const edgeEC = new GraphEdge(vertexE, vertexC);

    const graph = new Graph();
    graph
      .addEdge(edgeAB)
      .addEdge(edgeCD)
      .addEdge(edgeDE)
      .addEdge(edgeEC);

    expect(detectUndirectedCycle(graph)).toEqual({
      C: vertexE,
      E: vertexD,
      D: vertexC,
    });
  });
});
