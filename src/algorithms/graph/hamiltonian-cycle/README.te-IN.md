# Hamiltonian Path

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

**Hamiltonian path** (లేదా **traceable path**) అంటే undirected లేదా directed graph లో
ప్రతి vertex ని సరిగ్గా ఒక్కసారి మాత్రమే visit చేసే path. **Hamiltonian cycle** (లేదా
**Hamiltonian circuit**) అంటే cycle గా ఉండే Hamiltonian path. Graph లో ఇలాంటి paths,
cycles ఉన్నాయా లేదా అని కనుక్కోవడమే **Hamiltonian path problem**.

![Hamiltonian cycle](https://upload.wikimedia.org/wikipedia/commons/6/6c/Hamiltonian_path_3d.svg)

Dodecahedron లో ప్రతి vertex గుండా వెళ్ళే ఒక Hamiltonian cycle ఎరుపు రంగులో చూపించారు —
అన్ని platonic solids లాగానే, dodecahedron కూడా Hamiltonian.

## Naive Algorithm

Vertices తో వచ్చే అన్ని configurations తయారుచేసి, ఇచ్చిన conditions కి సరిపోయే
configuration ని print చేయాలి. మొత్తం `n!` (n factorial) configurations వస్తాయి.

```
while there are untried configurations
{
   generate the next configuration
   if ( there are edges between two consecutive vertices of this
      configuration and there is an edge from the last vertex to 
      the first ).
   {
      print this configuration;
      break;
   }
}
```

## Backtracking Algorithm

ఒక ఖాళీ path array తీసుకుని దాంట్లో vertex `0` పెట్టండి. తర్వాత vertex `1` నుంచి
మొదలుపెట్టి మిగతా vertices కలపండి. ఒక vertex కలిపే ముందు, అది ఇంతకుముందు కలిపిన vertex కి
adjacent గా ఉందా, ఇంకా ఇప్పటికే కలపలేదా అని చెక్ చేయండి. అలాంటి vertex దొరికితే, దాన్ని
solution లో భాగంగా కలుపుతాం. దొరకకపోతే false return చేస్తాం.

## References

- [Wikipedia లో Hamiltonian path](https://en.wikipedia.org/wiki/Hamiltonian_path)
- [YouTube లో Hamiltonian path](https://www.youtube.com/watch?v=dQr4wZCiJJ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [GeeksForGeeks లో Hamiltonian cycle](https://www.geeksforgeeks.org/backtracking-set-7-hamiltonian-cycle/)
