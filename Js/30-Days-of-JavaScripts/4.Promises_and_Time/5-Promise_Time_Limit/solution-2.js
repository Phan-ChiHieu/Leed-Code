/*

Example 1:

  Input: 
    fn = async (n) => { 
      await new Promise(res => setTimeout(res, 100)); 
      return n * n; 
    }
    inputs = [5]
    t = 50
    Output: {"rejected":"Time Limit Exceeded","time":50}
    Explanation:
    const limited = timeLimit(fn, t)
    const start = performance.now()
    let result;
    try {
      const res = await limited(...inputs)
      result = {"resolved": res, "time": Math.floor(performance.now() - start)};
    } catch (err) {
      result = {"rejected": err, "time": Math.floor(performance.now() - start)};
    }
    console.log(result) // Output

    The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
    
Example 2:

    Input: 
    fn = async (n) => { 
      await new Promise(res => setTimeout(res, 100)); 
      return n * n; 
    }
    inputs = [5]
    t = 150
    Output: {"resolved":25,"time":100}
    Explanation:
    The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.

Example 3:

    Input: 
    fn = async (a, b) => { 
      await new Promise(res => setTimeout(res, 120)); 
      return a + b; 
    }
    inputs = [5,10]
    t = 150
    Output: {"resolved":15,"time":120}
    Explanation:
    ​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.

Example 4:

    Input: 
    fn = async () => { 
      throw "Error";
    }
    inputs = []
    t = 1000
    Output: {"rejected":"Error","time":0}
    Explanation:
    The function immediately throws an error.

*/

// create function
let fn = async (n) => {
  // sau 100 ms mới thực hiện tính toán n * n
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

// create let
let t = 150;
let inputs = [5];

let timeLimit = function (fn, t) {
  //
  return async function (...args) {
    return new Promise((resolve, reject) => {
      let timerId;

      fn(...args)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          clearTimeout(timerId);
        });

      timerId = setTimeout(() => {
        reject("Time Limit Exceeded");
      },t);
    });
  };
};

const limited = timeLimit(fn, t);

// đo thời gian thực thi đoạn mã js
const start = performance.now();

(async () => {
  // Wrapping the code in an async function
  let result;
  try {
    const res = await limited(...inputs);

    // đo thời gian thực thi đoạn mã js
    result = { resolved: res, time: Math.floor(performance.now() - start) };
  } catch (err) {
    // đo thời gian thực thi đoạn mã js
    result = { rejected: err, time: Math.floor(performance.now() - start) };
  }
  console.log("result:::", result);
})();
