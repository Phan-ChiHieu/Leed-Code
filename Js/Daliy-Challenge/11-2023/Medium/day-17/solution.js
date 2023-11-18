/*

Example 1:

    Input: nums = [3,5,2,3]
    Output: 7
    Explanation: The elements can be paired up into pairs (3,3) and (5,2).
    The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.
Example 2:

    Input: nums = [3,5,4,2,4,6]
    Output: 8
    Explanation: The elements can be paired up into pairs (3,5), (4,4), and (6,2).
    The maximum pair sum is max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8.

*/

var minPairSum = function (nums) {
  // Step 1: Sort the array in ascending order
  nums.sort((a, b) => a - b);

  // Step 2: Initialize pointers at the start and end of the sorted array
  let left = 0,
    right = nums.length - 1;

  // Step 3: Initialize a variable to store the minimum of the maximum pair sum
  let minMaxPairSum = Number.MIN_SAFE_INTEGER;

  // Step 4: Iterate until the pointers meet
  while (left < right) {
    // Step 5: Calculate the current pair sum
    const currentPairSum = nums[left] + nums[right];

    // Step 6: Update the minimum of the maximum pair sum
    minMaxPairSum = Math.max(minMaxPairSum, currentPairSum);

    // Step 7: Move the pointers towards the center
    left++;
    right--;
  }

  // Step 8: Return the minimum of the maximum pair sum
  return minMaxPairSum;
};
