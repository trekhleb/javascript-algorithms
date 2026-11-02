# Tower of Hanoi

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Tower of Hanoi (దీన్నే Tower of Brahma లేదా Lucas' Tower అని కూడా అంటారు) అనేది ఒక mathematical
game లేదా puzzle. ఇందులో మూడు కడ్డీలు (rods), వేరువేరు సైజ్ లో ఉన్న కొన్ని disks ఉంటాయి — ఆ disks ని
ఏ కడ్డీలోనైనా వేయొచ్చు. Puzzle మొదట్లో disks అన్నీ ఒక కడ్డీలో సైజ్ వరుసలో నీట్ గా పేర్చి ఉంటాయి —
అన్నిటికంటే చిన్నది పైన, అలా ఒక cone (శంఖువు) షేప్ లో.

Puzzle లక్ష్యం ఏంటంటే, ఈ సింపుల్ rules పాటిస్తూ మొత్తం stack ని ఇంకో కడ్డీకి జరపాలి:

- ఒకసారి ఒక్క disk మాత్రమే జరపాలి.
- ప్రతి move లో, ఏదో ఒక stack నుంచి పై disk తీసి, ఇంకో stack పైన గానీ ఖాళీ కడ్డీ మీద గానీ పెట్టాలి.
- ఏ disk ని కూడా దానికంటే చిన్న disk మీద పెట్టకూడదు.

![Hanoi Tower](https://upload.wikimedia.org/wikipedia/commons/8/8d/Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif)

6-disk problem ని solve చేసే iterative algorithm animation

`3` disks ఉంటే, puzzle ని `7` moves లో solve చేయొచ్చు. Tower of Hanoi puzzle solve చేయడానికి కావాల్సిన
కనీస moves `2^n − 1`, ఇక్కడ `n` అంటే disks సంఖ్య.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
- [HackerEarth](https://www.hackerearth.com/blog/algorithms/tower-hanoi-recursion-game-algorithm-explained/)
