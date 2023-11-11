function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      console.log("mid:::", mid);
      return mid; // Trả về chỉ số của phần tử nếu tìm thấy
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Trả về -1 nếu không tìm thấy
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetElement = 6;

const result = binarySearch(sortedArray, targetElement);

if (result !== -1) {
  console.log(`Phần tử ${targetElement} được tìm thấy tại vị trí ${result}`);
} else {
  console.log(`Phần tử ${targetElement} không tồn tại trong mảng`);
}
