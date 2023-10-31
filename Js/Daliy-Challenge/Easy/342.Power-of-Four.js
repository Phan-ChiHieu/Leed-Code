/*
Example 1:

    Input: n = 16
    Output: true

Example 2:

    Input: n = 5
    Output: false

Example 3:

    Input: n = 1
    Output: true

*/

let n = 16;

let isPowerOfFour = (n) => n > 0 && Math.log2(n) % 2 === 0;

console.log(isPowerOfFour(16));
