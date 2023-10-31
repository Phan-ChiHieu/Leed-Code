/*

Example 1:

    Input: chars = ["a","a","b","b","c","c","c"]
    Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
    Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

Example 2:

    Input: chars = ["a"]
    Output: Return 1, and the first character of the input array should be: ["a"]
    Explanation: The only group is "a", which remains uncompressed since it's a single character.

Example 3:

    Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
    Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
    Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

*/

let chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];

const compresses = function (chars) {
  let i = 0;
  let j = 0;
  while (j < chars.length) {
    let count = 0;
    let curr = chars[j];
    while (j < chars.length && chars[j] === curr) {
        console.log("trong while:::",curr);
      j++;
      count++;
    }
    console.log("curr::::::::", curr);
    console.log("chars[i++]", chars[i++]);

    chars[i++] = curr;
    console.log("2::::::::", count);
    if (count > 1) {
      // console.log(count);
      for (let digit of count.toString()) {
        //
        chars[i++] = digit;
      }
    }
  }
  return i;
};

// var compress = function (chars) {
//   let index = 0;
//   let i = 0;
//   while (i < chars.length) {
//     let j = i;
//     while (j < chars.length && chars[j] === chars[i]) {
//       j++;
//     }
//     chars[index++] = chars[i];
//     if (j - i > 1) {
//       let count = j - i;
//       for (let digit of count.toString()) {
//         chars[index++] = digit;
//       }
//     }
//     i = j;
//   }
//   return index;
// };

const rs = compresses(chars);

console.log(chars);
