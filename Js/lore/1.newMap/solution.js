const myMap = new Map();

myMap.set("name", "John");
myMap.set("age", 30);

console.table(myMap);

// Truy cập giá trị bằng key
console.log(myMap.get("name")); // In ra 'John'

// Kiểm tra xem key có tồn tại trong Map hay không
console.log(myMap.has("email"));

// Xóa entry dựa trên key
myMap.delete("age");

// Lấy danh sách tất cả các key trong Map
console.log(Array.from(myMap.keys())); // In ra ['name']

// Lấy danh sách tất cả các values trong Map
console.log(Array.from(myMap.values())); // In ra ['John']

// Loại bỏ dữ liệu trùng lặp

const uniqueValues = (arr) => {
  const uniqueMap = new Map();
  arr.forEach((item) => {
    uniqueMap.set(item, true);
  });
  return Array.from(uniqueMap.keys());
};

const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5, 5];
const uniqueNumbers = uniqueValues(numbers);
console.log(uniqueNumbers); // In ra [1, 2, 3, 4, 5]
