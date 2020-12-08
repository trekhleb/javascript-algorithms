# Horner's Method

In mathematics, Horner's method (or Horner's scheme) is an algorithm for polynomial evaluation. With this method, it is possible to evaluate a polynomial with only `n` additions and `n` multiplications. Hence, its storage requirements are `n` times the number of bits of `x`.

Horner's method can be based on the following identity:

![Horner's rule](https://wikimedia.org/api/rest_v1/media/math/render/svg/2a576e42d875496f8b0f0dda5ebff7c2415532e4)

This identity is called _Horner's rule_.

To solve the right part of the identity above, for a given `x`, we start by iterating through the polynomial from the inside out, accumulating each iteration result. After `n` iterations, with `n` being the order of the polynomial, the accumulated result gives us the polynomial evaluation. 

**Using the polynomial:**
![Traditional approach](http://www.sciweavers.org/tex2img.php?eq=%244x%5E4%20%2B%202x%5E3%20%2B%203x%5E2%2B%20x%5E1%20%2B%203%24&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0), a traditional approach to evaluate it at `x = 2`, could be representing it as an array `[3, 1, 3, 2, 4]` and iterate over it saving each iteration value at an accumulator, such as `acc += pow(x=2, index) * array[index]`. In essence, each power of a number (`pow`) operation is `n-1` multiplications. So, in this scenario, a total of `14` operations would have happened, composed of `4` additions, `5` multiplications, and `5` pows (we're assuming that each power is calculated by repeated multiplication).

Now, **using the same scenario but with Horner's rule**, the polynomial can be re-written as ![Horner's rule approach](http://www.sciweavers.org/tex2img.php?eq=%24x%28x%28x%284x%2B2%29%2B3%29%2B1%29%2B3%24&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0), representing it as `[4, 2, 3, 1, 3]` it is possible to save the first iteration as `acc = arr[0] * (x=2) + arr[1]`, and then finish iterations for `acc *= (x=2) + arr[index]`. In the same scenario but using Horner's rule, a total of `10` operations would have happened, composed of only `4` additions and `4` multiplications.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Horner%27s_method)
