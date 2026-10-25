import GraphVertex from '../../../../data-structures/graph/GraphVertex';
import GraphEdge from '../../../../data-structures/graph/GraphEdge';
import Graph from '../../../../data-structures/graph/Graph';
import bfTravellingSalesman from '../bfTravellingSalesman';

describe('bfTravellingSalesman', () => {
  it('should solve problem for simple graph', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');

    const edgeAB = new GraphEdge(vertexA, vertexB, 1);
    const edgeBD = new GraphEdge(vertexB, vertexD, 1);
    const edgeDC = new GraphEdge(vertexD, vertexC, 1);
    const edgeCA = new GraphEdge(vertexC, vertexA, 1);

    const edgeBA = new GraphEdge(vertexB, vertexA, 5);
    const edgeDB = new GraphEdge(vertexD, vertexB, 8);
    const edgeCD = new GraphEdge(vertexC, vertexD, 7);
    const edgeAC = new GraphEdge(vertexA, vertexC, 4);
    const edgeAD = new GraphEdge(vertexA, vertexD, 2);
    const edgeDA = new GraphEdge(vertexD, vertexA, 3);
    const edgeBC = new GraphEdge(vertexB, vertexC, 3);
    const edgeCB = new GraphEdge(vertexC, vertexB, 9);

    const graph = new Graph(true);
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBD)
      .addEdge(edgeDC)
      .addEdge(edgeCA)
      .addEdge(edgeBA)
      .addEdge(edgeDB)
      .addEdge(edgeCD)
      .addEdge(edgeAC)
      .addEdge(edgeAD)
      .addEdge(edgeDA)
      .addEdge(edgeBC)
      .addEdge(edgeCB);

    const salesmanPath = bfTravellingSalesman(graph);

    expect(salesmanPath.length).toBe(4);

    expect(salesmanPath[0].getKey()).toEqual(vertexA.getKey());
    expect(salesmanPath[1].getKey()).toEqual(vertexB.getKey());
    expect(salesmanPath[2].getKey()).toEqual(vertexD.getKey());
    expect(salesmanPath[3].getKey()).toEqual(vertexC.getKey());
  });

  it('should take the weight of the closing edge into account', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');

    const edgeAB = new GraphEdge(vertexA, vertexB, 1);
    const edgeBC = new GraphEdge(vertexB, vertexC, 1);
    const edgeCD = new GraphEdge(vertexC, vertexD, 1);
    const edgeDA = new GraphEdge(vertexD, vertexA, 100);
    const edgeAC = new GraphEdge(vertexA, vertexC, 2);
    const edgeBD = new GraphEdge(vertexB, vertexD, 2);

    const graph = new Graph();
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeDA)
      .addEdge(edgeAC)
      .addEdge(edgeBD);

    const salesmanPath = bfTravellingSalesman(graph);

    // The tour must visit all four vertices exactly once.
    expect(salesmanPath.length).toBe(4);
    expect(
      salesmanPath.map((vertex) => vertex.getKey()).sort(),
    ).toEqual(['A', 'B', 'C', 'D']);

    // Calculate the weight of the whole tour including the closing edge that
    // leads from the last tour vertex back to the first one. The optimal tour
    // here is "A - B - D - C - A" (or its rotation/reflection) of weight 6.
    // The tour "A - B - C - D - A" of weight 103 must not be chosen even
    // though its path weight without the closing edge is smaller.
    let tourWeight = 0;
    for (let vertexIndex = 0; vertexIndex < salesmanPath.length; vertexIndex += 1) {
      const fromVertex = salesmanPath[vertexIndex];
      const toVertex = salesmanPath[(vertexIndex + 1) % salesmanPath.length];
      tourWeight += graph.findEdge(fromVertex, toVertex).weight;
    }

    expect(tourWeight).toBe(6);
  });

  it('should return an empty path if graph has no Hamiltonian cycle', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');

    // Triangle "A - B - C" with pendant vertex D. There is no way to visit
    // all four vertices exactly once and get back to the start vertex.
    const edgeAB = new GraphEdge(vertexA, vertexB, 1);
    const edgeBC = new GraphEdge(vertexB, vertexC, 1);
    const edgeCA = new GraphEdge(vertexC, vertexA, 1);
    const edgeCD = new GraphEdge(vertexC, vertexD, 1);

    const graph = new Graph();
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCA)
      .addEdge(edgeCD);

    expect(bfTravellingSalesman(graph)).toEqual([]);
  });
});
