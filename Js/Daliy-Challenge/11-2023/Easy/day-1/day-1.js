// 501. Find Mode in Binary Search Tree

/*
Example 1:
    Input: root = [1,null,2,2]
    Output: [2]

Example 2:
    Input: root = [0]
    Output: [0]
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Xây dựng cây nhị phân
let root = new TreeNode(1);
// root.left = new TreeNode(0);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
// root.right.right = new TreeNode(4);

var findMode = function (root) {
  let currentVal = null;
  let currentCount = 0;
  let maxCount = 0;
  let modes = [];

  function inOrderTraversal(node) {
    if (!node) return;

    inOrderTraversal(node.left);

    // console.log("currentCount", currentCount);
    // console.log("node.val", node.val);
    // console.log("currentVal", currentVal);
    // console.log("maxCount", maxCount);
    currentCount = node.val === currentVal ? currentCount + 1 : 1; // 2 === 1 = 1

    if (currentCount === maxCount) {
      modes.push(node.val);
      console.log("modes::::1", modes);
    } else if (currentCount > maxCount) {
      maxCount = currentCount;
      modes = [node.val];
      console.log("modes >>>>2", modes);
    }

    currentVal = node.val;
    console.log("currentVal = node.val", currentVal);
    console.log("=======Done LEFT =====");
    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);
  return modes;
};

const rs = findMode(root);

console.log("rs:::", rs);


// Chức năng này giúp bạn tìm các giá trị xuất hiện nhiều nhất trong cây nhị phân.