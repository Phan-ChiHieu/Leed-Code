let s = "hello";

const result = s.split(""); //[ 'h', 'e', 'l', 'l', 'o' ]
const result2 = s.split(" "); // [ 'hello' ]

let v = "h-el-l-o";

const result3 = v.split("-"); // [ 'h', 'el', 'l', 'o' ]

let t = "Phan Chi Hieu";
const result4 = t.split(" "); // [ 'Phan', 'Chi', 'Hieu' ]

console.log(result4);

// string.plit(""): tách chuỗi thành một mảng các phần tử dựa trên một điểm chia cụ thể

//================================================================

// array.join(",") // Chuyen arrray thanh object va duoc phân cách bởi dấu chỉ định

const originalString = "abcdef";
const arrayFromString = originalString.split(""); // Chuyển chuỗi thành mảng các ký tự
const stringWithCommas = arrayFromString.join(",");

console.log(stringWithCommas); // Kết quả: "a,b,c,d,e,f"

