# Bellman–Ford Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Bellman–Ford algorithm అనేది weighted digraph లో ఒక source vertex నుంచి మిగతా
అన్ని vertices కి shortest paths లెక్కపెట్టే algorithm. ఇదే problem కి
Dijkstra's algorithm కంటే ఇది slow గా ఉంటుంది, కానీ ఎక్కువ రకాల graphs కి పనిచేస్తుంది —
ఎందుకంటే కొన్ని edges కి weights negative numbers గా ఉన్నా ఇది handle చేయగలదు.

![Bellman-Ford](https://upload.wikimedia.org/wikipedia/commons/2/2e/Shortest_path_Dijkstra_vs_BellmanFord.gif)

## Complexity

Worst-case performance `O(|V||E|)`
Best-case performance	`O(|E|)`
Worst-case space complexity `O(|V|)`

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)
- [YouTube లో Michael Sambol](https://www.youtube.com/watch?v=obWXjtg0L64&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
