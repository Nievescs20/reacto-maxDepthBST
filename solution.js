/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Breadth First Search

function maxDepthBST_BFS(root) {
  if (root === null) return 0;
  let maxDepth = 0;
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    maxDepth++;
  }
  return maxDepth;
}

// Depth First Search

function maxDepthBST_DFS(root, level = 0) {
  if (root === null) return level;

  level += 1;
  return Math.max(
    maxDepthBST_DFS(root.left, level),
    maxDepthBST_DFS(root.right, level)
  );
}

const test = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
);

console.log("breadth_first_search", maxDepthBST_BFS(test));
console.log("depth_first_search", maxDepthBST_DFS(test));
