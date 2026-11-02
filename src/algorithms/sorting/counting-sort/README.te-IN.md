# Counting Sort

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Português_](README.pt-br.md)

Computer science లో **counting sort** అనేది చిన్న integers గా ఉండే keys ని బట్టి objects collection
ని sort చేసే algorithm; అంటే ఇది ఒక integer sorting algorithm. ప్రతి వేరువేరు key value ఉన్న objects
ఎన్ని ఉన్నాయో లెక్కపెట్టి, ఆ లెక్కల మీద arithmetic చేసి output sequence లో ప్రతి key value ఏ position
లో రావాలో నిర్ణయిస్తుంది. దీని running time, items సంఖ్య మీద, ఇంకా maximum, minimum key values మధ్య
తేడా మీద linear గా ఉంటుంది. కాబట్టి keys లో తేడా items సంఖ్య కంటే మరీ ఎక్కువ లేనప్పుడు మాత్రమే
దీన్ని డైరెక్ట్ గా వాడటం కరెక్ట్. కానీ పెద్ద keys ని ఇంకా బాగా handle చేయగలిగే radix sort అనే ఇంకో
sorting algorithm లో దీన్ని ఒక subroutine గా ఎక్కువగా వాడతారు.

Counting sort key values ని array లో indexes గా వాడుతుంది కాబట్టి, ఇది comparison sort కాదు —
comparison sorting కి ఉండే `Ω(n log n)` lower bound దీనికి వర్తించదు. Counting sort చేసే చాలా పనులకి
bucket sort కూడా వాడొచ్చు, time analysis కూడా దాదాపు ఒకేలా ఉంటుంది; కానీ counting sort తో పోలిస్తే,
bucket sort కి ప్రతి bucket లో items sets ని ఉంచడానికి linked lists, dynamic arrays లేదా ముందే
కేటాయించిన చాలా memory కావాలి. Counting sort మాత్రం ప్రతి bucket కి ఒకే ఒక్క నంబర్ (items లెక్క)
store చేస్తుంది.

ప్రతి array element నంబర్ల range చాలా చిన్నగా ఉన్నప్పుడు counting sort బాగా పనిచేస్తుంది.

## Algorithm

**Step I**

మొదటి step లో input array `A` లో ఉన్న అన్ని elements లెక్క (count) తీస్తాం. తర్వాత ఆ result ని
count array `C` లో store చేస్తాం. ఎలా లెక్కపెడతామో కింద చూపించారు.

![Counting Sort](https://3.bp.blogspot.com/-jJchly1BkTc/WLGqCFDdvCI/AAAAAAAAAHA/luljAlz2ptMndIZNH0KLTTuQMNsfzDeFQCLcB/s1600/CSortUpdatedStepI.gif)

**Step II**

రెండో step లో, input array `A` లో ఇచ్చిన index కంటే తక్కువ లేదా సమానంగా ఉన్న elements ఎన్ని
ఉన్నాయో లెక్కపెడతాం. `Ci` = input array లో `i` కంటే తక్కువ లేదా సమానంగా ఉన్న elements సంఖ్య.

![Counting Sort](https://1.bp.blogspot.com/-1vFu-VIRa9Y/WLHGuZkdF3I/AAAAAAAAAHs/8jKu2dbQee4ap9xlVcNsILrclqw0UxAVACLcB/s1600/Step-II.png)

**Step III**

ఈ step లో, రెండో step లో తయారుచేసిన count array `C` సాయంతో input array `A` elements ని sort అయిన
position లో పెడతాం. Sort అయిన elements ని store చేయడానికి result array `B` వాడాం. ఇక్కడ `B` index
ని zero నుంచి మొదలుపెట్టాం.

![Counting Sort](https://1.bp.blogspot.com/-xPqylngqASY/WLGq3p9n9vI/AAAAAAAAAHM/JHdtXAkJY8wYzDMBXxqarjmhpPhM0u8MACLcB/s1600/ResultArrayCS.gif)

## Complexity

| పేరు                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | అవును     | r - array లో ఉన్న అతి పెద్ద నంబర్ |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Counting_sort)
- [YouTube](https://www.youtube.com/watch?v=OKd534EWcdk&index=61&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [EfficientAlgorithms](https://efficientalgorithms.blogspot.com/2016/09/lenear-sorting-counting-sort.html)
