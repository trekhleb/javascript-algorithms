# Heap Sort

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Português_](README.pt-BR.md)

Heapsort అనేది comparison మీద బేస్ అయిన sorting algorithm.
Heapsort ని selection sort కి మెరుగైన version గా అనుకోవచ్చు: ఆ algorithm లాగానే ఇది కూడా input ని
sort అయిన భాగం, sort కాని భాగం గా విడగొడుతుంది. ప్రతిసారి sort కాని భాగం నుంచి అతి పెద్ద element ని
తీసి sort అయిన భాగానికి జరుపుతూ, sort కాని భాగాన్ని చిన్నది చేస్తూ వెళ్తుంది. మెరుగు ఎక్కడంటే —
maximum కనుక్కోవడానికి linear-time search బదులు heap data structure వాడుతుంది.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)

## Complexity

| పేరు                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | కాదు      |           |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Heapsort)
