# Prime Factors

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_简体中文_](README.zh-CN.md)

**Prime number** అంటే `1` కంటే పెద్దదైన whole number — దాన్ని వేరే whole numbers ని గుణించి తయారుచేయడం **కుదరదు**. మొదటి కొన్ని prime numbers: `2`, `3`, `5`, `7`, `11`, `13`, `17`, `19` అలా.

వేరే whole numbers ని గుణించి దాన్ని తయారుచేయడం **కుదిరితే** అది **Composite Number**.

![Composite numbers](https://www.mathsisfun.com/numbers/images/prime-composite.svg)

_Image source: [Math is Fun](https://www.mathsisfun.com/prime-factorization.html)_

**Prime factors** అంటే ఒకదానితో ఒకటి గుణిస్తే original number వచ్చే [prime numbers](https://en.wikipedia.org/wiki/Prime_number). ఉదాహరణకి `39` కి prime factors `3`, `13` — ఇవి రెండూ prime numbers. ఇంకో ఉదాహరణ `15`, దాని prime factors `3`, `5`.

![Factors](https://www.mathsisfun.com/numbers/images/factor-2x3.svg)

_Image source: [Math is Fun](https://www.mathsisfun.com/prime-factorization.html)_

## Prime factors ని, వాటి సంఖ్యని కరెక్ట్ గా కనుక్కోవడం

పద్ధతి ఏంటంటే, natural number `n` ని `i = 2` నుంచి `i = n` వరకు ఉన్న indexes తో (prime indexes తో మాత్రమే) భాగిస్తూ వెళ్ళడం. ప్రతి iteration లో `n` value ని `(n / i)` తో మార్చేస్తాం.

Loop index `i = 2` నుంచి `i = n` వరకు నడుస్తుంది కాబట్టి, ఇప్పటిదాకా worst case లో time complexity `O(n)`. ఈ time complexity ని `O(n)` నుంచి `O(sqrt(n))` కి తగ్గించొచ్చు. Loop ని `i = 2` నుంచి `i = sqrt(n)` వరకు నడిపితే ఈ optimisation వస్తుంది. ఇప్పుడు `O(sqrt(n))` వరకే వెళ్తాం — ఎందుకంటే `i` అనేది `sqrt(n)` కంటే పెద్దది అయ్యాక, `n` ని పూర్తిగా భాగించే index `i` (`n` తప్ప) ఇంకేమీ మిగలదు అని కన్ఫర్మ్ గా తెలుసు.

## Prime-factor సంఖ్యని దాదాపుగా లెక్కపెట్టే Hardy-Ramanujan formula

1917 లో G.H Hardy, Srinivasa Ramanujan ఒక theorem తయారుచేశారు — ఒక నంబర్ `n` కి ఉన్న వేరువేరు prime factors సంఖ్య `ω(n)` యొక్క normal order `log(log(n))` అని అది చెప్తుంది.

సింపుల్ గా చెప్పాలంటే, చాలా నంబర్లకి దాదాపు ఇన్ని వేరువేరు prime factors ఉంటాయి అని అర్థం.

## References

- [Math is Fun లో Prime numbers](https://www.mathsisfun.com/prime-factorization.html)
- [Wikipedia లో Prime numbers](https://en.wikipedia.org/wiki/Prime_number)
- [Wikipedia లో Hardy–Ramanujan theorem](https://en.wikipedia.org/wiki/Hardy%E2%80%93Ramanujan_theorem)
- [Youtube లో ఒక నంబర్ యొక్క Prime factorization](https://www.youtube.com/watch?v=6PDtgHhpCHo&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=82)
