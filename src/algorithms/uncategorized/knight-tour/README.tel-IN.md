# Knight's Tour

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

**Knight's tour** అంటే chessboard మీద knight (గుర్రం) వేసే moves వరుస — అందులో knight ప్రతి square ని
ఒక్కసారి మాత్రమే visit చేస్తుంది. మొదలుపెట్టిన square నుంచి ఒక్క knight move దూరంలో ఉన్న square
దగ్గర knight ముగిస్తే (అంటే అదే దారిలో వెంటనే మళ్ళీ board మొత్తం తిరగగలిగేలా), ఆ tour **closed**,
లేకపోతే అది **open**.

**Knight's tour problem** అంటే knight's tour కనుక్కునే mathematical problem. Knight's tour కనుక్కునే
program రాయడం computer science students కి ఇచ్చే common problem. Knight's tour problem లో variations
అంటే — మామూలు `8×8` కాకుండా వేరే సైజ్ chessboards, ఇంకా irregular (దీర్ఘచతురస్రం కాని) boards.

Knight's tour problem అనేది graph theory లో ఇంకా జనరల్ అయిన **Hamiltonian path problem** కి ఒక
ఉదాహరణ. అలాగే closed knight's tour కనుక్కునే problem, Hamiltonian cycle problem కి ఒక ఉదాహరణ.

![Knight's Tour](https://upload.wikimedia.org/wikipedia/commons/d/da/Knight%27s_tour_anim_2.gif)

Chessboard మీద ఒక open knight's tour.

![Knight's Tour](https://upload.wikimedia.org/wikipedia/commons/c/ca/Knights-Tour-Animation.gif)

5 by 5 board మీద ఒక open knight's tour animation.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Knight%27s_tour)
- [GeeksForGeeks](https://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/)
