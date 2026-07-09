const dijkstra = require('./dijkstra');

test('Dijkstra shortest path', () => {
    const graph = {
        A: [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
        B: [{ vertex: 'C', weight: 2 }, { vertex: 'D', weight: 5 }],
        C: [{ vertex: 'D', weight: 1 }],
        D: []
    };
    const result = dijkstra(graph, 'A');
    expect(result).toEqual({ A: 0, B: 1, C: 3, D: 4 });
});
