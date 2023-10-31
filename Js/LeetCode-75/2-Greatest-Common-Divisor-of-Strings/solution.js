/*
Example 1:

    Input: str1 = "ABCABC", str2 = "ABC"
    Output: "ABC"

Example 2:

    Input: str1 = "ABABAB", str2 = "ABAB"
    Output: "AB"

Example 3:

    Input: str1 = "LEET", str2 = "CODE"
    Output: ""
 
*/

const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return "";

  // Dùng thuật toán Euclid để tim ước chung lớn nhất
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  //   console.log(gcd(str1.length, str2.length));
  return str1.substring(0, gcd(str1.length, str2.length));
};

let str1 = "ABCABC",
  str2 = "ABC";

const rs = gcdOfStrings(str1, str2);

console.time();
console.log(rs);
console.timeEnd();

//================================================================
// Vi du ve thuat toan
function euclideanGCD(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

// Sử dụng ví dụ với a = 48 và b = 18
const a = 48;
const b = 18;
const gcd = euclideanGCD(a, b);
console.log(`Ước chung lớn nhất của ${a} và ${b} là: ${gcd}`);
