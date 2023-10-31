/*

Example 1:

    Input: millis = 100
    Output: 100
    Explanation: It should return a promise that resolves after 100ms.
    let t = Date.now();
    sleep(100).then(() => {
    console.log(Date.now() - t); // 100
    });
Example 2:

    Input: millis = 200
    Output: 200
    Explanation: It should return a promise that resolves after 200ms.
 
*/

let t = Date.now();

console.log(t);

async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));

  //   return () => clearTimeout(result);
}

sleep(100).then(() => console.log(Date.now() - t)); // 100
