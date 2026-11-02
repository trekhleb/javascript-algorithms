# Primality Test

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

**Prime number** (లేదా **prime**) అంటే `1` కంటే పెద్దదైన natural number — దాన్ని రెండు చిన్న
natural numbers ని గుణించి తయారుచేయలేం. Prime కాని, `1` కంటే పెద్దదైన natural number ని
composite number అంటారు. ఉదాహరణకి, `5` prime — ఎందుకంటే దాన్ని గుణకారంగా రాయడానికి ఉన్న
పద్ధతులు `1 × 5` లేదా `5 × 1` మాత్రమే, రెండిట్లోనూ `5` నే ఉంది. కానీ `6` composite — ఎందుకంటే
అది `6` కంటే చిన్నవైన రెండు నంబర్ల `(2 × 3)` గుణకారం.

![Prime Numbers](https://upload.wikimedia.org/wikipedia/commons/f/f0/Primes-vs-composites.svg)

**Primality test** అంటే ఇచ్చిన నంబర్ prime ఆ కాదా అని నిర్ణయించే algorithm. Mathematics లో
చాలా రంగాలతో పాటు, cryptography లో దీన్ని వాడతారు. Integer factorization లాగా కాకుండా,
primality tests మామూలుగా prime factors ఇవ్వవు — ఇచ్చిన నంబర్ prime ఆ కాదా అని మాత్రమే చెప్తాయి.
Factorization ని computer కి కష్టమైన problem గా చూస్తారు, కానీ primality testing దానితో పోలిస్తే
ఈజీ (దాని running time input సైజ్ లో polynomial).

## References

- [Wikipedia లో Prime Numbers](https://en.wikipedia.org/wiki/Prime_number)
- [Wikipedia లో Primality Test](https://en.wikipedia.org/wiki/Primality_test)
