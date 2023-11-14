/*

Example 1:

    Input: s = "aabca"
    Output: 3
    Explanation: The 3 palindromic subsequences of length 3 are:
    - "aba" (subsequence of "aabca")
    - "aaa" (subsequence of "aabca")
    - "aca" (subsequence of "aabca")

Example 2:

    Input: s = "adc"
    Output: 0
    Explanation: There are no palindromic subsequences of length 3 in "adc".

Example 3:

    Input: s = "bbcbaba"
    Output: 4
    Explanation: The 4 palindromic subsequences of length 3 are:
    - "bbb" (subsequence of "bbcbaba")
    - "bcb" (subsequence of "bbcbaba")
    - "bab" (subsequence of "bbcbaba")
    - "aba" (subsequence of "bbcbaba")


*/

var countPalindromicSubsequence = function (s) {
  var l = {};
  var r = {};
  var res = 0;
  var marked = new Set();
  for (let i = 0; i < s.length; i++) {
    if (l[s[i]] == undefined) l[s[i]] = i;
    r[s[i]] = i;
  }

  for (let key in l) {
    for (let i = l[key] + 1; i < r[key]; i++) {
      if (!marked.has(key + s[i] + key)) {
        marked.add(key + s[i] + key);
        res++;
      }
    }
  }
  return res;
};
