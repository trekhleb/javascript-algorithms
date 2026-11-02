# Binary Search

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Português brasileiro_](README.pt-BR.md),
[_Español_](README.es-ES.md)

Computer science లో binary search (దీన్నే half-interval search, logarithmic search, లేదా
binary chop అని కూడా అంటారు) అనేది sort అయిన array లో ఒక target value ఎక్కడ ఉందో కనుక్కునే
search algorithm. Binary search target value ని array మధ్యలో ఉన్న element తో compare చేస్తుంది;
అవి సమానం కాకపోతే, target ఉండే chance లేని సగాన్ని పక్కన పెట్టేసి, మిగిలిన సగంలో search
కంటిన్యూ చేస్తుంది — దొరికేదాకా. మిగిలిన సగం ఖాళీ అయిపోయి search ముగిస్తే, target array లో లేదు
అని అర్థం.

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

## Complexity

**Time Complexity**: `O(log(n))` - ఎందుకంటే ప్రతి next iteration లో search area ని రెండుగా
విడగొడతాం.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [YouTube](https://www.youtube.com/watch?v=P3YID7liBug&index=29&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
