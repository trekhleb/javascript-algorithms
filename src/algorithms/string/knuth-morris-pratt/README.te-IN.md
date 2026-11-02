# Knuth–Morris–Pratt Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Knuth–Morris–Pratt string searching algorithm (లేదా KMP algorithm) ఒక main "text string" `T` లో
"word" `W` ఎక్కడెక్కడ ఉందో వెతుకుతుంది. ఇది ఒక విషయం గమనిస్తుంది — mismatch జరిగినప్పుడు, next
match ఎక్కడ మొదలవ్వొచ్చో నిర్ణయించడానికి కావాల్సిన సమాచారం word లోనే ఉంటుంది. దాంతో ఇంతకుముందు
match అయిన characters ని మళ్ళీ చెక్ చేయాల్సిన పని ఉండదు.

## Complexity

- **Time:** `O(|W| + |T|)` (మామూలు `O(|W| * |T|)` తో పోలిస్తే చాలా ఫాస్ట్)
- **Space:** `O(|W|)`

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm)
- [YouTube](https://www.youtube.com/watch?v=GTJr8OvyEVQ&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
