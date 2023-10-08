// Apply Transform Over Each Element in Array

/*
Example 1:

    Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
    Output: [2,3,4]
    Explanation:
    const newArray = map(arr, plusone); // [2,3,4]
    The function increases each value in the array by one. 

Example 2:

    Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
    Output: [1,3,5]
    Explanation: The function increases each value by the index it resides in.

Example 3:

    Input: arr = [10,20,30], fn = function constant() { return 42; }
    Output: [42,42,42]
    Explanation: The function always returns 42.
*/

let arr = [1, 2, 3];

// let fn = function plusone(n) {
//   return n + 1;
// };

let fn = function plusI(n, i) {
  return n + i;
};

// const fn = function constant() {
//   return 42;
// };

let map = function (arr, fn) {
  return arr.reduce((transformedArr, element, index) => {
    transformedArr[index] = fn(element, index);
    return transformedArr;
  }, []);
};

// TC and SC: O(n)

console.log(map(arr, fn));
