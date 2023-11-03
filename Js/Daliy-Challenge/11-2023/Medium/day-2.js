// 2265. Count Nodes Equal to Average of Subtree

/*
Example 1:

    Input: root = [4,8,5,0,1,null,6]
    Output: 5
    Explanation: 
    For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
    For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
    For the node with value 0: The average of its subtree is 0 / 1 = 0.
    For the node with value 1: The average of its subtree is 1 / 1 = 1.
    For the node with value 6: The average of its subtree is 6 / 1 = 6.

Example 2:


    Input: root = [1]
    Output: 1
    Explanation: For the node with value 1: The average of its subtree is 1 / 1 = 1.
*/

// [4,8,5,0,1,null,6]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(4);
root.left = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(1);
root.right = new TreeNode(5);
root.right.right = new TreeNode(6);



console.log("root::::", root);


var averageOfSubtree = function (root) {
  let ans = 0;
  function dfs(node) {
    if (node === null) return [0, 0];
    let [leftSum, leftCount] = dfs(node.left);
    let [rightSum, rightCount] = dfs(node.right);

    let sum = leftSum + rightSum + node.val;
    let count = leftCount + rightCount + 1;
    if (Math.floor(sum / count) === node.val) ans++;
    return [sum, count];
  }

  dfs(root);

  return ans;
};

const result = averageOfSubtree(root);

// console.log(result);

