/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  let isEven = true;
  let q = [root];
  // BFS traversal
  while (q.length > 0) {
    let currentQLength = q.length;
    let prev = null;

    // traverse the current level
    for (let i = 0; i < currentQLength; i++) {
      let node = q.shift(); // pop the first element

      // for even level
      if (isEven) {
        // value should be odd and strictly increasing
        if (node.val % 2 == 0 || (prev != null && prev.val >= node.val)) {
          return false;
        }
      } else {
        // for odd level
        // value should be even and strictly decreasing
        if (node.val % 2 == 1 || (prev != null && prev.val <= node.val)) {
          return false;
        }
      }

      prev = node; // set prev to current node for next iteration

      // push the children to the queue
      if (node.left != null) {
        q.push(node.left);
      }

      if (node.right != null) {
        q.push(node.right);
      }
    }

    // flip the flag
    isEven = !isEven;
  }
  return true;
};

// test
