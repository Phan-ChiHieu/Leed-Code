/*

Example 1:

    Input: nums = [2,3,1,1,4]
    Output: true
    Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

    Input: nums = [3,2,1,0,4]
    Output: false
    Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

*/

var canJump = function (nums) {
  if (nums.length <= 1) return true;
  let maximum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (maximum <= i && nums[i] == 0) return false;
    if (i + nums[i] > maximum) {
      maximum = i + nums[i];
    }
    if (maximum >= nums.length - 1) return true;
  }
  return false;
};
