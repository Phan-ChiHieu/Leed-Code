/*
Example 1:

    Input: 
    array = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
    ], 
    fn = function (item) { 
    return item.id; 
    }
    Output: 
    { 
    "1": [{"id": "1"}, {"id": "1"}],   
    "2": [{"id": "2"}] 
    }
    Explanation:
    Output is from array.groupBy(fn).
    The selector function gets the "id" out of each item in the array.
    There are two objects with an "id" of 1. Both of those objects are put in the first array.
    There is one object with an "id" of 2. That object is put in the second array.

Example 2:

    Input: 
    array = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
    ]
    fn = function (list) { 
    return String(list[0]); 
    }
    Output: 
    { 
    "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
    }
    Explanation:
    The array can be of any type. In this case, the selector function defines the key as being the first element in the array. 
    All the arrays have 1 as their first element so they are grouped together.
    {
    "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
    }

Example 3:

    Input: 
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    fn = function (n) { 
    return String(n > 5);
    }
    Output:
    {
    "true": [6, 7, 8, 9, 10],
    "false": [1, 2, 3, 4, 5]
    }
    Explanation:
    The selector function splits the array by whether each number is greater than 5.
    

*/

Array.prototype.groupBy = function (fn) {
  // Reduce the array into a single object
  return this.reduce((grouped, item) => {
    // Apply the provided callback function to get the key
    const key = fn(item);
    // console.log(key);
    // console.log(":::::", grouped);

    // If the key doesn't exist in the grouped object, create a new array for it
    if (!grouped[key]) {
      grouped[key] = [];
      console.log("<<<<<<<<", grouped);
    }

    // Push the current item to the array associated with the key
    grouped[key].push(item);

    // Return the updated grouped object for the next iteration
    return grouped;
  }, {});
};

// const array = [{ id: "1" }, { id: "1" }, { id: "2" }];

// const fn = function (item) {
//     return item.id;
//   };

const array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];

fn = function (list) {
//   console.log(">>>>>>>>>>>>>", list[0]);

  return String(list[0]);
};

console.log(array.groupBy(fn));
