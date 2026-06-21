/**
 * Breadth-First Search (BFS) for a graph
 * @param {Object} graph - adjacency list
 * @param {string} startVertex - starting node
 * @returns {Array} order of visited vertices
 */
function bfs(graph, startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const order = [];

    while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
            visited.add(vertex);
            order.push(vertex);
            for (const neighbor of graph[vertex]) {
                queue.push(neighbor.vertex || neighbor); // support weighted/unweighted
            }
        }
    }

    return order;
}

module.exports = bfs;
