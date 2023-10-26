/*

Example 1:

    Input: s = "the sky is blue"
    Output: "blue is sky the"

Example 2:

    Input: s = "  hello world  "
    Output: "world hello"
    Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:

    Input: s = "a good   example"
    Output: "example good a"
    Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

*/

let s = "the sky is blue";

function reverseWords(s) {
  const ret = [];
  let word = [];
  for (let i = 0; i < s.length; ++i) {
    if (s.charAt(i) === " ") {
      console.log("index: " + i);
      // We found the space, put word in front (if there is any)
      word.length > 0 && ret.unshift(word.join(""));
      console.log("ret:::", ret);
      // Reset the current word
      word = [];
    } else {
      // Add characters to the current word
      console.log("index: " + i);
      console.log("s.charAt(i): ", s.charAt(i));
      word.push(s.charAt(i));
      console.log("word", word);
    }
  }
  // If there is current word exists, add it in front
  console.log("word current", ret);
  // word.length > 0 && ret.unshift(word.join(""));
  console.log("word current was joined", ret);

  return ret.join(" ");
}

const result = reverseWords(s);

console.log("result:::", result);
