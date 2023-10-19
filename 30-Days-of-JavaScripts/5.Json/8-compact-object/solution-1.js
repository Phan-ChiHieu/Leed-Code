/*
Example 1:

    Input: obj = [null, 0, false, 1]
    Output: [1]
    Explanation: All falsy values have been removed from the array.

Example 2:

    Input: obj = {"a": null, "b": [false, 1]}
    Output: {"b": [1]}
    Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

Example 3:

    Input: obj = [null, 0, 5, [0], [false, 16]]
    Output: [5, [], [16]]
    Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
 
*/

let obj = [null, 0, false, 1];

var compactObject = function (obj) {
  //
  if (obj === null) return null;

  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== "object") return obj;

  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key]);

    if (Boolean(value)) compacted[key] = value;
  }

  return compacted;
};

console.log(compactObject(obj));
