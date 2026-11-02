# Red–Black Tree

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Português_](README.pt-BR.md)

Computer science లో **red–black tree** అనేది తనని తానే balance చేసుకునే ఒక రకమైన binary search tree.
Binary tree లో ప్రతి node కి ఒక అదనపు bit ఉంటుంది, ఆ bit ని మామూలుగా node color (ఎరుపు లేదా నలుపు)
గా చూస్తారు. Insertions, deletions సమయంలో tree దాదాపు balanced గా ఉండేలా చూడటానికి ఈ color bits వాడతారు.

Tree లో ప్రతి node కి రెండు colors లో ఒకటి వేసి balance ని కాపాడతారు — కొన్ని properties కి సరిపోయేలా.
ఆ properties అన్నీ కలిసి worst case లో tree ఎంత unbalanced అవ్వొచ్చో పరిమితం చేస్తాయి. Tree మారినప్పుడు,
coloring properties మళ్ళీ రావడానికి కొత్త tree ని మళ్ళీ సర్దుతారు, మళ్ళీ రంగులు వేస్తారు. ఈ సర్దడం, మళ్ళీ
రంగులు వేయడం ఫాస్ట్ గా జరిగేలా properties డిజైన్ చేశారు.

Tree balancing perfect కాదు, కానీ `O(log n)` టైమ్ లో search guarantee చేయడానికి సరిపోతుంది — ఇక్కడ `n`
అంటే tree లో మొత్తం elements సంఖ్య. Insertion, deletion operations, tree ని సర్దడం, మళ్ళీ రంగులు వేయడం
కూడా `O(log n)` టైమ్ లోనే జరుగుతాయి.

Red–black tree example:

![red-black tree](https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg)

## Properties

Binary search tree కి ఉండే conditions తో పాటు, red–black tree ఇవి కూడా పాటించాలి:

- ప్రతి node ఎరుపు గానీ నలుపు గానీ ఉండాలి.
- Root నలుపు. ఈ rule ని కొన్నిసార్లు వదిలేస్తారు. Root ని ఎప్పుడైనా ఎరుపు నుంచి నలుపుకి మార్చొచ్చు
(కానీ నలుపు నుంచి ఎరుపుకి ఎప్పుడూ కాదు) కాబట్టి, ఈ rule వల్ల analysis మీద పెద్ద ఎఫెక్ట్ ఉండదు.
- అన్ని leaves (NIL) నలుపు.
- ఒక node ఎరుపు అయితే, దాని ఇద్దరు children నలుపు.
- ఒక node నుంచి దాని కింద ఉన్న ఏ NIL node కి వెళ్ళే ప్రతి path లోనూ ఒకే సంఖ్యలో నలుపు nodes ఉంటాయి.

కొన్ని definitions: root నుంచి ఒక node వరకు ఉన్న నలుపు nodes సంఖ్యని ఆ node యొక్క **black depth** అంటారు;
root నుంచి leaves వరకు అన్ని paths లో ఉండే అదే నలుపు nodes సంఖ్యని red–black tree యొక్క **black-height** అంటారు.

ఈ conditions red–black trees కి ఒక కీలకమైన property ని తీసుకొస్తాయి: _root నుంచి అతి దూరంగా ఉన్న leaf కి
path, root నుంచి అతి దగ్గరగా ఉన్న leaf కి path కంటే రెట్టింపు కంటే ఎక్కువ పొడవు ఉండదు_. దాంతో tree దాదాపు
height-balanced గా ఉంటుంది. Values insert చేయడం, delete చేయడం, కనుక్కోవడం లాంటి operations కి worst-case
లో tree ఎత్తుకి proportional టైమ్ పడుతుంది కాబట్టి — ఎత్తు మీద ఉన్న ఈ theoretical upper bound వల్ల,
మామూలు binary search trees లాగా కాకుండా red–black trees worst case లో కూడా ఫాస్ట్ గా ఉంటాయి.

## Insertion సమయంలో Balancing

### Uncle ఎరుపు (RED) అయితే
![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase2.png)

### Uncle నలుపు (BLACK) అయితే

- Left Left Case (`p` అనేది `g` కి left child, `x` అనేది `p` కి left child)
- Left Right Case (`p` అనేది `g` కి left child, `x` అనేది `p` కి right child)
- Right Right Case (`p` అనేది `g` కి right child, `x` అనేది `p` కి right child)
- Right Left Case (`p` అనేది `g` కి right child, `x` అనేది `p` కి left child)

(ఇక్కడ `x` అంటే కొత్తగా కలిపిన node, `p` అంటే దాని parent, `g` అంటే grandparent, uncle అంటే `p` పక్కన ఉన్న sibling.)

#### Left Left Case (g, p, x చూడండి)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3a1.png)

#### Left Right Case (g, p, x చూడండి)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3b.png)

#### Right Right Case (g, p, x చూడండి)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3c.png)

#### Right Left Case (g, p, x చూడండి)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3d.png)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- [Tushar Roy - Red Black Tree Insertion (YouTube)](https://www.youtube.com/watch?v=UaLIHuR1t8Q&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=63)
- [Tushar Roy - Red Black Tree Deletion (YouTube)](https://www.youtube.com/watch?v=CTvfzU_uNKE&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=64)
- [GeeksForGeeks లో Red Black Tree Insertion](https://www.geeksforgeeks.org/red-black-tree-set-2-insert/)
- [Red Black Tree Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
