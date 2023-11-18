/*

Example 1:

    Input: nums = [3,2,3]
    Output: 3

Example 2:

    Input: nums = [2,2,1,1,1,2,2]
    Output: 2

*/

var majorityElement = function (nums) {
  let sol = 0,
    cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (cnt == 0) {
      sol = nums[i];
      cnt = 1;
    } else if (sol == nums[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }
  return sol;
};
