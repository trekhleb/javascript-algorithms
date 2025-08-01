class PriorityQueue {
  constructor() {
    this.values = [];
  }

  add(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  poll() {
    return this.values.shift().value;
  }

  isEmpty() {
    return this.values.length === 0;
  }

  hasValue(value) {
    return this.values.some((item) => item.value === value);
  }

  changePriority(value, newPriority) {
    for (let item of this.values) {
      if (item.value === value) {
        item.priority = newPriority;
        break;
      }
    }
    this.sort();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue();
  const visited = new Set();

  // Initialize distances
  for (let vertex in graph) {
    if (vertex === start) {
      distances[vertex] = 0;
      queue.add(vertex, 0);
    } else {
      distances[vertex] = Infinity;
    }
    previous[vertex] = null;
  }

  while (!queue.isEmpty()) {
    const currentVertex = queue.poll();

    // ✅ Skip already visited nodes (handles duplicates safely)
    if (visited.has(currentVertex)) continue;
    visited.add(currentVertex);

    for (let neighbor in graph[currentVertex]) {
      const distance = distances[currentVertex] + graph[currentVertex][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentVertex;

        if (!queue.hasValue(neighbor)) {
          queue.add(neighbor, distance);
        } else {
          queue.changePriority(neighbor, distance);
        }
      }
    }
  }

  return { distances, previous };
}

const graph = {
  A: { B: 1, C: 4 },
  B: { C: 2, D: 5 },
  C: { D: 1 },
  D: {}
};

const result = dijkstra(graph, "A");
console.log(result.distances); // { A: 0, B: 1, C: 3, D: 4 }
