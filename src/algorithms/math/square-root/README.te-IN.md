# Square Root (Newton's Method)

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Mathematics లో ఒక భాగమైన numerical analysis లో, negative కాని real number యొక్క principal
square root లెక్కపెట్టడానికి చాలా square root algorithms లేదా methods ఉన్నాయి. ఎందుకంటే,
మామూలుగా ఒక function యొక్క roots ని exact గా లెక్కపెట్టలేం. Root-finding algorithms roots కి
దగ్గరి విలువలని floating point numbers గా ఇస్తాయి.

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/bff86975b0e7944720b3e635c53c22c032a7a6f1) కనుక్కోవడం అంటే,
positive `x` కోసం ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/6cf57722151ef19ba1ca918d702b95c335e21cad) అనే
equation ని solve చేయడమే. కాబట్టి, ఏ జనరల్ numerical root-finding algorithm అయినా వాడొచ్చు.

**Newton's method** (దీన్నే Newton–Raphson method అని కూడా అంటారు) — _Isaac Newton_,
_Joseph Raphson_ పేర్ల మీద వచ్చింది — root-finding algorithm కి ఒక ఉదాహరణ. Real-valued
function యొక్క roots కి ప్రతిసారి ఇంకా దగ్గరి విలువలు కనుక్కునే పద్ధతి ఇది.

ముందు Newton's method జనరల్ ఐడియా explain చేసి, తర్వాత దాన్ని మన case కి — ఒక నంబర్ square
root కనుక్కోవడానికి — వాడదాం.

## Newton's Method జనరల్ ఐడియా

ఒక variable ఉన్న Newton–Raphson method ఇలా పనిచేస్తుంది:

Real numbers `x` మీద define చేసిన ఒక function `f`, ఆ function derivative `f'`, ఇంకా function `f`
యొక్క root కి ఒక మొదటి అంచనా (initial guess) `x0` తో ఈ method మొదలవుతుంది. Formula తీసుకురావడానికి
అనుకున్న conditions కి function సరిపోతే, ఇంకా initial guess దగ్గరగా ఉంటే, ఇంకా మంచి అంచనా `x1` ఇది:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/52c50eca0b7c4d64ef2fdca678665b73e944cb84)

Geometry పరంగా చూస్తే, `(x0, f (x0))` దగ్గర `f` graph కి గీసిన tangent, `x`-axis ని కలిసే చోటే `(x1, 0)`.

ఈ process ని ఇలా మళ్ళీ మళ్ళీ చేస్తాం:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/710c11b9ec4568d1cfff49b7c7d41e0a7829a736)

సరిపోయేంత accurate value వచ్చేదాకా.

![](https://upload.wikimedia.org/wikipedia/commons/e/e0/NewtonIteration_Ani.gif)

## Newton's Method తో Square Root కనుక్కోవడం

పైన చెప్పినట్టు, ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/bff86975b0e7944720b3e635c53c22c032a7a6f1) కనుక్కోవడం అంటే,
positive `x` కోసం ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/6cf57722151ef19ba1ca918d702b95c335e21cad) అనే
equation ని solve చేయడమే.

Square root problem లో function `f(x)` యొక్క derivative `2x`.

Newton's formula (పైన చూడండి) వాడితే, మన algorithm iterations కి ఈ equation వస్తుంది:

```text
x := x - (x² - S) / (2x)
```

పైన ఉన్న `x² − S` అంటే `x²` ఉండాల్సిన చోటు నుంచి ఎంత దూరంలో ఉంది అని. `2x` తో భాగించడం అంటే
`x²` యొక్క derivative — `x²` ఎంత ఫాస్ట్ గా మారుతుందో దాన్ని బట్టి `x` ని ఎంత మార్చాలో scale చేయడానికి.

## References

- [Wikipedia లో Square roots లెక్కపెట్టే పద్ధతులు](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots)
- [Wikipedia లో Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method)
