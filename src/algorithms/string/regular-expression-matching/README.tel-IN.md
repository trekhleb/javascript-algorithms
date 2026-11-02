# Regular Expression Matching

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Input string `s`, pattern `p` ఇస్తే, `.`, `*` కి support ఉన్న regular expression matching ని implement చేయాలి.

- `.` ఏ ఒక్క character కైనా match అవుతుంది.
- `*` దాని ముందు ఉన్న element zero లేదా అంతకంటే ఎక్కువసార్లు ఉంటే match అవుతుంది.

Matching అనేది input string **మొత్తాన్ని** cover చేయాలి (కొంత భాగం కాదు).

**Note**

- `s` ఖాళీగా ఉండొచ్చు, అందులో `a-z` small letters మాత్రమే ఉంటాయి.
- `p` ఖాళీగా ఉండొచ్చు, అందులో `a-z` small letters, ఇంకా `.` లేదా `*` లాంటి characters మాత్రమే ఉంటాయి.

## Examples

**Example #1**

Input:
```
s = 'aa'
p = 'a'
```

Output: `false`

Explanation: `a` అనేది string `aa` మొత్తానికి match అవ్వదు.

**Example #2**

Input:
```
s = 'aa'
p = 'a*'
```

Output: `true`

Explanation: `*` అంటే దాని ముందు ఉన్న element `a` zero లేదా అంతకంటే ఎక్కువసార్లు అని.
కాబట్టి `a` ని ఒకసారి రిపీట్ చేస్తే, అది `aa` అవుతుంది.

**Example #3**

Input:

```
s = 'ab'
p = '.*'
```

Output: `true`

Explanation: `.*` అంటే "ఏ character (`.`) అయినా zero లేదా అంతకంటే ఎక్కువసార్లు (`*`)" అని.

**Example #4**

Input:

```
s = 'aab'
p = 'c*a*b'
```

Output: `true`

Explanation: `c` ని 0 సార్లు, `a` ని 1 సారి రిపీట్ చేయొచ్చు. కాబట్టి ఇది `aab` కి match అవుతుంది.

## References

- [YouTube](https://www.youtube.com/watch?v=l3hda49XcDE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=71&t=0s)
- [LeetCode](https://leetcode.com/problems/regular-expression-matching/description/)
