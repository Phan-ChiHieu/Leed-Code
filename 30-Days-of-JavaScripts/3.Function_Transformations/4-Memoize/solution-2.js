/*
Example 1:

    Input:
    fnName = "sum"
    actions = ["call","call","getCallCount","call","getCallCount"]
    values = [[2,2],[2,2],[],[1,2],[]]
    Output: [4,4,1,3,2]
    Explanation:
    const sum = (a, b) => a + b;
    const memoizedSum = memoize(sum);
    memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
    memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
    "getCallCount" - total call count: 1
    memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
    "getCallCount" - total call count: 2

Example 2:

    Input:
    fnName = "factorial"
    actions = ["call","call","call","getCallCount","call","getCallCount"]
    values = [[2],[3],[2],[],[3],[]]
    Output: [2,6,2,2,6,2]
    Explanation:
    const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
    const memoFactorial = memoize(factorial);
    memoFactorial(2); // "call" - returns 2.
    memoFactorial(3); // "call" - returns 6.
    memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
    "getCallCount" - total call count: 2
    memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
    "getCallCount" - total call count: 2
Example 3:

    Input:
    fnName = "fib"
    actions = ["call","getCallCount"]
    values = [[5],[]]
    Output: [8,1]
    Explanation:
    fib(5) = 8 // "call"
    "getCallCount" - total call count: 1

*/

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

let callCount = 0;

const memoizedSum = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
console.log(memoizedSum(2, 3)); // Output: 5
console.log(callCount);
