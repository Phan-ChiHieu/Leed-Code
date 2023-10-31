const _array = [15, 16, 17, 18, 19];

_array.reduce((accumulator, currentValue, index, array) => {
  console.log("accumulator", accumulator);
  console.log("currentValue", currentValue);
  console.log("index", index);
  console.log("array", array);
}, 10);

/*
    accumulator 10
    currentValue 15
    index 0
    array [ 15, 16, 17, 18, 19 ]
    accumulator undefined
    currentValue 16
    index 1
    array [ 15, 16, 17, 18, 19 ]
    accumulator undefined
    currentValue 17
    index 2
    array [ 15, 16, 17, 18, 19 ]
    accumulator undefined
    currentValue 18
    index 3
    array [ 15, 16, 17, 18, 19 ]
    accumulator undefined
    currentValue 19
    index 4
    array [ 15, 16, 17, 18, 19 ]    

*/
