# Merge Sort

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_한국어_](README.ko-KR.md),
[_Português_](README.pt-BR.md)

Computer science లో merge sort (mergesort అని కూడా రాస్తారు) అనేది ఫాస్ట్ గా పనిచేసే, అన్ని
రకాల పనులకి వాడగలిగే, comparison మీద బేస్ అయిన sorting algorithm. చాలా implementations stable
sort ఇస్తాయి — అంటే సమానంగా ఉన్న elements input లో ఏ order లో ఉన్నాయో, sorted output లో కూడా అదే
order లో ఉంటాయి. Mergesort అనేది 1945 లో John von Neumann కనిపెట్టిన ఒక divide and conquer algorithm.

Merge sort example. ముందు list ని అతి చిన్న ముక్కలుగా (1 element) విడగొట్టి, తర్వాత ప్రతి element ని
పక్కన ఉన్న list తో compare చేసి, sort చేసి, పక్కపక్కన ఉన్న రెండు lists ని కలుపుతాం (merge చేస్తాం).
చివరికి అన్ని elements sort అయి, కలిసిపోతాయి.

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

7 integer values ఉన్న array ని sort చేయడానికి వాడిన recursive merge sort algorithm. Merge sort ని
(top-down) మనిషి చేతితో చేయాలంటే ఈ steps తీసుకుంటాడు.

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

## Complexity

| పేరు                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | అవును     |           |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
- [YouTube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
