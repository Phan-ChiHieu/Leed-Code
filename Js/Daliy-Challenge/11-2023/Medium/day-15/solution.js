/*
Example 1:

    Input: arr = [2,2,1,2,1]
    Output: 2
    Explanation: 
    We can satisfy the conditions by rearranging arr so it becomes [1,2,2,2,1].
    The largest element in arr is 2.

Example 2:

    Input: arr = [100,1,1000]
    Output: 3
    Explanation: 
    One possible way to satisfy the conditions is by doing the following:
    1. Rearrange arr so it becomes [1,100,1000].
    2. Decrease the value of the second element to 2.
    3. Decrease the value of the third element to 3.
    Now arr = [1,2,3], which satisfies the conditions.
    The largest element in arr is 3.

Example 3:

    Input: arr = [1,2,3,4,5]
    Output: 5
    Explanation: The array already satisfies the conditions, and the largest element is 5.

*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
  return arr.sort((a, b) => a - b).reduce((acc, num) => (acc = Math.min(acc + 1, num)), 0);
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearrangingV2 = function (arr) {
  return arr.sort((a, b) => a - b).reduce((acc, num) => (acc = Math.min(acc + 1, num)), 0);
};
