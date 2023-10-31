const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(function (num) {
  return num * num;
});

console.log(numbers); // Kết quả: [1, 2, 3, 4, 5]
console.log(squared); // Kết quả: [1, 4, 9, 16, 25]

// Phương thức Array.map() không thay đổi mảng gốc mà tạo ra một mảng mới dựa trên kết quả xử lý của hàm callback.
