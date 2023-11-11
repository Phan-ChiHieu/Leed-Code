//  2849. Determine if a Cell Is Reachable at a Given Time

/*
Example 1:

    Input: sx = 2, sy = 4, fx = 7, fy = 7, t = 6
    Output: true
    Explanation: Starting at cell (2, 4), we can reach cell (7, 7) in exactly 6 seconds by going through the cells depicted in the picture above. 

Example 2:
    Input: sx = 3, sy = 1, fx = 7, fy = 3, t = 3
    Output: false
    Explanation: Starting at cell (3, 1), it takes at least 4 seconds to reach cell (7, 3) by going through the cells depicted in the picture above. Hence, we cannot reach cell (7, 3) at the third second.
 */

let sx = 2,
  sy = 4,
  fx = 7,
  fy = 7,
  t = 6;

var isReachableAtTime = function (sx, sy, fx, fy, t) {
  // Tính khoảng cách Manhattan giữa ô bắt đầu và ô đích
  let xDistance = Math.abs(sx - fx);
  console.log("xDistance::::", xDistance); // 5
  let yDistance = Math.abs(sy - fy);
  console.log("yDistance::::", yDistance); // 3

  let minDist = Math.min(xDistance, yDistance) + Math.abs(yDistance - xDistance);
  console.log("Math.min(xDistance, yDistance)::::", Math.min(xDistance, yDistance)); // 3
  console.log("Math.abs(yDistance - xDistance)::::", Math.abs(yDistance - xDistance)); // 2
  console.log("minDist", minDist); // 5

  if (minDist === 0) {
    return t !== 1;
  }
  return t >= minDist;
};

const rs = isReachableAtTime(sx, sy, fx, fy, t);

console.log(rs);
