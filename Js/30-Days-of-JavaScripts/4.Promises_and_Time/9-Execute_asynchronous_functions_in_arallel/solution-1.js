/*
Example 1:

    Input: functions = [
    () => new Promise(resolve => setTimeout(() => resolve(5), 200))
    ]
    Output: {"t": 200, "resolved": [5]}
    Explanation: 
    promiseAll(functions).then(console.log); // [5]

    The single function was resolved at 200ms with a value of 5.

Example 2:

    Input: functions = [
        () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
        () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
    ]
    Output: {"t": 100, "rejected": "Error"}
    Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.

Example 3:

    Input: functions = [
        () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
        () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
        () => new Promise(resolve => setTimeout(() => resolve(16), 100))
    ]
    Output: {"t": 150, "resolved": [4, 10, 16]}
    Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.


*/

var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let result = new Array(functions.length);
    let count = 0;

    functions.forEach((fn, index) => {
      fn()
        .then((val) => {
          result[index] = val;
          count++;

          if (count === functions.length) resolve(result);
        })
        .catch((reason) => reject(reason));
    });
  });
};

functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

promiseAll(functions).then(console.log); // [5]
