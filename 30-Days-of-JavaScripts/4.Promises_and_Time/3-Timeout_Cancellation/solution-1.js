/*

Example 1:

    Input: fn = (x) => x * 5, args = [2], t = 20, cancelT = 50
    Output: [{"time": 20, "returned": 10}]
    Explanation: 
    const result = []

    const fn = (x) => x * 5

    const start = performance.now() 

    const log = (...argsArr) => {
        const diff = Math.floor(performance.now() - start);
        result.push({"time": diff, "returned": fn(...argsArr)})
    }
        
    const cancel = cancellable(log, [2], 20);

    const maxT = Math.max(t, 50)
            
    setTimeout(cancel, cancelT)

    setTimeout(() => {
        console.log(result) // [{"time":20,"returned":10}]
    }, 65)

    The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened after the execution of fn(2) at 20ms.
Example 2:

    Input: fn = (x) => x**2, args = [2], t = 100, cancelT = 50 
    Output: []
    Explanation: The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
Example 3:

    Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30, cancelT = 100
    Output: [{"time": 30, "returned": 8}]
    Explanation: The cancellation was scheduled to occur after a delay of cancelT (100ms), which happened after the execution of fn(2,4) at 30ms.


*/

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelT = 1000;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancellable = function (fn, args, t) {
    console.log("hello")
  // cancelFn function//
  const cancelFn = function () {
    clearTimeout(timer);
  };
  const timer = setTimeout(() => {
    fn(...args);
  }, t);
  return cancelFn;
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelT);

setTimeout(() => {
  cancel();
}, cancelT);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
