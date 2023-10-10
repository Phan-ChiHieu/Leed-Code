/*
Example 1:

    Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
    Output: 65
    Explanation:
    Evaluating from right to left ...
    Starting with x = 4.
    2 * (4) = 8
    (8) * (8) = 64
    (64) + 1 = 65

Example 2:

    Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
    Output: 1000
    Explanation:
    Evaluating from right to left ...
    10 * (1) = 10
    10 * (10) = 100
    10 * (100) = 1000

Example 3:

    Input: functions = [], x = 42
    Output: 42
    Explanation:
    The composition of zero functions is the identity function

*/

// Learn reduceRight

const arr = [1, 2, 3, 4, 5];

// Tinh tong tu phai sang trai
const sum = arr.reduceRight((prev, curr) => {
  //   console.log(prev, curr);
  return prev + curr;
});

// console.log(sum);

let compose = function (functions) {
    console.log(functions)
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return functions.reduceRight(function (prevFn, nextFn) {
    return function (x) {
      return nextFn(prevFn(x));
    };
  });
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);

console.log(fn(4)); // 9
