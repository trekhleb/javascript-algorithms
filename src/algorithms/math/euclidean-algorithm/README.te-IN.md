# Euclidean algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Français_](README.fr-FR.md)

Mathematics లో Euclidean algorithm (లేదా Euclid's algorithm) అనేది రెండు నంబర్ల
greatest common divisor (GCD) ఫాస్ట్ గా కనుక్కునే పద్ధతి. GCD అంటే ఆ రెండు నంబర్లనీ
శేషం (remainder) లేకుండా భాగించే అతి పెద్ద నంబర్.

Euclidean algorithm ఒక సూత్రం మీద పనిచేస్తుంది — రెండు నంబర్లలో పెద్ద నంబర్ బదులు,
దానికి చిన్న నంబర్ కి ఉన్న తేడా పెట్టినా GCD మారదు. ఉదాహరణకి, `252`, `105` కి GCD `21`
(ఎందుకంటే `252 = 21 × 12`, `105 = 21 × 5`), ఇంకా అదే `21` నంబర్ `105`, `252 − 105 = 147` కి
కూడా GCD. ఇలా మార్చిన ప్రతిసారి పెద్ద నంబర్ తగ్గుతుంది కాబట్టి, ఇదే మళ్ళీ మళ్ళీ చేస్తే
నంబర్ల జంటలు చిన్నవవుతూ వస్తాయి, చివరికి రెండు నంబర్లు సమానం అవుతాయి.
అప్పుడు ఆ నంబరే మొదటి రెండు నంబర్ల GCD.

Steps ని వెనక్కి తిప్పితే, GCD ని మొదటి రెండు నంబర్లని ఒక్కోదాన్ని positive లేదా negative
integer తో గుణించి కలిపిన మొత్తంగా రాయొచ్చు, ఉదాహరణకి `21 = 5 × 105 + (−2) × 252`.
GCD ని ఎప్పుడూ ఇలా రాయొచ్చు అనే విషయాన్ని Bézout's identity అంటారు.

![GCD](https://upload.wikimedia.org/wikipedia/commons/3/37/Euclid%27s_algorithm_Book_VII_Proposition_2_3.png)

`BA`, `DC` అనే రెండు పొడవులకి greatest common divisor (GCD) కనుక్కునే Euclid పద్ధతి — ఈ
రెండూ ఒక common "unit" పొడవుకి multiples. `DC` చిన్నది కాబట్టి దాంతో `BA` ని "కొలుస్తాం",
కానీ ఒక్కసారే — ఎందుకంటే మిగిలిన `EA`, `DC` కంటే చిన్నది. ఇప్పుడు EA తో చిన్న పొడవు `DC` ని
(రెండుసార్లు) కొలుస్తాం, మిగిలిన `FC`, `EA` కంటే చిన్నది. తర్వాత `FC` తో `EA` ని (మూడుసార్లు)
కొలుస్తాం. ఏమీ మిగలలేదు కాబట్టి, ఇక్కడితో అయిపోయింది — `FC` నే `GCD`.
కుడి వైపు Nicomachus example ఉంది — `49`, `21` నంబర్లకి GCD `7` వచ్చింది (Heath 1908:300 నుంచి).

![GCD](https://upload.wikimedia.org/wikipedia/commons/7/74/24x60.svg)

`24-by-60` rectangle ని పది `12-by-12` square tiles తో కప్పేశారు, ఇక్కడ `12` అనేది `24`, `60`
కి GCD. జనరల్ గా చెప్పాలంటే, `a-by-b` rectangle ని `c` పొడవు ఉన్న square tiles తో కప్పాలంటే,
`c` అనేది `a`, `b` రెండిటికీ common divisor అయి ఉండాలి.

![GCD](https://upload.wikimedia.org/wikipedia/commons/1/1c/Euclidean_algorithm_1071_462.gif)

తీసివేత (subtraction) మీద బేస్ అయిన Euclidean algorithm animation.
మొదటి rectangle సైజ్ `a = 1071`, `b = 462`. అందులో `462×462` సైజ్ squares పెడితే
`462×147` rectangle మిగులుతుంది. ఈ rectangle ని `147×147` squares తో నింపితే `21×147`
rectangle మిగులుతుంది, దాన్ని `21×21` squares తో నింపితే ఏమీ ఖాళీ మిగలదు.
అతి చిన్న square సైజ్ `21` నే `1071`, `462` కి GCD.

## References

[Wikipedia](https://en.wikipedia.org/wiki/Euclidean_algorithm)
