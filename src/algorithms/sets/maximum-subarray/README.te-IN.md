# Maximum subarray problem

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Maximum subarray problem అంటే — numbers ఉన్న ఒక dimension array `a[1...n]` లో, అతి పెద్ద మొత్తం
(sum) వచ్చే, వరుసగా పక్కపక్కనే ఉన్న (contiguous) subarray కనుక్కోవడం, ఇక్కడ,

![Maximum subarray](https://wikimedia.org/api/rest_v1/media/math/render/svg/e8960f093107b71b21827e726e2bad8b023779b2)

![Maximum subarray](https://www.geeksforgeeks.org/wp-content/uploads/kadane-Algorithm.png)

## Example

List లో మామూలుగా positive, negative numbers తో పాటు `0` కూడా ఉంటుంది. ఉదాహరణకి,
`−2, 1, −3, 4, −1, 2, 1, −5, 4` values ఉన్న array లో అతి పెద్ద మొత్తం ఉన్న contiguous subarray
`4, −1, 2, 1`, దాని మొత్తం `6`.

## Solutions

- Brute Force solution `O(n^2)`: [bfMaximumSubarray.js](./bfMaximumSubarray.js)
- Divide and Conquer solution `O(n^2)`: [dcMaximumSubarraySum.js](./dcMaximumSubarraySum.js)
- Dynamic Programming solution `O(n)`: [dpMaximumSubarray.js](./dpMaximumSubarray.js)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Maximum_subarray_problem)
- [YouTube](https://www.youtube.com/watch?v=ohHWQf1HDfU&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [GeeksForGeeks](https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/)
- [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/566/discuss/1595195/C++Python-7-Simple-Solutions-w-Explanation-or-Brute-Force-+-DP-+-Kadane-+-Divide-and-Conquer)
