# Travelling Salesman Problem

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Travelling salesman problem (TSP) అడిగే ప్రశ్న ఇది:
"కొన్ని సిటీల list, ప్రతి రెండు సిటీల మధ్య దూరం ఇస్తే — ప్రతి సిటీకి ఒక్కసారి వెళ్ళి,
మళ్ళీ మొదలుపెట్టిన సిటీకి తిరిగొచ్చే అతి చిన్న route ఏది?"

![Travelling Salesman](https://upload.wikimedia.org/wikipedia/commons/1/11/GLPK_solution_of_a_travelling_salesman_problem.svg)

ఒక travelling salesman problem కి solution: నల్ల గీత అనేది ప్రతి ఎర్ర చుక్కని కలిపే
అతి చిన్న loop.

![Travelling Salesman Graph](https://upload.wikimedia.org/wikipedia/commons/3/30/Weighted_K4.svg)

TSP ని ఒక undirected weighted graph గా చూపించొచ్చు — సిటీలు graph లో vertices, దారులు
graph లో edges, ఒక దారి దూరం ఆ edge యొక్క weight. ఇది ఒక minimization problem —
ఒక fixed vertex దగ్గర మొదలుపెట్టి, మిగతా ప్రతి vertex ని సరిగ్గా ఒక్కసారి visit చేసి,
మళ్ళీ అదే vertex దగ్గర ముగించాలి. చాలాసార్లు ఈ model ఒక complete graph గా ఉంటుంది (అంటే
ప్రతి జత vertices ని ఒక edge కలుపుతుంది). రెండు సిటీల మధ్య దారి లేకపోతే, బాగా పొడవైన
ఒక edge కలిపితే graph complete అవుతుంది, best tour మీద ఏ ఎఫెక్ట్ ఉండదు.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Travelling_salesman_problem)
