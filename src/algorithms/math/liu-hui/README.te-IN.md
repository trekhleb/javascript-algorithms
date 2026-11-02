# Liu Hui's π Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Liu Hui తాను The Nine Chapters on the Mathematical Art కి రాసిన commentary లో ఒక విషయం చెప్పాడు —
circle లోపల గీసిన hexagon చుట్టుకొలతకి, circle diameter కి ratio `మూడు`, కాబట్టి `π` మూడు కంటే
ఎక్కువ ఉండాలి. తర్వాత polygons ని సగం చేస్తూ (bisect చేస్తూ) `π` ని ఎంత accuracy కావాలంటే అంత
accuracy తో లెక్కపెట్టే ఒక iterative algorithm ని step-by-step వివరంగా చెప్పాడు. 96-gon తో `π` ని
`3.141024`, `3.142708` మధ్యలో లెక్కపెట్టాడు. `3.14` సరిపోయేంత దగ్గరి విలువ అని చెప్పి, `π` ని `157/50`
గా రాశాడు; ఈ నంబర్ కొంచెం చిన్నదే అని ఒప్పుకున్నాడు. తర్వాత దాన్ని మెరుగుపరచడానికి ఒక తెలివైన
quick method కనిపెట్టి, కేవలం 96-gon తోనే `π ≈ 3.1416` తెచ్చాడు — దాని accuracy 1536-gon తో వచ్చే
దానికి సమానం. ఈ రంగంలో అతని అతి ముఖ్యమైన contribution, అతని సింపుల్ iterative `π` algorithm.

## Circle area

Liu Hui ఇలా వాదించాడు:

> Hexagon యొక్క ఒక side ని (దాని చుట్టూ ఉన్న circle) radius తో గుణించి, దాన్ని మూడుతో గుణిస్తే
dodecagon area వస్తుంది; hexagon ని dodecagon గా కోసి, దాని side ని radius తో గుణించి, మళ్ళీ
ఆరుతో గుణిస్తే 24-gon area వస్తుంది; ఎంత సన్నగా కోస్తే circle area తో పోలిస్తే అంత తక్కువ నష్టం,
అలా కోస్తూ కోస్తూ పోతే, వచ్చే polygon area circle తో కలిసిపోయి ఒకటైపోతుంది; ఏ నష్టం ఉండదు

![Liu Hui](https://upload.wikimedia.org/wikipedia/commons/6/69/Cutcircle2.svg)

Circle area లెక్కపెట్టే Liu Hui పద్ధతి.

ఇంకా, circle area అంటే దాని చుట్టుకొలతలో సగాన్ని radius తో గుణిస్తే వచ్చేది అని Liu Hui
prove చేశాడు. అతను ఇలా చెప్పాడు:

> Polygon కి circle కి మధ్య కొంత ఎక్కువ radius ఉంటుంది. ఆ ఎక్కువ radius ని polygon యొక్క ఒక
side తో గుణించండి. వచ్చే area circle సరిహద్దు దాటిపోతుంది

Diagram లో `d = ఎక్కువ radius`. `d` ని ఒక side తో గుణిస్తే `ABCD` అనే దీర్ఘచతురస్రం వస్తుంది,
అది circle సరిహద్దు దాటుతుంది. Polygon side చిన్నగా ఉంటే (అంటే sides చాలా ఎక్కువ ఉంటే), ఎక్కువ
radius కూడా చిన్నగా ఉంటుంది, కాబట్టి ఎక్కువ area కూడా చిన్నగా ఉంటుంది.

> Polygon side ని దాని radius తో గుణిస్తే area రెట్టింపు అవుతుంది; కాబట్టి చుట్టుకొలతలో
సగాన్ని radius తో గుణిస్తే circle area వస్తుంది.

![Liu Hui](https://upload.wikimedia.org/wikipedia/commons/9/95/Cutcircle.svg)

Circle లోపలి area అంటే radius ని చుట్టుకొలతలో సగంతో గుణిస్తే వచ్చేది, అంటే `A = r x C/2 = r x r x π`.

## Iterative algorithm

Liu Hui circle లోపల గీసిన hexagon తో మొదలుపెట్టాడు. Hexagon యొక్క ఒక side `AB` పొడవు `M`
అనుకుందాం, `r` అంటే circle radius.

![Liu Hui](https://upload.wikimedia.org/wikipedia/commons/4/46/Liuhui_geyuanshu.svg)

`AB` ని `OPC` line తో సగం చేయండి, అప్పుడు `AC` అనేది dodecagon (12-gon) యొక్క ఒక side
అవుతుంది, దాని పొడవు `m` అనుకుందాం. `PC` పొడవు `j`, `OP` పొడవు `G` అనుకుందాం.

`AOP`, `APC` అనేవి రెండు right angle triangles. Liu Hui [Gou Gu](https://en.wikipedia.org/wiki/Pythagorean_theorem)
(Pythagorean theorem) ని మళ్ళీ మళ్ళీ వాడాడు:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/dbfc192c78539c3901c7bad470302ededb76f813)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/ccd12a402367c2d6614c88e75006d50bfc3a9929)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/65d77869fc02c302d2d46d45f75ad7e79ae524fb)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/a7a0d0d7f505a0f434e5dd80c2fef6d2b30d6100)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/c31b9acf38f9d1a248d4023c3bf286bd03007f37)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/0dee798efb0b1e3e64d6b3542106cb3ecaa4a383)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ffeafe88d2983b364ad3442746063e3207fe842)


ఇక్కడి నుంచి `M` నుంచి `m` కనుక్కునే technique వచ్చేసింది — దాంతో రెట్టింపు edges ఉన్న polygon
side పొడవు వస్తుంది. Hexagon తో మొదలుపెట్టి, ఈ formula తో Liu Hui dodecagon side పొడవు
కనుక్కోగలిగాడు. తర్వాత dodecagon side పొడవు నుంచి 24-gon side పొడవు, అలా మళ్ళీ మళ్ళీ
కనుక్కుంటూ వెళ్ళాడు. ఎన్నిసార్లు కావాలంటే అన్నిసార్లు recursive గా ఇలా చేయగలిగాడు. ఈ polygons
area ఎలా కనుక్కోవాలో తెలుసు కాబట్టి, Liu Hui `π` కి దగ్గరి విలువ కనుక్కోగలిగాడు.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Liu_Hui%27s_%CF%80_algorithm)
