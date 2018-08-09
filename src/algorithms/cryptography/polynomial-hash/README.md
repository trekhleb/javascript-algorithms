# Polynomial Rolling Hash

## Hash Function

**Hash functions** are used to map large data sets of elements of an arbitrary 
length (*the keys*) to smaller data sets of elements of a fixed length
(*the fingerprints*).

The basic application of hashing is efficient testing of equality of keys by
comparing their fingerprints.

A *collision* happens when two different keys have the same fingerprint. The way 
in which collisions are handled is crucial in most applications of hashing. 
Hashing is particularly useful in construction of efficient practical algorithms.

## Rolling Hash

A **rolling hash** (also known as recursive hashing or rolling checksum) is a hash
function where the input is hashed in a window that moves through the input.

A few hash functions allow a rolling hash to be computed very quickly — the new 
hash value is rapidly calculated given only the following data:

- old hash value,
- the old value removed from the window,
- and the new value added to the window.

## Polynomial String Hashing

An ideal hash function for strings should obviously depend both on the *multiset* of
the symbols present in the key and on the *order* of the symbols. The most common 
family of such hash functions treats the symbols of a string as coefficients of 
a *polynomial* with an integer variable `p` and computes its value modulo an 
integer constant `M`:

The *Rabin–Karp string search algorithm* is often explained using a very simple
rolling hash function that only uses multiplications and 
additions - **polynomial rolling hash**:

> H(s<sub>0</sub>, s<sub>1</sub>, ..., s<sub>k</sub>) = (s<sub>0</sub> * p<sup>0</sup> + s<sub>1</sub> * p<sup>1</sup> + ... + s<sub>k</sub> * p<sup>k</sup>) mod M

where `p` is a constant, and *(s<sub>1</sub>, ... , s<sub>k</sub>)* are the input
characters.

A careful choice of the parameters `M`, `p` is important to obtain “good”
properties of the hash function, i.e., low collision rate.

In order to avoid manipulating huge `H` values, all math is done modulo `M`.

Removing and adding characters simply involves adding or subtracting the first or
last term. Shifting all characters by one position to the right requires multiplying
the entire sum `H` by `a`. Shifting all characters by one position to the left
requires dividing the entire sum `H` by `a`.

## References

- [Where to Use Polynomial String Hashing](https://www.mii.lt/olympiads_in_informatics/pdf/INFOL119.pdf)
- [Hash Function on Wikipedia](https://en.wikipedia.org/wiki/Hash_function)
- [Rolling Hash on Wikipedia](https://en.wikipedia.org/wiki/Rolling_hash)
