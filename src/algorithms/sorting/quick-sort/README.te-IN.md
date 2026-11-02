# Quicksort

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_简体中文_](README.zh-CN.md),
[_Português_](README.pt-BR.md)

Quicksort అనేది ఒక divide and conquer algorithm.
Quicksort ముందు ఒక పెద్ద array ని రెండు చిన్న sub-arrays గా విడగొడుతుంది: చిన్న elements, పెద్ద
elements. తర్వాత Quicksort ఆ sub-arrays ని recursive గా sort చేస్తుంది.

Steps ఇవి:

1. Array నుంచి ఒక element ఎంచుకోండి, దాన్ని pivot అంటారు.
2. Partitioning: Array ని మళ్ళీ సర్దండి — pivot కంటే తక్కువ values ఉన్న elements అన్నీ pivot కంటే
ముందు రావాలి, pivot కంటే ఎక్కువ values ఉన్న elements అన్నీ దాని తర్వాత రావాలి (సమానమైన values
ఏ వైపైనా వెళ్ళొచ్చు). ఈ partitioning తర్వాత, pivot దాని చివరి position లో ఉంటుంది. దీన్నే
partition operation అంటారు.
3. పైన steps ని చిన్న values ఉన్న elements sub-array కి recursive గా వాడండి, అలాగే పెద్ద values
ఉన్న elements sub-array కి విడిగా వాడండి.

Quicksort algorithm animated visualization.
అడ్డం గీతలు (horizontal lines) pivot values.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## Complexity

| పేరు                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | కాదు      | Quicksort ని మామూలుగా in-place గా, O(log(n)) stack space తో చేస్తారు |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
- [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
