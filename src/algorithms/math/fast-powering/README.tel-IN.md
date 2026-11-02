# Fast Powering Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Français_](README.fr-FR.md)

**ఒక నంబర్ యొక్క power** అంటే ఆ నంబర్ ని గుణకారంలో ఎన్నిసార్లు వాడాలో చెప్తుంది.

దీన్ని base నంబర్ కి కుడి వైపు పైన ఒక చిన్న నంబర్ గా రాస్తారు.

![Power](https://www.mathsisfun.com/algebra/images/exponent-8-2.svg)

## Naive Algorithm Complexity

`a` కి power `b` ఎలా కనుక్కోవాలి?

`a` ని దానితోనే `b` సార్లు గుణిస్తాం. అంటే,
`a^b = a * a * a * ... * a` (`a` మొత్తం `b` సార్లు).

గుణకారం సరిగ్గా `n` సార్లు చేయాలి కాబట్టి దీనికి `O(n)` టైమ్ పడుతుంది.

## Fast Power Algorithm

Naive algorithm కంటే బెటర్ గా చేయగలమా? చేయగలం — power లెక్కని `O(log(n))` టైమ్ లో
solve చేయొచ్చు.

ఈ algorithm power లెక్కపెట్టడానికి divide and conquer approach వాడుతుంది. ప్రస్తుతానికి
ఈ algorithm `X`, `Y` అనే రెండు positive integers కి మాత్రమే పనిచేస్తుంది.

ఈ algorithm వెనక ఉన్న ఐడియా ఈ విషయం మీద బేస్ అయింది:

`Y` **even** అయితే:

```text
X^Y = X^(Y/2) * X^(Y/2)
```

`Y` **odd** అయితే:

```text
X^Y = X^(Y//2) * X^(Y//2) * X
where Y//2 is result of division of Y by 2 without reminder.
```

(ఇక్కడ `Y//2` అంటే `Y` ని 2 తో భాగిస్తే శేషం లేకుండా వచ్చే భాగఫలం.)

**ఉదాహరణకి**

```text
2^4 = (2 * 2) * (2 * 2) = (2^2) * (2^2)
```

```text
2^5 = (2 * 2) * (2 * 2) * 2 = (2^2) * (2^2) * (2)
```

ఇప్పుడు, ప్రతి step లో అదే `X^(Y/2)` power ని రెండుసార్లు లెక్కపెట్టాలి కాబట్టి, దాన్ని ఒక
మధ్యంతర variable లో save చేసుకుంటే మళ్ళీ లెక్కపెట్టాల్సిన పని ఉండదు — అలా optimize చేయొచ్చు.

**Time Complexity**

ప్రతి iteration లో power ని సగం చేస్తాం కాబట్టి, function ని recursive గా `log(n)` సార్లు
call చేస్తాం. కాబట్టి algorithm time complexity ఇంతకి తగ్గుతుంది:

```text
O(log(n))
```

## References

- [YouTube](https://www.youtube.com/watch?v=LUWavfN9zEo&index=80&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&t=0s)
- [Wikipedia](https://en.wikipedia.org/wiki/Exponentiation_by_squaring)
