/*
Example 1:

    Input: 
    arr1 = [
        {"id": 1, "x": 1},
        {"id": 2, "x": 9}
    ], 
    arr2 = [
        {"id": 3, "x": 5}
    ]
    Output: 
    [
        {"id": 1, "x": 1},
        {"id": 2, "x": 9},
        {"id": 3, "x": 5}
    ]
    Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.

Example 2:

    Input: 
    arr1 = [
        {"id": 1, "x": 2, "y": 3},
        {"id": 2, "x": 3, "y": 6}
    ], 
    arr2 = [
        {"id": 2, "x": 10, "y": 20},
        {"id": 3, "x": 0, "y": 0}
    ]
    Output: 
    [
        {"id": 1, "x": 2, "y": 3},
        {"id": 2, "x": 10, "y": 20},
        {"id": 3, "x": 0, "y": 0}
    ]
    Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.

Example 3:

    Input: 
    arr1 = [
        {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
    ]
    arr2 = [
        {"id": 1, "b": {"c": 84}, "v": [1, 3]}
    ]
    Output: [
        {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
    ]
    Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.
 


*/

// let arr1 = [
//     { id: 1, x: 1 },
//     { id: 2, x: 9 },
//   ],
//   arr2 = [
//     { id: 2, x: 10 },
//     { id: 3, x: 5 },
//   ];

let arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ],
  arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ];

var join = function (arr1, arr2) {
  const result = {};

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];

    result[element.id] = element;
  }

  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];

    if (result[element.id]) {
      for (const key in element) {
        console.log("key::::", key);
        console.log("element.id][key]>>>>>>", result[element.id][key]);
        console.log("element[key]<<<<<<", element[key]);

        result[element.id][key] = element[key];
      }
    } else {
      result[element.id] = element;
    }
  }

  return Object.values(result);
};

console.log(join(arr1, arr2));
