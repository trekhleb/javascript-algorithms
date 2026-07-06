# 다익스트라 알고리즘 (Dijkstra's Algorithm)

_다른 언어로 읽기:_
[_English_](README.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_Українська_](README.uk-UA.md),
[_Español_](README.es-ES.md),
[_Français_](README.fr-FR.md),
[_Deutsch_](README.de-DE.md),
[_עברית_](README.he-IL.md)

다익스트라 알고리즘은 그래프의 노드 간 최단 경로를 찾는 알고리즘으로, 예를 들어 도로망을 표현할 수 있습니다.

이 알고리즘에는 여러 변형이 있습니다. 다익스트라의 원래 알고리즘은 두 노드 간의 최단 경로를 찾았지만, 더 일반적인 변형은 하나의 노드를 "출발점(source)"으로 고정하고 그 노드로부터 다른 모든 노드까지의 최단 경로를 찾습니다. 이 과정을 통해 최단 경로 트리(shortest-path tree)가 만들어집니다.

![Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

다익스트라 알고리즘은 `a`에서 `b`로 가는 최단 경로를 찾습니다.
아직 방문하지 않은 노드 중 가장 짧은 거리를 가진 노드를 선택하고,
그 노드를 통해 이웃 노드로 가는 거리를 계산하여
더 짧은 경로가 있으면 업데이트합니다.
모든 이웃을 확인하면 해당 노드를 방문 완료(빨간색으로 표시)로 처리합니다.

## 다익스트라 알고리즘의 실제 활용 사례

- GPS / 내비게이션 시스템
- 대중교통 및 항공 노선 최적화
- 인터넷 라우팅 (OSPF, IS-IS 프로토콜)
- 네트워크 트래픽 및 지연 시간 최적화
- 게임에서의 경로 탐색 (지도상의 최단 경로)
- 물류 및 배송 경로 최적화
- 공급망 및 교통 네트워크 설계

## 단계별 다익스트라 알고리즘 예제

가중치가 있는 그래프가 있다고 가정합시다. 각 간선에는 노드 간의 거리 값이 있습니다. 예를 들어, 노드 `A`와 `B` 사이의 거리가 `7m`라고 하겠습니다.

이 알고리즘은 항상 출발 노드로부터 가장 짧은 거리를 가진 방문하지 않은 노드를 꺼내기 위해 [우선순위 큐](../../../data-structures/priority-queue/)를 사용합니다.

출발 노드는 자기 자신으로부터의 거리가 `0m`이므로, 우선순위 큐에는 처음에 이 노드만 포함되어 있습니다.

다른 노드들은 그래프 탐색 중(이웃 노드를 방문할 때) 나중에 우선순위 큐에 추가됩니다.

![Dijkstra step 1](./images/dijkstra-01.png)

큐에서 꺼낸 노드의 각 이웃을 순회하면서 출발 노드로부터의 거리를 계산합니다.
예를 들어, `A`에서 `B`까지의 거리는 `0m + 7m = 7m`입니다.

아직 방문하지 않은 이웃을 처음 방문하면, 출발 노드로부터의 거리를 우선순위로 하여 우선순위 큐에 추가합니다.

`B` 노드는 나중에 탐색하기 위해 최소 우선순위 큐에 추가됩니다.

![Dijkstra step 2](./images/dijkstra-02.png)

다음으로 `A`의 또 다른 이웃 `C`를 방문합니다.
출발 노드 `A`에서 `C`까지의 거리는 `0m + 9m = 9m`입니다.

`C` 노드는 이후 탐색을 위해 우선순위 큐에 추가됩니다.

![Dijkstra step 3](./images/dijkstra-03.png)

`F` 노드도 동일합니다.
`A`에서 `F`까지의 거리는 `0m + 14m = 14m`입니다.

`F` 노드는 나중에 탐색하기 위해 우선순위 큐에 추가됩니다.

![Dijkstra step 4](./images/dijkstra-04.png)

현재 노드의 모든 이웃을 확인한 후에는 이 노드를 `visited` 집합에 추가합니다.
이후에는 이 노드를 다시 방문하지 않습니다.

이제 큐에서 출발점으로부터 가장 가까운 노드를 꺼내 그 이웃들을 방문합니다.

![Dijkstra step 5](./images/dijkstra-05.png)

방문하려는 노드(`C`)가 이미 큐에 있다면, 이전에 다른 경로(`A → C`)를 통해 계산된 거리 정보가 있다는 뜻입니다.
만약 현재 경로(`A → B → C`)를 통한 거리가 이전 거리보다 짧으면, 큐의 값을 업데이트합니다.
그렇지 않으면 변경하지 않습니다.

예를 들어 `B`를 통해 `C`를 방문할 때(`A → B → C`), 거리는 `7m + 10m = 17m`입니다.
이는 이미 기록된 거리 `9m`보다 길기 때문에 업데이트하지 않습니다.

![Dijkstra step 6](./images/dijkstra-06.png)

`B`의 또 다른 이웃인 `D`를 방문합니다.
`D`까지의 거리는 `7m + 15m = 22m`입니다.
아직 방문하지 않았고 큐에도 없으므로, 우선순위 `22m`으로 큐에 추가합니다.

![Dijkstra step 7](./images/dijkstra-07.png)

이 시점에서 `B`의 모든 이웃을 방문했으므로, `B`를 `visited` 집합에 추가합니다.
이제 큐에서 출발점에 가장 가까운 노드를 꺼냅니다.

![Dijkstra step 8](./images/dijkstra-08.png)

`C`의 방문하지 않은 이웃들을 탐색합니다.
`C`를 통해 `F`로 가는 경로(`A → C → F`)의 거리는 `9m + 2m = 11m`입니다.
이는 기존의 `A → F` 거리 `14m`보다 짧습니다.
따라서 `F`의 거리를 `11m`로 업데이트하고 큐의 우선순위를 갱신합니다.
더 짧은 경로를 찾았습니다.

![Dijkstra step 9](./images/dijkstra-09.png)

`D`도 마찬가지입니다.
`A → C → D` 경로가 `A → B → D`보다 짧으므로, `22m`을 `20m`으로 업데이트합니다.

![Dijkstra step 10](./images/dijkstra-10.png)

`C`의 모든 이웃을 방문했으므로 `C`를 `visited`에 추가하고,
큐에서 다음으로 가까운 노드 `F`를 꺼냅니다.

![Dijkstra step 11](./images/dijkstra-11.png)

`E`까지의 거리를 `11m + 9m = 20m`으로 기록합니다.

![Dijkstra step 12](./images/dijkstra-12.png)

`F`를 `visited`에 추가하고, 다음으로 가까운 `D`를 꺼냅니다.

![Dijkstra step 13](./images/dijkstra-13.png)

`D`를 통해 `E`로 가는 거리는 `20m + 6m = 26m`입니다.
이는 이미 계산된 `20m`보다 길기 때문에 무시합니다.

![Dijkstra step 14](./images/dijkstra-14.png)

`D` 노드가 방문 완료되었습니다.

![Dijkstra step 15](./images/dijkstra-15.png)

`E` 노드도 방문 완료되었습니다.
그래프 탐색이 끝났습니다.

![Dijkstra step 16](./images/dijkstra-16.png)

이제 출발 노드 `A`로부터 각 노드까지의 최단 거리를 알 수 있습니다.

실제로는 거리 계산 중 각 노드의 `previousVertices`(이전 노드)를 함께 저장하여
최단 경로를 복원할 수 있습니다.

예를 들어, `A`에서 `E`로 가는 최단 경로는 `A → C → F → E`입니다.

## 구현 예시

- [dijkstra.js](./dijkstra.js)

## 참고 자료

- [위키백과](https://ko.wikipedia.org/wiki/다익스트라_알고리즘)
- [YouTube - Nathaniel Fan](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube - Tushar Roy](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
