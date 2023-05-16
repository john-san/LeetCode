//   Definition for a binary tree node.
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

// SC: O(n), TC: O(d) where d is the depth of the tree
function sumEvenGrandparent(root: TreeNode | null): number {
	let sum = 0

	function bfs(node: TreeNode | null) {
		// base case
		if (!node) return

		// if node is even, add the value of the grandchildren to sum
		if (node.val % 2 === 0) {
			// if grandchildren on left exist, add the values to sum
			if (node.left) {
				sum += node.left.left ? node.left.left.val : 0
				sum += node.left.right ? node.left.right.val : 0
			}
			// if grandchildren on right exist, add the values to sum
			if (node.right) {
				sum += node.right.left ? node.right.left.val : 0
				sum += node.right.right ? node.right.right.val : 0
			}
		}
		bfs(node.left)
		bfs(node.right)
	}

	bfs(root)

	return sum
}

// function iterativeSumGrandParent(root: TreeNode | null): number {
// 	let sum = 0
// 	const queue: Array<[TreeNode | null, TreeNode | null, TreeNode | null]> = []

// 	queue.push([root, null, null])

// 	while (queue.length) {
// 		const [node, parent, grandParent] = queue.shift()

// 		if (grandParent && grandParent.val % 2 === 0) {
// 			sum += node.val
// 		}

// 		if (node.left) {
// 			queue.push([node.left, node, parent])
// 		}

// 		if (node.right) {
// 			queue.push([node.right, node, parent])
// 		}
// 	}

// 	return sum
// }
