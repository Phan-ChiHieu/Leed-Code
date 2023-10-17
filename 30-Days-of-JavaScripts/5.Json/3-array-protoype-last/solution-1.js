/*

Example 1:

    Input: nums = [null, {}, 3]
    Output: 3
    Explanation: Calling nums.last() should return the last element: 3.

Example 2:

    Input: nums = []
    Output: -1
    Explanation: Because there are no elements, return -1.

*/

Array.prototype.last = function () {
//   console.log(this); // [ 1, 2, 3 ]
//   if (this.length === 0) {
//     return -1;
//   } else {
//     return this[this.length - 1];
//   }

  // OR
  return this.length ? this[this.length - 1] : -1;
};

const arr = [1, 2, 3];
arr.last(); // 3

console.log(arr.last());
