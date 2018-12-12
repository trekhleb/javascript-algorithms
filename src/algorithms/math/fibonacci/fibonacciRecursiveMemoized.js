/*  memoize function use a Map to store function arguments 
and results, which are returned if found inside cache */
const memoize = (fn) => {
  const cache = new Map();

  return (num) => {
    if (cache.has(num)) return cache.get(num);

    const result = fn(num);
    cache.set(num, result);
    return result;
  };
};

/*  fibonacci function decorated with the memoize function, every call 
will first pass through the cache before it's computed  */
const fibonacci = memoize((n) => {
  if (n === 0 || n === 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
});
