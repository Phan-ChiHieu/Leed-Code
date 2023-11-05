# 501. Find Mode in Binary Search Tree

## Input: root = [1,null,2,2]

## root : là cây nhị phân vidu:

```js
root::: TreeNode {
  val: 1,
  left: null,
  right: TreeNode {
    val: 2,
    left: null,
    right: TreeNode { val: 2, left: null, right: null }
  }
}
```

## Đặt các biến tạm

    - currentVal = null;
    - currentCount = 0;
    - maxCount = 0;
    - modes = [];

## Tạo thêm một function inOrderTraversal trong function cha findMode

```js
function inOrderTraversal(node) {
  //...
}
```

    - function inOrderTraversal đê quy với node lần đầu là root
    - lần sau lần lượt và node.left và node.right
    - nếu node không tồn tại thì reutrn chỗ node đó để không đệ quy
    if (!node) return;

## Bắt dầu đệ quy

    - inOrderTraversal(node.left) === null => return

```js
currentCount = node.val === currentVal ? currentCount + 1 : 1;
```

    - node.val: giá trị của nút hiện tại so với currentVal
    - currentVal: giá trị hiện tại mà đang được xem xét
    - currentCount: số lần xuất hiện của giá trị hiện tại
    - Nếu bằng nhau thì tăng currentCount lên 1
    - Ngược lại thì gán bằng 1

```js
if (currentCount === maxCount) {
  modes.push(node.val);
} else if (currentCount > maxCount) {
  maxCount = currentCount;
  modes = [node.val];
}

currentVal = node.val;

inOrderTraversal(node.right);
```

    - Nếu currentCount === maxCount thì modes.push(node.val) với modes lúc đầu = []
    - Nếu currentCount > maxCount thì :
        maxCount = currentCount;
        modes = [node.val];

    - currentVal = node.val;

    - inOrderTraversal(node.right);

================================================================

Đoạn mã mà bạn đã cung cấp là một hàm JavaScript được sử dụng để tìm chế độ (mode) trong một cây nhị phân (binary tree). Dưới đây là giải thích chi tiết từng phần của mã:

1. function inOrderTraversal(node): Đây là một hàm đệ quy được sử dụng để thực hiện duyệt cây nhị phân theo thứ tự "trái - gốc - phải" (in-order traversal). Hàm này nhận một đối tượng node là nút hiện tại cần xem xét.

2. if (!node) return;: Trước khi thực hiện bất kỳ công việc nào, hàm kiểm tra nếu node là null (hoặc không tồn tại), nghĩa là đã đến cuối cây hoặc cây rỗng, thì hàm sẽ dừng và không thực hiện gì cả.

3. inOrderTraversal(node.left);: Hàm đệ quy này gọi chính nó trên nút con bên trái của node. Điều này đảm bảo rằng chúng ta thực hiện duyệt toàn bộ cây con bên trái trước khi xem xét nút node hiện tại.

4. Sau đó, hàm kiểm tra giá trị của node.val (giá trị của nút hiện tại) so với currentVal (giá trị hiện tại mà đang được xem xét). Nếu chúng bằng nhau, currentCount (số lần xuất hiện của giá trị hiện tại) tăng lên 1, ngược lại thì currentCount được thiết lập lại bằng 1. Điều này giúp đếm số lần xuất hiện của mỗi giá trị trong cây.

5. Tiếp theo, hàm kiểm tra currentCount nếu nó bằng maxCount (số lần xuất hiện cao nhất hiện tại). Nếu bằng, nó đẩy giá trị node.val vào mảng modes. Nếu currentCount lớn hơn maxCount, thì maxCount được cập nhật thành currentCount, và mảng modes được thiết lập lại để chứa duy nhất node.val. Điều này giúp tìm các giá trị có số lần xuất hiện cao nhất.

6. currentVal = node.val;: Giá trị currentVal được cập nhật để lưu trữ giá trị hiện tại để so sánh với giá trị của các nút tiếp theo.

7. Cuối cùng, hàm gọi inOrderTraversal(node.right); để thực hiện duyệt cây con bên phải của node.

8. Sau khi kết thúc việc duyệt toàn bộ cây, mảng modes sẽ chứa các giá trị có số lần xuất hiện cao nhất trong cây, và nó được trả về từ hàm findMode.

9. Cuối cùng, bạn gọi hàm findMode trên cây root và lưu kết quả vào biến rs, sau đó in kết quả ra console.
