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
  // dat 2 co hieu i va j
  // let i = 0;
  // let j = 0;
  // while (j < chars.length) {
  //   // dat bien count = 0
  //   let count = 0;
  //   // dat bien curr =
  //   let curr = chars[j];
  //   while (j < chars.length && chars[j] === curr) {
  //     j++;
  //     count++;
  //   }

  //   chars[i++] = curr;
  //   if (count > 1) {
  //     // console.log(count);
  //     for (let digit of count.toString()) {
  //       //
  //       chars[i++] = digit;
  //     }
  //   }
  // }
  // return i;


  // cach 2:
  if (!chars.length) return 0;
  let j = 0;
  let cur = chars[0]; // a
  let counter = 0;
  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === cur) // a === a 
    {
      counter++; //1
    } else {
      chars[j] = cur; // a === a
      if (counter > 1) {
        const s = counter.toString();
        for (let k = 0; k < s.length; k++) chars[++j] = s[k];
      }
      j++;
      cur = chars[i];
      counter = 1;
    }
  }
  return j;
};

const rs = compresses(chars);

console.log(rs);
