/*
Example 1:

    Input: adjacentPairs = [[2,1],[3,4],[3,2]]
    Output: [1,2,3,4]
    Explanation: This array has all its adjacent pairs in adjacentPairs.
    Notice that adjacentPairs[i] may not be in left-to-right order.

Example 2:

    Input: adjacentPairs = [[4,-2],[1,4],[-3,1]]
    Output: [-2,4,1,-3]
    Explanation: There can be negative numbers.
    Another solution is [-3,1,4,-2], which would also be accepted.

Example 3:

    Input: adjacentPairs = [[100000,-100000]]
    Output: [100000,-100000]

*/

var restoreArray = function (vals) {
  const pairs = new Map();

  for (const val of vals) {
    if (!pairs.has(val[0])) pairs.set(val[0], []);
    if (!pairs.has(val[1])) pairs.set(val[1], []);
    pairs.get(val[0]).push(val[1]);
    pairs.get(val[1]).push(val[0]);
  }

  const result = [];
  let start = -1000000;

  for (const [entry, values] of pairs) {
    if (values.length === 1) {
      start = entry;
      break;
    }
  }

  let left = -1000000;
  result.push(start);

  for (let i = 1; i <= vals.length; i++) {
    const val = pairs.get(start);
    const newval = val[0] !== left ? val[0] : val[1];
    result.push(newval);
    left = start;
    start = newval;
  }

  return result;
};

const adjacentPairs = [
  [2, 1],
  [3, 4],
  [3, 2],
];

const rs = restoreArray(adjacentPairs);

// console.log("::::", rs);
