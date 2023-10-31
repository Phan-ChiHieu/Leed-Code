const person = {
  name: "John",
  age: 30,
};

console.log(person.hasOwnProperty("name")); // Kết quả: true
console.log(person.hasOwnProperty("address")); // Kết quả: false

/*

    object.hasOwnProperty(property)

    object: Đối tượng mà bạn muốn kiểm tra.

    property: Tên của thuộc tính bạn muốn kiểm tra trong đối tượng.

    Phương thức này trả về true nếu đối tượng có thuộc tính cụ thể và false nếu không có.
*/
