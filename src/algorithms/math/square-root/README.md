# Square Root (Newton's Method)

In numerical analysis, a branch of mathematics, there are several square root 
algorithms or methods of computing the principal square root of a non-negative real 
number. As, generally, the roots of a function cannot be computed exactly.
The root-finding algorithms provide approximations to roots expressed as floating
point numbers.

Finding ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/bff86975b0e7944720b3e635c53c22c032a7a6f1) is
the same as solving the equation ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/6cf57722151ef19ba1ca918d702b95c335e21cad) for a
positive `x`. Therefore, any general numerical root-finding algorithm can be used.

**Newton's method** (also known as the Newton–Raphson method), named after 
_Isaac Newton_ and _Joseph Raphson_, is one example of a root-finding algorithm. It is a 
method for finding successively better approximations to the roots of a real-valued function.

Let's start by explaining the general idea of Newton's method and then apply it to our particular
case with finding a square root of the number.

## Newton's Method General Idea

The Newton–Raphson method in one variable is implemented as follows:

The method starts with a function `f` defined over the real numbers `x`, the function's derivative `f'`, and an 
initial guess `x0` for a root of the function `f`. If the function satisfies the assumptions made in the derivation 
of the formula and the initial guess is close, then a better approximation `x1` is:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/52c50eca0b7c4d64ef2fdca678665b73e944cb84)

Geometrically, `(x1, 0)` is the intersection of the `x`-axis and the tangent of 
the graph of `f` at `(x0, f (x0))`.

The process is repeated as:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/710c11b9ec4568d1cfff49b7c7d41e0a7829a736)

until a sufficiently accurate value is reached.

![](https://upload.wikimedia.org/wikipedia/commons/e/e0/NewtonIteration_Ani.gif)

## Newton's Method of Finding a Square Root

As it was mentioned above, finding ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/bff86975b0e7944720b3e635c53c22c032a7a6f1) is
the same as solving the equation ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/6cf57722151ef19ba1ca918d702b95c335e21cad) for a
positive `x`.

The derivative of the function `f(x)` in case of square root problem is `2x`.

After applying the Newton's formula (see above) we get the following equation for our algorithm iterations:

```text
x := x - (x² - S) / (2x)
```

The `x² − S` above is how far away `x²` is from where it needs to be, and the 
division by `2x` is the derivative of `x²`, to scale how much we adjust `x` by how 
quickly `x²` is changing.

## References

- [Methods of computing square roots on Wikipedia](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots)
- [Newton's method on Wikipedia](https://en.wikipedia.org/wiki/Newton%27s_method)
