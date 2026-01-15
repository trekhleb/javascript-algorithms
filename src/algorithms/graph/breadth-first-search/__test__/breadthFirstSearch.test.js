const bfs = require('./bfs');

test('BFS visits nodes in correct order', () => {
    const graph = {
        A: ['B', 'C'],
        B: ['D', 'E'],
        C: ['F'],
        D: [],
        E: [],
        F: []
    };
    const result = bfs(graph, 'A');
    expect(result).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
});
