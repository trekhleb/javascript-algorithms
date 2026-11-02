# Hamming Distance

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

ఒకే పొడవు ఉన్న రెండు strings మధ్య Hamming distance అంటే — ఎన్ని positions లో వాటి symbols
వేరువేరుగా ఉన్నాయో ఆ సంఖ్య. ఇంకోలా చెప్పాలంటే, ఒక string ని ఇంకో string గా మార్చడానికి కనీసం
ఎన్ని మార్పులు (substitutions) కావాలో, లేదా ఒక string ఇంకో string గా మారడానికి కనీసం ఎన్ని
errors జరిగి ఉండొచ్చో అది కొలుస్తుంది. ఇంకా జనరల్ గా చెప్పాలంటే, రెండు sequences మధ్య edit
distance కొలవడానికి ఉన్న చాలా string metrics లో Hamming distance ఒకటి.

## Examples

వీటి మధ్య Hamming distance:

- "ka**rol**in", "ka**thr**in" మధ్య **3**.
- "k**a**r**ol**in", "k**e**r**st**in" మధ్య **3**.
- 10**1**1**1**01, 10**0**1**0**01 మధ్య **2**.
- 2**17**3**8**96, 2**23**3**7**96 మధ్య **3**.

## References

[Wikipedia](https://en.wikipedia.org/wiki/Hamming_distance)
