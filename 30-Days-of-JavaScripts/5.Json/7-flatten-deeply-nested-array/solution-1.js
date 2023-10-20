/*
Example 1:

    Input
    arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    n = 0
    Output
    [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

    Explanation
    Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened. 
Example 2:

    Input
    arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    n = 1
    Output
    [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

    Explanation
    The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.
Example 3:

Input
    arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    n = 2
    Output
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    Explanation
    The maximum depth of any subarray is 1. Thus, all of them are flattened.
    
*/

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
let n = 2;

var flat = function (arr, depth) {
  const stack = [...arr.map((item) => [item, depth])];
  const result = [];

  while (stack.length > 0) {
    console.log(">>>>>", result);
    console.log(":::::", stack);

    const [item, depth] = stack.pop();

    if (Array.isArray(item) && depth > 0) {
      stack.push(...item.map((subItem) => [subItem, depth - 1]));
    } else {
      result.push(item);
    }
  }

  return result.reverse();
};

flat(arr, n);

// console.log(flat(arr, n));

//
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// tạo một aray mới với logic thực thì từ array trước đó
const _stack = [...array.map((item) => item * 2)]; // [2, 4, 6, 8, 10, 12, 14, 16]

// console.log(_stack);

// Kiem tra xem const array co phai la array hay khong
// console.log(Array.isArray(array)); // true

// console.log(typeof array); // object
