function generatePermutations(str, prefix = "") {
  if (str.length === 0) {
    console.log(prefix);
  } else {
    for (var i = 0; i < str.length; i++) {
      let char = str[i];
      let remaining = str.slice(0, i) + str.slice(i + 1);
      console.log("remaining:::", remaining);

      generatePermutations(remaining, prefix + char);
    }
  }
}

// time complexity => O(n!)

// generatePermutations("abc")

// 15:26

let str = "abc";

console.log(str.slice(0, 1));
console.log(str.slice(2));
