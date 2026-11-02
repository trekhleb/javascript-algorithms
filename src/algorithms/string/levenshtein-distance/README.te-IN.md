# Levenshtein Distance

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Levenshtein distance అనేది రెండు sequences మధ్య తేడా కొలిచే ఒక string metric. సింపుల్ గా చెప్పాలంటే,
రెండు words మధ్య Levenshtein distance అంటే — ఒక word ని ఇంకో word గా మార్చడానికి కనీసం ఎన్ని
single-character మార్పులు (insertions, deletions లేదా substitutions) కావాలో ఆ సంఖ్య.

## Definition

Mathematics పరంగా, `a`, `b` అనే రెండు strings (పొడవు వరుసగా `|a|`, `|b|`) మధ్య Levenshtein distance
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/4cf357d8f2135035207088d2c7b890fb4b64e410)
ఇక్కడ

![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/f0a48ecfc9852c042382fdc33c19e11a16948e85)

ఇక్కడ
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/52512ede08444b13838c570ba4a3fc71d54dbce9)
అనేది ఒక indicator function —
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/231fda9ee578f0328c5ca28088d01928bb0aaaec)
అయినప్పుడు `0`, లేకపోతే 1. ఇంకా
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/bdc0315678caad28648aafedb6ebafb16bd1655c)
అంటే `a` లో మొదటి `i` characters కి, `b` లో మొదటి `j` characters కి మధ్య distance.

గమనించండి — minimum లో మొదటి element deletion (`a` నుంచి `b` కి), రెండోది insertion, మూడోది
match లేదా mismatch (సంబంధిత symbols ఒకటేనా కాదా అనేదాన్ని బట్టి).

## Example

ఉదాహరణకి, `kitten`, `sitting` మధ్య Levenshtein distance `3` — ఎందుకంటే కింద ఉన్న మూడు మార్పులతో
ఒకటి ఇంకోటిగా మారుతుంది, మూడు కంటే తక్కువ మార్పులతో చేయడం కుదరదు:

1. **k**itten → **s**itten ("k" బదులు "s")
2. sitt**e**n → sitt**i**n ("e" బదులు "i")
3. sittin → sittin**g** (చివర్లో "g" కలపడం).

## ఎక్కడ వాడతారు

దీన్ని చాలా చోట్ల వాడతారు — ఉదాహరణకి spell checkers, optical character recognition కి correction
systems, fuzzy string searching, ఇంకా translation memory మీద బేస్ అయిన natural language translation
కి సాయం చేసే software.

## Dynamic Programming Approach Explanation

`ME`, `MY` strings మధ్య minimum edit distance కనుక్కునే సింపుల్ example తీసుకుందాం. ఇక్కడ minimum
edit distance `1` operation అని మీకు ఇప్పటికే అర్థమైపోయి ఉంటుంది — `E` బదులు `Y` పెట్టడం. కానీ
`Saturday` ని `Sunday` గా మార్చడం లాంటి కష్టమైన examples కూడా చేయగలగాలంటే, దీన్ని ఒక algorithm
రూపంలో పెట్టడానికి ట్రై చేద్దాం.

పైన చెప్పిన mathematical formula ని `ME → MY` మార్పుకి వాడాలంటే, ముందే `ME → M`, `M → MY`, `M → M`
మార్పుల minimum edit distances తెలియాలి. తర్వాత వాటిలో minimum దాన్ని ఎంచుకుని, చివరి letters
`E → Y` మార్చడానికి _ఒక_ operation కలపాలి. అంటే `ME → MY` మార్పు minimum edit distance ని, ముందు
possible అయిన మూడు మార్పుల మీద బేస్ చేసి లెక్కపెడతాం.

ఇంకా బాగా explain చేయడానికి ఈ matrix గీద్దాం:

![Levenshtein Matrix](https://cdn-images-1.medium.com/max/1600/1*aTunSUoy0BJyYBVn4tWGrA.png)

- Cell `(0:1)` లో ఎరుపు నంబర్ 1 ఉంది. అంటే `M` ని empty string గా మార్చడానికి 1 operation కావాలి.
అది `M` ని డిలీట్ చేయడం. అందుకే ఈ నంబర్ ఎరుపు.
- Cell `(0:2)` లో ఎరుపు నంబర్ 2 ఉంది. అంటే `ME` ని empty string గా మార్చడానికి 2 operations కావాలి.
అది `E`, `M` ని డిలీట్ చేయడం.
- Cell `(1:0)` లో ఆకుపచ్చ నంబర్ 1 ఉంది. అంటే empty string ని `M` గా మార్చడానికి 1 operation కావాలి.
అది `M` ని కలపడం (insert). అందుకే ఈ నంబర్ ఆకుపచ్చ.
- Cell `(2:0)` లో ఆకుపచ్చ నంబర్ 2 ఉంది. అంటే empty string ని `MY` గా మార్చడానికి 2 operations కావాలి.
అది `Y`, `M` ని కలపడం.
- Cell `(1:1)` లో నంబర్ 0 ఉంది. అంటే `M` ని `M` గా మార్చడానికి ఏమీ ఖర్చు లేదు.
- Cell `(1:2)` లో ఎరుపు నంబర్ 1 ఉంది. అంటే `ME` ని `M` గా మార్చడానికి 1 operation కావాలి.
అది `E` ని డిలీట్ చేయడం.
- అలా మిగతావి...

మన matrix లాంటి చిన్న దానికి (ఇది కేవలం `3x3`) ఇది ఈజీగా అనిపిస్తుంది. కానీ ఇక్కడ ఉన్న బేసిక్
concepts తో పెద్ద matrices కి కూడా (ఉదాహరణకి `Saturday → Sunday` మార్పుకి `9x7` matrix) ఆ నంబర్లన్నీ
లెక్కపెట్టొచ్చు.

Formula ప్రకారం, ఇప్పటి cell `(i:j)` నంబర్ లెక్కపెట్టడానికి పక్కన ఉన్న మూడు cells `(i-1:j)`, `(i-1:j-1)`,
`(i:j-1)` ఉంటే చాలు. ఆ మూడు cells లో minimum కనుక్కుని, `i` row లో, `j` column లో వేరువేరు letters
ఉంటే `1` కలపాలి అంతే.

ఈ problem recursive గా ఉంది అని క్లియర్ గా చూడొచ్చు.

![Levenshtein Matrix](https://cdn-images-1.medium.com/max/1600/1*w8UB4DSvBnAK6mBXRGQDjw.png)

ఈ problem కి ఒక decision graph గీద్దాం.

![Minimum Edit Distance Decision Graph](https://cdn-images-1.medium.com/max/1600/1*8jD0qvr5B9PwRFM_9z7q9A.png)

బొమ్మలో ఎరుపు రంగుతో mark చేసిన, ఒకదానితో ఒకటి overlap అయ్యే చాలా sub-problems చూడొచ్చు. ఇంకా,
formula లో పక్కన ఉన్న ఆ మూడు cells minimum కంటే operations సంఖ్య తగ్గించడం కుదరదు.

ఇంకా గమనించొచ్చు — matrix లో ప్రతి cell నంబర్ ముందు వాటి మీద బేస్ చేసి లెక్కపెడతాం. కాబట్టి ఇక్కడ
tabulation technique (cache ని కింద నుంచి పైకి — bottom-up — నింపడం) వాడతాం.

ఈ సూత్రాన్ని ఇంకా ముందుకి తీసుకెళ్తే, `Saturday → Sunday` మార్పు లాంటి కష్టమైన cases కూడా solve చేయొచ్చు.

![Levenshtein distance](https://cdn-images-1.medium.com/max/2600/1*497gMaFErzJpCXG7kS_7dw.png)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Levenshtein_distance)
- [YouTube](https://www.youtube.com/watch?v=We3YDTzNXEk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [ITNext](https://itnext.io/dynamic-programming-vs-divide-and-conquer-2fea680becbe)
