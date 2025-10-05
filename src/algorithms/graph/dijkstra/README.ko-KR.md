# 다익스트라 알고리즘(Dijkstra's algorithm)

다익스트라 알고리즘은 도로 네트워크 등을 나타낼 수 있는 그래프에서 노드 간의 최단 경로를 찾는 알고리즘입니다.

이 알고리즘은 다양한 형태로 존재합니다. 다익스트라의 원래 형태는 두 노드 간의 최단 경로를 찾았지만, 더 일반적인 형태는 단일 노드를 "소스"노드로 수정하고 그래프의 소스에서 다른 모든 노드까지의 최단 경로를 찾아 최단 경로 트리(shortest-path tree)를 생성합니다.

![Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

`a`와 `b` 사이의 최단 경로를 찾는 다익스트라 알고리즘입니다.
가장 낮은 거리를 가지며 방문하지 않은 정점(vertex)를 선택하고, 이를 통해 방문하지 않은 각 이웃까지의 거리를 계산하며, 더 작은 경우 이웃의 거리를 업데이트합니다. 이웃에 대한 작업을 마치면 방문한 것으로 표시(빨간색으로 변경)합니다.

## 참조

- [Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [On YouTube by Nathaniel Fan](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [On YouTube by Tushar Roy](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
