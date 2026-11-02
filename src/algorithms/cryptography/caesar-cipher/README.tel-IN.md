# Caesar Cipher Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Русский_](README.ru-RU.md)

Cryptography లో **Caesar cipher** (దీన్నే **Caesar's cipher**, **shift cipher**, **Caesar's code** లేదా **Caesar shift** అని కూడా అంటారు) అనేది అన్నిటికంటే సింపుల్ గా ఉండే, అందరికీ బాగా తెలిసిన encryption techniques లో ఒకటి. ఇది ఒక రకమైన substitution cipher — అంటే plaintext లో ఉన్న ప్రతి letter ని, alphabet లో ఒక fixed నంబర్ positions ముందుకు/వెనక్కి ఉన్న వేరే letter తో మార్చేస్తాం. ఉదాహరణకి, left shift `3` అనుకుంటే, `D` బదులు `A` వస్తుంది, `E` బదులు `B` వస్తుంది, అలా అన్నమాట. Julius Caesar తన పర్సనల్ లెటర్స్ లో ఈ పద్ధతి వాడేవాడు, అందుకే దీనికి ఆ పేరు వచ్చింది.

![Caesar Cipher Algorithm](https://upload.wikimedia.org/wikipedia/commons/4/4a/Caesar_cipher_left_shift_of_3.svg)

## Example

రెండు alphabets ని పక్కపక్కన పెట్టి ఈ మార్పుని చూపించొచ్చు — cipher alphabet అంటే మామూలు alphabet నే కొన్ని positions ఎడమకి గానీ కుడికి గానీ తిప్పితే వచ్చేది. ఉదాహరణకి, ఇక్కడ మూడు places left rotation తో Caesar cipher ఉంది. ఇది right shift 23 తో సమానం (ఈ shift నంబర్ నే key గా వాడతాం):

```text
Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
Cipher:   XYZABCDEFGHIJKLMNOPQRSTUVW
```

Encrypt చేసేటప్పుడు, message లో ప్రతి letter ని "plain" line లో వెతికి, దాని కింద "cipher" line లో ఉన్న letter ని రాసుకుంటాం.

```text
Plaintext:  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
Ciphertext: QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD
```

## Complexity

- Time: `O(|n|)`
- Space: `O(|n|)`

## References

- [Wikipedia లో Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
