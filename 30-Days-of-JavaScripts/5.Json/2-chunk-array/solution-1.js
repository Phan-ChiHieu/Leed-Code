/*

Example 1:

    Input: arr = [1,2,3,4,5], size = 1
    Output: [[1],[2],[3],[4],[5]]
    Explanation: The arr has been split into subarrays each with 1 element.

Example 2:

    Input: arr = [1,9,6,3,2], size = 3
    Output: [[1,9,6],[3,2]]
    Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

Example 3:

    Input: arr = [8,5,3,2,6], size = 6
    Output: [[8,5,3,2,6]]
    Explanation: Size is greater than arr.length thus all elements are in the first subarray.

Example 4:

    Input: arr = [], size = 1
    Output: []
    Explanation: There are no elements to be chunked so an empty array is returned.
 
*/

let chunk = function (arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    const element = arr.slice(i, i + size);
    result.push(element);
  }

  return result;
};

let arr = [1, 2, 3, 4, 5],
  size = 1;

console.log(chunk(arr, size));
