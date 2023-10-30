/*
Example 1:

    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]

Example 2:

    Input: nums = [-1,1,0,-3,3]
    Output: [0,0,9,0,0]
 
*/

let nums = [1, 2, 3, 4];

var productExceptSelf = function (nums) {
  // Khai báo mảng output với độ dài bằng với nums và ban đầu toàn bộ giá trị là 1.

  var output = new Array(nums.length).fill(1);
  // Tính tích các phần tử bên trái của mỗi phần tử.
  var leftMult = 1;
  for (var i = 0; i < nums.length; i++) {
    output[i] *= leftMult;
    leftMult *= nums[i];
    // 0
    // output [1*1] === [1]
    // leftMult = 1* 1 === 1
    //================================================================
    // 1
    // output [1*1, 1* 1] === [1,1]
    // leftMult = 1 * 2 ===  2
    //================================================================
    // 2
    // output [1*1, 1*1, 1*2] === [1,1,2]
    // leftMult = 2 * 3 ===  6
    //================================================================
    // 3
    // output [1*1, 1*1, 1*2, 1*6] === [1,1,2,6]
    //================================================================

    console.log(`output:::${i}`, output);
  }
  // Tính tích các phần tử bên phải của mỗi phần tử và cập nhật output.
  var rightMult = 1;
  for (var j = nums.length - 1; j >= 0; j--) {
    output[j] *= rightMult;
    rightMult *= nums[j];
    // output current =  [ 1, 1, 2, 6 ]
    // nums current  = [1, 2, 3, 4]
    // 3
    // output [6*1] === [3]
    // rightMult = 1* 4 === 4
    //================================================================
    // 2
    // output [2*4, 6*1] === [8, 6]
    // rightMult = 4* 3 === 12
    //================================================================
    // 1
    // output [2*4, 6*1, 1*12] === [12, 8, 6]
    // rightMult = 12* 2 ===24
    //================================================================
    // 0
    // output [1*24, 1*12, 2*4, 6*1] === [24,12, 8, 6]
    // rightMult = 24* 1 ===24
    //================================================================
  }

  return output;
};

const result = productExceptSelf(nums);

console.log("result", result);
