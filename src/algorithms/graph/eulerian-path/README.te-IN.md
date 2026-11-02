# Eulerian Path

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Graph theory లో **Eulerian trail** (లేదా **Eulerian path**) అంటే finite graph లో ప్రతి edge ని
సరిగ్గా ఒక్కసారి మాత్రమే visit చేసే trail. అలాగే **Eulerian circuit** లేదా **Eulerian cycle**
అంటే ఒకే vertex దగ్గర మొదలై అదే vertex దగ్గర ముగిసే Eulerian trail.

Eulerian circuit ఉండాలంటే graph లో ఉన్న అన్ని vertices కి even degree ఉండాలి అని Euler
prove చేశాడు. ఇంకా, అన్ని vertices కి even degree ఉన్న connected graphs లో Eulerian circuit
ఉంటుంది అని కూడా చెప్పాడు.

![Eulerian Circuit](https://upload.wikimedia.org/wikipedia/commons/7/72/Labelled_Eulergraph.svg)

ఈ graph లో ప్రతి vertex కి even degree ఉంది. కాబట్టి ఇది ఒక Eulerian graph.
Edges ని alphabetical order లో ఫాలో అయితే ఒక Eulerian circuit/cycle వస్తుంది.

Eulerian trail ఉండాలంటే, odd degree ఉన్న vertices zero గానీ రెండు గానీ ఉండాలి; అందుకే
Königsberg graph Eulerian కాదు. Odd degree ఉన్న vertices అసలు లేకపోతే, అన్ని Eulerian trails
circuits అవుతాయి. సరిగ్గా రెండు vertices కి odd degree ఉంటే, అన్ని Eulerian trails వాటిలో
ఒక దాని దగ్గర మొదలై ఇంకో దాని దగ్గర ముగుస్తాయి. Eulerian trail ఉండి Eulerian circuit
లేని graph ని semi-Eulerian అంటారు.

![Königsberg graph](https://upload.wikimedia.org/wikipedia/commons/9/96/K%C3%B6nigsberg_graph.svg)

Königsberg Bridges multigraph. ఈ multigraph Eulerian కాదు, కాబట్టి దీనికి solution లేదు.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Eulerian_path)
- [YouTube](https://www.youtube.com/watch?v=vvP4Fg4r-Ns&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
