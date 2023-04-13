// Definition for a binary tree node.
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

// what is a perfect binary tree?
// a binary tree where all levels are completely filled except possibly the last level and the last level has all keys as left as possible
// a perfect binary tree has 2^h - 1 nodes, where h is the height of the tree
// what are levels in a binary tree?
// levels are the number of edges from the root to the node
// what is the level of the root in a binary tree?
// the level of the root is 0

// BFS solution
// time complexity: O(n)
// space complexity: O(n)
function reverseOddLevels(root: TreeNode | null): TreeNode | null {
	if (!root) return null;
	let queue: TreeNode[] = [root];
	let level = 0;

	// BFS
	while (queue.length) {
		let len = queue.length;
		for (let i = 0; i < len; i++) {
			// remove head from queue and then add its children to the queue if they exist
			let node = queue.shift();
			if (node!.left) queue.push(node!.left);
			if (node!.right) queue.push(node!.right);
		}
		// increment level
		level++;
		// if level is odd and queue is not empty, reverse the nodes in the queue
		if (level % 2 === 1 && queue.length) {
			// create temp array to hold the values of the nodes in the queue
			let values: number[] = [];
			for (let i = 0; i < queue.length; i++) {
				values.push(queue[i].val);
			}

			// pointer for end of temp array
			let endOfValuesIdx = values.length - 1;
			// swap the values of the nodes in the queue
			for (let i = 0; i < queue.length; i++) {
				queue[i].val = values[endOfValuesIdx--];
			}
		}
	}
	return root;
}

// DFS solution
// TC: O(n), SC: O(n)
function reverseOddLevelsDFS(root: TreeNode | null): TreeNode | null {
	function traverse(
		node1: TreeNode | null,
		node2: TreeNode | null,
		level: number
	) {
		if (node1 == null || node2 == null) return;

		if (level % 2 === 1) {
			let temp = node1.val;
			node1.val = node2.val;
			node2.val = temp;
		}
		if (node1.left && node2.right) traverse(node1.left, node2.right, level + 1);
		if (node1.right && node2.left) traverse(node1.right, node2.left, level + 1);
	}

	// root exists for each traverse call
	traverse(root!.left, root!.right, 1);
	return root;
}
