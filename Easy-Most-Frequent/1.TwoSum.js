/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 //Brute-force: Time-complexity: n^2, space complexity: 1
var twoSum = function(nums, target) {
    
    for (var i = 0; i < nums.length; i++) {
        
        for (var x = i + 1; x < nums.length; x++) {
            var num1= nums[i];
            var num2 = nums[x];
            
            if (num1 + num2 === target) {
                return [i,x];
            }
            
        }
    }
};

//Optimized time complexity- n and space complexity n
var twoSum = function(nums, target) {
    
    let map = {};
    
    for (var i = 0; i < nums.length; i++) {
        let complement = (target - nums[i]);
        
        if (map[complement] !== undefined ) {
            return [map[complement],i];
        }
        
        if (map[nums[i]] === undefined) {
            map[nums[i]] = i;
        }
        
     
    }
    
};