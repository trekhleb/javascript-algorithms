# Knapsack Problem

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Knapsack problem (లేదా rucksack problem) అనేది combinatorial optimization లో ఒక problem:
కొన్ని items ఇస్తారు, ప్రతి దానికి ఒక weight, ఒక value ఉంటాయి. ఒక collection లో ఏ item ఎన్ని
పెట్టాలో నిర్ణయించాలి — మొత్తం weight ఇచ్చిన limit కంటే తక్కువ లేదా సమానంగా ఉండాలి, ఇంకా
మొత్తం value వీలైనంత ఎక్కువగా ఉండాలి.

ఈ పేరు ఎక్కడి నుంచి వచ్చిందంటే — ఒక fixed సైజ్ knapsack (బ్యాగ్) మాత్రమే ఉన్న ఒక వ్యక్తి, దాన్ని
అత్యంత విలువైన items తో నింపాలి అనే problem నుంచి.

ఒక dimension (constraint) ఉన్న knapsack problem example: మొత్తం weight 15 kg కి మించకుండా,
డబ్బు వీలైనంత ఎక్కువ రావాలంటే ఏ boxes ఎంచుకోవాలి?

![knapsack problem](https://upload.wikimedia.org/wikipedia/commons/f/fd/Knapsack.svg)

## Definition

### 0/1 knapsack problem

ఎక్కువగా solve చేసే problem **0/1 knapsack problem** — ఇందులో ప్రతి రకం item copies సంఖ్య `xi`
zero గానీ one గానీ మాత్రమే అవ్వొచ్చు.

`1` నుంచి `n` వరకు నంబర్లు ఉన్న n items ఇస్తారు, ప్రతి దానికి weight `wi`, value `vi` ఉంటాయి,
ఇంకా maximum weight capacity `W` ఇస్తారు,

దీన్ని maximize చేయాలి ![0/1 knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/85620037d368d2136fb3361702df6a489416931b)

ఈ conditions తో ![0/1 knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/dd6e7c9bca4397980976ea6d19237500ce3b8176)
ఇంకా ![0/1 knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/07dda71da2a630762c7b21b51ea54f86f422f951)

ఇక్కడ `xi` అంటే knapsack లో item `i` ఎన్ని పెట్టాలి అని. సింపుల్ గా చెప్పాలంటే — knapsack లో
ఉన్న items weights మొత్తం knapsack capacity కి మించకుండా, items values మొత్తం వీలైనంత ఎక్కువ
చేయాలి.

### Bounded knapsack problem (BKP)

**Bounded knapsack problem (BKP)** లో ప్రతి item ఒక్కటే ఉండాలి అనే condition ఉండదు, కానీ ప్రతి రకం
item copies సంఖ్య `xi` ఒక maximum non-negative integer value `c` కి మించకూడదు:

దీన్ని maximize చేయాలి ![bounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/85620037d368d2136fb3361702df6a489416931b)

ఈ conditions తో ![bounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/dd6e7c9bca4397980976ea6d19237500ce3b8176)
ఇంకా ![bounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/6c8c5ac4f8247b3b8e01e89de76a1df0ea969821)

### Unbounded knapsack problem (UKP)

**Unbounded knapsack problem (UKP)** లో ప్రతి రకం item copies సంఖ్య మీద పై limit ఏమీ ఉండదు. దీన్ని
పైన లాగానే రాయొచ్చు, కాకపోతే `xi` మీద ఉన్న ఒకే condition — అది non-negative integer అయి ఉండాలి.

దీన్ని maximize చేయాలి ![unbounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/85620037d368d2136fb3361702df6a489416931b)

ఈ conditions తో ![unbounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/dd6e7c9bca4397980976ea6d19237500ce3b8176)
ఇంకా ![unbounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/90a99710f61d5dea19e49ae5b31164d2b56b07e3)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Knapsack_problem)
- [YouTube లో 0/1 Knapsack Problem](https://www.youtube.com/watch?v=8LusJS5-AGo&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
