# Selection Sort

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Português_](README.pt-BR.md)

Selection sort అనేది ఒక sorting algorithm, ప్రత్యేకంగా చెప్పాలంటే in-place comparison sort. దీని
time complexity O(n2), అందుకే పెద్ద lists మీద ఇది slow గా ఉంటుంది, ఇంకా జనరల్ గా దీనిలాంటిదే అయిన
insertion sort కంటే worse గా పనిచేస్తుంది. Selection sort సింపుల్ గా ఉండటానికి ఫేమస్, ఇంకా కొన్ని
situations లో — ముఖ్యంగా అదనపు memory తక్కువగా ఉన్నప్పుడు — కష్టమైన algorithms కంటే దీనికి
performance advantages ఉన్నాయి.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/b/b0/Selection_sort_animation.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

## Complexity

| పేరు                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | కాదు      |           |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
