/*

Example 1:

    Input: nums = [1,2,3,4,5]
    Output: true
    Explanation: Any triplet where i < j < k is valid.

Example 2:

    Input: nums = [5,4,3,2,1]
    Output: false
    Explanation: No triplet exists.

Example 3:

    Input: nums = [2,1,5,0,4,6]
    Output: true
*/

let nums = [1, 6, 3, 4, 5];

let increasingTriplet = function (nums) {
  let firstNumber = Infinity;
  let secondNumber = Infinity;

  for (let currentNumber of nums) {
    if (currentNumber > secondNumber && currentNumber > firstNumber) {
      return true;
    }
    if (currentNumber > firstNumber) {
      secondNumber = currentNumber;
    } else {
      firstNumber = currentNumber;
    }
    console.log('firstNumber',firstNumber)
    console.log('secondNumber',secondNumber)
  }
  return false;
};

const rs = increasingTriplet(nums);

console.log("increasingTriplet:::::", rs);
