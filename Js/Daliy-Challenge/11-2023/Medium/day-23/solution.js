/*
Example 1:

    Input: nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]
    Output: [true,false,true]
    Explanation:
    In the 0th query, the subarray is [4,6,5]. This can be rearranged as [6,5,4], which is an arithmetic sequence.
    In the 1st query, the subarray is [4,6,5,9]. This cannot be rearranged as an arithmetic sequence.
    In the 2nd query, the subarray is [5,9,3,7]. This can be rearranged as [3,5,7,9], which is an arithmetic sequence.
Example 2:

    Input: nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]
    Output: [false,true,false,false,true,true]

*/

function check(arr) {
  arr.sort((a, b) => a - b);
  let diff = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }

  return true;
}

function checkArithmeticSubarrays(nums, l, r) {
  const ans = [];

  for (let i = 0; i < l.length; i++) {
    const arr = nums.slice(l[i], r[i] + 1);
    ans.push(check(arr));
  }

  return ans;
}
