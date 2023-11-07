/*

Example 1:

    Input: dist = [1,3,4], speed = [1,1,1]
    Output: 3
    Explanation:
    In the beginning, the distances of the monsters are [1,3,4]. You eliminate the first monster.
    After a minute, the distances of the monsters are [X,2,3]. You eliminate the second monster.
    After a minute, the distances of the monsters are [X,X,2]. You eliminate the thrid monster.
    All 3 monsters can be eliminated.

Example 2:

    Input: dist = [1,1,2,3], speed = [1,1,1,1]
    Output: 1
    Explanation:
    In the beginning, the distances of the monsters are [1,1,2,3]. You eliminate the first monster.
    After a minute, the distances of the monsters are [X,0,1,2], so you lose.
    You can only eliminate 1 monster.

Example 3:

    Input: dist = [3,2,4], speed = [5,3,2]
    Output: 1
    Explanation:
    In the beginning, the distances of the monsters are [3,2,4]. You eliminate the first monster.
    After a minute, the distances of the monsters are [X,0,2], so you lose.
    You can only eliminate 1 monster.

*/

// dist la khoang cach
// speed la toc do
let dist = [3,2,4], speed = [5,3,2]

let eliminateMaximum = function (dist, speed) {
  const n = dist.length;
  // cong thuc tinh vận tốc: v (vận tốc) = s (quãng đường) / t (thời gian )
  // => t = s / v
  const time_to_city = dist.map((d, i) => d / speed[i]);

  // Săp xếp lại array theo thứ tự từ nhỏ đến lớn
  time_to_city.sort((a, b) => a - b);

  console.log("time_to_city", time_to_city);

  for (let i = 0; i < n; i++) {
    console.log("i:::", i);
    // i đại diện cho thời gian nap đạn mỗi lần nạp đạn mất 1p
    // ví dụ có 4 quai vật với 4 khoảng cách khác nhau thì có 4 lần bắn và 4 lần nạp đạn mà mỗi lần napj đạn mất 1p => tồng mất 4p
    // nếu xong mỗi lần bắn và nạp đạn > thời gian đi đến thành phố của quái vật thì ta thua
    if (time_to_city[i] <= i) {
      console.log("i:::In IF:::", i);

      return i;
    }
  }

  return n;
};

eliminateMaximum(dist, speed);
