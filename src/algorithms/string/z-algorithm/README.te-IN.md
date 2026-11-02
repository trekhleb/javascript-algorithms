# Z Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Z-algorithm ఒక main "text string" `T` లో "word" `W` ఎక్కడెక్కడ ఉందో linear time `O(|W| + |T|)` లో
కనుక్కుంటుంది.

`n` పొడవు ఉన్న string `S` ఇస్తే, ఈ algorithm ఒక array `Z` తయారుచేస్తుంది — ఇక్కడ `Z[i]` అంటే
`S[i]` నుంచి మొదలయ్యే, `S` కి prefix కూడా అయిన అతి పొడవైన substring. Word `W`, ఒక ప్రత్యేక character
(ఉదాహరణకి `$`), తర్వాత text `T` — ఇవన్నీ కలిపి వచ్చే string కి `Z` కనుక్కుంటే pattern matching కి
ఉపయోగపడుతుంది — ఎందుకంటే ఏదైనా index `i` దగ్గర `Z[i]` pattern పొడవుకి సమానం అయితే, ఆ point దగ్గర
pattern ఉన్నట్టే.

`Z` array ని రెండు nested loops తో `O(|W| * |T|)` టైమ్ లో లెక్కపెట్టొచ్చు, కానీ కింద ఉన్న పద్ధతి దాన్ని
linear time లో ఎలా తెచ్చుకోవాలో చూపిస్తుంది. ఐడియా ఏంటంటే — string లో letters మీద iterate చేస్తూ
(index `i` ని `1` నుంచి `n - 1` వరకు), ఒక interval `[L, R]` ని maintain చేస్తాం. అది `1 ≤ L ≤ i ≤ R`
అయ్యేలా, `S[L...R]` అనేది prefix గానూ substring గానూ ఉండేలా, maximum `R` ఉన్న interval (అలాంటి
interval లేకపోతే, `L = R =  - 1` పెట్టేయండి). `i = 1` కి, `S[0...]` ని `S[1...]` తో compare చేసి
`L`, `R` ని సింపుల్ గా లెక్కపెట్టొచ్చు.

**Z array example**

```
Index            0   1   2   3   4   5   6   7   8   9  10  11 
Text             a   a   b   c   a   a   b   x   a   a   a   z
Z values         X   1   0   0   3   1   0   0   2   2   1   0 
```

ఇంకొన్ని examples

```
str =  a a a a a a
Z[] =  x 5 4 3 2 1
```

```
str =  a a b a a c d
Z[] =  x 1 0 2 1 0 0
```

```
str =  a b a b a b a b
Z[] =  x 0 6 0 4 0 2 0
```

**Z box example**

![z-box](https://ivanyu.me/wp-content/uploads/2014/09/zalg1.png)

## Complexity

- **Time:** `O(|W| + |T|)`
- **Space:** `O(|W|)`

## References

- [GeeksForGeeks](https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/)
- [YouTube](https://www.youtube.com/watch?v=CpZh4eF8QBw&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=70)
- [Ivan Yurchenko రాసిన Z Algorithm](https://ivanyu.me/blog/2013/10/15/z-algorithm/)
