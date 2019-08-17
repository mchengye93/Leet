/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right,
 level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let levels = [];
    var currentLevel = [];
    levels.push([root.val]);
    currentLevel.push([root,root]);
    
    //count how many levels we have
   
    var levelsCount = countLevels(root);
    //console.log(levelsCount);
  // console.log(currentLevel[0].length);
    //collect all nodes of each levels
    for (let i = 0; i < levelsCount; i++) {
        var currentLevelNodes = currentLevel[i];
        console.log(currentLevelNodes.length);
        var nextLevelNodes = [];
        for (let x = 0; x < currentLevelNodes.length; x++) {
            var currentNode  = currentLevelNodes[x];
            if(currentNode.left !== null) {
                nextLevelNodes.push(currentNode.left);
            }
             if(currentNode.right !== null) {
                nextLevelNodes.push(currentNode.right);
            }
            
            
        }
    }
};

var countLevels = (node) => {
    if (node === null) {
        return 0;
    }
    let left = 1 + countLevels(node.left);
    let right = 1 + countLevels(node.right);
    
    return Math.max(left,right);
}