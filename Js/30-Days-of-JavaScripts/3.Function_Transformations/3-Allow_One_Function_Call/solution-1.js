/*

Example 1:

    Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
    Output: [{"calls":1,"value":6}]
    Explanation:
    const onceFn = once(fn);
    onceFn(1, 2, 3); // 6
    onceFn(2, 3, 6); // undefined, fn was not called

Example 2:

    Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
    Output: [{"calls":1,"value":140}]
    Explanation:
    const onceFn = once(fn);
    onceFn(5, 7, 4); // 140
    onceFn(2, 3, 6); // undefined, fn was not called
    onceFn(4, 6, 8); // undefined, fn was not called

*/

let once = function (fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined
