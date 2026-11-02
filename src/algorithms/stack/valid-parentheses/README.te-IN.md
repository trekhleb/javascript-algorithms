# Valid Parentheses Problem

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

'(', ')', '{', '}', '[', ']' అనే characters మాత్రమే ఉన్న ఒక string s ఇస్తే, ఆ input string valid ఆ కాదా నిర్ణయించాలి.

Input string valid అవ్వాలంటే:

తెరిచిన brackets ని అదే రకం brackets తో మూయాలి.
తెరిచిన brackets ని కరెక్ట్ order లో మూయాలి.
మూసే ప్రతి bracket కి, అదే రకం తెరిచే bracket ఒకటి ఉండాలి.
 

Example 1:

`Input: s = "()"`

Output: true

Example 2:

`Input: s = "()[]{}"`

Output: true

Example 3:

`Input: s = "(]"`

Output: false

ఇది నిజానికి interviews లో చాలా ఎక్కువగా అడిగే ప్రశ్న, ఇంకా problems solve చేయడానికి stack data structure ఎలా వాడాలో చెప్పడానికి చాలా మంచి example.

## Solution
ఈ problem ని రెండు రకాలుగా solve చేయొచ్చు

### Bruteforce Approach
String మీద iterate చేస్తూ, string లో ప్రతి character కి, దాని చివరి closing character string లో ఎక్కడ ఉందో చెక్ చేయొచ్చు. String లో చివరి closing character దొరికాక, రెండు characters ని తీసేసి మళ్ళీ iteration చేస్తాం. ఏదైనా opening character కి closing character దొరకకపోతే, string invalid. దీని time complexity O(n^2), ఇది అంత efficient కాదు.

### Stack వాడి
అన్ని opening characters ని store చేయడానికి ఒక hashtable వాడొచ్చు, దాని value సంబంధిత closing character. తర్వాత string మీద iterate చేస్తూ, opening parentheses కనిపిస్తే, దాని closing character ని stack లోకి push చేస్తాం. Closing parentheses కనిపిస్తే, stack నుంచి pop చేసి, pop అయిన element ఇప్పటి closing parentheses character కి సమానమా అని కన్ఫర్మ్ చేస్తాం. సమానం కాకపోతే string invalid. Iteration అయిపోయాక, stack ఖాళీగా ఉందా అని కూడా చెక్ చేయాలి. ఖాళీగా లేకపోతే string invalid. ఖాళీగా ఉంటే, string valid. ఇది ఇంకా efficient approach — దీని Time complexity, Space complexity రెండూ O(n).


## References

- [Leetcode](https://leetcode.com/problems/valid-parentheses/)
