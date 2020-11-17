# Horner's Method

In mathematics, Horner's method (or Horner's scheme) is an algorithm for polynomial evaluation.
With this method, it is possible to evaluate a polynomial with only n additions and n multiplications.
Also, its storage requirements are only n times the number of bits of x.

Horner's method can be based on the following identity:
![](https://wikimedia.org/api/rest_v1/media/math/render/svg/2a576e42d875496f8b0f0dda5ebff7c2415532e4)
, which is called Horner's rule.

To solve the right part of the identity above, for a given x, we start by iterating through the polynomial from the inside out,
accumulating each iteration result. After n iterations, with n being the order of the polynomial, the accumulated result gives
us the polynomial evaluation. 
## References

- [Wikipedia](https://en.wikipedia.org/wiki/Horner%27s_method)
