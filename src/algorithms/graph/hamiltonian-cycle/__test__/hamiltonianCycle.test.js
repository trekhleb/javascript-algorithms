import GraphVertex from '../../../../data-structures/graph/GraphVertex';
import GraphEdge from '../../../../data-structures/graph/GraphEdge';
import Graph from '../../../../data-structures/graph/Graph';
import hamiltonianCycle from '../hamiltonianCycle';

describe('hamiltonianCycle', () => {
  it('should find hamiltonian paths in graph', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAE = new GraphEdge(vertexA, vertexE);
    const edgeAC = new GraphEdge(vertexA, vertexC);
    const edgeBE = new GraphEdge(vertexB, vertexE);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeBD = new GraphEdge(vertexB, vertexD);
    const edgeCD = new GraphEdge(vertexC, vertexD);
    const edgeDE = new GraphEdge(vertexD, vertexE);

    const graph = new Graph();
    graph
      .addEdge(edgeAB)
      .addEdge(edgeAE)
      .addEdge(edgeAC)
      .addEdge(edgeBE)
      .addEdge(edgeBC)
      .addEdge(edgeBD)
      .addEdge(edgeCD)
      .addEdge(edgeDE);

    const hamiltonianCycleSet = hamiltonianCycle(graph);

    expect(hamiltonianCycleSet.length).toBe(8);

    expect(hamiltonianCycleSet[0][0].getKey()).toBe(vertexA.getKey());
    expect(hamiltonianCycleSet[0][1].getKey()).toBe(vertexB.getKey());
    expect(hamiltonianCycleSet[0][2].getKey()).toBe(vertexE.getKey());
    expect(hamiltonianCycleSet[0][3].getKey()).toBe(vertexD.getKey());
    expect(hamiltonianCycleSet[0][4].getKey()).toBe(vertexC.getKey());

    expect(hamiltonianCycleSet[1][0].getKey()).toBe(vertexA.getKey());
    expect(hamiltonianCycleSet[1][1].getKey()).toBe(vertexB.getKey());
    expect(hamiltonianCycleSet[1][2].getKey()).toBe(vertexC.getKey());
    expect(hamiltonianCycleSet[1][3].getKey()).toBe(vertexD.getKey());
    expect(hamiltonianCycleSet[1][4].getKey()).toBe(vertexE.getKey());

    expect(hamiltonianCycleSet[2][0].getKey()).toBe(vertexA.getKey());
    expect(hamiltonianCycleSet[2][1].getKey()).toBe(vertexE.getKey());
    expect(hamiltonianCycleSet[2][2].getKey()).toBe(vertexB.getKey());
    expect(hamiltonianCycleSet[2][3].getKey()).toBe(vertexD.getKey());
    expect(hamiltonianCycleSet[2][4].getKey()).toBe(vertexC.getKey());

    expect(hamiltonianCycleSet[3][0].getKey()).toBe(vertexA.getKey());
    expect(hamiltonianCycleSet[3][1].getKey()).toBe(vertexE.getKey());
    expect(hamiltonianCycleSet[3][2].getKey()).toBe(vertexD.getKey());
    expect(hamiltonianCycleSet[3][3].getKey()).toBe(vertexB.getKey());
    expect(hamiltonianCycleSet[3][4].getKey()).toBe(vertexC.getKey());
  });

  it('should return false for graph without Hamiltonian path', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAE = new GraphEdge(vertexA, vertexE);
    const edgeBE = new GraphEdge(vertexB, vertexE);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeBD = new GraphEdge(vertexB, vertexD);
    const edgeCD = new GraphEdge(vertexC, vertexD);

    const graph = new Graph();
    graph
      .addEdge(edgeAB)
      .addEdge(edgeAE)
      .addEdge(edgeBE)
      .addEdge(edgeBC)
      .addEdge(edgeBD)
      .addEdge(edgeCD);

    const hamiltonianCycleSet = hamiltonianCycle(graph);

    expect(hamiltonianCycleSet.length).toBe(0);
  });
});
