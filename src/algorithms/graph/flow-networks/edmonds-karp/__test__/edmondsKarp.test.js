import GraphVertex from '../../../../../data-structures/graph/GraphVertex';
import GraphEdge from '../../../../../data-structures/graph/GraphEdge';
import Graph from '../../../../../data-structures/graph/Graph';
import edmondsKarp from '../edmondsKarp';

describe('edmondsKarp', () => {
  it('should solve the maximum flow problem', () => {
    const capacities = {
      S_A: 3, S_B: 3, A_B: 4, A_D: 3, B_C: 5, B_D: 3, C_T: 2, D_T: 4,
    };

    const vertexS = new GraphVertex('S');
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexT = new GraphVertex('T');

    const edgeSA = new GraphEdge(vertexS, vertexA, 0);
    const edgeSB = new GraphEdge(vertexS, vertexB, 0);

    const edgeAB = new GraphEdge(vertexA, vertexB, 0);
    const edgeAD = new GraphEdge(vertexA, vertexD, 0);
    const edgeBC = new GraphEdge(vertexB, vertexC, 0);
    const edgeBD = new GraphEdge(vertexB, vertexD, 0);

    const edgeCT = new GraphEdge(vertexC, vertexT, 0);
    const edgeDT = new GraphEdge(vertexD, vertexT, 0);

    const graph = new Graph(true);
    graph
      .addEdge(edgeSA)
      .addEdge(edgeSB)
      .addEdge(edgeAB)
      .addEdge(edgeAD)
      .addEdge(edgeBC)
      .addEdge(edgeBD)
      .addEdge(edgeCT)
      .addEdge(edgeDT);

    // COMPUTE edmondsKarp
    const edmondsKarpObj = edmondsKarp(graph, vertexS, vertexT, capacities);
    // max flow is 6 as expected

    expect(edmondsKarpObj.maxflow).toEqual(6);

    // flow through the network is as expected
    const flowThroughEachEdge = {};
    const expectedFlow = {
      S_A: 3, S_B: 3, A_B: 0, A_D: 3, B_C: 2, B_D: 1, C_T: 2, D_T: 4,
    };
    edmondsKarpObj.graph.getAllEdges().forEach((e) => {
      flowThroughEachEdge[e.getKey()] = e.weight;
    });

    expect(JSON.stringify(flowThroughEachEdge)).toBe(JSON.stringify(expectedFlow));
  });
});
