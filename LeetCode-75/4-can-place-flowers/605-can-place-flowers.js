/*

Example 1:

    Input: flowerbed = [1,0,0,0,1], n = 1
    Output: true
    
Example 2:

    Input: flowerbed = [1,0,0,0,1], n = 2
    Output: false
 
*/

let canPlaceFlowers = function (flowerbed, n) {
  //  Biến current được sử dụng để theo dõi số lượng vị trí trống liên tiếp hiện tại mà bạn đang xem xét.
  let current = 0;

  // Biến size lưu trữ độ dài của mảng flowerbed.
  const size = flowerbed.length;

  // dùng để duyệt qua từng phần tử trong flowerbed và kiểm tra có thể trồng hoa tại vị trí đó hay không.
  for (var i = 0; i <= size; i++) {
    if (i < size && flowerbed[i] == 0) {
      // nếu flowerbed[i] là 0 (tức là vị trí trống), thì chúng ta tăng biến current len lên để theo dõi số lượng vị trí trống liên tiếp
      current++;
      console.log("current",current)
      // i ở vị trí đầu tiên bằng 0
      if (i == 0) current++;

      // i ở vị trí cuối cùng
      if (i == size - 1) current++;
    } else {
      console.log(
        "Math.trunc((current - 1) / 2)",
        Math.trunc((current - 1) / 2)
      );

      console.log("n", (n -= Math.trunc((current - 1) / 2)));
      n -= Math.trunc((current - 1) / 2);
      if (n <= 0) return true;
      current = 0;
    }
  }
  return false;
};

let flowerbed = [1, 0, 0, 0, 1],
  n = 1;

canPlaceFlowers(flowerbed, 1);
