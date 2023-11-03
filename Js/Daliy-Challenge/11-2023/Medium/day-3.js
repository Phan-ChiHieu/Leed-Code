/*

Example 1:

    Input: target = [1,3], n = 3
    Output: ["Push","Push","Pop","Push"]
    Explanation: Initially the stack s is empty. The last element is the top of the stack.
    Read 1 from the stream and push it to the stack. s = [1].
    Read 2 from the stream and push it to the stack. s = [1,2].
    Pop the integer on the top of the stack. s = [1].
    Read 3 from the stream and push it to the stack. s = [1,3].

Example 2:

    Input: target = [1,2,3], n = 3
    Output: ["Push","Push","Push"]
    Explanation: Initially the stack s is empty. The last element is the top of the stack.
    Read 1 from the stream and push it to the stack. s = [1].
    Read 2 from the stream and push it to the stack. s = [1,2].
    Read 3 from the stream and push it to the stack. s = [1,2,3].

Example 3:

    Input: target = [1,2], n = 4
    Output: ["Push","Push"]
    Explanation: Initially the stack s is empty. The last element is the top of the stack.
    Read 1 from the stream and push it to the stack. s = [1].
    Read 2 from the stream and push it to the stack. s = [1,2].
    Since the stack (from the bottom to the top) is equal to target, we stop the stack operations.
    The answers that read integer 3 from the stream are not accepted.
*/

let target = [1, 3];
let n = 3;

var buildArray = function (target, n) {
  const result = [];
  let current = 1; // The current number to be pushed

  for (let i = 0; i < target.length; i++) {
    while (current < target[i]) {
      // While the current number is less than the target number,
      // push the current number and generate the "Push" operation.
      result.push("Push");
      result.push("Pop"); // After pushing, immediately pop
      current++;
    }

    // The current number matches the target number, so push it.
    result.push("Push");

    current++; // Move to the next number to be pushed
  }

  return result;
};

let rs = buildArray(target, n);

console.log("::::", rs);

// solution
// https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4241460/3-approaches-brute-force-two-pointers-stack-detail-explanation-java-c-py-js/
