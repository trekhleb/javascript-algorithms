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

> H(s<sub>0</sub>, s<sub>1</sub>, ..., s<sub>k</sub>) = s<sub>0</sub> * p<sup>k-1</sup> + s<sub>1</sub> * p<sup>k-2</sup> + ... + s<sub>k</sub> * p<sup>0</sup>

where `p` is a constant, and *(s<sub>1</sub>, ... , s<sub>k</sub>)* are the input
characters.

For example we can convert short strings to key numbers by multiplying digit codes by 
powers of a constant. The three letter word `ace` could turn into a number 
by calculating:

> key = 1 * 26<sup>2</sup> + 3 * 26<sup>1</sup> + 5 * 26<sup>0</sup>

In order to avoid manipulating huge `H` values, all math is done modulo `M`.

> H(s<sub>0</sub>, s<sub>1</sub>, ..., s<sub>k</sub>) = (s<sub>0</sub> * p<sup>k-1</sup> + s<sub>1</sub> * p<sup>k-2</sup> + ... + s<sub>k</sub> * p<sup>0</sup>) mod M

A careful choice of the parameters `M`, `p` is important to obtain “good”
properties of the hash function, i.e., low collision rate.

This approach has the desirable attribute of involving all the characters in the 
input string. The calculated key value can then be hashed into an array index in
the usual way:

```javascript
function hash(key, arraySize) {
  const base = 13;

  let hash = 0;
  for (let charIndex = 0; charIndex < key.length; charIndex += 1) {
    const charCode = key.charCodeAt(charIndex);
    hash += charCode * (base ** (key.length - charIndex - 1));
  }

  return hash % arraySize;
}
```

The `hash()` method is not as efficient as it might be. Other than the 
character conversion, there are two multiplications and an addition inside 
the loop. We can eliminate one multiplication by using **Horner's method*:
 
> a<sub>4</sub> * x<sup>4</sup> + a<sub>3</sub> * x<sup>3</sup> + a<sub>2</sub> * x<sup>2</sup> + a<sub>1</sub> * x<sup>1</sup> + a<sub>0</sub> = (((a<sub>4</sub> * x + a<sub>3</sub>) * x + a<sub>2</sub>) * x + a<sub>1</sub>) * x + a<sub>0</sub>

In other words:

> H<sub>i</sub> = (P * H<sub>i-1</sub> + S<sub>i</sub>) mod M

The `hash()` cannot handle long strings because the hashVal exceeds the size of 
int. Notice that the key always ends up being less than the array size. 
In Horner's method we can apply the modulo (%) operator at each step in the 
calculation. This gives the same result as applying the modulo operator once at 
the end, but avoids the overflow.

```javascript
function hash(key, arraySize) {
  const base = 13;

  let hash = 0;
  for (let charIndex = 0; charIndex < key.length; charIndex += 1) {
    const charCode = key.charCodeAt(charIndex);
    hash = (hash * base + charCode) % arraySize;
  }

  return hash;
}
```

Polynomial hashing has a rolling property: the fingerprints can be updated 
efficiently when symbols are added or removed at the ends of the string
(provided that an array of powers of p modulo M of sufficient length is stored).
The popular Rabin–Karp pattern matching algorithm is based on this property

## References

- [Where to Use Polynomial String Hashing](https://www.mii.lt/olympiads_in_informatics/pdf/INFOL119.pdf)
- [Hashing on uTexas](https://www.cs.utexas.edu/~mitra/csSpring2017/cs313/lectures/hash.html)
- [Hash Function on Wikipedia](https://en.wikipedia.org/wiki/Hash_function)
- [Rolling Hash on Wikipedia](https://en.wikipedia.org/wiki/Rolling_hash)
