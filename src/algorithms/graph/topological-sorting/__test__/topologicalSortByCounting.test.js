import GraphVertex from '../../../../data-structures/graph/GraphVertex';
import GraphEdge from '../../../../data-structures/graph/GraphEdge';
import Graph from '../../../../data-structures/graph/Graph';
import topologicalSort from '../topologicalSortByCounting';

describe('topologicalSortByCounting', () => {
  it('should do topological sorting on graph', () => {
    const vertexNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    const edges = [
      { start: 'A', end: 'C' },
      { start: 'A', end: 'G' },
      { start: 'A', end: 'I' },
      { start: 'B', end: 'C' },
      { start: 'B', end: 'D' },
      { start: 'C', end: 'E' },
      { start: 'D', end: 'F' },
      { start: 'E', end: 'F' },
      { start: 'E', end: 'H' },
      { start: 'F', end: 'G' },
    ];
    const nameToVertex = {};
    const graph = new Graph(true);

    vertexNames.forEach((name) => {
      const vertex = new GraphVertex(name);
      nameToVertex[name] = vertex;
    });
    edges.forEach((edge) => {
      const startVertex = nameToVertex[edge.start];
      const endVertex = nameToVertex[edge.end];

      graph.addEdge(new GraphEdge(startVertex, endVertex));
    });

    const sortedVertices = topologicalSort(graph);

    expect(sortedVertices).toBeDefined();
    expect(sortedVertices.length).toBe(graph.getAllVertices().length);
    graph.getAllEdges().forEach((edge) => {
      expect(sortedVertices.indexOf(edge.startVertex))
        .toBeLessThan(sortedVertices.indexOf(edge.endVertex));
    });
  });
});
