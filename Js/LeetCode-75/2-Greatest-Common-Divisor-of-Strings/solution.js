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


/*

    Thuật toán Euclid, còn được gọi là "Thuật toán Euclid Euclide," là một thuật toán được sử dụng để tính ước chung lớn nhất (GCD - Greatest Common Divisor) của hai số nguyên dương. GCD của hai số nguyên là số nguyên lớn nhất mà cả hai số đều chia hết cho nó.

    Cách hoạt động của thuật toán Euclid:

    Bắt đầu với hai số nguyên dương a và b, với a lớn hơn hoặc bằng b.

    Chia a cho b và tính phần dư, ký hiệu là r.

    Nếu r bằng 0, tức là b chia hết cho a, thì GCD của a và b chính là a.

    Nếu r không bằng 0, ta gán a bằng b và b bằng r, sau đó quay lại bước 2.

    Thuật toán này tiếp tục lặp lại việc chia a cho b và cập nhật giá trị của a và b cho đến khi r bằng 0. Khi đó, a sẽ là GCD của hai số ban đầu.

    Thuật toán Euclid là một trong những phương pháp hiệu quả nhất để tính GCD và được sử dụng trong nhiều lĩnh vực toán học và máy tính.


*/