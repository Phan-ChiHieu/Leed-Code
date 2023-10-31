/*

Example 1:

    Input: nums = [10,2,-10,5,20], k = 2
    Output: 37
    Explanation: The subsequence is [10, 2, 5, 20].

Example 2:

    Input: nums = [-1,-2,-3], k = 1
    Output: -1
    Explanation: The subsequence must be non-empty, so we choose the largest number.

Example 3:

    Input: nums = [10,-2,-10,-5,20], k = 2
    Output: 23
    Explanation: The subsequence is [10, -2, -5, 20].

*/

let nums = [10, 2, -10, 5, 20],
  k = 4;

let constrainedSubsetSum = function (nums, k) {
  // [index, lastKsum] => gia tri ban dau [0, nums[0]]
  var window = [[0, nums[0]]];
  var max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    console.log(`window.push()-${i}`, window);

    const [index, lastKsum] = window[0];
    console.log("index: ", index);
    console.log("lastKsum: ", lastKsum);
    if (index === i - k) {
      window.shift();
      console.log("window khi run shift(): ", window);

      console.log("chay vao if");
    }

    var sum = Math.max(lastKsum, 0) + nums[i];

    console.log("sum: ", sum);

    max = Math.max(max, sum);

    console.log("max: ", max);

    console.log("window cb chay vao while: ", window);

    while (window.length > 0 && window[window.length - 1][1] < sum) {
      console.log("window truoc pop(): ", window);
      window.pop();
      console.log("window sau pop(): ", window);
    }
    window.push([i, sum]);
  }

  return max;
};

const result = constrainedSubsetSum(nums, k);

console.log("total", result);

// https://shortcuts.design/tools/toolspage-visualstudiocode/

const window = [[0, 10]];

console.log("test", window[window.length - 1][1]);
