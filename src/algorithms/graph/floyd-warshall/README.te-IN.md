# Floyd–Warshall Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Computer science లో **Floyd–Warshall algorithm** అనేది weighted graph లో shortest paths
కనుక్కునే algorithm. Edge weights positive అయినా negative అయినా పర్లేదు (కానీ
negative cycles ఉండకూడదు). ఈ algorithm ని ఒక్కసారి రన్ చేస్తే, ప్రతి జత vertices మధ్య
shortest paths యొక్క lengths (weights మొత్తం) వచ్చేస్తాయి. Paths ఏంటో details ఇవ్వదు కానీ,
algorithm లో చిన్న మార్పులు చేస్తే ఆ paths ని కూడా మళ్ళీ కట్టొచ్చు.

## Algorithm

Floyd–Warshall algorithm ప్రతి జత vertices మధ్య graph గుండా వెళ్ళే అన్ని possible paths ని
compare చేస్తుంది. ఇది graph లో `O(|V|^3)` comparisons తో ఈ పని చేయగలదు.
Graph లో `|V|^2` వరకు edges ఉండొచ్చు, ప్రతి edges combination ని test చేస్తుంది అని
ఆలోచిస్తే — ఇది నిజంగా గొప్ప విషయం. రెండు vertices మధ్య shortest path కి ఒక అంచనా
పెట్టుకుని, అది బెస్ట్ అయ్యేదాకా కొద్దికొద్దిగా ఆ అంచనాని మెరుగుపరుస్తూ వెళ్తుంది.

`1` నుంచి `N` వరకు నంబర్లు ఉన్న vertices `V` తో ఒక graph `G` అనుకుందాం. ఇంకా
`shortestPath(i, j, k)` అనే ఒక function అనుకుందాం — ఇది దారిలో మధ్యలో `{1, 2, ..., k}` set లో
ఉన్న vertices ని మాత్రమే వాడుకుంటూ `i` నుంచి `j` కి వీలైనంత చిన్న path ఇస్తుంది. ఈ function
ఉంటే, మన goal ఏంటంటే — `{1, 2, ..., N}` లో ఉన్న vertices ని మాత్రమే వాడుకుంటూ ప్రతి `i` నుంచి
ప్రతి `j` కి shortest path కనుక్కోవడం.

![Recursive Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/f9b75e25063384ccca499c56f9a279abf661ad3b)

![Recursive Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/34ac7c89bbb18df3fd660225fd38997079e5e513)
![Recursive Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/0326d6c14def89269c029da59eba012d0f2edc9d)

ఈ formula నే Floyd–Warshall algorithm కి గుండెకాయ.

## Example

పైన చెప్పిన algorithm ని కింద ఎడమ వైపు ఉన్న graph మీద రన్ చేశారు:

![Example](https://upload.wikimedia.org/wikipedia/commons/2/2e/Floyd-Warshall_example.svg)

కింద tables లో `i` అంటే row నంబర్లు, `j` అంటే column నంబర్లు.


**k = 0**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** |	0   |	∞   |	−2  | ∞   |
| **2** |	4   |	0   |	3	  | ∞   |
| **3** |	∞   |	∞   |	0	  | 2   |
| **4** |	∞   |	−1  | ∞   | 0   |


**k = 1**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** | 0   | ∞   | −2  | ∞   |
| **2** | 4   | 0   |  2  | ∞   |
| **3** | ∞   | ∞   |  0  | 2   |
| **4** | ∞   | −   |  ∞  | 0   |


**k = 2**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** |	0   |	∞   |	−2  | ∞   |
| **2** |	4   |	0   | 2	  | ∞   |
| **3** |	∞   |	∞	  | 0	  | 2   |
| **4** |	3   |	−1  | 1   | 0   |


**k = 3**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** |	0   |	∞   |	−2  | 0   |
| **2** |	4   |	0   |	2	  | 4   |
| **3** |	∞   |	∞   |	0	  | 2   |
| **4** |	3   |	−1  | 1   | 0   |


**k = 4**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** |	0   |	−1  | −2  | 0   |
| **2** |	4   |	0	  | 2	  | 4   |
| **3** |	5   |	1	  | 0	  | 2   |
| **4** |	3   |	−1  | 1   | 0   |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)
- [YouTube (Abdul Bari)](https://www.youtube.com/watch?v=oNI0rf2P9gE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=74)
- [YouTube (Tushar Roy)](https://www.youtube.com/watch?v=LwJdNfdLF9s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=75)
