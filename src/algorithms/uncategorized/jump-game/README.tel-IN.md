# Jump Game

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

## Problem

Negative కాని integers ఉన్న ఒక array ఇస్తారు, మొదట్లో మీరు array లో మొదటి index దగ్గర ఉంటారు.
Array లో ప్రతి element అంటే ఆ position నుంచి మీరు దూకగలిగే maximum దూరం.

మీరు చివరి index కి చేరగలరా లేదా నిర్ణయించండి.

**Example #1**

```
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

(Index 0 నుంచి 1 కి 1 step దూకి, తర్వాత 3 steps దూకితే చివరి index వస్తుంది.)

**Example #2**

```
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
```

(ఏం చేసినా మీరు index 3 దగ్గరికే వస్తారు. దాని maximum jump దూరం 0, కాబట్టి చివరి index కి చేరడం కుదరదు.)

## పేర్లు

Array లో ఒక position నుంచి మొదలుపెట్టి చివరి index కి చేరగలిగితే, ఆ position ని **"good index"** అంటాం.
లేకపోతే, ఆ index ని **"bad index"** అంటాం. అప్పుడు problem అంటే — index 0 "good index" ఆ కాదా అని తేల్చడమే.

## Solutions

### Approach 1: Backtracking

ఇది inefficient solution — మొదటి position నుంచి చివరి position కి తీసుకెళ్ళే ప్రతి jump pattern ని
ట్రై చేస్తాం. మొదటి position నుంచి మొదలుపెట్టి, చేరగలిగే ప్రతి index కి దూకుతాం. చివరి index వచ్చేదాకా
ఇదే మళ్ళీ మళ్ళీ చేస్తాం. ఇరుక్కుపోతే, వెనక్కి (backtrack) వస్తాం.

> [backtrackingJumpGame.js](backtrackingJumpGame.js) file చూడండి

**Time complexity:**: `O(2^n)`.
మొదటి position నుంచి చివరి position కి దూకడానికి 2<sup>n</sup> (upper bound) పద్ధతులు ఉన్నాయి,
ఇక్కడ `n` అంటే array `nums` పొడవు.

**Auxiliary Space Complexity**: `O(n)`.
Recursion కి stack frames కోసం అదనపు memory కావాలి.

### Approach 2: Dynamic Programming Top-down

Top-down Dynamic Programming ని optimize చేసిన backtracking గా అనుకోవచ్చు. ఇది ఒక విషయం మీద
ఆధారపడుతుంది — ఒక index good / bad అని ఒకసారి తేలిపోతే, ఆ result ఇక ఎప్పటికీ మారదు. అంటే ఆ result
ని store చేసుకోవచ్చు, ప్రతిసారి మళ్ళీ లెక్కపెట్టాల్సిన అవసరం లేదు.

కాబట్టి, array లో ప్రతి position కి, ఆ index good ఆ bad ఆ అని గుర్తుపెట్టుకుంటాం. ఈ array ని memo
అందాం, దాని values GOOD, BAD, UNKNOWN లో ఏదో ఒకటి. ఈ technique ని memoization అంటారు.

> [dpTopDownJumpGame.js](dpTopDownJumpGame.js) file చూడండి

**Time complexity:**: `O(n^2)`.
Array లో ప్రతి element `i` కి, GOOD index కనుక్కోవడానికి దాని కుడి వైపు ఉన్న next `nums[i]` elements
చూస్తాం. `nums[i]` మహా అయితే `n` ఉండొచ్చు, ఇక్కడ `n` అంటే array `nums` పొడవు.

**Auxiliary Space Complexity**: `O(2 * n) = O(n)`.
మొదటి `n` recursion నుంచి వస్తుంది. రెండో `n` memo table వాడటం వల్ల వస్తుంది.

### Approach 3: Dynamic Programming Bottom-up

Recursion తీసేసి top-down ని bottom-up గా మారుస్తాం. Practical గా, దీంతో performance బెటర్ అవుతుంది —
ఎందుకంటే method stack overhead ఉండదు, ఇంకా caching వల్ల కూడా లాభం రావొచ్చు. ఇంకా ముఖ్యంగా, ఈ step
తర్వాత ఇంకా optimize చేసే అవకాశాలు తెరుస్తుంది. మామూలుగా top-down approach లో steps order ని
తిరగేసి recursion తీసేస్తారు.

ఇక్కడ గమనించాల్సింది ఏంటంటే — మనం ఎప్పుడూ కుడి వైపుకే దూకుతాం. అంటే array కుడి వైపు నుంచి
మొదలుపెడితే, ప్రతిసారి మన కుడి వైపు ఉన్న position గురించి అడిగినప్పుడు, ఆ position GOOD ఆ BAD ఆ అనేది
ఇప్పటికే తేలిపోయి ఉంటుంది. అంటే ఇక recursion అవసరం లేదు, ఎప్పుడూ memo table లోనే answer దొరుకుతుంది.

> [dpBottomUpJumpGame.js](dpBottomUpJumpGame.js) file చూడండి

**Time complexity:**: `O(n^2)`.
Array లో ప్రతి element `i` కి, GOOD index కనుక్కోవడానికి దాని కుడి వైపు ఉన్న next `nums[i]` elements
చూస్తాం. `nums[i]` మహా అయితే `n` ఉండొచ్చు, ఇక్కడ `n` అంటే array `nums` పొడవు.

**Auxiliary Space Complexity**: `O(n)`.
ఇది memo table వాడటం వల్ల వస్తుంది.
 
### Approach 4: Greedy

Code bottom-up లోకి వచ్చాక, చివరిగా ఒక ముఖ్యమైన విషయం గమనించొచ్చు. ఒక position నుంచి GOOD position
కి దూకగలమా అని చూసేటప్పుడు, మనం ఎప్పుడూ ఒక్కటే వాడతాం — మొదటిది. అంటే, అన్నిటికంటే ఎడమ వైపు
ఉన్నది. ఈ ఎడమ వైపు GOOD position ని ఒక సెపరేట్ variable లో ట్రాక్ చేస్తే, దాని కోసం array లో వెతకాల్సిన
అవసరం ఉండదు. అంతే కాదు, అసలు array వాడటమే ఆపేయొచ్చు.

> [greedyJumpGame.js](greedyJumpGame.js) file చూడండి

**Time complexity:**: `O(n)`.
`nums` array మీద ఒక్కసారి మాత్రమే వెళ్తాం, కాబట్టి `n` steps, ఇక్కడ `n` అంటే array `nums` పొడవు.

**Auxiliary Space Complexity**: `O(1)`.
ఏ అదనపు memory వాడట్లేదు.

## References

- [LeetCode లో Jump Game పూర్తి వివరణ](https://leetcode.com/articles/jump-game/)
- [Dynamic Programming vs Divide and Conquer](https://itnext.io/dynamic-programming-vs-divide-and-conquer-2fea680becbe)
- [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming)
- [Wikipedia లో Memoization](https://en.wikipedia.org/wiki/Memoization)
- [Wikipedia లో Top-Down and Bottom-Up Design](https://en.wikipedia.org/wiki/Top-down_and_bottom-up_design)
