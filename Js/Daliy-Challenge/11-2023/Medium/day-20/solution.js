/*
 
Example 1:

    Input: garbage = ["G","P","GP","GG"], travel = [2,4,3]
    Output: 21
    Explanation:
    The paper garbage truck:
    1. Travels from house 0 to house 1
    2. Collects the paper garbage at house 1
    3. Travels from house 1 to house 2
    4. Collects the paper garbage at house 2
    Altogether, it takes 8 minutes to pick up all the paper garbage.
    The glass garbage truck:
    1. Collects the glass garbage at house 0
    2. Travels from house 0 to house 1
    3. Travels from house 1 to house 2
    4. Collects the glass garbage at house 2
    5. Travels from house 2 to house 3
    6. Collects the glass garbage at house 3
    Altogether, it takes 13 minutes to pick up all the glass garbage.
    Since there is no metal garbage, we do not need to consider the metal garbage truck.
    Therefore, it takes a total of 8 + 13 = 21 minutes to collect all the garbage.

Example 2:

    Input: garbage = ["MMM","PGM","GP"], travel = [3,10]
    Output: 37
    Explanation:
    The metal garbage truck takes 7 minutes to pick up all the metal garbage.
    The paper garbage truck takes 15 minutes to pick up all the paper garbage.
    The glass garbage truck takes 15 minutes to pick up all the glass garbage.
    It takes a total of 7 + 15 + 15 = 37 minutes to collect all the garbage.

*/

var garbageCollection = function (garbage, travel) {
  let hasG = false,
    hasP = false,
    hasM = false;
  const n = garbage.length;
  let ans = 0;

  for (let i = 0; i < n - 1; i++) {
    ans += 3 * travel[i];
  }

  for (const s of garbage) {
    ans += s.length;
  }

  for (let i = n - 1; i > 0; i--) {
    if (!garbage[i].includes("G")) {
      ans -= travel[i - 1];
    } else {
      break;
    }
  }

  for (let i = n - 1; i > 0; i--) {
    if (!garbage[i].includes("P")) {
      ans -= travel[i - 1];
    } else {
      break;
    }
  }

  for (let i = n - 1; i > 0; i--) {
    if (!garbage[i].includes("M")) {
      ans -= travel[i - 1];
    } else {
      break;
    }
  }

  return ans;
};
