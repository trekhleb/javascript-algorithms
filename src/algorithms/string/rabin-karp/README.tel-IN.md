# Rabin Karp Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Computer science లో Rabin–Karp algorithm (లేదా Karp–Rabin algorithm) అనేది Richard M. Karp,
Michael O. Rabin (1987) తయారుచేసిన string searching algorithm. ఒక text లో, కొన్ని pattern strings
లో ఏదైనా ఒకటి ఉందో లేదో కనుక్కోవడానికి ఇది hashing వాడుతుంది.

## Algorithm

Pattern కి, text లో ఉన్న substrings కి సమానమా అని test చేయడాన్ని hash function వాడి ఫాస్ట్ చేయడానికి
Rabin–Karp algorithm ట్రై చేస్తుంది. Hash function అంటే ప్రతి string ని ఒక numeric value గా
మార్చే function — ఆ value ని దాని hash value అంటారు; ఉదాహరణకి `hash('hello') = 5` అవ్వొచ్చు.
రెండు strings సమానం అయితే, వాటి hash values కూడా సమానం అనే విషయాన్ని ఈ algorithm వాడుకుంటుంది.
కాబట్టి string matching అంటే (దాదాపు) — search pattern hash value లెక్కపెట్టి, input string లో అదే hash
value ఉన్న substrings కోసం వెతకడం.

కానీ, ఈ పద్ధతిలో రెండు problems ఉన్నాయి. మొదటిది, strings చాలా ఎక్కువ, hash values చాలా తక్కువ
కాబట్టి, కొన్ని వేరువేరు strings కి ఒకే hash value రావొచ్చు. Hash values match అయినా, pattern, substring
match అవ్వకపోవచ్చు; కాబట్టి search pattern, substring match అయ్యాయి అనిపిస్తే, వాటిని compare చేసి
కన్ఫర్మ్ చేయాలి; పొడవైన substrings కి ఆ compare కి చాలా టైమ్ పట్టొచ్చు. అదృష్టం ఏంటంటే, మామూలు
strings మీద మంచి hash function కి మామూలుగా ఎక్కువ collisions రావు, కాబట్టి search టైమ్ సరిపోయేంతగానే
ఉంటుంది.

## వాడిన Hash Function

Rabin–Karp algorithm performance కి ముఖ్యమైన విషయం — text లో వరుసగా వచ్చే substrings hash values ని
ఫాస్ట్ గా లెక్కపెట్టడం. **Rabin fingerprint** అనేది బాగా పాపులర్ అయిన, బాగా పనిచేసే rolling hash function.

ఈ example లో చెప్పిన **polynomial hash function** Rabin fingerprint కాదు, కానీ అది కూడా అంతే బాగా
పనిచేస్తుంది. ఇది ప్రతి substring ని ఏదో ఒక base లో ఒక నంబర్ గా చూస్తుంది — ఆ base మామూలుగా ఒక పెద్ద prime.

## Complexity

`n` పొడవు ఉన్న text కి, మొత్తం పొడవు `m` ఉన్న `p` patterns కి, దీని average, best case running time
`O(n + m)`, space `O(p)`, కానీ worst-case time `O(n * m)`.

## ఎక్కడ వాడతారు

ఈ algorithm ని practical గా వాడే ఒక చోటు — plagiarism (కాపీ కొట్టడం) పట్టుకోవడం. Source material ఇస్తే,
ఈ algorithm ఒక paper లో source material నుంచి వచ్చిన sentences ఉన్నాయా అని ఫాస్ట్ గా వెతుకుతుంది —
case (capital/small letters), punctuation లాంటి details ని పట్టించుకోకుండా. వెతకాల్సిన strings చాలా
ఎక్కువ ఉంటాయి కాబట్టి, ఒక్కో string వెతికే algorithms ఇక్కడ పనికిరావు.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm)
- [YouTube](https://www.youtube.com/watch?v=H4VrKHVG5qI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
