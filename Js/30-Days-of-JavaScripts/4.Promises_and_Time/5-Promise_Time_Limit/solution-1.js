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

// timeLimit nhận vào 2 tham số fn === function , t === số nguyên đại diện cho thời gian giới hạn (milli giây)
let timeLimit = function (fn, t) {
  // trả về một hàm bất đồng bộ
  // và hàm bất đồng bộ trên nhận vào tham số không xác định bằng toán tử ...rest
  return async function (...args) {
    // Trong hàm bất đồng bộ hàm fn được gọi
    // và trả về một promise (originalFnPromise) => đại diện cho việc thực thi hàm fn.
    const originalFnPromise = fn(...args);

    // Một promise được gọi là (timeoutPromise)
    // Nó bặt đầu tính thòi gian (t)  được truyền vào.
    // Nếu thời gian vượt quá giới hạn (t), nó sẽ reject với thông báo "Time Limit Exceeded::"
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded::");
      }, t);
    });

    // Promise.race được sử dụng để theo dõi hai promise
    // originalFnPromise (thực thi hàm fn) và timeoutPromise (thời gian giới hạn)
    // Kết quả sẽ trả về kết quả đầu tiên được hoàn thành hoặc reject (line 92)
    // Nếu fn hoàn thành trước khi thời gian giới hạn, kết quả của timeLimit sẽ là kết quả của fn
    // Ngược lại, nếu thời gian giới hạn kết thúc trước, promise sẽ bị reject với thông báo "Time Limit Exceeded::".
    return Promise.race([originalFnPromise, timeoutPromise]);
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
