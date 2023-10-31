/*
Example 1:

    Input: s = "hello"
    Output: "holle"

Example 2:

    Input: s = "leetcode"
    Output: "leotcede"
*/

let s = "hello";

let reverseVowels = function (s) {
  // tách chuỗi thành array với từng chữ cái
  // filter lấy ra các nguyên âm
  const vowels = s.split("").filter((a) => /[aeiou]/i.test(a));
  // tách chuỗi lấy phụ âm và bỏ đi nguyên âm biểu thức chính quy /[aeiou]/
  const consonant = s.split(/[aeiou]/i); // [ 'h', 'll', '' ]

  const result = consonant.reduce((res, a) => {
    console.log("res:::", res);
    console.log("a >>>>", a);
    const removedVowels = vowels.pop();
    const total = res + a + (removedVowels || "");

    console.log("total >>>>", total);

    return total;
  }, "");

  return result;
};

console.log("reverseVowels", reverseVowels(s));
