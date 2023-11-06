/*

Example 1:

    Input: nums = [1,2,3,4], k = 5
    Output: 2
    Explanation: Starting with nums = [1,2,3,4]:
    - Remove numbers 1 and 4, then nums = [2,3]
    - Remove numbers 2 and 3, then nums = []
    There are no more pairs that sum up to 5, hence a total of 2 operations.

Example 2:

    Input: nums = [3,1,3,4,3], k = 6
    Output: 1
    Explanation: Starting with nums = [3,1,3,4,3]:
    - Remove the first two 3's, then nums = [1,4,3]
    There are no more pairs that sum up to 6, hence a total of 1 operation.

*/

let nums = [1, 2, 3, 4, 5],
  k = 6;

var maxOperations = function (nums, k) {
  let freq = new Map(),
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("freq:::", freq);

    if (freq.get(k - nums[i])) {
      console.log("freq.get(k - nums[i])", freq.get(k - nums[i]));
      if (freq.get(k - nums[i]) == 1) {
        freq.delete(k - nums[i]);
        console.log("chay vao if >>>", freq);
      } else {
        console.log("chay vao else <<<<", freq);

        freq.set(k - nums[i], freq.get(k - nums[i]) - 1);
      }
      count++;
    } else {
      console.log("chay vao else LON", freq);

      freq.set(nums[i], freq.get(nums[i]) + 1 || 1);
    }
  }
  return count;
};

// var maxOperations = function (nums, k) {
//   let m = new Map(),
//     ans = 0;
//   for (let n of nums) {
//     if (n < k) {
//       console.log("freq:::", m);
//       if (m.get(k - n)) m.set(k - n, m.get(k - n) - 1), ans++;
//       else m.set(n, (m.get(n) || 0) + 1);
//     }
//   }
//   return ans;
// };

const rs = maxOperations(nums, k);

console.log("rs", rs);

/*

nums = [1,2,3,4], k = 5

var maxOperations = function(nums, k) {
    let m = new Map(), ans = 0
    for (let n of nums)
        if (n < k)
            if (m.get(k - n)) m.set(k - n, m.get(k - n) - 1), ans++
            else m.set(n, (m.get(n) || 0) + 1)
    return ans
};

*/
