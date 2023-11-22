/*
Example 1:


    Input: nums = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,4,2,7,5,3,8,6,9]
Example 2:


    Input: nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
    Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
*/

var findDiagonalOrder = function (nums) {
  let m = nums.length;
  let maxSum = 0,
    size = 0,
    index = 0;
  let map = new Array(100001);

  for (let i = 0; i < m; i++) {
    size += nums[i].length;
    for (let j = 0; j < nums[i].length; j++) {
      let sum = i + j;
      if (!map[sum]) map[sum] = [];
      map[sum].push(nums[i][j]);
      maxSum = Math.max(maxSum, sum);
    }
  }

  let res = new Array(size);
  for (let i = 0; i <= maxSum; i++) {
    let cur = map[i];
    for (let j = cur.length - 1; j >= 0; j--) {
      res[index++] = cur[j];
    }
  }

  return res;
};
