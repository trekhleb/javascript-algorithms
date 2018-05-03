import GraphVertex from '../../../../data-structures/graph/GraphVertex';
import GraphEdge from '../../../../data-structures/graph/GraphEdge';
import Graph from '../../../../data-structures/graph/Graph';
import bellmanFord from '../bellmanFord';

describe('bellmanFord', () => {
  it('should find minimum paths to all vertices', () => {
    const vertexS = new GraphVertex('S');
    const vertexE = new GraphVertex('E');
    const vertexA = new GraphVertex('A');
    const vertexD = new GraphVertex('D');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexH = new GraphVertex('H');

    const edgeSE = new GraphEdge(vertexS, vertexE, 8);
    const edgeSA = new GraphEdge(vertexS, vertexA, 10);
    const edgeED = new GraphEdge(vertexE, vertexD, 1);
    const edgeDA = new GraphEdge(vertexD, vertexA, -4);
    const edgeDC = new GraphEdge(vertexD, vertexC, -1);
    const edgeAC = new GraphEdge(vertexA, vertexC, 2);
    const edgeCB = new GraphEdge(vertexC, vertexB, -2);
    const edgeBA = new GraphEdge(vertexB, vertexA, 1);

    const graph = new Graph(true);
    graph
      .addVertex(vertexH)
      .addEdge(edgeSE)
      .addEdge(edgeSA)
      .addEdge(edgeED)
      .addEdge(edgeDA)
      .addEdge(edgeDC)
      .addEdge(edgeAC)
      .addEdge(edgeCB)
      .addEdge(edgeBA);

    const { distances, previousVertices } = bellmanFord(graph, vertexS);

    expect(distances).toEqual({
      H: Infinity,
      S: 0,
      A: 5,
      B: 5,
      C: 7,
      D: 9,
      E: 8,
    });

    expect(previousVertices.H).toBeNull();
    expect(previousVertices.S).toBeNull();
    expect(previousVertices.B.getKey()).toBe('C');
    expect(previousVertices.C.getKey()).toBe('A');
    expect(previousVertices.A.getKey()).toBe('D');
    expect(previousVertices.D.getKey()).toBe('E');
  });
});
