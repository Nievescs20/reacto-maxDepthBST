/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

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

function maxDepthBST_BFS_DFS(root) {
  if (root == null) return level;

  level += 1;
  return Math.max(maxDepth(root.left, level), maxDepth(root.right, level));
}
