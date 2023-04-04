//  Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
	if (root == null) {
		return root;
	}

	// recursive calls
	invertTree(root.left);
	invertTree(root.right);

	// swap children
	let temp = root.left;
	root.left = root.right;
	root.right = temp;

	return root;
};

let r1 = new TreeNode(
	4,
	new TreeNode(2, new TreeNode(1), new TreeNode(3)),
	new TreeNode(7, new TreeNode(6), new TreeNode(9))
);
console.log(invertTree(r1));

// let r2 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
// console.log(invertTree(r2));

// let r3 = new TreeNode();
// console.log(invertTree(r3));
