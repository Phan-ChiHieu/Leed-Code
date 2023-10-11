/*
Example 1:

    Input: 
    promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
    promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
    Output: 7
    Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
Example 2:

    Input: 
    promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
    promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
    Output: -2
    Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
*/

let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 4000));

let addTwoPromises = async function (promise1, promise2) {
  // Promise.all chạy đồng thời với nhau không phải đợi nhau
  const [value1, value2] = await Promise.all([promise1, promise2]);
  return value1 + value2;
};

// const result = addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
const result = addTwoPromises(promise1, promise2).then(console.log); // 7
