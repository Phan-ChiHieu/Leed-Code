/*

    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

    Input: height = [1,1]
    Output: 1
*/

let height = [1, 8, 6, 2, 5, 4, 8, 7, 3];

let maxArea = function (height) {
  //
  let ans = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    console.log("ans:::", ans);
    console.log("i:::", i);
    console.log("j:::", j);
    console.log("height[i]:::", height[i]);
    console.log("height[j]:::", height[j]);
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
    console.log("ans :::max:::", ans);
    height[i] <= height[j] ? i++ : j--;
  }

  return ans;
};



const rs = maxArea(height);


console.log("rs::", rs);