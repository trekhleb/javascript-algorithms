import GraphVertex from '../../../../data-structures/graph/GraphVertex';
import GraphEdge from '../../../../data-structures/graph/GraphEdge';
import Graph from '../../../../data-structures/graph/Graph';
import floydWarshall from '../floydWarshall';

describe('floydWarshall', () => {
  it('should find minimum paths to all vertices for undirected graph', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');
    const vertexF = new GraphVertex('F');
    const vertexG = new GraphVertex('G');
    const vertexH = new GraphVertex('H');

    const edgeAB = new GraphEdge(vertexA, vertexB, 4);
    const edgeAE = new GraphEdge(vertexA, vertexE, 7);
    const edgeAC = new GraphEdge(vertexA, vertexC, 3);
    const edgeBC = new GraphEdge(vertexB, vertexC, 6);
    const edgeBD = new GraphEdge(vertexB, vertexD, 5);
    const edgeEC = new GraphEdge(vertexE, vertexC, 8);
    const edgeED = new GraphEdge(vertexE, vertexD, 2);
    const edgeDC = new GraphEdge(vertexD, vertexC, 11);
    const edgeDG = new GraphEdge(vertexD, vertexG, 10);
    const edgeDF = new GraphEdge(vertexD, vertexF, 2);
    const edgeFG = new GraphEdge(vertexF, vertexG, 3);
    const edgeEG = new GraphEdge(vertexE, vertexG, 5);

    const graph = new Graph();
    graph
      .addVertex(vertexH)
      .addEdge(edgeAB)
      .addEdge(edgeAE)
      .addEdge(edgeAC)
      .addEdge(edgeBC)
      .addEdge(edgeBD)
      .addEdge(edgeEC)
      .addEdge(edgeED)
      .addEdge(edgeDC)
      .addEdge(edgeDG)
      .addEdge(edgeDF)
      .addEdge(edgeFG)
      .addEdge(edgeEG);

    const { distances, previousVertices } = floydWarshall(graph);

    const vertices = graph.getAllVertices();
    const vertexAIndex = vertices.indexOf(vertexA);
    const vl = vertices.length;

    expect(distances[vertexAIndex][vertices.indexOf(vertexH)][vl]).toBe(Infinity);
    expect(distances[vertexAIndex][vertexAIndex][vl]).toBe(0);
    expect(distances[vertexAIndex][vertices.indexOf(vertexB)][vl]).toBe(4);
    expect(distances[vertexAIndex][vertices.indexOf(vertexE)][vl]).toBe(7);
    expect(distances[vertexAIndex][vertices.indexOf(vertexC)][vl]).toBe(3);
    expect(distances[vertexAIndex][vertices.indexOf(vertexD)][vl]).toBe(9);
    expect(distances[vertexAIndex][vertices.indexOf(vertexG)][vl]).toBe(12);
    expect(distances[vertexAIndex][vertices.indexOf(vertexF)][vl]).toBe(11);

    expect(previousVertices[vertexAIndex][vertices.indexOf(vertexF)][vl]).toBe(vertexD);
    expect(previousVertices[vertexAIndex][vertices.indexOf(vertexD)][vl]).toBe(vertexB);
    expect(previousVertices[vertexAIndex][vertices.indexOf(vertexB)][vl]).toBe(vertexA);
    expect(previousVertices[vertexAIndex][vertices.indexOf(vertexG)][vl]).toBe(vertexE);
    expect(previousVertices[vertexAIndex][vertices.indexOf(vertexC)][vl]).toBe(vertexA);
    expect(previousVertices[vertexAIndex][vertexAIndex][vl]).toBe(null);
    expect(previousVertices[vertexAIndex][vertices.indexOf(vertexH)][vl]).toBe(null);
  });

  it('should find minimum paths to all vertices for directed graph with negative edge weights', () => {
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

    const { distances, previousVertices } = floydWarshall(graph);

    const vertices = graph.getAllVertices();
    const vertexSIndex = vertices.indexOf(vertexS);
    const vl = vertices.length;

    expect(distances[vertexSIndex][vertices.indexOf(vertexH)][vl]).toBe(Infinity);
    expect(distances[vertexSIndex][vertexSIndex][vl]).toBe(0);
    expect(distances[vertexSIndex][vertices.indexOf(vertexA)][vl]).toBe(5);
    expect(distances[vertexSIndex][vertices.indexOf(vertexB)][vl]).toBe(5);
    expect(distances[vertexSIndex][vertices.indexOf(vertexC)][vl]).toBe(7);
    expect(distances[vertexSIndex][vertices.indexOf(vertexD)][vl]).toBe(9);
    expect(distances[vertexSIndex][vertices.indexOf(vertexE)][vl]).toBe(8);

    expect(previousVertices[vertexSIndex][vertices.indexOf(vertexH)][vl]).toBe(null);
    expect(previousVertices[vertexSIndex][vertexSIndex][vl]).toBe(null);
    expect(previousVertices[vertexSIndex][vertices.indexOf(vertexB)][vl]).toBe(vertexC);
    expect(previousVertices[vertexSIndex][vertices.indexOf(vertexC)][vl]).toBe(vertexA);
    expect(previousVertices[vertexSIndex][vertices.indexOf(vertexA)][vl]).toBe(vertexD);
    expect(previousVertices[vertexSIndex][vertices.indexOf(vertexD)][vl]).toBe(vertexE);
  });
});
