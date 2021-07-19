# 병합 정렬

컴퓨터과학에서, 병합 정렬(일반적으로 mergesort라고 쓰는)은 효율적이고, 범용적인, 비교 기반의 정렬 알고리즘입니다. 대부분의 구현들은 안정적인 정렬을 만들어내며, 이는 정렬된 산출물에서 동일한 요소들의 입력 순서가 유지된다는 것을 의미합니다. 병합 정렬은 1945년에 John von Neumann이 만든 분할 정복 알고리즘입니다.

병합 정렬의 예시입니다. 우선 리스트를 가장 작은 단위로 나누고(한 개의 요소), 두 개의 인접한 리스트를 정렬하고 병합하기 위해 각 요소와 인접한 리스트를 비교합니다. 마지막으로 모든 요소들은 정렬되고 병합됩니다.

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

재귀적인 병합 정렬 알고리즘은 7개의 정수값을 가진 배열을 정렬하는데 사용됩니다. 다음은 합병 정렬을 모방하기 위해 사람이 취하는 단계입니다.(하향식)

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

## 복잡도

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |

## 참조

- [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
- [YouTube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
