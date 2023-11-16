/*

Example 1:

    Input: nums = ["01","10"]
    Output: "11"
    Explanation: "11" does not appear in nums. "00" would also be correct.
Example 2:

    Input: nums = ["00","01"]
    Output: "11"
    Explanation: "11" does not appear in nums. "10" would also be correct.
Example 3:

    Input: nums = ["111","011","001"]
    Output: "101"

*/

var findDifferentBinaryString = function (nums) {
  let result = "";

  for (let i = 0; i < nums.length; ++i) {
    result += nums[i][i] === "0" ? "1" : "0";
  }

  return result;
};
