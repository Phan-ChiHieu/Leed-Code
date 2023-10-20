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

// let obj = [null, 0, false, 1];
let obj = [null, 0, 5, [0], [false, 16]];

var compactObject = function (obj) {
  //
  if (obj === null) return null;

  if (Array.isArray(obj)) {
    const _filter = obj.filter(Boolean);
    const _map = _filter.map(compactObject);
    // console.log("_filter", _filter);
    // console.log("_map", _map);

    return _map;
  }
  if (typeof obj !== "object") return obj;

  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key]);

    if (Boolean(value)) compacted[key] = value;
  }

  return compacted;
};

// console.log(compactObject(obj));

// 
const _obj = [null, 0, false, 1, "hello", true, undefined];
const _filter = _obj.filter(Boolean);

console.log(_filter)
