# 크루스칼 알고리즘

크루스칼 알고리즘은 두 트리를 연결하는 최소 간선 가중치를 찾는 최소 신장 트리 알고리즘입니다.
각 단계에서 비용을 더하는 연결된 가중 그래프에 대한 최소 신장 트리를 찾기 때문에 그래프 이론에서의 그리디 알고리즘입니다. 즉, 트리의 모든 간선의 총 가중치가 최소화되는 모든 정점을 포함하는 트리를 형성하는 간선의 하위 집합을 찾습니다. 그래프가 연결되어 있지 않으면 최소 신장 포레스트(연결된 각 구성 요소의 최소 신장 트리)를 찾습니다.

![Kruskal Algorithm](https://upload.wikimedia.org/wikipedia/commons/5/5c/MST_kruskal_en.gif)

![Kruskal Demo](https://upload.wikimedia.org/wikipedia/commons/b/bb/KruskalDemo.gif)

유클리드 거리를 기반으로 한 크루스칼 알고리즘의 데모입니다.

## 최소 신장 트리

**최소 신장 트리(MST)** 또는 최소 가중치 신장 트리는 연결된 간선 가중치 무 방향 그래프의 간선의 하위 집합으로, 사이클 없이 가능한 최소 총 간선 가중치로 모든 정점을 연결합니다. 즉, 간선 가중치의 합이 가능한 작은 신장 트리입니다. 보다 일반적으로, 간선-가중치 비방향 그래프(꼭 연결되지는 않음)에는 연결된 구성 요소에 대한 최소 신장 트리의 결합인 최소 신장 포레스트(minimum spanning forest)가 있습니다.

![Minimum Spanning Tree](https://upload.wikimedia.org/wikipedia/commons/d/d2/Minimum_spanning_tree.svg)

평면 그래프와 해당 최소 신장 트리입니다. 각 간선은 가중치로 레이블이 지정되며, 이 값은 길이에 거의 비례합니다.

![Minimum Spanning Tree](https://upload.wikimedia.org/wikipedia/commons/c/c9/Multiple_minimum_spanning_trees.svg)

이 그림은 그래프에 최소 신장 트리가 두 개 이상 있을 수 있음을 보여 줍니다. 그림에서 그래프 아래의 두 트리는 주어진 그래프에서 최소 신장 트리가 될 수 있는 두 가지 경우입니다.

## 참조

- [Minimum Spanning Tree on Wikipedia](https://en.wikipedia.org/wiki/Minimum_spanning_tree)
- [Kruskal's Algorithm on Wikipedia](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm)
- [Kruskal's Algorithm on YouTube by Tushar Roy](https://www.youtube.com/watch?v=fAuF0EuZVCk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Kruskal's Algorithm on YouTube by Michael Sambol](https://www.youtube.com/watch?v=71UQH7Pr9kU&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
