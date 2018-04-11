import Graph from '../../../../data-structures/graph/Graph';
import GraphVertex from '../../../../data-structures/graph/GraphVertex';
import GraphEdge from '../../../../data-structures/graph/GraphEdge';
import breadthFirstSearch from '../breadthFirstSearch';

describe('breadthFirstSearch', () => {
  it('should perform BFS operation on graph', () => {
    const graph = new Graph(true);

    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');
    const vertexF = new GraphVertex('F');
    const vertexG = new GraphVertex('G');
    const vertexH = new GraphVertex('H');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCG = new GraphEdge(vertexC, vertexG);
    const edgeAD = new GraphEdge(vertexA, vertexD);
    const edgeAE = new GraphEdge(vertexA, vertexE);
    const edgeEF = new GraphEdge(vertexE, vertexF);
    const edgeFD = new GraphEdge(vertexF, vertexD);
    const edgeDH = new GraphEdge(vertexD, vertexH);
    const edgeGH = new GraphEdge(vertexG, vertexH);

    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCG)
      .addEdge(edgeAD)
      .addEdge(edgeAE)
      .addEdge(edgeEF)
      .addEdge(edgeFD)
      .addEdge(edgeDH)
      .addEdge(edgeGH);

    expect(graph.toString()).toBe('A,B,C,G,D,E,F,H');

    const enterVertexCallback = jest.fn();
    const leaveVertexCallback = jest.fn();

    // Traverse graphs without callbacks first.
    breadthFirstSearch(graph, vertexA);

    // Traverse graph with enterVertex and leaveVertex callbacks.
    breadthFirstSearch(graph, vertexA, {
      enterVertex: enterVertexCallback,
      leaveVertex: leaveVertexCallback,
    });

    expect(enterVertexCallback).toHaveBeenCalledTimes(8);
    expect(leaveVertexCallback).toHaveBeenCalledTimes(8);

    expect(enterVertexCallback.mock.calls.toString()).toBe('A,B,D,E,C,H,F,G');
    expect(leaveVertexCallback.mock.calls.toString()).toBe('A,B,D,E,C,H,F,G');
  });

  it('should allow to create custom vertex visiting logic', () => {
    const graph = new Graph(true);

    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');
    const vertexF = new GraphVertex('F');
    const vertexG = new GraphVertex('G');
    const vertexH = new GraphVertex('H');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCG = new GraphEdge(vertexC, vertexG);
    const edgeAD = new GraphEdge(vertexA, vertexD);
    const edgeAE = new GraphEdge(vertexA, vertexE);
    const edgeEF = new GraphEdge(vertexE, vertexF);
    const edgeFD = new GraphEdge(vertexF, vertexD);
    const edgeDH = new GraphEdge(vertexD, vertexH);
    const edgeGH = new GraphEdge(vertexG, vertexH);

    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCG)
      .addEdge(edgeAD)
      .addEdge(edgeAE)
      .addEdge(edgeEF)
      .addEdge(edgeFD)
      .addEdge(edgeDH)
      .addEdge(edgeGH);

    expect(graph.toString()).toBe('A,B,C,G,D,E,F,H');

    const enterVertexCallback = jest.fn();
    const leaveVertexCallback = jest.fn();

    // Traverse graph with enterVertex and leaveVertex callbacks.
    breadthFirstSearch(graph, vertexA, {
      enterVertex: enterVertexCallback,
      leaveVertex: leaveVertexCallback,
      allowTraversal: (vertex, neighbor) => {
        return !(vertex === vertexA && neighbor === vertexB);
      },
    });

    expect(enterVertexCallback).toHaveBeenCalledTimes(7);
    expect(leaveVertexCallback).toHaveBeenCalledTimes(7);

    expect(enterVertexCallback.mock.calls.toString()).toBe('A,D,E,H,F,D,H');
    expect(leaveVertexCallback.mock.calls.toString()).toBe('A,D,E,H,F,D,H');
  });
});
