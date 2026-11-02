# Rail Fence Cipher

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

**Rail fence cipher** (దీన్నే **zigzag cipher** అని కూడా అంటారు) అనేది ఒక [transposition cipher](https://en.wikipedia.org/wiki/Transposition_cipher). ఇందులో encode చేయడానికి message ని ఒక fence (కంచె) మీద ఉన్న కొన్ని rails (వరుసలు) లోకి పంచుతాం. పైన ఎడమ వైపు నుంచి మొదలుపెట్టి, ప్రతి position లో ఒక character పెడుతూ, వాలుగా (diagonal గా) కిందకి వెళ్తాం. చివరి rail కి చేరగానే, మళ్ళీ వాలుగా పైకి, మొదటి rail వరకు zig-zag లాగా వెళ్తాం. Message మొత్తం fence మీద పరిచేదాకా ఇలాగే మళ్ళీ మళ్ళీ చేస్తాం. పై నుంచి కింద వరకు ప్రతి rail లో ఉన్న text ని కలిపితే వచ్చేదే encode అయిన message.

[Wikipedia](https://en.wikipedia.org/wiki/Rail_fence_cipher) లో ఉన్నట్టు, `WE ARE DISCOVERED. FLEE AT ONCE` అనే message `3`-rail fence మీద ఇలా కనిపిస్తుంది:

```
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
-------------------------------------------------
             WECRLTEERDSOEEFEAOCAIVDEN
```

Decode చేయడానికి, అదే zig-zag pattern తో encode అయిన fence ని మళ్ళీ తయారుచేస్తాం — కానీ ఒక్కోసారి ఒక్క rail లో మాత్రమే characters పెడతాం. ఇది అర్థమవ్వడానికి, ఇంకా నింపకూడని rails మీద ఒక dash (-) పెట్టొచ్చు. మొదటి rail నింపిన తర్వాత fence ఇలా కనిపిస్తుంది — dashes అంటే ఆ positions కి వెళ్ళాం కానీ ఇంకా నింపలేదు అని.

```
W . . . E . . . C . . . R . . . L . . . T . . . E
. - . - . - . - . - . - . - . - . - . - . - . - .
. . - . . . - . . . - . . . - . . . - . . . - . .
```

Fence లో visit చేసిన positions సంఖ్య, message లో ఉన్న characters సంఖ్యకి సమానం అవ్వగానే, తర్వాత rail నింపడం మొదలుపెట్టాలి.

## References

- [Wikipedia లో Rail Fence Cipher](https://en.wikipedia.org/wiki/Rail_fence_cipher)
- [Rail Fence Cipher Calculator](https://crypto.interactive-maths.com/rail-fence-cipher.html)
