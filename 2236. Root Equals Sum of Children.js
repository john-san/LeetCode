// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
	return root.left.val + root.right.val == root.val ? true : false;
};

let t1 = new TreeNode(10, new TreeNode(4), new TreeNode(6));
let t2 = new TreeNode(5, new TreeNode(3), new TreeNode(1));

console.log(checkTree(t1));
console.log(checkTree(t2));
