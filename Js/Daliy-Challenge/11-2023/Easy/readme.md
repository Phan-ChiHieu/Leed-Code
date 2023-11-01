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
