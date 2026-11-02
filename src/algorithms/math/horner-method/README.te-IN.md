# Horner's Method

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Mathematics లో Horner's method (లేదా Horner's scheme) అనేది polynomial ని evaluate చేసే (value కనుక్కునే) algorithm. ఈ పద్ధతితో కేవలం `n` కూడికలు, `n` గుణకారాలతో polynomial ని evaluate చేయొచ్చు. కాబట్టి దీనికి కావాల్సిన storage, `x` లో ఉన్న bits కి `n` రెట్లు.

Horner's method ఈ identity మీద బేస్ అయింది:

![Horner's rule](https://wikimedia.org/api/rest_v1/media/math/render/svg/2a576e42d875496f8b0f0dda5ebff7c2415532e4)

ఈ identity ని _Horner's rule_ అంటారు.

పైన identity లో కుడి వైపు భాగాన్ని ఇచ్చిన `x` కి solve చేయడానికి, polynomial ని లోపలి నుంచి బయటికి iterate చేస్తూ, ప్రతి iteration result ని కూడబెడుతూ వెళ్తాం. `n` iterations తర్వాత (`n` అంటే polynomial order), కూడబెట్టిన result నే polynomial value.

**ఈ polynomial తీసుకుంటే:**
`4 * x^4 + 2 * x^3 + 3 * x^2 + x^1 + 3` — దీన్ని `x = 2` దగ్గర evaluate చేయడానికి మామూలు పద్ధతి ఏంటంటే, దాన్ని `[3, 1, 3, 2, 4]` అనే array గా పెట్టి, దాని మీద iterate చేస్తూ ప్రతి iteration value ని ఒక accumulator లో save చేయడం, అంటే `acc += pow(x=2, index) * array[index]`. నిజానికి, ఒక నంబర్ power (`pow`) operation అంటే `n-1` గుణకారాలు. కాబట్టి ఈ పద్ధతిలో మొత్తం `14` operations జరుగుతాయి — `4` కూడికలు, `5` గుణకారాలు, `5` pows (ప్రతి power ని మళ్ళీ మళ్ళీ గుణించి లెక్కపెడతాం అనుకుంటే).

ఇప్పుడు **అదే లెక్కని Horner's rule తో చేస్తే**, polynomial ని `x * (x * (x * (4 * x + 2) + 3) + 1) + 3` అని మళ్ళీ రాయొచ్చు. దాన్ని `[4, 2, 3, 1, 3]` గా పెడితే, మొదటి iteration ని `acc = arr[0] * (x=2) + arr[1]` గా save చేసి, తర్వాత iterations ని `acc *= (x=2) + arr[index]` తో పూర్తి చేయొచ్చు. Horner's rule తో అదే లెక్కకి మొత్తం `10` operations మాత్రమే జరుగుతాయి — కేవలం `4` కూడికలు, `4` గుణకారాలు.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Horner%27s_method)
