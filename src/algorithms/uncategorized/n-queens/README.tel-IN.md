# N-Queens Problem

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

**Eight queens puzzle** అంటే `8×8` chessboard మీద ఎనిమిది chess queens ని పెట్టాలి — ఏ రెండు queens
ఒకదాన్నొకటి బెదిరించకూడదు (attack చేయకూడదు). కాబట్టి solution లో ఏ రెండు queens ఒకే row, column,
లేదా diagonal లో ఉండకూడదు. Eight queens puzzle అనేది ఇంకా జనరల్ అయిన *n queens problem* కి ఒక
ఉదాహరణ — `n×n` chessboard మీద ఒకదాన్నొకటి attack చేయని n queens ని పెట్టడం. `n=2`, `n=3` తప్ప
అన్ని natural numbers `n` కి solutions ఉన్నాయి.

ఉదాహరణకి, 4 Queen problem కి ఒక solution ఇది.

![N Queens](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/N_Queen_Problem.jpg)

Output గా ఒక binary matrix రావాలి — queens పెట్టిన blocks లో 1s ఉంటాయి. ఉదాహరణకి పైన 4 queen
solution కి output matrix ఇది.

```
{ 0,  1,  0,  0}
{ 0,  0,  0,  1}
{ 1,  0,  0,  0}
{ 0,  0,  1,  0}
```

## Naive Algorithm

Board మీద queens తో వచ్చే అన్ని possible configurations తయారుచేసి, ఇచ్చిన conditions కి సరిపోయే
configuration ని print చేయండి.

```
while there are untried configurations
{
   generate the next configuration
   if queens don't attack in this configuration then
   {
      print this configuration;
   }
}
```

## Backtracking Algorithm

ఐడియా ఏంటంటే — అన్నిటికంటే ఎడమ column నుంచి మొదలుపెట్టి, వేరువేరు columns లో queens ని ఒక్కొక్కటిగా
పెట్టడం. ఒక column లో queen పెట్టేటప్పుడు, ఇప్పటికే పెట్టిన queens తో గొడవ (clash) ఉందా అని చెక్ చేస్తాం.
ఇప్పటి column లో, clash లేని row దొరికితే, ఆ row, column ని solution లో భాగంగా mark చేస్తాం. Clashes
వల్ల అలాంటి row దొరకకపోతే, వెనక్కి (backtrack) వచ్చి false return చేస్తాం.

```
1) Start in the leftmost column
2) If all queens are placed
    return true
3) Try all rows in the current column.  Do following for every tried row.
    a) If the queen can be placed safely in this row then mark this [row, 
        column] as part of the solution and recursively check if placing  
        queen here leads to a solution.
    b) If placing queen in [row, column] leads to a solution then return 
        true.
    c) If placing queen doesn't lead to a solution then unmark this [row, 
        column] (Backtrack) and go to step (a) to try other rows.
3) If all rows have been tried and nothing worked, return false to trigger 
    backtracking.
```

(పైన steps సింపుల్ గా: 1) ఎడమ column నుంచి మొదలుపెట్టండి. 2) అన్ని queens పెట్టేస్తే true return చేయండి.
3) ఇప్పటి column లో అన్ని rows ట్రై చేయండి — queen ని ఆ row లో safe గా పెట్టగలిగితే ఆ [row, column] ని
mark చేసి, ఇక్కడ పెడితే solution వస్తుందా అని recursive గా చెక్ చేయండి; వస్తే true return చేయండి; రాకపోతే
ఆ [row, column] ని unmark చేసి (Backtrack) వేరే rows ట్రై చేయండి. అన్ని rows ట్రై చేసినా ఏదీ పనిచేయకపోతే,
backtracking కోసం false return చేయండి.)

## Bitwise Solution

Bitwise algorithm బేసిక్ గా problem ని ఇలా చూస్తుంది:

- Queens వాలుగా (diagonal), నిలువుగా, లేదా అడ్డంగా attack చేయగలవు. కాబట్టి, ప్రతి row లో ఒకే queen,
ప్రతి column లో ఒకే queen, ఇంకా ప్రతి diagonal మీద మహా అయితే ఒక queen ఉండొచ్చు.
- ఒక row లో ఒకే queen ఉండగలదు అని తెలుసు కాబట్టి, మొదటి row నుంచి మొదలుపెట్టి, ఒక queen పెట్టి,
తర్వాత రెండో row కి వెళ్ళి, రెండో queen పెట్టి, అలా కంటిన్యూ చేస్తాం — a) valid solution వచ్చేదాకా గానీ,
b) దారి మూసుకుపోయేదాకా గానీ (అంటే వేరే queens నుంచి "safe" గా ఉండేలా queen పెట్టలేనప్పుడు).
- ఒక row లో ఒకే queen పెడుతున్నాం కాబట్టి, అడ్డం attacks గురించి ఆందోళన అక్కర్లేదు — ఎందుకంటే ఏ
queen కూడా ఇంకో queen ఉన్న row లో ఉండదు.
- అంటే ఒక square మీద queen పెట్టే ముందు మూడు విషయాలు మాత్రమే చెక్ చేయాలి: 1) ఆ square column లో
వేరే queens లేవు, 2) ఆ square ఎడమ diagonal మీద వేరే queens లేవు, 3) ఆ square కుడి diagonal మీద
వేరే queens లేవు.
- Queen ని safe గా పెట్టడానికి ఎక్కడా చోటు లేని point కి వస్తే, ఇప్పటి ప్రయత్నం వదిలేసి వెంటనే next
possibility test చేయొచ్చు.

ముందు recursive function గురించి మాట్లాడుకుందాం. ఇది 3 parameters తీసుకుంటుంది అని గమనిస్తారు:
`leftDiagonal`, `column`, `rightDiagonal`. ఇవన్నీ technical గా integers, కానీ ఒక integer ని bits వరుసగా
చూపిస్తారు అనే విషయాన్ని algorithm వాడుకుంటుంది. కాబట్టి, ఈ parameters ఒక్కోటి `N` bits వరుస అని
అనుకోండి.

ప్రతి parameter లో ప్రతి bit అంటే, ఇప్పటి row లో దానికి సంబంధించిన location "ఖాళీగా" ఉందా అని.

ఉదాహరణకి:
- `N=4` కి, column value `0010` అయితే 3rd column లో ఇప్పటికే ఒక queen ఉంది అని అర్థం.
- `N=8` కి, row 5 దగ్గర ld value `00011000` అయితే, ఆ row లో columns 4, 5 గుండా వెళ్ళే పై-ఎడమ నుంచి
కింద-కుడి diagonals లో ఇప్పటికే queens ఉన్నాయి అని అర్థం.

`leftDiagonal`, `column`, `rightDiagonal` ని అర్థం చేసుకోడానికి కింద ఒక బొమ్మ ఉంది.

![](http://gregtrowbridge.com/content/images/2014/Jul/Screenshot-from-2014-06-17-19-46-20.png)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Eight_queens_puzzle)
- [GeeksForGeeks](https://www.geeksforgeeks.org/backtracking-set-3-n-queen-problem/)
- [YouTube లో Abdul Bari](https://www.youtube.com/watch?v=xFv_Hl4B83A&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube లో Tushar Roy](https://www.youtube.com/watch?v=xouin83ebxE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- Bitwise Solution
  - [Wikipedia](https://en.wikipedia.org/wiki/Eight_queens_puzzle)
  - [Greg Trowbridge solution](http://gregtrowbridge.com/a-bitwise-solution-to-the-n-queens-problem-in-javascript/)
