# Longest common subsequence problem

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Longest common subsequence (LCS) problem అంటే — కొన్ని sequences (మామూలుగా రెండు sequences) ఉన్న
set లో, అన్ని sequences లోనూ common గా ఉన్న అతి పొడవైన subsequence కనుక్కోవడం. ఇది longest common
substring problem కంటే వేరు: substrings లాగా కాకుండా, subsequences original sequences లో వరుసగా
పక్కపక్కనే ఉండాల్సిన అవసరం లేదు.

## ఎక్కడ వాడతారు

Longest common subsequence problem అనేది ఒక classic computer science problem. diff utility లాంటి
data compare చేసే programs కి ఇదే బేస్, ఇంకా bioinformatics లో కూడా వాడతారు. Git లాంటి revision
control systems కూడా దీన్ని బాగా వాడతాయి — files collection లో చేసిన చాలా మార్పులని కలపడానికి.

## Example

- `ABCDGH`, `AEDFHR` అనే input sequences కి LCS `ADH`, దాని పొడవు 3.
- `AGGTAB`, `GXTXAYB` అనే input sequences కి LCS `GTAB`, దాని పొడవు 4.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)
- [YouTube](https://www.youtube.com/watch?v=NnD96abizww&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
