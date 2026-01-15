/**
 * Dijkstra's Algorithm to find the shortest path in a weighted graph
 * @param {Object} graph - adjacency list representation of graph
 * @param {string} startVertex
 * @returns {Object} shortest distances from startVertex
 */
function dijkstra(graph, startVertex) {
    const distances = {};
    const visited = new Set();
    const queue = new PriorityQueue(); // use repo's priority queue if exists

    // initialize distances
    for (const vertex in graph) distances[vertex] = Infinity;
    distances[startVertex] = 0;
    queue.enqueue(startVertex, 0);

    while (!queue.isEmpty()) {
        const { element: currentVertex } = queue.dequeue();
        if (visited.has(currentVertex)) continue;
        visited.add(currentVertex);

        for (const neighbor of graph[currentVertex]) {
            const { vertex, weight } = neighbor;
            const newDist = distances[currentVertex] + weight;
            if (newDist < distances[vertex]) {
                distances[vertex] = newDist;
                queue.enqueue(vertex, newDist);
            }
        }
    }

    return distances;
}

// Export the algorithm
module.exports = dijkstra;
