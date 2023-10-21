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
  k = 2;

let constrainedSubsetSum = function (nums, k) {
  var window = [[0, nums[0]]];
  var max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const [index, lastKsum] = window[0];
    if (index === i - k) {
      window.shift();
      console.log("chay vao if");
    }

    var sum = Math.max(lastKsum, 0) + nums[i];

    max = Math.max(max, sum);
    while (window.length > 0 && window[window.length - 1][1] < sum) {
      window.pop();
    }
    window.push([i, sum]);
  }

  return max;
};

const result = constrainedSubsetSum(nums, k);

console.log("total", result);


// https://shortcuts.design/tools/toolspage-visualstudiocode/