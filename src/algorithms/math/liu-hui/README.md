# Liu Hui's π Algorithm

Liu Hui remarked in his commentary to The Nine Chapters on the Mathematical Art,
that the ratio of the circumference of an inscribed hexagon to the diameter of 
the circle was `three`, hence `π` must be greater than three. He went on to provide 
a detailed step-by-step description of an iterative algorithm to calculate `π` to 
any required accuracy based on bisecting polygons; he calculated `π` to 
between `3.141024` and `3.142708` with a 96-gon; he suggested that `3.14` was 
a good enough approximation, and expressed `π` as `157/50`; he admitted that 
this number was a bit small. Later he invented an ingenious quick method to 
improve on it, and obtained `π ≈ 3.1416` with only a 96-gon, with an accuracy 
comparable to that from a 1536-gon. His most important contribution in this 
area was his simple iterative `π` algorithm.

## Area of a circle

Liu Hui argued:

> Multiply one side of a hexagon by the radius (of its 
circumcircle), then multiply this by three, to yield the 
area of a dodecagon; if we cut a hexagon into a 
dodecagon, multiply its side by its radius, then again 
multiply by six, we get the area of a 24-gon; the finer 
we cut, the smaller the loss with respect to the area 
of circle, thus with further cut after cut, the area of 
the resulting polygon will coincide and become one with 
the circle; there will be no loss

![Liu Hui](https://upload.wikimedia.org/wikipedia/commons/6/69/Cutcircle2.svg)

Liu Hui's method of calculating the area of a circle.

Further, Liu Hui proved that the area of a circle is half of its circumference 
multiplied by its radius. He said:

> Between a polygon and a circle, there is excess radius. Multiply the excess 
radius by a side of the polygon. The resulting area exceeds the boundary of 
the circle

In the diagram `d = excess radius`. Multiplying `d` by one side results in 
oblong `ABCD` which exceeds the boundary of the circle. If a side of the polygon 
is small (i.e. there is a very large number of sides), then the excess radius 
will be small, hence excess area will be small.

> Multiply the side of a polygon by its radius, and the area doubles; 
hence multiply half the circumference by the radius to yield the area of circle.

![Liu Hui](https://upload.wikimedia.org/wikipedia/commons/9/95/Cutcircle.svg)

The area within a circle is equal to the radius multiplied by half the 
circumference, or `A = r x C/2 = r x r x π`.

## Iterative algorithm

Liu Hui began with an inscribed hexagon. Let `M` be the length of one side `AB` of 
hexagon, `r` is the radius of circle.

![Liu Hui](https://upload.wikimedia.org/wikipedia/commons/4/46/Liuhui_geyuanshu.svg)

Bisect `AB` with line `OPC`, `AC` becomes one side of dodecagon (12-gon), let 
its length be `m`. Let the length of `PC` be `j` and the length of `OP` be `G`.

`AOP`, `APC` are two right angle triangles. Liu Hui used 
the [Gou Gu](https://en.wikipedia.org/wiki/Pythagorean_theorem) (Pythagorean theorem)
theorem repetitively:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/dbfc192c78539c3901c7bad470302ededb76f813)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/ccd12a402367c2d6614c88e75006d50bfc3a9929)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/65d77869fc02c302d2d46d45f75ad7e79ae524fb)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/a7a0d0d7f505a0f434e5dd80c2fef6d2b30d6100)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/c31b9acf38f9d1a248d4023c3bf286bd03007f37)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/0dee798efb0b1e3e64d6b3542106cb3ecaa4a383)

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ffeafe88d2983b364ad3442746063e3207fe842)


From here, there is now a technique to determine `m` from `M`, which gives the 
side length for a polygon with twice the number of edges. Starting with a 
hexagon, Liu Hui could determine the side length of a dodecagon using this 
formula. Then continue repetitively to determine the side length of a 
24-gon given the side length of a dodecagon. He could do this recursively as 
many times as necessary. Knowing how to determine the area of these polygons, 
Liu Hui could then approximate `π`.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Liu_Hui%27s_%CF%80_algorithm)
