// 1759. Count Number of Homogenous Substrings

/*

Example 1:

    Input: s = "abbcccaa"
    Output: 13
    Explanation: The homogenous substrings are listed as below:
    "a"   appears 3 times.
    "aa"  appears 1 time.
    "b"   appears 2 times.
    "bb"  appears 1 time.
    "c"   appears 3 times.
    "cc"  appears 2 times.
    "ccc" appears 1 time.
    3 + 1 + 2 + 1 + 3 + 2 + 1 = 13.

Example 2:

    Input: s = "xy"
    Output: 2
    Explanation: The homogenous substrings are "x" and "y".
    
 Example 3:

    Input: s = "zzzzz"
    Output: 15


*/

let s = "abbcccaa";

var countHomogenous = function (s) {
  let res = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[start]) {
      console.log("", i);
      let appear = i - start;
      while (appear > 0) {
        res += appear;
        console.log("res:::", res);

        appear -= 1;
      }
      start = i;
    }
  }

  let appear = s.length - start;
  while (appear > 0) {
    res += appear;
    console.log("res >>>", res);

    appear -= 1;
  }

  return res % (Math.pow(10, 9) + 7);
};

const rs = countHomogenous(s);
