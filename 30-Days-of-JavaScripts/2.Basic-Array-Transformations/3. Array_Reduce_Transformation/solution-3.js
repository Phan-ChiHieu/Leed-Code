/*
Example 1:

    Input: 
    nums = [1,2,3,4]
    fn = function sum(accum, curr) { return accum + curr; }
    init = 0
    Output: 10
    Explanation:
    initially, the value is init=0.
    (0) + nums[0] = 1
    (1) + nums[1] = 3
    (3) + nums[2] = 6
    (6) + nums[3] = 10
    The final answer is 10.

Example 2:

    Input: 
    nums = [1,2,3,4]
    fn = function sum(accum, curr) { return accum + curr * curr; }
    init = 100
    Output: 130
    Explanation:
    initially, the value is init=100.
    (100) + nums[0]^2 = 101
    (101) + nums[1]^2 = 105
    (105) + nums[2]^2 = 114
    (114) + nums[3]^2 = 130
    The final answer is 130.

Example 3:

    Input: 
    nums = []
    fn = function sum(accum, curr) { return 0; }
    init = 25
    Output: 25
    Explanation: For empty arrays, the answer is always init.


*/

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) {
  return accum + curr;
};
let init = 0;

let reduce = function (nums, fn, init) {
  let accum = init;
  for (const curr of nums) {
    accum = fn(accum, curr);
  }

  return accum;
};

console.log(reduce(nums, fn, init));
