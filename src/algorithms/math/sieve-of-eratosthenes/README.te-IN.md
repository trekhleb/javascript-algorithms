# Sieve of Eratosthenes

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Sieve of Eratosthenes అనేది ఒక limit `n` వరకు ఉన్న అన్ని prime numbers కనుక్కునే algorithm.

దీన్ని పురాతన గ్రీకు mathematician అయిన Cyrene కి చెందిన Eratosthenes కనిపెట్టాడు అంటారు.

## ఇది ఎలా పనిచేస్తుంది

1. `n + 1` positions ఉన్న ఒక boolean array తయారుచేయండి (`0` నుంచి `n` వరకు ఉన్న నంబర్ల కోసం)
2. Positions `0`, `1` ని `false` గా, మిగతావన్నీ `true` గా పెట్టండి
3. Position `p = 2` (మొదటి prime number) నుంచి మొదలుపెట్టండి
4. `p` యొక్క అన్ని multiples ని `false` గా mark చేయండి (అంటే positions `2 * p`, `3 * p`, `4 * p`... array చివరి వరకు)
5. Array లో `p` కంటే పెద్దదైన, `true` గా ఉన్న మొదటి position కనుక్కోండి. అలాంటి position లేకపోతే, ఆపేయండి. ఉంటే, `p` ని ఈ కొత్త నంబర్ (అదే next prime) గా పెట్టి, step 4 నుంచి మళ్ళీ చేయండి

Algorithm అయిపోయాక, array లో `true` గా మిగిలిన నంబర్లన్నీ `n` కంటే తక్కువ ఉన్న primes.

ఈ algorithm ని ఇంకా మెరుగుపరచడానికి, step 4 లో `p` యొక్క multiples ని `2 * p` నుంచి కాకుండా
`p * p` నుంచి mark చేయడం మొదలుపెట్టొచ్చు. ఇది ఎందుకు పనిచేస్తుందంటే, ఆ టైమ్ కి `p` యొక్క
చిన్న multiples ఇప్పటికే `false` గా mark అయిపోయి ఉంటాయి.

## Example

![Sieve](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)

## Complexity

ఈ algorithm complexity `O(n log(log n))`.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
