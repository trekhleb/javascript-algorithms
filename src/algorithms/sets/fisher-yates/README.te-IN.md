# Fisher–Yates shuffle

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Fisher–Yates shuffle అనేది ఒక finite sequence కి random permutation తయారుచేసే algorithm —
సింపుల్ గా చెప్పాలంటే, ఈ algorithm sequence ని shuffle చేస్తుంది (కలిపేస్తుంది). ఈ algorithm
అన్ని elements ని ఒక టోపీలో వేసినట్టు చేస్తుంది; టోపీలో ఏమీ మిగలనంత వరకు, అందులో నుంచి random గా
ఒక element తీస్తూ next element ఏంటో నిర్ణయిస్తుంది. ఈ algorithm ఎలాంటి పక్షపాతం లేని (unbiased)
permutation ఇస్తుంది: ప్రతి permutation వచ్చే chance సమానం. ఈ algorithm modern version ఫాస్ట్ గా
ఉంటుంది: shuffle చేసే items సంఖ్యకి proportional టైమ్ తీసుకుంటుంది, ఇంకా వాటిని అక్కడికక్కడే
(in place) shuffle చేస్తుంది.

## References

[Wikipedia](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
