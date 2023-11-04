// 1503. Last Moment Before All Ants Fall Out of a Plank

/*

Example 1:

    Input: n = 4, left = [4,3], right = [0,1]
    Output: 4
    Explanation: In the image above:
    -The ant at index 0 is named A and going to the right.
    -The ant at index 1 is named B and going to the right.
    -The ant at index 3 is named C and going to the left.
    -The ant at index 4 is named D and going to the left.
    The last moment when an ant was on the plank is t = 4 seconds. After that, it falls immediately out of the plank. (i.e., We can say that at t = 4.0000000001, there are no ants on the plank).

Example 2:


    Input: n = 7, left = [], right = [0,1,2,3,4,5,6,7]
    Output: 7
    Explanation: All ants are going to the right, the ant at index 0 needs 7 seconds to fall.
Example 3:


    Input: n = 7, left = [0,1,2,3,4,5,6,7], right = []
    Output: 7

*/

var getLastMoment = function (n, left, right) {
  let time = 0;

  for (let pos of left) {
    time = Math.max(time, pos);
  }

  for (let pos of right) {
    time = Math.max(time, n - pos);
  }

  return time;
};

let left = [4, 2];
let right = [0, 1];
let n = 4;



const res = getLastMoment(n, left, right);

console.log(res);
